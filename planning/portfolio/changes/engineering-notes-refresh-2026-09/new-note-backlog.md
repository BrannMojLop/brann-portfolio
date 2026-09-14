# Prioritized new Engineering Notes backlog

These are proposed briefs, not final public copy. Each note needs its own
evidence packet and bilingual editorial pass before MDX is drafted.

## P0 — first wave

### 1. Specification-driven development for complex software changes

- Title EN: `Specification-driven development for complex software changes`
- Title ES: `Desarrollo guiado por especificaciones para cambios de software complejos`
- Core thesis: A specification makes scope, domain rules, invariants, acceptance evidence, ownership, and handoffs explicit before implementation begins; it is a decision tool, not paperwork.
- Intended audience: Engineering leads, senior individual contributors, and teams working on high-consequence business software.
- Outline: Why complex changes fail without a shared specification; the minimum useful SDD; translating domain rules into acceptance evidence; architecture-first planning; handoff to implementation; independent review against the specification; what a gate can and cannot prove.
- Real project evidence required: One approved, sanitized SDD or planning artifact plus the corresponding implementation/review evidence. Do not claim every historical project used SDD.
- Public/privacy risk: Medium. Internal prompts, URLs, identifiers, and private business rules must stay out; do not imply a formal process existed before it was introduced.
- Portfolio value: Very high. It establishes current engineering judgment and gives the rest of the notes a coherent method.
- Recommended priority: `P0`.

### 2. How I structure specialized AI agents for software engineering

- Title EN: `How I structure specialized AI agents for software engineering`
- Title ES: `Cómo estructuro agentes de IA especializados para ingeniería de software`
- Core thesis: AI-assisted engineering becomes more reliable when agents have bounded responsibilities, explicit inputs and outputs, and handoffs that preserve decisions and evidence; human engineering responsibility remains central.
- Intended audience: Engineering managers and practitioners evaluating disciplined AI-assisted development.
- Outline: Why one undifferentiated agent is hard to review; role boundaries for orchestration, strategy, writing, implementation, and review; handoff contents; where agents may assist; where human judgment stays authoritative; failure modes and recovery; evidence trail.
- Real project evidence required: Current runtime role definitions, a sanitized handoff sequence, and an example of a review finding or scope correction. Distinguish automated assistance from independent human approval.
- Public/privacy risk: High. Do not publish private prompts, model/provider details, credentials, internal paths, or claims of autonomy, replacement, AI expertise, or AI architecture leadership.
- Portfolio value: Very high. It communicates a differentiated workflow without hype when grounded in actual responsibilities and boundaries.
- Recommended priority: `P0`.

### 3. Designing PostgreSQL RLS for multi-tenant SaaS

- Title EN: `Designing PostgreSQL RLS for multi-tenant SaaS`
- Title ES: `Diseñar RLS de PostgreSQL para SaaS multi-tenant`
- Core thesis: Row-level security is one enforcement layer in a tenant-isolation design; it must align with server-derived context, authorization boundaries, migrations, tests, and safe failure behavior.
- Intended audience: Backend engineers and architects designing multi-organization systems with PostgreSQL.
- Outline: Tenant isolation as a system property; context derivation; RLS policy shape; defense in depth with service authorization; migration and role concerns; testing allowed/denied paths; common bypasses; local/non-production boundary.
- Real project evidence required: Workforce PostgreSQL schema/migrations, RLS policies, role setup, focused tests, and the exact local scope. No production or scale claim.
- Public/privacy risk: High. Avoid exposing table names that reveal private domains, role credentials, internal topology, or a security guarantee broader than the tested paths.
- Portfolio value: Very high. It adds concrete database architecture to the current workflow narrative.
- Recommended priority: `P0`.

## P1 — second wave

### 4. Why implementation and engineering review should be separate roles

