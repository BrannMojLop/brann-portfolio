# Current public claim inventory and source map

This inventory covers claims exposed by the current portfolio source. It treats the existing dirty working tree as the current state to audit; it does not approve those changes for release. `OPPORTUNITY TO ADD` means a useful absent claim, not permission to publish it.

## Status vocabulary

- `VERIFIED`: supported by a direct user confirmation or current first-party evidence.
- `STALE`: direction or date is materially behind current practice, even if historically true.
- `INCONSISTENT`: the claim or label changes meaning between surfaces/locales.
- `NEEDS SOURCE`: plausible but missing a sufficiently direct source or bounded wording.
- `SHOULD REMOVE`: unsafe, unsupported, misleading, or explicitly excluded.
- `OPPORTUNITY TO ADD`: absent claim that could improve positioning after sourcing and approval.

## Identity, role, and career

| ID | Public claim or gap | Current status | Evidence/source requirement | Action |
|---|---|---|---|---|
| C-01 | Software engineer focused on software architecture and backend systems | VERIFIED | User-confirmed positioning; current Home/About source | Preserve as the primary professional identity. |
| C-02 | Designs and leads the evolution of business-critical platforms around real operational constraints | VERIFIED | User-confirmed EN positioning; current Home/About source | Preserve with Spanish parity. |
| C-03 | Current title: Head of Systems at Elements Of Steel, 2019–Present | VERIFIED | User-confirmed final-resolution decision | Use consistently in About and any structured profile surface. |
| C-04 | Progression through QA, junior software development, project leadership, then Head of Systems/full-stack development | VERIFIED | User-confirmed progression; exact transition years intentionally unavailable | Describe progression without invented years or a 2019 software-start implication. |
| C-05 | Software-development experience since 2019 | SHOULD REMOVE | User explicitly rejected this implication | Do not derive software-start date from employment start. |
| C-06 | Technical leadership and architecture responsibility | VERIFIED | User-confirmed technical leadership responsibility and approved positioning | Keep, but avoid unsupported team size, reporting, or organizational scope. |
| C-07 | “Lead Software Engineer” as a current formal title | SHOULD REMOVE | Current `lib/site.ts` author metadata contains a compound title; user confirmed public job title is Head of Systems | Remove the conflicting secondary title from public structured profile data during implementation. |
| C-08 | “Full-stack software development” | VERIFIED | User-confirmed current progression/outcome | Keep as a capability, not as a claim that software development began in 2019. |

## Languages and education

| ID | Public claim or gap | Current status | Evidence/source requirement | Action |
|---|---|---|---|---|
| C-09 | Spanish — Native / Español — Nativo | VERIFIED | User-confirmed bilingual language level | Preserve exact parity. |
| C-10 | English — B1 · Intermediate / Inglés — B1 · Intermedio | VERIFIED | User-confirmed language level | Preserve exact parity. |
| C-11 | Education/background statements currently in About | VERIFIED | Existing About source and the canonical CV/LinkedIn record used for the profile | Preserve the bounded degree and UTEL statements; do not add academic honors or other details. |

## Systems and project attribution

| ID | Public claim or gap | Current status | Evidence/source requirement | Action |
|---|---|---|---|---|
| C-12 | Businext is an ERP/business platform spanning finance, sales, inventory, HR, dashboards/accounting workflows | VERIFIED | Current `lib/systems.ts`; BusiNext repository evidence; CV/LinkedIn for public attribution | Preserve at system level; separate verified capabilities from outcome language. |
| C-13 | Businext uses Python, FastAPI, React, relational database technology, REST APIs, AWS/Linux/Nginx | VERIFIED | Current portfolio source and BusiNext repository | Keep as capability evidence; verify each technology remains current before a final public edit. |
| C-14 | Businext architecture includes domain boundaries, API-first/service-layer organization, and modular backend structure | VERIFIED | Current `lib/systems.ts`; BusiNext source/architecture evidence | Preserve at a high level; do not expose private implementation details. |
| C-15 | TR0V1 is a credit-management platform involving installments, interest, payments, reconciliation, and statements | VERIFIED | Current `lib/systems.ts`; TR0V1 repository evidence | Preserve with bounded financial-domain wording. |
| C-16 | TR0V1 uses Python, FastAPI, SQLAlchemy, React, and REST APIs | VERIFIED | Current portfolio source and TR0V1 repository | Preserve only where current source confirms the technology. |
| C-17 | TR0V1 supports financial consistency through state transitions, domain rules, reconciliation, and internal/admin/client APIs | VERIFIED | Current portfolio source and TR0V1 repository evidence, bounded by the public-safe draft | Preserve without client counts, scale, or confidential implementation detail. |
| C-18 | Workforce is an independent product in development, not production software | VERIFIED | User-confirmed constraint; Workforce README/AGENTS | State explicitly wherever Workforce is presented. |
| C-19 | Workforce is mainly generic workforce/product wording | STALE | Current `lib/systems.ts` describes goals but not concrete architecture decisions | Replace strategy direction with sourced architectural concerns in a later implementation. |
| C-20 | Workforce “technologies” are Organization context / Authorization boundaries / Auditable workflows | INCONSISTENT | Current `lib/systems.ts` and `components/system-card.tsx` | Reclassify as product/architecture capabilities; do not label them as technologies. |
| C-21 | Workforce architecture can be described with modular monolith, API-first boundaries, PostgreSQL transactionality/RLS, server-derived organization context, service-layer authorization, auditability/idempotency, and an outbox/worker direction | VERIFIED | User-approved technical details; Workforce architecture plan, especially `planning/features/workforce-v1-architecture/architecture.md` | Publish only the approved implemented/design-direction subset; never present outbox/worker as implemented or imply production outcome. |
| C-22 | Ecommerce modernization work is a current public system case study | SHOULD REMOVE | User explicitly keeps it outside first public implementation | Keep only in future-content/architecture-study backlog. |

