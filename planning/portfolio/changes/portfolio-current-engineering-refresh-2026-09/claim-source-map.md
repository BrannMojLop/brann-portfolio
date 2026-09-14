# Final claim/source map

All material claims in `copy-draft.md` are either user-confirmed, supported by current first-party repository evidence, or clearly framed as a current design direction/local implementation. No claim below authorizes production wording beyond its stated boundary.

| Claim family | Public surfaces | Source | Status/boundary |
|---|---|---|---|
| Software engineer focused on software architecture and backend systems | Home, About, metadata direction | User-confirmed core positioning | Approved exact EN/ES wording. |
| Designs and leads evolution around real operational constraints | Home, About, Systems responsibility | User-confirmed core positioning | Approved; no team-size or organizational-scope inference. |
| Head of Systems / Jefe de Sistemas at Elements Of Steel, 2019–Present/actualidad | About | User-confirmed current role | Approved exact title/date; do not imply software development began in 2019. |
| Progression through QA, junior development, project leadership, and Head of Systems plus full-stack work | About | User-confirmed progression | Approved without transition years. |
| Spanish native; English B1 Intermediate | About | User-confirmed language levels | Approved exact bilingual parity. |
| Computer Systems Engineering and UTEL Master’s degree | About | Existing portfolio source and canonical CV/LinkedIn record | Approved as bounded education history; no expanded academic claims. |
| Businext ERP domains and operational context | Home, Systems, About | Current `lib/systems.ts`; BusiNext repository evidence | Approved within finance, sales, inventory, HR, dashboards/accounting wording. |
| Businext architecture: domain boundaries, API-first shape, modular FastAPI backend, service layers | Systems, About taxonomy | Current portfolio source; BusiNext source | Approved high-level description; private implementation detail excluded. |
| TR0V1 credit lifecycle: installments, interest, payments, reconciliation, statements | Home, Systems, About | Current `lib/systems.ts`; TR0V1 repository evidence | Approved bounded financial-domain wording. |
| TR0V1 architecture: state transitions, explicit domain rules, service/API responsibilities, consistency | Systems, Engineering themes | Current portfolio source; TR0V1 source | Approved without client count, scale, or unsupported outcome. |
| Workforce independent workforce-management product in active local development | Home, Systems, About | User-confirmed status; Workforce `README.md` and `AGENTS.md` | Approved; explicitly not production software. |
| Workforce local implementation covers Foundation, People/Employees, Structure/Scheduling | Home, Systems | User-confirmed slice status; Workforce repository evidence | Approved as local implementation scope; excluded future modules remain unmentioned. |
| Workforce BFF/Cognito, HttpOnly session, CSRF, organization selection, AuthenticationContext to TenantContext, PostgreSQL roles/RLS | Workforce Systems | User-confirmed approved slice detail; Workforce repository | Approved concise technical evidence; no credentials, URLs, or private security findings. |
| Workforce employee lifecycle, User/Employee separation, auditability, idempotency, ETag concurrency, employment periods | Workforce Systems | User-confirmed approved slice detail; Workforce repository | Approved as local implementation evidence. |
| Workforce structure/scheduling: worksites, departments, positions, effective assignments, versioned timezones, policies, schedules, segments, lifecycle, resolution, admin UI | Workforce Systems | User-confirmed approved slice detail; Workforce repository | Approved as local implementation evidence. |
| Workforce modular monolith, API-first backend, separate frontend, PostgreSQL transactional core | Workforce Systems, taxonomy | User-confirmed approved technical details; Workforce architecture/source | Approved as architecture direction/current development; no production implication. |
| Server-derived organization context, tenant isolation, RLS as defense in depth | Workforce Systems, taxonomy | User-confirmed approved technical details; Workforce architecture/source | Approved with RLS explicitly described as defense in depth, not complete authorization alone. |
| PostgreSQL relational integrity, constraints, transaction boundaries, idempotency, versioned configuration | Home, Systems, About, Engineering, Contact | User-confirmed PostgreSQL positioning; Workforce implementation/architecture evidence | Approved as current architecture and implementation work, especially Workforce; no scale, managed production, PITR, SLO, or expertise claim. |
| SDD and architecture-first planning in current engineering practice | Home, About, Engineering | User-confirmed approved workflow claims | Approved as current practice; not backdated to every historical project. |
| Bounded AI-assisted roles/specialized agents | Home, About, Engineering | User-confirmed approved workflow claims | Approved only as structured support for defined analysis/implementation; human engineering responsibility remains explicit. |
| Handoffs record decisions, evidence, open questions, acceptance criteria | Home, About, Engineering | User-confirmed approved workflow claims; runtime evidence | Approved process description; no private prompts or internal workflow data. |
| Planning, implementation, and review are separate; independent review may be outside original implementation | Home, About, Engineering | User-confirmed approved workflow claims | Approved with “may be” boundary; automated checks are not called independent review. |
| Tests, source inspection, manual QA, database/deployment checks, and production validation are distinct evidence types | Home, About, Engineering | User-confirmed approved workflow claims; runtime gates | Approved methodology; no claim that every gate passed for every project. |
| Explicit quality and release gates | Home, About, Engineering | User-confirmed approved workflow claims; runtime gates | Approved current practice; does not imply a release occurred. |
| Engineering Notes themes broaden to PostgreSQL, concurrency, authorization, distributed workflows, SDD, AI-assisted engineering, architecture reviews | Engineering | User-confirmed page requirements; existing source taxonomy | Approved as themes/backlog; new articles are not represented as already published. |

## Explicit exclusions carried into implementation

- `125K+ LOC`, `200K+ LOC`, and TR0V1 `30+ clients` remain unpublished.
- No unsupported production claims, operational scale, uptime, SLO, compliance, managed backups/PITR, or client/customer counts.
- No `Senior` as primary positioning, `AI Expert`, or `AI Architect` framing.
- No completed ecommerce modernization claim.
- No remote availability or other unsupported availability claim.
- Attendance/check-in, leave, incidents, reporting, imports/exports, notifications, users/customers, and Workforce outbox/worker implementation remain outside the current public Workforce scope.

## Bilingual anchor index

| English | Spanish |
|---|---|
| Software engineer focused on software architecture and backend systems | Ingeniero de software enfocado en arquitectura de software y sistemas backend |
| Head of Systems | Jefe de Sistemas |
| Spanish — Native · English — B1 · Intermediate | Español — Nativo · Inglés — B1 · Intermedio |
| specification-driven development | desarrollo guiado por especificaciones |
| architecture-first planning | planificación con arquitectura primero |
| specialized AI-assisted roles | roles especializados con apoyo de IA |
| independent review | revisión independiente |
| evidence / QA | evidencia / QA |
| quality and release gates | puertas de calidad y liberación |
| active development | desarrollo activo |
| tenant isolation | aislamiento por tenant |
