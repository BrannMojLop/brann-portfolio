# Brief 03 — Designing PostgreSQL RLS for multi-tenant SaaS

## Editorial identity

- Final title EN: `Designing PostgreSQL RLS for multi-tenant SaaS`
- Final title ES: `Diseñar RLS de PostgreSQL para SaaS multi-tenant`
- Subtitle/deck EN: `Tenant isolation is a system boundary: trusted context, application authorization, database policies, and tests must agree.`
- Subtitle/deck ES: `El aislamiento por tenant es un límite del sistema: el contexto confiable, la autorización de aplicación, las políticas de base de datos y las pruebas deben estar alineados.`
- Suggested slug EN: `/engineering/postgresql-rls-multi-tenant-saas`
- Suggested slug ES: `/es/engineering/postgresql-rls-multi-tenant-saas`
- Target reading time: `11–13 minutes` / approximately `1,700–2,100 words` per language.

## Audience and thesis

- Target audience: Backend engineers and architects designing multi-organization SaaS systems with PostgreSQL.
- One-sentence thesis: Row-Level Security is most useful as defense in depth when tenant context is derived by trusted server-side logic and application authorization remains explicit.
- Why this belongs in the portfolio: It adds concrete PostgreSQL and database-boundary reasoning to the current engineering narrative, grounded in Workforce’s local development work rather than a generic RLS tutorial.

## Source and evidence inventory

| Evidence | Source | Safe use |
|---|---|---|
| Tenant and role model | Workforce local migration `0001_slice0_foundation.py` and approved ADR-002 | Explain organization, membership, role, session, and tenant-bound tables at a conceptual level. Avoid publishing private schema detail unnecessarily. |
| PostgreSQL RLS and role boundaries | Workforce migrations `0001`, `0002`, `0005`, role provisioning scripts, and `app/platform/rls.py` | Explain FORCE RLS, non-bypass runtime roles, grants, transaction-local context, and separate migration/runtime responsibilities. |
| Trusted context flow | `AuthenticationContext`, `TenantContext`, and `ContextSetter` implementation plus ADR-002 | Explain that tenant context is established server-side after identity/membership validation; no HTTP tenant input is authority. |
| Isolation and negative-path contracts | Workforce PostgreSQL integration tests and People/Scheduling test suites | State that these contracts are tested or required by the local suite; do not claim all integration tests passed unless a dated run proves it. |
| Current product boundary | Approved portfolio source map and Workforce case-study direction | State that Workforce is an independent product in development and that this is local/development evidence, not production software. |

## Claim matrix

| Status | Claims that may appear after technical review |
|---|---|
| `VERIFIED` | Workforce has PostgreSQL migrations, role-provisioning scripts, RLS-related code, tenant context types, and integration/unit test contracts in the local repository. |
| `IMPLEMENTED LOCALLY` | The local design uses organization-aware records, server-derived context, transaction-local PostgreSQL settings, explicit application authorization, RLS policies, non-bypass runtime roles, relational constraints, audited mutations, idempotency, and optimistic-concurrency controls where the source supports each claim. |
| `CURRENT PRACTICE` | PostgreSQL is an important current direction in Brandon’s system-design work; the note can explain the reasoning behind defense in depth and explicit authorization. |
| `PLANNED` | Additional production hardening, operational deployment, backup/PITR, scale validation, or a future SaaS rollout are plans or open work unless separately evidenced. |
| `DO NOT PUBLISH` | Production deployment, uptime, operational scale, customer adoption, compliance certification, production backup/PITR, absolute security guarantees, or any claim that RLS alone is complete authorization. |

## Detailed article outline

