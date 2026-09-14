# Validation record

## Automated checks

- `pnpm lint`: `PASS`
- `pnpm build`: `PASS`
- `git diff --check`: `PASS`
- Untracked internal strategy artifact whitespace check: `PASS`

The build emitted the existing local warning that `metadataBase` is not set and social-image resolution falls back to `http://localhost:3000`. No deployment environment was changed.

## Route checks

Rendered in Chrome at `http://localhost:3000`:

`/`, `/es`, `/systems`, `/es/systems`, `/about`, `/es/about`, `/engineering`, `/es/engineering`, `/contact`, `/es/contact`

All ten routes loaded and exposed the expected localized title, navigation, content, and footer links. Shell `curl` was unavailable in the environment; browser navigation was used as the route check.

## Desktop browser checks

- Desktop viewport: `1285 × 606 CSS px` at device pixel ratio `2`.
- English Home, Systems, About, Engineering, and Contact visually/accessibly inspected.
- Spanish Home, Systems, About, Engineering, and Contact visually/accessibly inspected.
- Browser console: no application errors; only Fast Refresh development warnings were observed.

## Mobile browser checks

Not available in the connected browser: no viewport override capability was exposed and the `browser-use` executable was not installed. Mobile remains a required follow-up before any production release.

## Structural checks

- Exactly one `h1` per tested route.
- No heading-level jumps after the Systems child headings were corrected to `h3`.
- No anchor without `href`.
- No rendered image without `alt`.
- Canonical and three alternate-language links present on every tested route.
- Expected JSON-LD types present per route family.
- Spanish Workforce English-label leak absent.

## Scope checks

- Public files changed only within the approved refresh surfaces.
- Existing Engineering Note bodies and frontmatter were not edited.
- No LOC, client-count, unsupported production, Senior, AI Expert, AI Architect, ecommerce modernization, or remote-availability claims were added.
- No deployment or commit performed.

## Validation result

`PASS` for local implementation validation; mobile, production metadata configuration, and release/deployment verification remain outside this pass.