## Technology and architecture profile

| ID | Public claim or gap | Current status | Evidence/source requirement | Action |
|---|---|---|---|---|
| C-23 | Flat technology list centered on Python/FastAPI/React/AWS and related libraries | STALE | Current About technology radar and Systems source | Reorganize by capability; retain technologies as evidence within capabilities. |
| C-24 | PostgreSQL is an important current technical direction and system-design concern | VERIFIED | User-approved positioning; Workforce local implementation and architecture evidence | Publish as current architecture and implementation work, especially Workforce; exclude production-scale and expertise claims. |
| C-25 | Current workflow includes SDD, architecture-first planning, specialized agents, explicit handoffs, separation of planning/implementation/review, independent review, evidence validation, and quality/release gates | VERIFIED | User-approved current-practice claims; runtime/router evidence | Publish as current practice only; do not backdate it to every project or turn it into an AI-identity claim. |
| C-26 | AI replaces engineering judgment or independently owns architecture decisions | SHOULD REMOVE | User explicitly rejected this framing | Never publish. Human judgment remains accountable. |
| C-27 | “AI expert” or “AI architect” identity | SHOULD REMOVE | User explicitly rejected this positioning | Never publish. |
| C-28 | 200K+ LOC as a portfolio scale metric | SHOULD REMOVE | User explicitly excluded it from this refresh | Do not publish or use as supporting evidence. |
| C-29 | TR0V1 “30+ clients” | SHOULD REMOVE | User requires independent revalidation before publication | Keep out of this refresh until independently revalidated. |
| C-30 | Production claims attached to Workforce or other newly described current work | SHOULD REMOVE | Workforce status and user constraints | Use “in development”, “design direction”, or “architecture study” only where evidence supports it. |

## Engineering Notes

| ID | Public claim or gap | Current status | Evidence/source requirement | Action |
|---|---|---|---|---|
| C-31 | Existing Engineering Notes cover modular ERP architecture, service boundaries, financial APIs, and reconciliation | VERIFIED | Existing English/Spanish MDX bodies | Keep bodies unchanged in this phase; audit claims separately. |
| C-32 | Existing Engineering Notes all use March 9, 2026 dates | STALE | Existing MDX frontmatter | Refresh chronology/index strategy later; do not edit bodies now. |
| C-33 | Existing Note bodies are current evidence for September 2026 workflow | SHOULD REMOVE | Existing Note bodies are outside this refresh and require a separate evidence audit | Do not use them as proof of the September workflow until that audit is complete. |
| C-34 | New notes explaining the current engineering workflow and PostgreSQL/Workforce direction | OPPORTUNITY TO ADD | User-confirmed workflow and Workforce architecture evidence | Add to backlog; draft only after source review and bilingual editorial review. |

## Localization and page consistency

| ID | Public claim or gap | Current status | Evidence/source requirement | Action |
|---|---|---|---|---|
| C-35 | Spanish Home exposes English Workforce labels: “Organization context”, “Authorization boundaries”, “Auditable workflows” | INCONSISTENT | Current shared `system.technologies` data consumed by `SystemCard` | Localize the data or use locale-specific capability labels. |
| C-36 | Workforce architectural concerns appear under Spanish “Tecnologías principales” | INCONSISTENT | Current `components/system-card.tsx` label and `lib/systems.ts` data shape | Use an explicit capability/architecture label for Workforce; do not call concerns technologies. |
| C-37 | Meaningful English/Spanish positioning changes are kept in parity | VERIFIED | Final bilingual draft and bilingual anchor index in this change | Preserve paired meaning and run the same parity check during implementation. |

## Role of the four requested agents

- Orchestrator: scope and gates only; no claim invention.
- Strategist: positioning, audience, taxonomy, and claim discipline.
- Case-study architect: Workforce architecture narrative and public-safe boundaries.
- Content editor: bilingual information architecture and editorial fixes; no final production copy.
