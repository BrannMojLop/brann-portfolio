# Claim/source consistency check

This map consolidates the source boundary for the three approved briefs. It is
an editorial control record, not public copy.

| Claim family | Brief(s) | Source/evidence | Publication boundary |
|---|---|---|---|
| SDD is part of the current engineering workflow | 01 | User-approved workflow; portfolio runtime router/README; Workforce SDD and handoff records | Present-tense current practice only; do not backdate to every project. |
| Specifications connect scope, constraints, acceptance, evidence, and handoffs | 01 | Current SDD/handoff artifacts and approved portfolio workflow | Describe the mechanism; do not claim guaranteed quality or defect elimination. |
| Portfolio workflow uses bounded roles and gates | 02 | Portfolio runtime role contracts, manifests, handoffs, and review artifacts | Name responsibilities, not private prompts, agents as employees, or autonomous authority. |
| Implementation and review are separated | 01, 02 | Runtime gates and approved refresh review records | Distinguish agent-assisted, automated, and human review; do not imply human approval where absent. |
| Workforce contains local PostgreSQL/RLS implementation evidence | 03 | Workforce `app/platform/rls.py`; migrations `0001`, `0002`, `0005`; ADR-002; PostgreSQL integration tests | Local/development scope only; test contracts are not proof of a passing production run. |
| Tenant context is server-derived and distinct from client input | 03 | Workforce `ContextSetter`, `AuthenticationContext`, `TenantContext`, and ADR-002 | Explain the design boundary without exposing security-sensitive internals or absolute guarantees. |
| RLS is defense in depth, not complete authorization | 03 | Workforce ADR-002, RLS implementation, migrations, and authorization tests | Keep application authorization and database isolation complementary. |
| Workforce roles, grants, FORCE RLS, and migration ownership are separated | 03 | Workforce migrations, role provisioning scripts, and RLS integration tests | State only what current source supports; no production posture claim. |
| Isolation and negative-path tests exist | 03 | Workforce platform/People/Scheduling test suites | Say “test contract exists” unless a dated execution record proves a pass. |

## Consistency result

- Every brief contains the required claim statuses: `VERIFIED`, `IMPLEMENTED
  LOCALLY`, `CURRENT PRACTICE`, `PLANNED`, and `DO NOT PUBLISH`.
- High-risk statements are either bounded to local/current practice or placed in
  `DO NOT PUBLISH`.
- No brief promotes a planned architecture to production behavior.
- No brief introduces scale, client, uptime, backup/PITR, compliance, customer,
  credential, private-data, or unsupported AI-identity claims.

Result: `PASS`.
