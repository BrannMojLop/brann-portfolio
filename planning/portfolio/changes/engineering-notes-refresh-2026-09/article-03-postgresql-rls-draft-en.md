# Designing PostgreSQL RLS for multi-tenant SaaS

*Tenant isolation is a system boundary: trusted context, application authorization, database policies, and tests must agree.*

## The tenant-isolation problem

In a multi-tenant SaaS system, the dangerous question is not only whether a
user is authenticated. It is whether every read and mutation is constrained to
the organization that the request is actually authorized to operate within.

That boundary crosses identity, organization selection, business action,
transaction, and row access. A mistake in any transition can turn a valid
request into an incorrect cross-organization operation.

The familiar application pattern is to add `WHERE organization_id = ...` to
every query. That condition is useful, but it is a convention enforced by each
caller. A missed query, an unsafe join, a background task, or an ORM path that
does not use the expected repository can bypass the convention. The problem is
not that application filters are wrong. The problem is treating one repeated
predicate as the entire isolation boundary.

My current approach is to make the boundary agree at several levels:

- the server derives the organization context from authenticated membership;
- application authorization decides whether the requested action is allowed;
- the database receives a transaction-scoped context;
- PostgreSQL Row-Level Security (RLS) limits rows visible to the database role;
- relational constraints protect invariants that a visibility policy cannot;
- negative-path tests try to cross the boundary deliberately.

RLS is most useful here as defense in depth. It reduces the blast radius of a
mistake; it does not replace the rest of the authorization model.

## Four questions that must stay separate

These concepts influence the same security outcome, but collapsing them makes
the system harder to reason about:

| Responsibility | Question | Typical authority |
| --- | --- | --- |
| Authentication | Who is this user? | Identity/session layer |
| Membership and application authorization | What may this user do inside this organization? | Backend authorization logic |
| Tenant context | Which organization is this request operating within? | Server-derived request context |
| RLS | Which rows may this database session observe or mutate? | PostgreSQL policy evaluation |

These layers are complementary: authentication does not grant every
organization, membership does not establish database context, and RLS does not
understand every product capability.

Keeping these responsibilities explicit prevents a common shortcut: assuming
that a correct `organization_id` is enough to authorize the whole request.

## Do not trust tenant selection from the client

A client may need to select an organization when a user belongs to more than
one. The selection is input, not authority.

The backend must resolve the authenticated identity, check that the requested
organization is represented by an active and valid membership, determine the
applicable capabilities, and only then establish `TenantContext`. A frontend
selector, a hidden field, or an `organization_id` in a request body is not an
authorization boundary.

The important negative case is a caller that changes only the organization
value while keeping the rest of the request identical. That value must not
retarget the operation. If membership validation fails, the server must not
establish the context that would allow the operation to proceed.

## From identity to database context

The conceptual flow I use is:

```text
Authenticated user
        ↓
Membership validation
        ↓
Server-derived TenantContext
        ↓
Application authorization
        ↓
Transaction-scoped PostgreSQL context
        ↓
RLS policies
        ↓
Tenant-scoped rows
```

The sequence matters. A setting created from an unvalidated request value merely
moves the trust problem into PostgreSQL. A server-derived `TenantContext` is
useful because identity and membership established its meaning first.

## Application authorization and RLS have different jobs

Application authorization answers questions about intent and capability: may a
member create an employee, change a schedule version, or perform a particular
lifecycle transition? It can also require an idempotency key or current ETag.

RLS answers a narrower database question: may this role observe or mutate this
row under the current database context?

Application logic can explain business decisions and return domain errors; RLS
can constrain accidental paths to another organization. Neither is the other.

The resulting model is layered rather than interchangeable:

```text
Application authorization
          +
PostgreSQL RLS
          +
Relational constraints and audit rules
          +
Isolation tests
          =
Defense in depth
```

These controls do not provide the same guarantee: a foreign key protects a
relationship, an RLS policy filters rows, an application check protects an
action, and a test provides evidence for a contract.

## What an RLS policy does—and does not—tell me

A generic policy might look like this:

```sql
ALTER TABLE employee ENABLE ROW LEVEL SECURITY;

CREATE POLICY employee_tenant_isolation
ON employee
USING (
  organization_id = current_setting('app.organization_id', true)::uuid
);
```

The syntax is the easy part. The architectural questions are harder:

- Who is allowed to set `app.organization_id`?
- Is it derived after membership validation?
- Is it scoped to the current transaction?
- What happens when the setting is missing or malformed?
- How is state cleared before a pooled connection is reused?
- Which roles can bypass RLS or own the table?
- Are `INSERT`, `UPDATE`, and `DELETE` behaviors covered as deliberately as
  reads?

The example is educational, not a copy of a private policy. The setting name,
policy shape, role privileges, fail-closed behavior, and write policies must be
verified against the source and database environment; a read predicate alone
does not describe all write behavior.

The `true` argument asks PostgreSQL to return `NULL` when the setting is absent
instead of raising an error for a missing custom setting. The comparison then
does not produce an authorized tenant match, but the application should still
reject a request with missing context explicitly. “Missing” and “invalid” must
not become an accidental administrative mode.

There is another important distinction in the policy model. `USING` controls
which existing rows are visible or eligible for operations such as `SELECT`,
`UPDATE`, and `DELETE`. `WITH CHECK` constrains rows introduced or produced by
`INSERT` and `UPDATE`. A design that discusses writes must review both the
existing-row predicate and the resulting-row predicate; `USING` alone is not a
complete description of mutation behavior.

## Transaction boundaries are part of the security design

Tenant context is state. State needs a lifecycle.

For a request, the safe mental model is to establish the validated context in
the transaction that will perform the tenant-bound work, use it for that unit
of work, and ensure rollback or transaction completion prevents it from
affecting the next unit. A transaction-local setting such as `SET LOCAL` is
useful because its lifetime follows the transaction rather than the physical
connection.

In sequence: validate `TenantContext`, begin the transaction, establish the
transaction-local database context, perform the queries or mutations, and then
commit or roll back. The context must not outlive that unit of work.

A request and a database session are different lifecycles. A pool reuses
physical connections, so session-level tenant state can reach a later request
if rollback and cleanup are incomplete. Transaction-local state bounds the
context, but the driver and pool reset behavior still need verification.

The risks deserve explicit tests and review:

- context set outside the transaction that uses it;
- a transaction committed or rolled back without the expected cleanup;
- a pooled connection reused after an exception;
- an empty or stale setting interpreted as a valid organization;
- a worker borrowing a connection without establishing a tenant context.

The correct configuration depends on the driver, framework, pool, and
transaction manager. The invariant is more important than a named recipe:
tenant state must be derived, scoped, and cleared deliberately.

## Roles, migrations, and privileged paths

RLS is evaluated in the context of database roles. That makes role separation
part of the design, not deployment trivia.

Normal API and worker roles should not silently have the privileges that make
RLS irrelevant. In Workforce's local design, role provisioning and migration
contracts distinguish runtime responsibilities from migration or administrative
responsibilities, and the runtime roles are configured without `BYPASSRLS`.
That is a statement about the local implementation, not a production
deployment claim.

Enabling RLS on a table is not the same as forcing every owner or privileged
execution path through the policy. Table ownership and role attributes can
change the effective boundary; roles with `BYPASSRLS` bypass policies.
`FORCE ROW LEVEL SECURITY` may be appropriate in some ownership models, but it is a
deliberate design choice rather than a universal switch. The owner, grants,
inheritance, and runtime role must be reviewed together.

Migrations need deliberate access because they create tables, policies, grants,
and supporting functions. Administrative tasks may need elevated capabilities,
but those paths should be explicit, narrow, auditable, and unavailable to
normal request traffic. A background job also needs a declared operating mode:
one validated organization or a tightly controlled system operation with a
different authorization and audit model. “The worker can see everything” is not
a safe default.

## Relational constraints complement visibility policies

RLS controls which rows a session can access. It does not by itself express
every relational invariant.

Constraints can protect rules such as:

- one active membership relationship where the domain permits only one;
- employee numbers unique within an organization;
- valid lifecycle states and transitions supported by the schema;
- foreign keys that prevent a record from referencing an unrelated domain;
- organization-consistent relationships between tenant-bound entities.

This matters in Workforce because User, Membership, and Employee are separate:
identity; the organization/role relationship; and a domain person record that
does not automatically mean login or administration. That separation makes
authorization and database relationships easier to review.

Audited mutations, idempotency, and optimistic concurrency or ETag checks add
other protections around change history and conflicting writes. They answer
different failure modes and do not replace RLS or application authorization.

