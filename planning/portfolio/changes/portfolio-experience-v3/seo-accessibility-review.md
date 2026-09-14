# Portfolio Experience V3 — SEO and accessibility review

Reviewer: `portfolio-seo-accessibility-reviewer`

## Result

`PASS` for the strategy-only audit, with implementation checks required before
any release. No public source was modified.

## Current strengths

- Rendered EN/ES routes expose one H1 and coherent heading hierarchies.
- Main landmarks, labeled controls, non-empty link names, image alternatives,
  localized titles, canonicals, alternates, and Article/BreadcrumbList
  structured data are present in the current implementation.
- Article code and table content are locally scrollable rather than forcing
  page-level horizontal movement.
- Text diagrams do not rely on color for meaning.

## Recommendations before implementation approval

- Add a skip link and ensure it targets the main landmark.
- Add `aria-current` and a visible active state to primary navigation.
- Verify the closed mobile drawer is removed from keyboard and assistive-technology
  navigation; manage focus on open, Escape, and close.
- Define one focus-visible treatment for navigation, card links, inline links,
  language, theme, and CTA controls.
- Run measured contrast checks for opacity text over dark/light gradients.
- Preserve reduced-motion support while reducing continuous decorative animation.
- Keep article section links, if added, as real headings/anchors with visible
  focus and no sticky-header occlusion.
- Recheck JSON-LD, canonical, alternates, sitemap, and metadata after every
  structural slice.

## Tooling boundary

No automated axe-style scan, Lighthouse run, or production crawler was available
in this audit. These are release-stage checks, not assumed from the local route
inspection.
