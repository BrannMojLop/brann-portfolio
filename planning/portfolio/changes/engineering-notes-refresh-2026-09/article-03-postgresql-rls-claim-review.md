# Article 03 — Claim review

## Review scope

This review applies only to the bilingual Article 03 drafts. It does not
authorize public MDX creation and does not reopen the strategy or the completed
Article 01/02 work.

Primary source of truth: `brief-03-postgresql-rls.md`.

Supporting evidence named by the brief:

- Workforce migration `0001_slice0_foundation.py` and approved ADR-002 for the
  organization, membership, role, session, and tenant-bound model.
- Workforce migrations `0001`, `0002`, and `0005`, role provisioning, and
  `app/platform/rls.py` for RLS, role boundaries, grants, and context behavior.
- `AuthenticationContext`, `TenantContext`, and `ContextSetter` for the
  server-derived context flow.
- Workforce PostgreSQL integration tests and People/Scheduling test suites for
  isolation and negative-path contracts.
- The approved portfolio source map and Workforce case-study direction for the
  public product boundary.

## Material claim matrix

| Draft claim | Classification | Evidence / qualification | Publication decision |
| --- | --- | --- | --- |
| Workforce has a FastAPI backend, PostgreSQL transactional core, and multi-organization foundation. | VERIFIED / IMPLEMENTED LOCALLY | Brief source inventory and current Workforce repository structure. | Publish with “local implementation” scope. |
| Workforce separates AuthenticationContext and TenantContext and derives organization context on the backend after membership resolution. | IMPLEMENTED LOCALLY | `AuthenticationContext`, `TenantContext`, `ContextSetter`, ADR-002. | Publish; state that client selection is input, not authority. |
| Workforce uses PostgreSQL roles and RLS-related boundaries, with runtime roles configured without `BYPASSRLS`. | IMPLEMENTED LOCALLY | Role provisioning and migration contracts named by the brief. | Publish with “local design” qualifier; do not generalize to deployment. |
| User, Membership, and Employee are separate concepts. | VERIFIED / IMPLEMENTED LOCALLY | Foundation model and People evidence named by the brief. | Publish as an architectural distinction. |
| People/Employees and Structure/Scheduling slices are implemented locally. | IMPLEMENTED LOCALLY | Approved Workforce slice evidence. | Publish; do not imply production availability. |
| Audited mutations, idempotency, and optimistic concurrency/ETag controls exist where relevant. | IMPLEMENTED LOCALLY | Brief source inventory; wording remains “where the relevant workflow requires them.” | Publish with bounded wording, not as universal system behavior. |
| RLS is defense in depth and does not replace application authorization. | CURRENT PRACTICE / ARCHITECTURAL POSITION | Core thesis approved in the brief. | Publish; avoid security absolutes. |
| Transaction-scoped context and connection-pool lifecycle are important controls. | CURRENT PRACTICE / TECHNICAL REASONING | Supported by the brief’s context and pooling requirements. | Publish conceptually; no unsupported pool recipe or production configuration. |
| Isolation should be tested for reads, writes, forged context, missing context, membership lifecycle, relational reachability, pool reuse, and privileged paths. | CURRENT PRACTICE / TEST CONTRACT | Brief’s testing requirements; a test contract is not a passing-run claim. | Publish as test design and evidence discipline. |
| The SQL policy snippet is a generic educational example. | PLANNED / PUBLIC-SAFE EXAMPLE | Deliberately sanitized; not presented as private Workforce code. | Publish only with explanation of setting authority, lifecycle, and role scope. |
| `current_setting(..., true)` returns `NULL` when the custom setting is absent; `USING` and `WITH CHECK` govern different row-policy concerns. | VERIFIED / TECHNICAL EXPLANATION | PostgreSQL policy semantics; the draft explicitly says missing context must still be rejected by application logic. | Publish as generic database behavior, not as a claim about a private policy. |
| Table ownership, `BYPASSRLS`, and `FORCE ROW LEVEL SECURITY` affect the effective RLS boundary. | VERIFIED / TECHNICAL EXPLANATION | PostgreSQL role/policy semantics; Workforce-specific role language remains qualified as local. | Publish with “may”/“depending on the model”; do not claim FORCE is universal. |
| Application-only filtering may be sufficient in some systems. | CURRENT PRACTICE / TRADE-OFF | Non-dogmatic conclusion required by the brief. | Publish as a conditional trade-off, not a recommendation for all systems. |
| Workforce is an independent product under active local development and is not production software. | VERIFIED / IMPLEMENTED LOCALLY | Explicit current product boundary in the brief. | Publish exactly with this boundary. |

## Required exclusions

The drafts do not publish and must continue to exclude:

- production deployment, customers, users, uptime, SLOs, operational scale, or
  production compliance;
- production backup, PITR, external penetration testing, or production
  configuration;
- claims that RLS alone makes SaaS secure or supplies complete authorization;
- private role names beyond the generic concepts needed for the explanation,
  real identifiers, records, credentials, internal URLs, or confidential schema;
- a claim that all local integration tests passed without a dated reproducible
  execution record;
- “zero trust”, “bulletproof”, “enterprise-grade”, “production proven”, or
  similar absolutes.

## Claim/source consistency result

The EN and ES drafts use the same claim classifications and the same Workforce
boundary. The first-person reasoning is presented as current practice, while
repository facts are marked by local-implementation language. The SQL example
now handles a missing custom setting explicitly, distinguishes `USING` from
`WITH CHECK`, and qualifies ownership/`FORCE ROW LEVEL SECURITY` behavior. Test
descriptions are framed as contracts/evidence requirements rather than as an
undated pass.

Result: `PASS — no material unsupported public claim identified at draft level.`