1. **The tenant-isolation problem** — Why application filters alone are fragile when a request, job, or query can carry the wrong organization context.
2. **Do not trust `tenant_id` from client input** — The caller can request a value, but authority must come from authenticated identity and a valid membership/context resolution.
3. **Derive organization context on the server** — Separate authentication context from tenant context; validate membership before setting tenant scope.
4. **Application authorization and RLS have different jobs** — Application code decides the business capability; PostgreSQL limits visible/mutable rows as a second boundary.
5. **The defense-in-depth model** — Identity/session, membership, service authorization, transaction-local context, RLS policies, relational constraints, audit records, and tests.
6. **Connection and transaction context** — Why `SET LOCAL`, pool reset/rollback, and explicit transaction boundaries matter; how context can leak if lifecycle is wrong.
7. **Role separation and migrations** — Runtime API/worker roles, migrator/administrative roles, ownership, grants, `FORCE ROW LEVEL SECURITY`, and fail-closed provisioning.
8. **Common RLS failure modes** — Caller-controlled context, owner/BYPASSRLS roles, stale pooled settings, ORM-only filters, privileged workers, cross-tenant joins, and untested admin paths.
9. **Testing tenant isolation** — Allowed/denied reads and writes, forged context, inactive membership, cross-tenant access, pool reset, role attributes, rollback, and worker behavior.
10. **Trade-offs versus application-only filtering** — More setup, migration discipline, and test complexity in exchange for another enforceable boundary; RLS does not remove application authorization.
11. **Workforce as a bounded example** — Describe the local implementation and architecture evidence, clearly separating implemented local behavior from proposed or unverified operational claims.
12. **What this design does not prove** — No production deployment, scale, uptime, backup/PITR, compliance, or universal security guarantee follows from local code/tests alone.

## Key examples and case-study candidates

- `AuthenticationContext → membership validation → TenantContext → transaction-local context` as a sanitized flow.
- Workforce’s separation of User, Membership, and Employee, without exposing private records.
- A positive/negative matrix: organization A can see A; organization B cannot be reached by changing only a request value or context input.
- Role separation: runtime roles do not receive `BYPASSRLS`; migrations/administration are distinct and audited.

## Diagrams and code examples worth including

- Layered diagram: request identity → server-derived tenant context → application capability check → PostgreSQL transaction context → RLS policy → audit/test evidence.
- Table showing the authority of each layer and what it must never trust.
- Short generic pseudocode for setting transaction-local context after membership validation; no credentials or internal identifiers.
- A sanitized SQL/policy example only if it is reviewed for inference risk and clearly scoped to local development.
- Negative-path test table for cross-tenant read/write, forged context, stale membership, and pool reset.

## Claims requiring citations or qualification

- Every Workforce implementation statement must cite the current local source file or approved evidence record.
- A test file proves an intended contract and test coverage; it does not prove a passing run without dated execution evidence.
- “Secure,” “prevents leakage,” or “defense in depth” must be scoped to the tested design and never presented as an absolute guarantee.
- `FORCE ROW LEVEL SECURITY`, role attributes, grants, and provisioning need current migration/source verification before publication.
- Do not call the design production, deployed, scalable, compliant, or customer-proven.

## Privacy and confidentiality risks

- Do not publish credentials, connection strings, internal URLs, private role-provisioning details that enable misuse, customer/employee data, or proprietary schema beyond what the architectural explanation needs.
- Avoid exact private organization names, identifiers, policy values, and operational topology.
- Keep examples synthetic or sanitized and never include real tenant/user IDs.

## Technical-review checklist

- The article is about architecture reasoning, not a copy-paste RLS tutorial.
- Client input is clearly separated from server authority.
- Application authorization and database isolation are described as complementary.
- Transaction-local context and pool lifecycle are explained without operational secrets.
- Role ownership, grants, RLS, and migration boundaries are accurately sourced.
- Test contracts are distinguished from executed/passing evidence.
- Local development and non-production status are explicit.
- No scale, uptime, backup/PITR, compliance, customer, or production claim.
- EN/ES concepts, examples, certainty, and exclusions remain aligned.

## SEO

- SEO title EN: `Designing PostgreSQL RLS for Multi-Tenant SaaS | Brandon Mojica`
- SEO title ES: `Diseñar RLS de PostgreSQL para SaaS Multi-Tenant | Brandon Mojica`
- SEO description EN: `A Workforce-grounded explanation of PostgreSQL RLS, server-derived tenant context, application authorization, and isolation testing.`
- SEO description ES: `Una explicación basada en Workforce sobre RLS de PostgreSQL, contexto de tenant derivado del servidor, autorización y pruebas de aislamiento.`

## Related existing notes

- `erp-platform-architecture` — contrast broad system shape with database-boundary reasoning.
- `erp-modularity` — connect domain ownership to tenant and authorization boundaries after evidence audit.
- `fastapi-financial-apis` — compare relational constraints and state controls, without sharing sensitive financial details.

## Claims that must not appear

- Workforce is production software, deployed SaaS, customer-proven, or operating at scale.
- PostgreSQL/RLS alone guarantees complete authorization or security.
- Production uptime, backup/PITR, compliance certification, customer adoption, or performance results.
- Actual tenant IDs, employee/user records, credentials, internal URLs, or detailed threat findings.
- A claim that all local integration tests passed unless a dated, reproducible run is attached.
