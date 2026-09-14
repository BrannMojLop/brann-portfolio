# Portfolio Experience V3 — pre-release final QA

Mode: `pre-release-final-qa`
Date: `2026-09-14`
Result: `PASS`

## Runtime roles

- `portfolio-orchestrator`: final scope and gate classification.
- `portfolio-maintainer`: validation-only pass; no public source changes made.
- `portfolio-experience-reviewer`: independent rendered experience review.
- `portfolio-seo-accessibility-reviewer`: independent SEO, semantics, and
  accessibility review.

## Scope

The complete local portfolio was reviewed after the approved content refresh,
Engineering Notes Articles 01–03, and experience-v3 Slices 1–4. No editorial
decision was reopened and no public code/content was changed during this final
QA phase.

Reviewed surfaces:

- Home, Systems, About, Engineering listing, Contact.
- Articles 01–03 in EN and ES.
- All seven pre-existing Engineering Notes in EN and ES.
- Global navigation, language switching, theme switching, and skip link.

## Responsive route matrix

Thirty routes were rendered at each available viewport:

- Mobile: `360 × 740` — 30/30 PASS.
- Tablet: `820 × 900` — 30/30 PASS.
- Desktop: `1280 × 900` — 30/30 PASS.
- Wide desktop: `1600 × 1000` — 30/30 PASS.

The matrix found no page-level horizontal overflow. Every route rendered one
H1, a main landmark, a footer, canonical metadata, at least two alternates,
and no accidental `noindex`.

## Experience findings

### PASS

- Home keeps the intended engineer → architect → systems thinker sequence.
- Mobile Home CTAs appear inside the first viewport.
- Systems wide desktop keeps the three case studies inside the content shell;
  context, responsibility, architecture, constraints, state, and action remain
  readable and visible.
- Engineering wide desktop surfaces Articles 01–03 first, keeps older notes
  accessible, and keeps recent-note CTAs inside the content bounds.
- Article 03 SQL, diagrams, and tables remain readable; code and tables scroll
  inside their regions on mobile without creating page overflow.
- Contact keeps email primary and LinkedIn/GitHub secondary in both locales.
- Dark/light theme switching works and the final browser state was restored to
  dark theme.
- Mobile drawer opens with initial focus, makes main/footer inert, closes with
  Escape, and restores focus to the trigger.
- EN ↔ ES switching preserves the equivalent route for Article 03.

### P2 observations deferred

- Home's wide desktop display heading is intentionally large; at 1600 × 1000
  the proof panel is visible while the primary CTAs fall below the first
  viewport. Mobile keeps both CTAs visible. This is a future experience tuning
  decision, not a broken route or hidden action.
- The seven older Engineering Notes begin their body with H3 after the page
  H1. Their routes and layouts work, but correcting the hierarchy would require
  a separate legacy-note semantics task and was not performed here.
- Intermediate widths beyond the tested tablet size and production browser
  behavior remain human QA opportunities.

## SEO and accessibility findings

- Article routes: one H1, logical H2/H3 structure for Articles 01–03, localized
  breadcrumbs, descriptive links, canonical, three alternates, and Article plus
  BreadcrumbList JSON-LD.
- Static routes: one H1, canonical, three alternates, JSON-LD, and no accidental
  noindex.
- Skip link, landmark target, active navigation state, language controls, and
  visible focus were verified.
- Browser console reported no error or warning entries during route checks.
- Automated axe/Lighthouse/contrast tooling was unavailable; this is a human
  QA limitation, not an automatic release blocker.

## MetadataBase classification

`NON-BLOCKING KNOWN WARNING`

`pnpm build` repeats the existing warning that `metadataBase` is not set for
social-image resolution and falls back to `http://localhost:3000`. The route
layouts and effective rendered metadata already provide `metadataBase`, absolute
canonical/OG URLs, and the expected alternates. No risky workaround was added.
Resolve this separately only if the deployment metadata contract requires it.

## Robots, sitemap, and server observations

- The Next server logged `GET /robots.txt 200`.
- The Next server logged `GET /sitemap.xml 200`.
- Direct browser navigation to those text endpoints was blocked by the browser
  client as `ERR_BLOCKED_BY_CLIENT`; this is a tooling limitation.
- The browser/server log repeatedly requested `/service-worker.js` and received
  404. No service-worker reference exists in the repository, no browser console
  error was emitted, and no public route depends on it. Classified as
  non-blocking QA-environment noise.

## Validation commands

- `pnpm lint`: PASS.
- `pnpm build`: PASS; 39 routes generated.
- `git diff --check`: PASS.

No deploy or commit was performed.

## Worktree hygiene

The worktree contains the accumulated refresh implementation and planning
artifacts from the previous approved phases. Relevant release files include the
approved EN/ES MDX Articles 01–03, shared visual source changes, and
`planning/portfolio/` evidence. Ignored `.next/`, `node_modules/`, generated
`next-env.d.ts`, and `.DS_Store` files are not release content. No new debug or
temporary file was introduced by this QA phase.

## Release decision

No P0/P1 regression was found. The current local state is ready for a
human-authorized commit and deployment. Commit and deployment remain pending
and were intentionally not performed.

`PRE-RELEASE FINAL QA = PASS`
