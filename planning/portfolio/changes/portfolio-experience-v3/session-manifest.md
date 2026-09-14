# Portfolio Experience V3 — Session manifest

- Change: `portfolio-experience-v3`
- Started: `2026-09-14`
- Mode: `pre-release-final-qa`
- Scope: final validation of the complete approved portfolio refresh after
  experience-v3 Slices 1–4.
- Complexity: `LARGE`
- Evidence mode: `full+human`
- Public code/content modified: `NO — validation-only final phase; accumulated
  implementation changes remain from approved Slices 1–4`
- Deploy or commit: `NO — human release decision remains pending`
- Required roles: `portfolio-orchestrator`, `portfolio-experience-reviewer`,
  `portfolio-strategist`, `portfolio-seo-accessibility-reviewer`
- Impeccable: unavailable in this runtime; equivalent visual inspection and
  measurement were performed with the available browser surface and source
  design-system review.
- Prior human checkpoint: satisfied by the approved `G1 EXPERIENCE AUDIT = PASS`.
- Maintainer: invoked in validation-only mode for final QA.
- Independent review: complete rendered experience and SEO/accessibility review
  performed after Slices 1–4.

## Gates

| Gate | State | Reason |
|---|---|---|
| G0 Context | PASS | Final QA is limited to the approved local portfolio refresh and explicitly excludes redesign, editorial reopening, deploy, and commit. |
| G1 Claim/Scope | PASS | No public claim, title, metric, employer attribution, or article meaning was changed during validation. |
| G2 Plan | PASS | Full route, viewport, interaction, metadata, link, and accessibility checks were defined and executed. |
| G3 Implementation | N/A | This phase is validation-only; no implementation change was made. |
| G4 Experience | PASS | 30 routes passed at 360, 820, 1280, and 1600px widths; navigation, theme, focus, content bounds, CTAs, and wide desktop surfaces were reviewed. |
| G5 SEO/Accessibility | PASS | Headings, landmarks, links, canonical/alternates, JSON-LD, skip link, focus, language parity, and noindex state were verified. |
| G6 Validate | PASS | `pnpm lint`, `pnpm build`, and `git diff --check` passed; server and browser evidence was collected. |
| G7 Release | CONDITIONAL | QA supports release readiness, but human authorization is still required before commit and deployment. |
| G8 Knowledge | PASS | Final limitations, known warnings, legacy-note hierarchy debt, and viewport evidence were recorded. |
| G9 Close | PASS | Final QA artifact and release decision are complete; no P0/P1 blocker remains. |

## Visual audit result

`G1 EXPERIENCE AUDIT = PASS`

## Experience implementation slice 1

### Scoped source files

- `components/pages/home-content.tsx`
- `components/site-header.tsx`
- `components/site-shell.tsx`
- `components/language-switcher.tsx`
- `app/globals.css`

Systems, About, Engineering listing/article bodies, Contact content, and public
claim sources were left outside this slice.

### Implementation gate

`EXPERIENCE SLICE 1 = PASS`

This slice is ready for human QA and release review. It was not deployed and no
commit was created.

## Release continuation

- Mode: `release`
- Human authorization: approved commits and deployment of the current
  pre-release-approved portfolio state.
- `portfolio-orchestrator`: release scope, commit grouping, and gate
  coordination completed.
- `portfolio-maintainer`: approved implementation validation, commit creation,
  repository push, deployment coordination, and release evidence completed.
- Independent post-deploy roles: `portfolio-experience-reviewer` and
  `portfolio-seo-accessibility-reviewer`.
- Deployment target: Vercel production at `https://brandonmojica.dev`.
- Release commits: `d6045c3`, `b69ca38`, `9a90972`, `288a831`.

## Release gates

| Gate | State | Reason |
|---|---|---|
| G0 Context | PASS | Release was limited to the already approved V3 state; no new feature or editorial decision was introduced. |
| G1 Claim/Scope | PASS | Public content matches the approved bilingual positioning, bounded Workforce scope, and Article 01–03 evidence. |
| G2 Plan | PASS | Commit grouping and the established Vercel/Git deployment path were confirmed before release. |
| G3 Implementation | PASS | Approved portfolio source, Articles 01–03, and experience changes were committed without the runtime tooling files. |
| G4 Experience | PASS | Independent production review passed on desktop/mobile spot checks with no P0/P1 regression. |
| G5 SEO/Accessibility | PASS | Independent production review passed for metadata, alternates, JSON-LD, semantics, links, robots, sitemap, and overflow. |
| G6 Validate | PASS | `pnpm lint`, `pnpm build`, `git diff --check`, and production HTTP/browser checks passed. |
| G7 Release | PASS | The authorized commits were pushed to `main`; Vercel served the new version at the canonical production domain. |
| G8 Knowledge | PASS | Production smoke evidence, reviewer findings, limitations, and the metadataBase classification were recorded. |
| G9 Close | PASS | No targeted regression fix or unrelated backlog change remains required for this release. |

## Final release decision

`PORTFOLIO V3 RELEASE = PASS`

`PORTFOLIO V3 IS LIVE`

## Pre-release final QA

The complete portfolio was checked in EN/ES across 30 routes and four viewport
families. No P0/P1 regression was found. The `metadataBase` warning is a
non-blocking known warning; direct browser access to text endpoints was blocked
by the QA client while the server logged 200 responses. Existing legacy-note
H3-after-H1 hierarchy remains a separate P2 semantics task.

### Final gate

`PRE-RELEASE FINAL QA = PASS`

The local state is ready for a human-authorized commit and deployment. No commit
or deployment was performed.

## Experience implementation slice 3

### Scoped source files

- `components/pages/engineering-content.tsx`
- `app/globals.css`

Home, Systems, About, Contact, Engineering article bodies, and public claim
sources were left outside this slice. Slices 1–2 source files remain unchanged.

### Implementation gate

`EXPERIENCE SLICE 3 = PASS`

This slice is ready for human QA and release review. It was not deployed and no
commit was created.

## Experience implementation slice 2

### Scoped source files

- `components/pages/systems-content.tsx`
- `app/globals.css`

Home, About, Engineering listing/article bodies, Contact content, and public
claim sources were left outside this slice. Slice 1 files remain unchanged.

### Implementation gate

`EXPERIENCE SLICE 2 = PASS`

## Experience implementation slice 4

### Scoped source files

- `app/(en)/engineering/[slug]/page.tsx`
- `app/(es)/es/engineering/[slug]/page.tsx`
- `components/engineering-related-notes.tsx`
- `components/pages/contact-content.tsx`
- `lib/mdx.tsx`
- `app/globals.css`

Article bodies, approved public claims, Home, Systems, About, and the
Engineering listing content were left outside this slice. Existing Engineering
Note bodies remain unchanged.

### Implementation gate

`EXPERIENCE SLICE 4 = PASS`

The slice is ready for human QA and release review. It was not deployed and no
commit was created. The TOC/reading-progress decision was documented as
intentionally deferred because the current heading structure and related-note
navigation provide sufficient orientation without adding mobile density.

This slice is ready for human QA and release review. It was not deployed and no
commit was created.
