# Portfolio V3 — independent production SEO and accessibility review

Reviewer: `portfolio-seo-accessibility-reviewer`

Date: `2026-09-14`

## Metadata and crawlability

- Required EN/ES routes returned `200`.
- Every sampled static and Article 03 route rendered one H1, a canonical, and
  three alternates (`en-US`, `es-MX`, and `x-default`).
- Article 03 title, description, canonical, Open Graph title/URL/image, and
  localized alternates are correct in both locales.
- Homepage title, description, canonical, Open Graph data, and alternates are
  correct in both locales.
- Article 03 JSON-LD contains `Article` and `BreadcrumbList`.
- `robots.txt` returned `200` and points to the canonical sitemap.
- `sitemap.xml` returned `200`, uses `brandonmojica.dev` URLs, includes the new
  bilingual Article 01–03 routes, and includes their alternates.
- Open Graph image routes returned `200` PNG responses for EN and ES.
- `www.brandonmojica.dev` returned `308` to `https://brandonmojica.dev/`.
- Production HTML contained neither `localhost` nor the Vercel project hostname.

## Semantics and accessibility

- Skip link and `main#main-content` are present and localized.
- Navigation labels, language controls, theme controls, breadcrumbs, and
  contact actions have non-empty accessible names.
- Article 03 tables expose header/data rows and code blocks remain readable in
  their bounded overflow regions.
- The mobile drawer uses `aria-expanded`, `aria-hidden`, inert background
  content, and focus restoration.
- EN/ES labels and article navigation remain visually and semantically aligned.
- No page-level horizontal overflow was measured at `1280 × 900` or `360 × 740`.

## MetadataBase classification

`NON-BLOCKING KNOWN WARNING`

The local build still reports the existing metadataBase warning for social-image
resolution and mentions the local fallback. Production rendered metadata uses
absolute canonical-domain URLs for canonical, Open Graph, alternates, robots,
and sitemap output; no production metadata regression was observed. Keep the
warning as a separate maintenance item rather than changing this release.

## Limitations

Automated axe/Lighthouse and direct browser console-log capture were unavailable
in the connected QA environment. Production route rendering, DOM semantics,
metadata, link targets, and responsive overflow were independently checked.

## Review result

`PORTFOLIO-SEO-ACCESSIBILITY-REVIEW = PASS`