- Title EN: `Why implementation and engineering review should be separate roles`
- Title ES: `Por qué la implementación y la revisión de ingeniería deben ser roles separados`
- Core thesis: Separating implementation from review reduces self-confirmation and lets review compare the result with the original scope, claims, behavior, and evidence.
- Intended audience: Technical leads and teams designing quality gates for agent-assisted or human-led changes.
- Outline: The risk of self-review; what independence means; review inputs; claim/scope checks; behavior and accessibility checks; how findings feed back; limits of automated review.
- Real project evidence required: A change with separate implementation and review records, findings, and dispositions. Name roles, not private reviewers; identify whether review was automated or human.
- Public/privacy risk: Medium. Do not imply independent human approval when only automation ran or expose private coordination details.
- Portfolio value: Very high. It demonstrates quality judgment and complements the SDD and agent notes.
- Recommended priority: `P1`.

### 5. Designing tenant context and authorization boundaries

- Title EN: `Designing tenant context and authorization boundaries`
- Title ES: `Diseñar el contexto de tenant y los límites de autorización`
- Core thesis: Tenant context should be derived and enforced across request, service, database, and audit boundaries rather than trusted from a client-supplied identifier.
- Intended audience: Backend engineers working on multi-organization SaaS and authorization-sensitive workflows.
- Outline: Context versus identity; server-derived organization scope; membership and role boundaries; service-layer checks; database enforcement; auditability; negative tests; common leakage paths.
- Real project evidence required: Workforce context/authentication implementation, authorization tests, RLS configuration, and a sanitized denied-access example. Verify exact local scope.
- Public/privacy risk: High. Avoid internal permission matrices, user data, bypass details, or absolute security claims.
- Portfolio value: Very high. It turns Workforce’s architecture into a precise system boundary story.
- Recommended priority: `P1`.

### 6. Constraints as executable domain rules

- Title EN: `When domain constraints become executable rules`
- Title ES: `Cuando las restricciones del dominio se convierten en reglas ejecutables`
- Core thesis: Operational constraints become reliable only when they are represented across specification, domain validation, persistence, and evidence—not left as prose or UI behavior.
- Intended audience: Engineers building ERP, workforce, financial, or other rule-heavy systems.
- Outline: Classifying constraints; deciding where each rule is enforced; invariants versus permissions; temporal and state rules; database/service/UI responsibilities; testing invalid paths; documenting trade-offs.
- Real project evidence required: Two sanitized rules from Workforce, Businext, or TR0V1 with source locations and tests. Keep general guidance separate from firsthand implementation.
- Public/privacy risk: Medium. Business rules may be sensitive; abstract the domain and do not disclose proprietary thresholds or customer data.
- Portfolio value: High. It connects domain modeling to implementation discipline.
- Recommended priority: `P1`.

### 7. Optimistic concurrency versus row locking

- Title EN: `Optimistic concurrency versus row locking`
- Title ES: `Concurrencia optimista frente a bloqueos de fila`
- Core thesis: The right concurrency control depends on contention, user flow, retry behavior, transaction length, and the cost of rejecting stale writes; neither strategy is universally correct.
- Intended audience: Backend engineers designing mutable business workflows.
- Outline: Lost updates; optimistic version/ETag checks; row locks and transaction scope; retries and user feedback; choosing per workflow; tests and observability; limits of local evidence.
- Real project evidence required: Workforce optimistic-concurrency/ETag implementation or a verified row-lock example from a relevant system, with focused tests and no unsupported performance claim.
- Public/privacy risk: Medium. Do not expose production contention, customer identifiers, or benchmarks that were not measured.
- Portfolio value: High. It demonstrates practical database and workflow trade-offs.
- Recommended priority: `P1`.

### 8. Why idempotency is more than a UNIQUE constraint

- Title EN: `Why idempotency is more than a UNIQUE constraint`
- Title ES: `Por qué la idempotencia es más que una restricción UNIQUE`
- Core thesis: Safe retries require a stable operation identity, state transitions, duplicate handling, observable outcomes, and a clear response contract; uniqueness is only one guard.
- Intended audience: Engineers building financial, operational, or asynchronous APIs.
- Outline: Duplicate request versus duplicate business event; uniqueness; idempotency keys or operation identity; in-progress/completed/failed states; retries; side effects; reconciliation and evidence.
- Real project evidence required: Sanitized TR0V1 or Workforce operation evidence, schema/service/tests, and explicit limits on what is protected. Avoid claiming universal exactly-once execution.
- Public/privacy risk: High for financial examples. Exclude account IDs, amounts, provider details, internal identifiers, and incident specifics.
- Portfolio value: High. It shows maturity beyond database-level pattern matching.
- Recommended priority: `P1`.

