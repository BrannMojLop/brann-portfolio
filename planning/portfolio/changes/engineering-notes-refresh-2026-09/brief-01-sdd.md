# Brief 01 — Specification-driven development for complex software changes

## Editorial identity

- Final title EN: `Specification-driven development for complex software changes`
- Final title ES: `Desarrollo guiado por especificaciones para cambios de software complejos`
- Subtitle/deck EN: `How I make scope, constraints, architecture decisions, acceptance evidence, and handoffs explicit before implementation.`
- Subtitle/deck ES: `Cómo hago explícitos el alcance, las restricciones, las decisiones de arquitectura, la evidencia de aceptación y los handoffs antes de implementar.`
- Suggested slug EN: `/engineering/specification-driven-development-complex-changes`
- Suggested slug ES: `/es/engineering/specification-driven-development-complex-changes`
- Target reading time: `10–12 minutes` / approximately `1,500–1,900 words` per language.

## Audience and thesis

- Target audience: Engineering leads, senior individual contributors, and teams working on complex business software where ambiguity, authorization, data integrity, and operational risk matter.
- One-sentence thesis: For non-trivial changes, implementation quality improves when scope, constraints, architecture decisions, acceptance criteria, risks, and evidence expectations are explicit before code changes begin.
- Why this belongs in the portfolio: It makes the current engineering method visible and connects the portfolio’s system stories to a repeatable way of making changes trustworthy.

## Source and evidence inventory

| Evidence | Source | Safe use |
|---|---|---|
| Current workflow from problem framing through release gate | User-approved current workflow and portfolio runtime/router | Describe current practice; do not backdate it to every historical project. |
| SDD, architecture, acceptance, and handoff artifacts | Workforce planning records, including Slice 2 SDD handoff and related specification/plan documents | Use sanitized examples of decision structure; do not expose internal URLs, private prompts, or implementation secrets. |
| Separation of planning, implementation, review, and validation | Portfolio runtime roles, gates, manifests, and completed review artifacts | Explain the process boundary; do not imply every review is human or every gate passes. |
| Business-change examples | Approved Businext, Workforce, CRM, and planning evidence | Select one or two examples only after claim-level source review. Ecommerce remains future-content context, not current public scope. |
| Failure modes | Source-backed review findings or firsthand records | Use only observed or documented failure modes; otherwise label them as risks, not incidents. |

## Claim matrix

| Status | Claims that may appear after editorial review |
|---|---|
| `VERIFIED` | The portfolio runtime defines explicit stages, roles, manifests, handoffs, and gates. Workforce planning contains SDD/specification and handoff artifacts. |
| `IMPLEMENTED LOCALLY` | The current portfolio change process records scope, evidence, independent review, and validation separately. Workforce contains local planning/code evidence aligned to defined slices. |
| `CURRENT PRACTICE` | Brandon currently uses a workflow that moves from problem framing and discovery through SDD/architecture, implementation, independent review, evidence/QA, and a release gate. This is user-approved present-tense practice. |
| `PLANNED` | A future note series may formalize reusable SDD templates, examples, or public diagrams. Do not present planned templates as already adopted everywhere. |
| `DO NOT PUBLISH` | “SDD has always been used”; “SDD guarantees defect-free delivery”; productivity, speed, quality, scale, or production outcomes without evidence; private plan contents; a claim that SDD replaces iteration or judgment. |

## Detailed article outline

