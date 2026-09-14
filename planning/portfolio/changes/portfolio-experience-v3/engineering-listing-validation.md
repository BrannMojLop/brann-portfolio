# Portfolio Experience V3 — Engineering listing validation

Date: `2026-09-14`

## Scope

Engineering listing/index only. Existing MDX bodies, article slugs, metadata,
Systems, Home, About, and Contact were not modified.

## Before / after hierarchy

Before, the page placed the long introduction, current-theme cards, and all
notes in theme groups with visually equivalent article cards. September notes
could be mistaken for part of the March archive, and the ambient decoration
could extend beyond its visual container.

After, the page is ordered as:

`Engineering positioning → Recent Engineering Notes → Earlier Engineering Notes
→ Current engineering themes`

The three approved September notes are explicitly selected by their existing
slugs and dates, not by an unsupported editorial popularity claim. Recent notes
use larger editorial rows with title, existing summary, primary existing tag,
article type, date, reading time, and one Read note action. The seven earlier
notes remain discoverable in compact rows with existing titles, primary tags,
dates, and the same localized action.

The existing Engineering introduction was moved after the note sections into the
current-theme context so the first mobile viewport reaches current work sooner.
No article body or approved claim was rewritten.

## Recent-note treatment

The first three entries are:

1. Specification-driven development for complex software changes
2. How I structure specialized AI agents for software engineering
3. Designing PostgreSQL RLS for multi-tenant SaaS

They are not called “featured,” “popular,” or “recommended.” Their priority is
communicated through position and editorial row scale only.

## Topic and date treatment

- Recent notes use their existing first tag as a restrained topic signal.
- Earlier notes use the same existing tag treatment without a tag cloud.
- Existing publication dates remain visible, including March 2026 dates.
- September 14, 2026 remains visible on all three recent notes.
- Existing article types and reading times remain visible on recent notes.
- No filters or page-level TOC were added.

## Ambient overflow and motion

- Removed the Engineering listing's orbit and scanline elements, which had no
  comprehension value and were the source of the pre-existing decorative
  overflow risk.
- Kept the contained grid atmosphere with `overflow: clip`.
- No continuous article-card animation was introduced. Existing interaction and
  reduced-motion handling remain separate.

## Browser evidence

| Check | Result | Evidence |
|---|---|---|
| Engineering EN mobile | PASS | 360 × 740 shows the listing title, current-work label, recent section, and the first recent note title in the initial viewport. |
| Engineering ES mobile | PASS | 360 × 740 shows localized title/labels, recent section, and the first Spanish recent note title in the initial viewport. |
| Recent hierarchy | PASS | Exactly three recent notes render before the earlier-note section. |
| Earlier hierarchy | PASS | Seven earlier notes remain visible in compact rows and are not hidden or archived. |
| Topic/date/CTA | PASS | Existing tags, dates, reading times, and localized Read note / Leer nota links remain readable. |
| Heading hierarchy | PASS | One H1, three H2 section headings, and one H3 per note/theme item; no skipped level. |
| Semantic grouping | PASS | Recent list uses `ol`; earlier notes use `article` rows; links have title-specific accessible names. |
| Overflow | PASS | Browser checks reported document width equal to the 360px viewport. |

## Validation

- `pnpm lint` — PASS
- `pnpm build` — PASS; 39 routes generated
- `git diff --check` — PASS

The build retains the existing `metadataBase` warning; no metadata source was
changed in this slice.

## Tooling boundary

The browser-use CLI and automated axe/Lighthouse tooling were unavailable. Final
rendered browser checks used the available Chrome automation surface at 360px.
The browser remained emulated at 360px during the final pass, so wide-desktop
spacing and scanability remain a human QA follow-up.