## How I test tenant isolation

| Test concern | Evidence to collect |
| --- | --- |
| Read isolation | Organization A cannot read rows belonging to B. |
| Write isolation | A cannot update or delete B's rows by changing an identifier. |
| Forged selection | A client-supplied organization value cannot establish an unauthorized context. |
| Missing context | A query without a valid tenant context fails closed or returns no tenant rows. |
| Membership lifecycle | Inactive or invalid membership cannot establish `TenantContext`. |
| Relational reachability | A workflow cannot reference a tenant-B entity through a tenant-A operation. |
| Cross-tenant mutation | `INSERT`/`UPDATE` cannot create or produce tenant-B state from an organization-A operation. |
| Pool reuse | A connection reused after another organization does not retain its context. |
| Privileged paths | Admin, migration, and worker behavior is explicit and separately tested. |

I separate three kinds of evidence:

- application tests for identity, membership, capabilities, and domain rules;
- database-policy tests using PostgreSQL roles and real RLS behavior;
- integration tests that exercise the full context-to-transaction path.

A test file demonstrates an intended contract and a test run demonstrates what
was executed at a particular time. Neither should be inflated into a claim
about production configuration or operational readiness.

The matrix is therefore a public description of the contracts I want to verify;
it is not a claim that every case has passed in every environment.

## Common failure modes

The most frequent mistakes are predictable:

1. Trusting `tenant_id` or `organization_id` from the request body.
2. Assuming an ORM filter is present on every path forever.
3. Writing permissive or incomplete policies, especially for writes.
4. Using a `BYPASSRLS`, owner, or inherited-privilege role for normal traffic.
5. Setting session state on a pooled connection without a complete lifecycle.
6. Running workers or migrations without an explicit context and access model.
7. Treating User, Membership, and Employee as interchangeable, or RLS as the
   complete authorization model.

## When application-only filtering may be sufficient

RLS is not mandatory for every SaaS system. Application-only filtering may be
reasonable when the data model and access paths are simple and bounded, the
service owns all queries, and the team can verify the convention. The decision
changes with many services, background jobs, reporting paths, direct database
consumers, high-consequence data, or a realistic chance of an omitted predicate;
then the extra migration and testing discipline may be worthwhile.

The choice should follow the threat model and operating model, not a slogan.
RLS can deny legitimate access when context is missing or policies are too
strict, and it can create a false sense of safety when roles or writes are not
reviewed.

## Workforce as a bounded example

Workforce is the concrete system behind this article. It is an independent
workforce-management product under active local development, not production
software. The local implementation has a FastAPI backend, a PostgreSQL
transactional core, and a multi-organization foundation.

Its current architecture separates AuthenticationContext from TenantContext,
derives organization context on the backend after membership resolution, and
uses PostgreSQL roles and RLS-related boundaries alongside application
authorization. User, Membership, and Employee are separate concepts.
People/Employees and Structure/Scheduling slices are implemented locally, with
relational constraints, audited mutations, idempotency, and optimistic
concurrency or ETag controls where the relevant workflow requires them.

That is the evidence boundary I am comfortable explaining publicly. It shows
how I reason about a system boundary and its failure modes. It does not claim
customers, users, uptime, SLOs, scale, compliance certification, production
backup or point-in-time recovery, external penetration testing, or deployment.

## What this design proves—and what it does not

A coherent context flow, explicit application authorization, RLS, role
separation, relational constraints, and negative-path tests provide stronger
evidence than a repeated query filter alone. They also create more places to
keep synchronized.

Local implementation evidence can show that a boundary is designed and
exercised in a particular environment, not that every future migration, role,
worker, operational configuration, or deployed instance preserves it. That is
why RLS is defense in depth: one more enforceable check while the trust model,
authorization, transaction lifecycle, constraints, tests, and human review
remain necessary.

For the broader workflow behind this kind of change, see [Specification-driven development for complex software changes](/engineering/specification-driven-development-complex-changes) and [How I structure specialized AI agents for software engineering](/engineering/specialized-ai-agents-software-engineering). For related system-boundary reasoning, see [Designing FastAPI services around business transactions instead of CRUD](/engineering/backend-service-boundaries) and [ERP platform architecture](/engineering/erp-platform-architecture).