1. **The problem SDD is meant to solve** — Ambiguous scope, hidden constraints, competing interpretations, and review that begins too late.
2. **What belongs in a useful SDD** — Problem statement, scope/non-scope, domain language, invariants, architecture choices, risks, acceptance criteria, evidence expectations, and ownership.
3. **The minimum viable specification** — What is necessary for a small change versus a cross-cutting change; when a short decision record is enough.
4. **Architecture before implementation** — Boundaries, data ownership, authorization context, transaction seams, and trade-offs made explicit before code.
5. **From acceptance criteria to evidence** — How a criterion becomes a test, source inspection, manual check, browser check, database check, or release condition.
6. **Handoffs without bureaucracy** — How a concise handoff reduces ambiguity between planner, implementer, reviewer, and QA/evidence responsibilities.
7. **A sanitized example** — One current Workforce or portfolio-runtime change, showing the problem, decisions, evidence map, and review boundary without private details.
8. **Failure modes when planning is insufficient** — Scope drift, hidden dependency, unsupported claim, mismatched contract, and self-validation; distinguish observed evidence from foreseeable risk.
9. **Why this is not waterfall** — Specifications can change when discovery changes; record the decision and update acceptance evidence rather than freezing assumptions.
10. **When SDD is unnecessary** — Trivial, reversible, low-risk changes where a proportional note or direct implementation is enough.
11. **What the method does not prove** — A good specification does not prove production readiness, security, performance, or correctness without the corresponding evidence.

## Key examples and case-study candidates

- A sanitized Workforce SDD handoff showing scope, exclusions, acceptance criteria, and review questions.
- The current portfolio refresh as a small public example of claim validation, approved copy, implementation, independent review, and local validation.
- A bounded Businext or CRM planning example only if the source shows the actual planning decision and not merely a retrospective reconstruction.

## Diagrams and code examples worth including

- A flow diagram: `Problem framing → Discovery → SDD / Architecture → Implementation plan → Implementation → Independent review → Evidence / QA → Release gate`.
- An SDD anatomy diagram mapping each section to the decision or risk it controls.
- A compact, fictionalized acceptance-evidence table; no private identifiers.
- No production code is necessary. If code is shown, use a short generic contract or invariant example and label it illustrative unless it is directly sourced.

## Claims requiring citations or qualification

- Any claim about a named system must cite the relevant first-party source or approved project record.
- Any statement that a failure occurred must point to a dated firsthand record; otherwise write “can fail” or “the risk is.”
- “Improves quality,” “reduces ambiguity,” or “prevents defects” must be framed as the mechanism or decision rationale unless measured evidence exists.
- Current-practice language must not imply historical use across all projects.
- Release gates must not be described as a release or production approval.

## Privacy and confidentiality risks

- Do not reveal private prompts, internal paths/URLs, credentials, client data, employee data, financial identifiers, or proprietary acceptance rules.
- Sanitize names and identifiers in examples.
- Do not expose internal agent messages or imply that role names reveal private organizational structure.

## Technical-review checklist

- SDD definition is specific enough to distinguish it from generic documentation.
- Outline shows trade-offs, failure modes, proportionality, and iteration.
- Every firsthand example has a source and scope label.
- Current practice is not backdated.
- Evidence types are not conflated with production approval.
- No unsupported metrics, incidents, or outcomes.
- EN/ES titles, thesis, sequence, certainty, and exclusions match conceptually.
- Internal links resolve to existing notes.

## SEO

- SEO title EN: `Specification-Driven Development for Complex Changes | Brandon Mojica`
- SEO title ES: `Desarrollo guiado por especificaciones para cambios complejos | Brandon Mojica`
- SEO description EN: `How I use specifications, architecture decisions, acceptance evidence, and explicit handoffs to make complex software changes easier to review.`
- SEO description ES: `Cómo uso especificaciones, decisiones de arquitectura, evidencia de aceptación y handoffs explícitos para revisar mejor cambios complejos de software.`

## Related existing notes

- `backend-service-boundaries` — connect specifications to business-transaction boundaries.
- `erp-platform-architecture` — connect planning decisions to system shape.

## Claims that must not appear

- SDD was used for every historical project or has existed unchanged since a specific date.
- SDD alone guarantees correctness, security, performance, or production readiness.
- A private client/company requirement, incident, metric, or internal workflow presented as public fact.
- “AI follows the SDD and therefore replaces engineering judgment.”
