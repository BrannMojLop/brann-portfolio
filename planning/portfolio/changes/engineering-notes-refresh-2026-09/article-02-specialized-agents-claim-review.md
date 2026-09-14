# Claim review — Article 02 specialized AI agents

Reviewer scope: final claim/source consistency for the bilingual Article 02
editorial drafts. This review does not authorize MDX or publication.

## Claim matrix

| Draft claim / concept | Status | Source or evidence boundary | Editorial disposition |
|---|---|---|---|
| The portfolio runtime defines bounded roles for orchestration, strategy, engineering writing, case-study shaping, implementation, and independent review, with gates and handoffs. | `VERIFIED` | Portfolio runtime router, README, role contracts, and change artifacts. | Name role responsibilities only; do not expose hidden prompts or settings. |
| The portfolio uses change folders, manifests, source maps, handoffs, implementation records, and independent review artifacts to keep work legible. | `IMPLEMENTED LOCALLY` | Article 01 implementation artifacts and current change folder. | Present as this portfolio’s local workflow, not as an industry result. |
| Brandon currently uses specialized AI-assisted responsibilities for bounded analysis, planning, drafting, implementation support, and checking while retaining human responsibility. | `CURRENT PRACTICE` | User-approved brief and current portfolio workflow. | Use present tense; do not backdate across all historical work. |
| A role is specialized when it owns a defined decision or artifact, understands inputs/outputs, and knows its authority boundary. | `CURRENT PRACTICE` | Approved article thesis and agent-design principles. | Present as the author’s working definition, not a universal standard. |
| Handoffs can carry scope, exclusions, decisions, evidence, open questions, acceptance criteria, and next responsibility. | `VERIFIED` / `CURRENT PRACTICE` | Runtime handoff template and current change artifacts. | Show a sanitized schema; do not reproduce private records. |
| Implementation and review have different responsibilities and should be separated when risk warrants it. | `CURRENT PRACTICE` | Runtime role boundaries and approved review artifacts. | Explain the control mechanism; do not claim it guarantees correctness. |
| Tests, build/lint, browser checks, source inspection, database validation, architecture review, and human QA are distinct evidence types. | `VERIFIED` | Runtime gate model and Article 01 validation evidence. | State that evidence is matched to acceptance questions. |
| The Article 01 portfolio refresh followed discovery, claim inventory, strategy, human decisions, editorial draft, implementation, independent reviews, validation, and human QA/release decision. | `IMPLEMENTED LOCALLY` | Article 01 session manifest, implementation validation, and review artifacts. | Describe the sequence without exposing internal prompts or paths. |
| Human release responsibility remains explicit in the workflow. | `CURRENT PRACTICE` / `VERIFIED` | User-approved brief and runtime gate model; Article 01 was not released by this phase. | Say that a human decides evidence sufficiency and release readiness. |
| The workflow reduces ambiguity or coordination risk. | `CURRENT PRACTICE` / qualified | Mechanism described in the brief; no measured outcome. | Use “helps,” “makes visible,” or “reduces risk in my workflow,” never a quantified result. |
| Agents are useful for bounded inspection, synthesis, comparison, drafting, and repetitive check coordination. | `CURRENT PRACTICE` | User-approved article scope; no productivity measurement. | Avoid “saves time,” “10x,” or quality percentages. |

## Claims intentionally absent

The drafts do not claim:

- that AI writes, owns, or releases software;
- that agents are autonomous employees or substitutes for engineering review;
- that Brandon is an AI Expert or AI Architect;
- that the workflow guarantees correctness, security, speed, or production readiness;
- that AI produced a production system without human control;
- a productivity percentage, time saving, scale metric, client count, or incident;
- private prompts, model settings, company procedures, credentials, or customer data.

## Source completeness and privacy

- The portfolio runtime is used as the primary public-safe example.
- Article 01 is named only through its public title/slug and its workflow is
  summarized from approved local evidence.
- No Workforce, Businext, TR0V1, client, employee, or customer detail is needed
  for the argument; no private project workflow is presented.
- Existing Engineering Notes are linked only through approved public slugs.
- The `financial-systems-reconciliation-jobs` note is not linked because its
  evidence audit is incomplete.

## Claim review result

`PASS` — the final editorial pass introduces no new public claim beyond the
approved draft. The portfolio-runtime paragraph now explicitly describes an
engineering-control example rather than independent production work, and the
Article 01 example keeps local evidence, mobile verification, and the human
release decision as separate gates. The productivity-adjacent sentence is
qualified as support rather than acceleration.

The preferred bilingual deck is approved for the next MDX phase:

- EN: `I separate planning, implementation, review, and release decisions so complex AI-assisted changes remain inspectable.`
- ES: `Separo la planeación, la implementación, la revisión y la aprobación de entrega para que los cambios complejos asistidos por IA sean inspeccionables.`

Any future addition of a named project outcome, measured benefit, production
claim, private workflow detail, or historical career statement requires a new
claim review and human approval.
