# Claim review — Article 01 SDD

Reviewer scope: final claim/source consistency for the English and Spanish
drafts. This review does not authorize MDX or publication.

## Final editorial-pass checks

- The SDD definition now explicitly means the smallest decision record that
  makes a change reviewable; it is not presented as a universal template.
- The Workforce example names only an independent workforce-management
  product currently under development and describes the bounded handoff
  structure, not a private feature or production result.
- The AI paragraph preserves human responsibility for ambiguity, architecture
  decisions, and release evidence; it does not claim AI expertise or autonomy.
- Spanish terminology and the six final principles preserve the English
  meaning without adding claims.
- Related links are limited to the two approved public notes; the
  `erp-modularity` link is intentionally absent.

## Claim matrix

| Draft claim / concept | Status | Source or evidence boundary | Editorial disposition |
|---|---|---|---|
| SDD makes scope, constraints, architecture decisions, acceptance criteria, risks, and evidence expectations explicit before implementation. | `CURRENT PRACTICE` | User-approved thesis and current workflow. | Publish as a qualified first-person method; do not present it as a universal guarantee. |
| The current workflow moves from problem framing and discovery through SDD/architecture, implementation plan, implementation, independent review, evidence/QA, and release gate. | `CURRENT PRACTICE` | User-approved workflow; portfolio runtime/router and current change manifests. | Publish in present tense; do not backdate it to all historical work. |
| The portfolio runtime defines explicit stages, roles, handoffs, and gates. | `VERIFIED` | `planning/portfolio/README.md`, `router.md`, role contracts, and current change artifacts. | Safe as a process description. Keep private prompts and internal paths out. |
| Current portfolio work records scope, evidence, independent review, and validation separately. | `IMPLEMENTED LOCALLY` | Current portfolio refresh and Engineering Notes planning artifacts. | Use as a local process example, not a general industry result. |
| Workforce planning contains SDD/specification, acceptance, risk, and handoff artifacts. | `VERIFIED` | Workforce SDD handoffs and related specification/plan records. | Describe sanitized structure only; do not expose internal URLs or private rules. |
| Workforce local work uses explicit boundaries around organization structure, schedules, effective dates, authorization, idempotency, or concurrency where the example requires them. | `IMPLEMENTED LOCALLY` | Workforce planning/code/test evidence, with exact feature scope confirmed per example. | Use one bounded example and label it current local development; do not imply production. |
| A simple status request can reveal history, retry, authorization, concurrency, migration, API, and QA concerns. | `CURRENT PRACTICE` / qualified example | Sanitized synthesis of current planning questions and approved example direction. | Keep the framing explicit: representative reasoning, not an undisclosed incident or universal sequence. |
| SDD reduces ambiguity by giving planning, implementation, review, and evidence responsibilities a shared object. | `CURRENT PRACTICE` | Workflow rationale approved in the brief; no measured outcome. | Use “helps,” “makes visible,” or “reduces ambiguity in my workflow,” not a guaranteed result. |
| Implementation may feed discoveries back into the specification. | `CURRENT PRACTICE` | User-approved workflow principle and current planning/review records. | Publish as iterative practice; explicitly reject waterfall interpretation. |
| Independent review is separate from implementation and must state whether it is automated, agent-assisted, or human. | `VERIFIED` / `CURRENT PRACTICE` | Runtime role boundaries and approved review artifacts. | Preserve the distinction; never imply human approval from automation alone. |
| Local checks, manual QA, database checks, deployment checks, and production validation are distinct evidence types. | `VERIFIED` | Runtime gate model and approved validation artifacts. | Publish as methodology; do not claim every gate passed for every project. |
| Current planning and review work exposes scope drift, hidden dependencies, unsupported claims, contract mismatches, and self-validation as risks. | `IMPLEMENTED LOCALLY` / qualified | Current planning/review records and approved failure-mode list. | Say “risks I have needed to make visible” or “can fail”; do not invent incidents. |
| A full SDD is unnecessary for small, reversible, isolated changes. | `CURRENT PRACTICE` | Proportional-routing principle in runtime/router. | Publish as a judgment call, not a universal threshold. |
| The article’s workflow diagram and SDD anatomy are proposals for public presentation. | `PLANNED` | Approved brief’s diagram recommendation. | Keep the diagram minimal and accessible when converted to MDX. |

## Claims intentionally absent

The drafts do not claim:

- SDD was used for every historical project;
- SDD guarantees quality, correctness, security, performance, or release readiness;
- a specific private incident, client, company metric, or production outcome;
- AI manages or replaces engineering judgment;
- the workflow is fully autonomous or universally applicable;
- a local test or review proves production readiness.

## Source completeness

- Every firsthand project/process reference has a source class or evidence
  boundary.
- Workforce is described as current local development only where used.
- Businext, CRM, and ecommerce are not presented as detailed examples in the
  draft without a dedicated source packet; ecommerce remains future-content
  context.
- No credentials, private URLs, customer data, employee data, proprietary
  business rules, or confidential metrics appear.

## Claim review result

`PASS` — no material draft claim exceeds the approved evidence boundary. Any
future addition of a named incident, measured outcome, production behavior, or
historical career/process claim requires a new claim review and human approval.
