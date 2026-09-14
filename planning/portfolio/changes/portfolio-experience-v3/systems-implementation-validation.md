# Portfolio Experience V3 — Systems implementation validation

Date: `2026-09-14`

## Scope

Systems page only. The approved system content and claims were preserved. No
Home, About, Engineering listing, Engineering article body, or Contact source
was changed in Slice 2.

## Before / after hierarchy

Before, each system was a large rounded panel containing repeated bordered
modules for context, solution, responsibility, stack, architecture,
constraints, impact, technical challenges, results, and a hidden CTA. The equal
surface treatment made the page long and made architecture decisions compete
with technology context.

After, each system is one editorial case-study sequence:

`context → responsibility → architecture decisions → constraints → current
verified state → next action`

The case study header establishes the system and current-state signal. The main
column carries context, the problem/solution, and current state. A narrower
decision rail carries responsibility, architecture, constraints, technical
challenges, and technology context. One visible CTA closes each case study.

The structure remains one coherent system across desktop and collapses into a
single logical reading order on mobile.

## System-specific presentation

### Businext ERP

The case opens with operational context and places responsibility, domain/API
decisions, and cross-domain constraints in the decision rail. Technology context
is retained as a subordinate closing item. This makes architectural evolution
and transactional/business workflow reasoning more prominent than the stack.

### TR0V1 Credit Platform

The same structure is used, but the preserved content leads with the credit
context, financial workflow solution, consistency constraints, reconciliation,
and state-transition decisions. No client count, scale, or production metric was
introduced.

### Workforce

The case makes the active local-development status visible in the header/current
state and preserves the bounded implementation scope: Foundation, People /
Employees, and Structure / Scheduling. FastAPI, React, PostgreSQL, organization
context, tenant isolation, auditability, idempotency, concurrency, and
versioning remain in the approved architecture content, while the single
technology-context line is visually subordinate.

## Surface and motion changes

- Removed the repeated nested module/card treatment from the Systems page.
- Replaced decorative bullet characters with semantic lists and CSS markers.
- Removed the hidden CTA and exposed one descriptive next action per system.
- Kept technology context present but secondary to architecture and constraints.
- Disabled continuous Systems orbit and panel-sweep animation; interaction
  feedback and reduced-motion rules remain available.
- Did not introduce product-specific gradients, metrics, logos, carousels, or
  horizontal scrolling.

## Browser evidence

| Check | Result | Evidence |
|---|---|---|
| Systems EN mobile | PASS | 360 × 740 rendered one H1, three H2 case studies, visible first case content, and no page-level horizontal overflow. |
| Systems ES mobile | PASS | 360 × 740 rendered localized title, labels, case-study headings, current-state label, and no page-level horizontal overflow. |
| Systems EN/ES CTA | PASS | Three descriptive case-study CTAs were visible in each locale and point to the localized Contact route. |
| Reading order | PASS | Each case follows header, narrative, decision rail, and footer; mobile collapses the rail below the narrative. |
| Heading hierarchy | PASS | One H1, three H2 system headings, and ordered H3 subsections; no skipped level. |
| Overflow | PASS | Browser checks reported document width equal to viewport width at 360px. |

## Validation

- `pnpm lint` — PASS
- `pnpm build` — PASS; 39 routes generated
- `git diff --check` — PASS

The build retains the existing `metadataBase` warning; no metadata source was
changed in this slice.

## Tooling boundary

The browser-use CLI and automated axe/Lighthouse tooling were unavailable. The
available Chrome automation surface provided the final mobile rendered checks;
the browser remained in a 360px emulated viewport when the final Slice 2
verification ran, so the wide-desktop rendering should be rechecked manually.
The responsive two-column implementation was also inspected in source and
covered by the successful build.
