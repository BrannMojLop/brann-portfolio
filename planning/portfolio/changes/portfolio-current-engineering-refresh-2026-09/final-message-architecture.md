# Final message architecture — approved implementation reference

This is the approved message architecture used by the implementation. The bilingual public copy is recorded separately in `copy-draft.md`.

## Approved status

- Human claim decisions: complete.
- Bilingual positioning: approved and mapped.
- Workforce local scope and architecture direction: approved and bounded as development work.
- PostgreSQL positioning: approved as current architecture and implementation work, especially Workforce, without production-scale claims.
- Engineering workflow: approved as current practice, not a historical claim about every project.
- G1 EDITORIAL FINAL: `PASS`.

## 1. Current positioning diagnosis

The portfolio already has credible backend/ERP and financial-system foundations. Businext and TR0V1 provide the strongest public proof of domain modeling, backend services, operational constraints, and transaction-sensitive work. The current narrative is narrower than the practice it is meant to represent:

- The identity is stronger than the surrounding explanation of how the work is done.
- The technology radar is mostly a flat stack list, so architecture and delivery judgment are not visible as capabilities.
- PostgreSQL is absent even though it is now an important part of current system-design direction.
- Workforce is positioned as a product concept, while the available architecture evidence can support a more concrete systems narrative; its current card also mislabels architectural concerns as technologies.
- Spanish Home has a direct localization defect caused by shared English data rendered in a Spanish surface.
- Engineering Notes are all dated March 9, 2026. They remain useful foundations, but they do not signal the current architecture/review workflow and their bodies require a separate evidence audit.
- The portfolio must make AI-assisted work legible as disciplined engineering coordination, with human judgment, evidence, and independent review retaining authority.

## 2. Target positioning

### Positioning direction

Position Brandon as a software engineer focused on software architecture and backend systems who designs and leads the evolution of business-critical platforms around real operational constraints.

The September 2026 extension is a visible engineering method: architecture-first planning, specification-driven development, explicit ownership across specialized roles, evidence-driven validation, and independent review. This is a way of working, not an AI specialization.

### Audience promise

For engineering leaders and teams evaluating systems work, the portfolio should answer three questions quickly:

1. What kinds of systems does he work on? Business-critical ERP, credit/financial, and operational platforms.
2. What engineering judgment does he bring? Boundaries, authorization, data integrity, workflows, maintainability, and operational fit.
3. How does he make changes trustworthy? Written specifications, explicit handoffs, evidence, independent review, and quality/release gates.

## 3. Page message hierarchy

### Home

1. Primary identity: software engineer focused on software architecture and backend systems.
2. Value: designs and leads the evolution of business-critical platforms around operational constraints.
3. Proof areas: domain modeling, backend/service architecture, transactional data integrity, and operational workflows.
4. Systems: Businext and TR0V1 as established system narratives; Workforce as independent product in development.
5. Method preview: a compact “How I engineer software” entry point showing the sequence from specification to independent review.
6. Technologies: grouped capability highlights, with PostgreSQL introduced as a bounded data/transactional capability.

Home should remain a fast orientation page. It should not become a full résumé, agent directory, or technical essay.

### Systems

1. Establish that systems are described through purpose, constraints, decisions, and evidence—not only names and stacks.
2. Businext: modular/domain-oriented ERP work and operational breadth.
3. TR0V1: credit/financial rules, state transitions, and consistency concerns.
4. Workforce: independent product in development, with architecture decisions presented as design direction rather than shipped production outcomes.
5. Keep ecommerce modernization outside this first Systems scope; link it only from a future-content plan if approved later.

### About

1. Current identity and confirmed title/employer/date.
2. Career progression without implying software development began in 2019 or inventing transition years.
3. Architecture and technical leadership responsibility.
4. Full-stack capability as part of current practice.
5. Languages and education from confirmed sources.
6. Engineering method as a short practice summary, not an AI persona.

### Engineering

1. Explain the kind of engineering reasoning the notes cover.
2. Keep the existing March foundations visible while labeling the need for a later evidence/currentness audit internally.
3. Add a future series around SDD, architecture-first planning, evidence, independent review, PostgreSQL, and Workforce architecture.
4. Preserve bilingual parity and do not edit existing Note bodies in this refresh.

### Contact

1. Clear invitation for architecture/backend/platform conversations.
2. Confirmed LinkedIn, GitHub, and email destinations only.
3. Avoid broad claims, hiring promises, or a contact CTA that implies unsupported availability.
4. Keep the page simple; the refreshed positioning should be carried by Home/About/Systems.

## 4. “How I engineer software” narrative architecture

The narrative should show a human-led system of work:

1. Start with a written specification: clarify scope, domain language, constraints, risks, and acceptance evidence.
2. Plan architecture first: identify boundaries, ownership, data invariants, authorization context, integration seams, and operational tradeoffs before implementation.
3. Assign explicit responsibilities: specialized agents or collaborators may analyze a bounded concern, but each handoff states inputs, outputs, evidence, and limits.
4. Separate phases: planning produces the design and decision record; implementation changes the approved scope; review independently tests the result against the specification and evidence.
5. Validate with evidence: tests, focused checks, source inspection, diff hygiene, and—when relevant—browser, deployment, database, or production verification are kept distinct rather than conflated.
6. Apply quality/release gates: a change advances only when the relevant scope, claim, experience, SEO/accessibility, validation, and release checks are satisfied.
7. Retain human accountability: AI can accelerate bounded analysis or implementation support, but engineering judgment decides scope, architecture, tradeoffs, evidence sufficiency, and release readiness.

