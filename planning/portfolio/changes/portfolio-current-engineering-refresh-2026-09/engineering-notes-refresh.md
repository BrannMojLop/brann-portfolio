# Engineering Notes refresh strategy

Existing Note bodies are outside this refresh. This document only decides what to preserve, audit later, and prioritize for future writing.

## Notes to keep visible

The current themes remain valuable and align with the core positioning:

- ERP modularity and domain boundaries
- ERP platform architecture
- Modular monoliths versus microservices for enterprise software
- Backend service boundaries
- FastAPI service-layer patterns
- Financial APIs and domain controls
- Financial reconciliation jobs

These notes demonstrate backend/system reasoning and should not be removed merely because their dates are March 2026.

## Notes to audit later

Audit all existing English/Spanish pairs as a separate evidence task. For each pair, check:

- whether the body’s project attribution is still accurate;
- whether “production” wording is supported and public-safe;
- whether architecture descriptions distinguish fact from recommendation;
- whether examples expose confidential detail;
- whether English and Spanish retain the same claims and boundaries;
- whether the March 9, 2026 date represents publication date only or is being misread as current project date.

No body edits or date changes are authorized here.

## New note backlog

### Highest value

1. **From specification to evidence: how I engineer software** — the anchor note for SDD, architecture-first planning, handoffs, independent review, evidence, and release gates.
2. **Architecture-first planning for business-critical systems** — how constraints, ownership, data invariants, authorization, and operations shape a design before implementation.
3. **Workforce architecture in development: organization context, PostgreSQL, and auditability** — a public-safe case study of concrete design decisions, clearly marked as non-production.
4. **Specialized agents and explicit engineering handoffs** — a practical explanation of bounded responsibilities, phase separation, and human accountability.
5. **Independent review and release evidence** — how review and validation remain distinct from implementation and local test results.

### Secondary backlog

6. **PostgreSQL as a transactional boundary** — relational integrity, constraints, tenant isolation, and reliable workflows, grounded in current evidence.
7. **Designing durable asynchronous work with an outbox direction** — only after the Workforce implementation/design evidence is sufficient.
8. **Modernizing a system without broadening the scope** — ecommerce modernization as a future architecture study only; not a current public Systems case.

## Editorial constraints for every new note

- Write from a verified firsthand engineering decision or explicitly labeled architecture proposal.
- Provide English/Spanish counterparts or record an intentional deferral.
- Separate repository facts, design proposals, local tests, manual QA, independent review, and production evidence.
- Do not use AI-expert/AI-architect framing or imply replacement of engineering judgment.
- Do not introduce unsupported titles, dates, metrics, client counts, or production status.
- Route technical notes through the separate Engineering Note evidence audit before publication.

## Final prioritized backlog

| Priority | Title EN | Title ES | Thesis | Portfolio value | Evidence required | Privacy/company risk |
|---|---|---|---|---|---|---|
| P0 | Specification-driven development for complex software changes | Desarrollo guiado por especificaciones para cambios de software complejos | A written specification turns scope, constraints, decisions, and acceptance evidence into a shared engineering contract before implementation. | Makes the current practice legible and connects every other workflow topic. | A firsthand current change showing specification, decisions, handoffs, and acceptance evidence. | Use sanitized artifacts; no private prompts, URLs, credentials, or client data. |
| P0 | Why implementation and engineering review should be separate roles | Por qué la implementación y la revisión de ingeniería deben ser roles separados | Separation reduces self-confirmation and lets review compare the result with the original scope and evidence. | Demonstrates quality judgment rather than tool usage. | A change with distinct implementation/review records and findings. | Do not identify private reviewers or imply independent approval where only automation ran. |
| P0 | Designing PostgreSQL RLS for multi-tenant SaaS | Diseñar RLS de PostgreSQL para SaaS multi-tenant | Tenant context, application authorization, and RLS form layered defenses around relational data boundaries. | Gives PostgreSQL and Workforce concrete architectural depth. | Workforce local implementation and architecture evidence; negative cross-tenant checks if publishable. | Avoid schema secrets, security findings, credentials, and production-security claims. |
| P0 | How I structure specialized AI agents for software engineering | Cómo estructuro roles especializados con apoyo de IA para ingeniería de software | Bounded roles and explicit handoffs make AI assistance reviewable while human engineering responsibility remains central. | Explains the workflow without AI hype. | Current workflow records showing responsibilities, inputs, outputs, and handoffs. | No autonomous-agent, AI-expert, or replacement-of-judgment framing. |
| P1 | Optimistic concurrency vs row locking | Concurrencia optimista frente a bloqueos de fila | The choice depends on contention, user flow, retry behavior, and the cost of rejecting stale writes. | Connects Workforce ETags to general systems reasoning. | Workforce implementation evidence and a sanitized concurrency example. | Do not claim broad performance or production scale. |
| P1 | Constraints as executable domain rules | Restricciones como reglas de dominio ejecutables | Constraints should protect invariants at the domain and data boundaries, not remain informal documentation. | Reinforces the systems-architect identity across Businext, TR0V1, and Workforce. | Code/design evidence from a named, public-safe system. | Avoid confidential business rules or internal identifiers. |
| P1 | Why idempotency is more than a UNIQUE constraint | Por qué la idempotencia es más que una restricción UNIQUE | Safe retries require an operation model, stable identity, state handling, and observable outcomes—not only duplicate prevention. | Shows mature workflow and financial/operational thinking. | Local implementation or design evidence tied to an approved system. | Do not expose financial identifiers or production incident details. |
| P1 | What AI changed in my engineering workflow — and what it did not | Qué cambió la IA en mi flujo de ingeniería y qué no cambió | AI accelerates bounded work, but scope, architecture, evidence, trade-offs, and release responsibility remain human. | Humanizes the workflow while preserving credibility. | Current practice examples and explicit before/after boundaries; no historical overclaim. | Avoid productivity metrics, hype, and claims of universal historical use. |
| P2 | Designing an outbox/worker architecture | Diseñar una arquitectura outbox/worker | Durable asynchronous work needs explicit ownership, retry state, and observability; it is an architecture direction, not automatically a production feature. | Extends the systems narrative when Workforce evidence is mature. | Approved design and implementation evidence; separate production proof if ever claimed. | Do not present the Workforce outbox/worker as implemented now. |
| P2 | Immutable interaction histories for CRM workflows | Historiales inmutables de interacción para flujos de CRM | Append-oriented histories preserve operational traceability when records are corrected or revisited. | Connects prior enterprise work to a durable data principle. | BusiNext/TR0V1 or CRM repository evidence and privacy review. | Avoid client identities, internal workflow details, and unsupported outcomes. |

The first five entries are the recommended publication order. None should be treated as published until its body receives the separate Engineering Note evidence audit and bilingual review.
