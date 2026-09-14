# Brief 02 — How I structure specialized AI agents for software engineering

## Editorial identity

- Final title EN: `How I structure specialized AI agents for software engineering`
- Final title ES: `Cómo estructuro agentes de IA especializados para ingeniería de software`
- Subtitle/deck EN: `Bounded responsibilities, explicit handoffs, and independent review for serious software work.`
- Subtitle/deck ES: `Responsabilidades delimitadas, transferencias explícitas y revisión independiente para ingeniería de software seria.`
- Suggested slug EN: `/engineering/specialized-ai-agents-software-engineering`
- Suggested slug ES: `/es/engineering/specialized-ai-agents-software-engineering`
- Target reading time: `9–11 minutes` / approximately `1,400–1,800 words` per language.

## Audience and thesis

- Target audience: Technical leads, engineering managers, and practitioners evaluating disciplined AI-assisted development.
- One-sentence thesis: AI is more useful for serious software work when responsibilities are bounded and separated instead of delegating the whole lifecycle to one general-purpose agent.
- Why this belongs in the portfolio: It explains a differentiated current workflow while keeping architecture, claims, evidence, review, and release responsibility human-owned.

## Source and evidence inventory

| Evidence | Source | Safe use |
|---|---|---|
| Orchestration, routing, gates, and change manifests | Portfolio Agent Runtime router, README, skills, and change artifacts | Use the portfolio runtime as a public-safe process example; describe responsibilities, not hidden prompts. |
| Strategy and claim validation | `portfolio-strategist` role contract and approved portfolio claim/source artifacts | Explain separation of positioning and claim discipline; do not turn role names into employment claims. |
| Technical narrative and evidence shaping | `portfolio-engineering-writer` and `case-study-architect` role contracts | Explain how evidence and system reasoning are prepared before copy or implementation. |
| Implementation and independent review | Approved portfolio refresh manifest, implementation evidence, and independent experience/SEO review artifacts | Show the sequence and boundaries; do not call automated checks independent human review. |
| Human release responsibility | Runtime gate model and explicit no-deploy/no-commit decisions | State that a person decides scope, evidence sufficiency, and release readiness. |

## Claim matrix

| Status | Claims that may appear after editorial review |
|---|---|
| `VERIFIED` | The portfolio runtime defines bounded roles for orchestration, strategy, engineering writing, case-study shaping, implementation, and independent review, with explicit gates and handoffs. |
| `IMPLEMENTED LOCALLY` | This portfolio uses change folders, manifests, source maps, handoffs, implementation records, and independent review artifacts to keep work legible. |
| `CURRENT PRACTICE` | Brandon uses specialized AI-assisted responsibilities as structured support for analysis, planning, drafting, implementation support, and checking, while retaining human responsibility for engineering decisions and release. |
| `PLANNED` | Future notes may publish sanitized diagrams or handoff schemas; a proposed role or gate must not be described as an executed project step until evidence exists. |
| `DO NOT PUBLISH` | “AI writes my software”; autonomous lifecycle ownership; AI replacing engineering judgment; AI Expert/AI Architect identity; productivity or quality percentages; private prompts, model settings, company workflows, or secrets. |

## Detailed article outline

1. **Why one agent doing everything is risky** — Context drift, scope expansion, unsupported claims, hidden assumptions, and self-validation.
2. **Start with a router and scope** — How the work mode, affected paths, evidence level, and gates bound the task.
3. **The specialized responsibilities** — Orchestrator/router, strategist/planner, domain or case-study specialist, implementer, reviewer, and QA/evidence responsibility.
4. **What each responsibility receives and returns** — Brief, decisions, evidence, open questions, acceptance criteria, findings, and disposition.
5. **Handoffs as control points** — How explicit transfers preserve context without copying an entire conversation or exposing private instructions.
6. **Implementation is not approval** — Why the implementer and independent reviewer have different jobs.
7. **Evidence and gates** — Source inspection, tests, manual QA, browser checks, SEO/accessibility checks, and release decisions are distinct evidence types.
8. **Where agents save time** — Bounded synthesis, repetitive inspection, draft structure, and check coordination; avoid unmeasured productivity claims.
9. **Where human judgment remains necessary** — Scope, architecture, trade-offs, factual claims, privacy, evidence sufficiency, and release readiness.
10. **A safe public example** — The portfolio runtime sequence: strategy → claims validation → editorial gate → implementation → independent UX/SEO review → QA → human release decision.
11. **Failure modes and recovery** — Stale context, unsupported claim, role overlap, scope drift, missing evidence, and a handoff that must return for clarification.