This should read as a repeatable engineering workflow. It should not read as a claim of autonomous development or AI authority.

## 5. Recommended explanations of the workflow terms

| Term | Public explanation direction | Boundary |
|---|---|---|
| SDD | Specifications make scope, domain rules, invariants, acceptance evidence, and handoffs explicit before implementation. | Do not claim every historical project used SDD unless individually sourced. |
| Architecture-first planning | Architecture decisions are made against real constraints before code changes: boundaries, data, authorization, operations, and tradeoffs. | Use practice language for current work; do not backdate the method to all career work. |
| AI-assisted engineering | AI is used as a bounded assistant within a human-owned workflow for analysis, drafting, implementation support, and checks. | Never say AI replaces judgment or own the architecture. |
| Specialized agents | Distinct roles focus on orchestration, strategy, case-study evidence, implementation, or review, with explicit scopes. | Do not imply agents are employees, autonomous authorities, or proof of AI expertise. |
| Handoffs | Each phase passes a concise brief, decisions, evidence, unresolved questions, and acceptance criteria to the next responsibility. | Do not expose private prompts, credentials, internal URLs, or proprietary details. |
| Independent review | A reviewer not responsible for the original change checks claims, behavior, hierarchy, or accessibility against the agreed scope. | Do not call an automated check independent human review. |
| Evidence | Evidence is tied to the claim or decision and labeled by kind: repository fact, user confirmation, test, manual QA, or external/production check. | Local green checks do not prove production, cloud, database, or independent-review gates. |
| Quality/release gates | Gates make it visible what has passed, what remains conditional, and what must not be published. | Do not imply a release occurred when only strategy or local validation exists. |

## 6. Capability taxonomy

Replace a flat technology list with capabilities, then show representative technologies inside each capability.

### Domain and systems architecture

- Domain modeling and bounded responsibilities
- Business workflows and state transitions
- ERP, credit/financial, and operational systems
- Architecture decisions under real organizational constraints

Representative evidence: Businext and TR0V1; Workforce design direction where explicitly labeled as in development.

### Backend and application engineering

- Python backend engineering
- FastAPI and REST/API-first service design
- Service layers, repositories, validation, and typed contracts
- SQLAlchemy/Pydantic and background processing where sourced

### Data and transactional integrity

- PostgreSQL as a current architecture direction
- Relational modeling, transactions, constraints, and query boundaries
- Tenant isolation/RLS and server-derived context where the Workforce design is approved for public description
- Auditability, idempotency, reconciliation, and reliable state changes

### Product and full-stack delivery

- React and TypeScript
- Full-stack implementation across business workflows
- Operational UX and maintainable interfaces
- Frontend/backend contract alignment

### Engineering delivery and review

- Specification-driven development
- Architecture-first planning
- Explicit agent/collaborator responsibilities and handoffs
- Separation of planning, implementation, and review
- Evidence-driven validation and quality/release gates

### Infrastructure and operations

- AWS, Linux, Nginx, and deployment-aware backend work where currently sourced
- Operational constraints, observability, backups, and migration discipline when evidence permits

Technology names are evidence within a capability, not the identity itself. A technology must not be promoted merely because it appears in a proposed architecture document.

## 7. PostgreSQL positioning

PostgreSQL should be introduced as a data and transactional-integrity capability, especially in relation to current Workforce system design. The public-safe direction is to explain why it matters—transactional boundaries, relational constraints, tenant isolation/RLS, auditability, and reliable workflows—rather than present an unsupported production deployment claim.

Implementation must distinguish:

- confirmed current technical direction/design work;
- repository evidence of a working local or development system;
- production deployment or operational scale, which is not established by this strategy pass.

The draft uses PostgreSQL as approved current architecture and implementation work, especially in Workforce; it makes no named production-deployment, scale, managed-backup, SLO, or expertise claim.

## 8. Implementation requirements

- Replace the Home taxonomy label for Workforce architecture concerns with an architecture/capability label.
- Supply locale-specific Workforce labels so Spanish never receives the English strings.
- Preserve EN/ES meaning, order, and status wording.
- Keep the current confirmed title/date and language levels exact.
- Add the workflow narrative as a short, scannable method section; link to Engineering Notes for depth.
- Introduce capability groups rather than adding PostgreSQL to the end of a flat list.
- Keep all new project-status wording conservative: “in development”, “design direction”, or “architecture study” where applicable.

## Implementation checklist

- [x] Preserve the approved EN/ES positioning, role, employment period, progression, and language levels.
- [x] Implement the Home localization and Workforce taxonomy corrections without changing public architecture in this session.
- [x] Implement the approved concise workflow section and capability taxonomy.
- [x] Keep Workforce local-development status and approved slice boundaries explicit.
- [x] Keep excluded metrics, client counts, unsupported production claims, AI-hype framing, and ecommerce modernization out of public copy.
- [x] Keep existing Engineering Note bodies untouched and route them through a separate evidence audit.
- [x] Pass the final copy and source map to `portfolio-maintainer` for implementation and downstream experience/SEO/accessibility/release gates.
