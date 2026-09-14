# Portfolio V3 — independent production experience review

Reviewer: `portfolio-experience-reviewer`

Date: `2026-09-14`

## Scope

Reviewed the deployed site at `https://brandonmojica.dev` after the approved
portfolio refresh. Spot checks covered desktop `1280 × 900` and mobile
`360 × 740`, with the complete required route matrix rendered across EN and ES.

## Findings

### PASS

- The first viewport communicates the engineer → architect → systems thinker
  sequence without introducing a new marketing layer.
- Home keeps the primary systems and Engineering Notes actions visible and
  readable at the tested mobile viewport.
- Systems presents Businext, TR0V1, and Workforce as architecture cases rather
  than generic product cards; the Workforce scope remains visibly bounded.
- Engineering surfaces Articles 01–03 before the earlier archive and keeps the
  listing usable on mobile.
- Article 03 has readable long-form rhythm, bounded code/table regions, clear
  related-note navigation, and no page-level overflow at either tested width.
- Contact keeps email primary and LinkedIn/GitHub secondary in both locales.
- Mobile drawer, focus restoration, theme switching, and EN/ES navigation work
  in production.
- No P0 or P1 visual, interaction, or content-layout regression was observed.

## Deferred non-blocking items

- The wide Home first viewport may place primary CTAs below the fold at very
  wide desktop dimensions; this was already recorded as a P2 tuning decision.
- Older legacy notes retain their pre-existing H3-after-page-H1 structure; this
  requires a separate semantics task and was not changed in this release.
- Intermediate viewport widths and automated axe/Lighthouse checks remain
  human QA opportunities.

## Review result

`PORTFOLIO-EXPERIENCE-REVIEW = PASS`
