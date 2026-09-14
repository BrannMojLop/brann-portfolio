# Workforce case-study direction — case-study architect handoff

This is a narrative direction, not publishable case-study copy. Workforce is an independent product in development and must not be described as production software.

## Case-study spine

### Purpose

Design an operational workforce-management product around organization-aware workflows, authorization boundaries, auditability, and reliable data handling for the intended product context.

### Context and constraints

- Workforce is a separate product direction from BusiNext, with separate repository/product boundaries.
- The architecture is intentionally proportionate to the product’s current development scope.
- The narrative must explain system decisions without exposing private infrastructure, credentials, internal URLs, or confidential operational details.
- No production outcome, customer count, adoption, uptime, or scale metric is established for public use in this refresh.

## Concrete architecture concerns to foreground

1. Modular-monolith shape with explicit bounded modules rather than premature microservices.
2. API-first backend and a separate frontend, with routers limited to transport concerns and application services owning authorization and invariants.
3. PostgreSQL as the transactional source of truth in the proposed architecture, with constraints and tenant-first data boundaries.
4. Organization context derived server-side and treated as an authorization boundary; a client-provided organization identifier is not authority.
5. Row-level security as a second isolation barrier where approved for public explanation, not as a substitute for application authorization.
6. Separate User identity from Employee records and membership/capability decisions.
7. Append-only or auditable workflow records, idempotent operations, and controlled corrections for operational reliability.
8. Outbox/task-table and worker direction for durable asynchronous work without claiming distributed production infrastructure.
9. Explicit rejection of V1 microservices and of copying unrelated BusiNext HRM/auth patterns without review.

## Decision/tradeoff framing

| Decision | Tradeoff to explain | Evidence boundary |
|---|---|---|
| Modular monolith for V1 | Keeps transactions and ownership visible while leaving room for later extraction | Architecture plan/design direction; not a production result |
| PostgreSQL transactional core | Favors relational integrity and consistent cross-workflow behavior | Architecture plan and development evidence; production status requires separate proof |
| Server-derived organization context | Adds explicit context propagation, but prevents caller-controlled tenancy | Architecture plan; avoid exposing security-sensitive implementation detail |
| Application-service authorization | Centralizes business authorization/invariants, but requires disciplined module boundaries | Architecture plan and source review |
| Audit/idempotency | Improves traceability and retry safety, but increases schema and workflow design work | Architecture plan; outcome wording needs implementation evidence |
| Outbox/worker direction | Separates durable work from request latency, but introduces operational retry/state concerns | Architecture plan; do not claim production reliability |

## Public-safe narrative order

1. State that Workforce is an independent product in development.
2. Name the operational problem and the architecture constraints.
3. Show the bounded-module/modular-monolith choice.
4. Explain organization context, authorization, PostgreSQL transactionality, and auditability as connected decisions.
5. Describe the tradeoffs and what evidence exists.
6. Close with what remains design/development work, not a shipped outcome.

## Explicit exclusions

- “Production Workforce”, “deployed Workforce”, or any operational adoption claim.
- Metrics, customer counts, performance numbers, uptime, or security-certification claims.
- Private schema names, internal URLs, credentials, detailed threat findings, or confidential company/process data.
- A claim that RLS alone provides complete authorization.
- A claim that the architecture is already fully implemented if the source only describes the planned design.

## Final public direction

### English

`Workforce is an independent workforce-management product in active development. Its current local implementation covers a secure multi-organization foundation, People and Employee management, and configuration of organizational structure and work schedules. It uses FastAPI, React and PostgreSQL with server-derived organization context, tenant isolation, audited mutations, idempotency and versioned schedule and policy configuration.`

### Spanish

`Workforce es un producto independiente de gestión laboral en desarrollo activo. Su implementación local actual cubre una base segura multi-organización, la gestión de Personas y Empleados, y la configuración de estructura organizacional y horarios de trabajo. Utiliza FastAPI, React y PostgreSQL con contexto de organización derivado del servidor, aislamiento por tenant, mutaciones auditadas, idempotencia y configuración versionada de horarios y políticas.`

### Approved public architecture signals

- Modular-monolith direction.
- API-first backend and separate web frontend.
- PostgreSQL transactional core.
- Server-derived organization context and tenant isolation.
- RLS as defense in depth.
- User / Membership / Employee separation.
- Auditability, idempotency, optimistic concurrency, and versioned organizational/scheduling configuration.

The final implementation must not add attendance/check-in, leave, incidents, reporting, imports/exports, notifications, production deployment, uptime/scale, SLO/compliance, or an implemented outbox/worker claim to this case study.