## Key examples and case-study candidates

- This portfolio refresh as the primary sanitized example: approved source map, maintainer implementation, independent reviewers, and explicit release deferral.
- A generic handoff showing `scope`, `decisions`, `evidence`, `open_questions`, and `acceptance_criteria`.
- A Workforce planning handoff only if private paths, product details, and internal prompts are removed; no claim that agents autonomously delivered the product.

## Diagrams and code examples worth including

- Responsibility flow: `Router → Strategy / Domain brief → Implementation → Independent review → Evidence / QA → Human release decision`.
- Handoff schema with fictional values and no internal identifiers.
- A comparison table showing one-agent lifecycle risk versus bounded responsibilities.
- No hidden prompt or provider configuration. Any pseudo-configuration must be clearly illustrative.

## Claims requiring citations or qualification

- Cite the portfolio runtime artifacts when describing actual role names, gates, or handoff fields.
- State whether review was automated, agent-assisted, or human; do not collapse these categories.
- “Saves time,” “improves quality,” or “reduces errors” requires measured evidence; otherwise describe the intended control mechanism.
- Current practice must be dated or clearly present-tense, and must not be projected onto all historical work.
- A portfolio example proves workflow structure, not universal engineering outcomes.

## Privacy and confidentiality risks

- Never publish hidden prompts, credentials, API keys, private model settings, internal URLs, customer information, private source code, or company-specific operating procedures.
- Avoid exposing enough role detail to reveal private organizational or client context.
- Use public portfolio artifacts and fictional handoff values where the real record contains sensitive information.

## Technical-review checklist

- The note explains boundaries and trade-offs rather than AI capability hype.
- Each role has a clear responsibility and non-responsibility.
- Handoffs carry decisions/evidence without leaking private context.
- Implementation, review, QA, and release are not conflated.
- Human accountability is explicit in every lifecycle diagram.
- Failure modes include unsupported claims and context drift.
- No unsupported productivity, accuracy, scale, or production claim.
- EN/ES concepts, certainty, and exclusions remain aligned.
- All runtime links point to public-safe portfolio notes or pages.

## SEO

- SEO title EN: `Specialized AI Agents for Software Engineering | Brandon Mojica`
- SEO title ES: `Agentes de IA especializados para ingeniería de software | Brandon Mojica`
- SEO description EN: `How I use bounded AI-assisted responsibilities, explicit handoffs, evidence, and independent review in a human-led software workflow.`
- SEO description ES: `Cómo uso responsabilidades delimitadas con apoyo de IA, transferencias explícitas, evidencia y revisión independiente en un flujo de ingeniería dirigido por personas.`

## Related existing notes

- `backend-service-boundaries` — connect bounded responsibilities to business-transaction design.
- `erp-platform-architecture` — connect engineering workflow to architecture decisions.
- `financial-systems-reconciliation-jobs` — connect evidence and independent verification to operational control after audit.

## Claims that must not appear

- AI writes, owns, or releases the software.
- Brandon is an AI Expert or AI Architect.
- Agents are autonomous employees, accountable decision-makers, or substitutes for engineering review.
- The workflow guarantees correctness, security, speed, or production readiness.
- Private prompts, secrets, internal operational details, client data, or unapproved company claims.
