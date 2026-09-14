# Portfolio Experience V3 — Slice 1 implementation validation

Date: `2026-09-14`

## Scope

Home EN/ES and global/mobile navigation only. No Systems, Engineering listing,
article body, About, or Contact content was changed for this slice.

## Before / after

### Home

Before, the first viewport presented the positioning statement and supporting
material before proof and the primary actions. On the 360px viewport the first
CTA began below the initial viewport and the H1 occupied approximately 307px.

After, the sequence is:

`positioning → lead explanation → one architecture proof signal → primary and
secondary actions → supporting context → stack`

The proof signal is compact and uses already approved Home data. The full signal
board remains available as the deeper architecture surface. Mobile typography,
top spacing, and vertical gaps were tightened without reducing the approved
meaning. Both Home CTAs are visible in the 360 × 740 check.

### Navigation

- Added a localized skip link targeting `#main-content`.
- Added visible and semantic active-route state with `aria-current="page"`.
- Added consistent focus-visible rings to wordmark, navigation, language,
  theme, and menu controls.
- The closed mobile drawer is inert and hidden from interaction.
- Opening the drawer moves focus into it and makes `main` and `footer` inert.
- `Tab` and `Shift+Tab` wrap within the drawer.
- `Escape` closes the drawer and restores focus to its trigger.
- Selecting a locale from the mobile drawer closes it before route change.

### Motion and overflow

- Decorative Home orbit, scanline, signal sweep, and signal ping animations are
  disabled in the scoped source rules; the existing reduced-motion media query
  remains in place for the rest of the site.
- The shell now clips decorative horizontal overflow at the page wrapper. The
  360px Home check reported equal document/client widths and no page-level
  horizontal movement.

## Validation results

| Check | Result | Evidence |
|---|---|---|
| `pnpm lint` | PASS | ESLint completed with exit code 0 after removing the state-in-effect issue. |
| `pnpm build` | PASS | Next.js production build compiled, type-checked, and generated all 39 routes. |
| `git diff --check` | PASS | No whitespace errors. |
| Home EN | PASS | One H1, main landmark, active Home route, both CTAs, no source-level claim additions. |
| Home ES | PASS | Existing localized Home route and CTA structure preserved; no new English copy introduced by this slice. |
| Wide browser check | PASS | Home rendered at the available wide browser viewport without page-level overflow after shell containment. |
| Mobile browser check | PASS | 360 × 740: H1 and both CTAs fit the first viewport; document width remained 360px. |
| Drawer open/close | PASS | `aria-expanded`, `aria-hidden`, inert background, Escape, and focus restoration verified. |
| Focus trap | PASS | From the first drawer item, `Shift+Tab` wrapped to the last item and `Tab` wrapped back to the first. |
| Heading/landmark scan | PASS | One H1 and `main#main-content` remain present. |
| Metadata | PASS | No metadata source was changed; existing build metadata generation remained green. |

## Tooling boundary

The browser-use CLI and automated axe/Lighthouse tooling were unavailable in
this environment. Browser evidence was collected with the available Chrome
automation surface. The local app remains available at `http://localhost:3000`
for human QA; no deploy or commit was performed.

## Remaining known issue

The broader Engineering page's pre-existing ambient decorative overflow remains
outside this slice. The page wrapper now contains the horizontal effect at the
global shell level, but the Engineering visual treatment still deserves the
separate P1 work item identified by the audit.