### 9. What AI changed in my engineering workflow — and what it did not

- Title EN: `What AI changed in my engineering workflow — and what it did not`
- Title ES: `Qué cambió la IA en mi flujo de ingeniería — y qué no`
- Core thesis: AI changed the distribution of bounded analysis and implementation work, but it did not transfer responsibility for architecture, claims, evidence, review, or release decisions.
- Intended audience: Engineering leaders and practitioners seeking a grounded account of AI-assisted work.
- Outline: Before/after workflow at the process level; tasks suitable for assistance; human-owned decisions; handoffs; review and evidence gates; failure modes; what remains deliberately manual.
- Real project evidence required: A dated personal workflow comparison, sanitized runtime records, and examples of corrections or rejected output. No productivity, speed, or quality metric without measurement.
- Public/privacy risk: High. Avoid model hype, private prompts, vendor claims, or a personal identity framed as AI expert/architect.
- Portfolio value: High. It gives context to the agent workflow without repeating the specialized-agent note.
- Recommended priority: `P1`.

### 10. Versioned scheduling and temporal data in Workforce

- Title EN: `Versioned scheduling and temporal data in Workforce`
- Title ES: `Horarios versionados y datos temporales en Workforce`
- Core thesis: Scheduling becomes safer when effective dates, versions, ownership, and historical interpretation are explicit instead of overwriting the meaning of past records.
- Intended audience: Engineers designing workforce, HR, policy, or other time-dependent systems.
- Outline: Why time changes meaning; effective intervals; versioned configuration; historical reads; overlap and boundary rules; migration/testing strategy; local implementation limits.
- Real project evidence required: Workforce schedule/policy schema, migrations, service rules, and tests showing local configuration behavior. Confirm whether any historical or production behavior is actually implemented.
- Public/privacy risk: High. Avoid employee data, company policy details, internal calendars, and claims about payroll or compliance.
- Portfolio value: High. It gives Workforce a concrete data-modeling case study.
- Recommended priority: `P1`.

### 11. Immutable interaction histories for CRM workflows

- Title EN: `Designing immutable interaction histories for CRM workflows`
- Title ES: `Diseñar historiales inmutables de interacciones para flujos de CRM`
- Core thesis: A CRM history is more trustworthy when past interactions are append-only facts and later corrections are explicit events rather than silent edits.
- Intended audience: Engineers working on CRM, support, audit, or workflow systems.
- Outline: Mutable notes versus interaction history; event shape; authorship/time/context; correction and redaction boundaries; querying; retention/privacy; operational use; evidence limits.
- Real project evidence required: Verified BusiNext CRM model/workflow evidence showing what is actually immutable, editable, or audited. Do not generalize from a single screen or route.
- Public/privacy risk: High. Exclude customer names, contact details, message contents, and retention/compliance claims without approved sources.
- Portfolio value: Medium-high. It broadens the portfolio from ERP/credit into durable operational history design.
- Recommended priority: `P1`.

## P2 — future architecture study

### 12. Designing an outbox/worker architecture

- Title EN: `Designing an outbox/worker architecture`
- Title ES: `Diseñar una arquitectura outbox/worker`
- Core thesis: Durable asynchronous work requires explicit ownership, retry state, observability, and failure handling; an outbox/worker design is an architecture proposal unless implementation evidence exists.
- Intended audience: Engineers planning reliable asynchronous workflows.
- Outline: Request/transaction boundary; outbox record; worker ownership; retries and dead-letter handling; idempotency; observability; operational trade-offs; when not to add a queue.
- Real project evidence required: An approved design or implemented example. Workforce outbox/worker behavior must not be presented as current production software.
- Public/privacy risk: Medium-high. Avoid implying production reliability, provider guarantees, or operational maturity that has not been demonstrated.
- Portfolio value: Medium-high. It shows forward architecture thinking, but has lower immediate value than current implemented evidence.
- Recommended priority: `P2`.
