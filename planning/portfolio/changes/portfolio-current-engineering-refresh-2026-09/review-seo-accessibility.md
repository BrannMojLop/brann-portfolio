# Independent SEO and accessibility review

- Reviewer: `portfolio-seo-accessibility-reviewer`
- Scope: rendered EN/ES page metadata, schema, semantics, links, localization, and accessible image text.
- Browser evidence: Chrome connected tab at `http://localhost:3000`; all ten required routes were visited.

## Findings

### P0/P1 — none

No blocking metadata, bilingual, semantic, link, or basic accessibility issue was found in the tested pages.

### P2 — local metadataBase warning

`next build` reports that `metadataBase` is not set for resolving social images and falls back to `http://localhost:3000`. The application already derives metadata URLs from `siteConfig.url`; the warning is local-environment evidence, not a content failure.

Disposition: `NON_BLOCKING / ENVIRONMENT LIMITATION`. No deployment or environment mutation was made. Production verification must confirm `NEXT_PUBLIC_SITE_URL` is configured before release.

### P2 — existing Engineering Note metadata remains March-dated

The rendered Engineering landing still displays existing Note cards dated `2026-03-09`, and some historical tags remain English in the Spanish card metadata. This refresh intentionally updates only the landing intro/taxonomy and does not edit existing Note bodies or frontmatter.

Disposition: `DEFERRED / EXPLICIT SCOPE`. Route to the separate Engineering Note evidence/localization audit.

## Verified route matrix

| Route family | H1 count | Heading jumps | Description | Canonical | EN/ES alternates | JSON-LD | Missing href | Images without alt |
|---|---:|---:|---|---|---|---|---:|---:|
| `/`, `/es` | 1 each | 0 | Present | Present | `en-US`, `es-MX`, `x-default` | `Person`, `WebSite` | 0 | 0 |
| `/systems`, `/es/systems` | 1 each | 0 | Present | Present | `en-US`, `es-MX`, `x-default` | `CollectionPage`, `BreadcrumbList` | 0 | 0 |
| `/about`, `/es/about` | 1 each | 0 | Present | Present | `en-US`, `es-MX`, `x-default` | `AboutPage`, `BreadcrumbList` | 0 | 0 |
| `/engineering`, `/es/engineering` | 1 each | 0 | Present | Present | `en-US`, `es-MX`, `x-default` | `CollectionPage`, `BreadcrumbList` | 0 | 0 |
| `/contact`, `/es/contact` | 1 each | 0 | Present | Present | `en-US`, `es-MX`, `x-default` | `CollectionPage`, `BreadcrumbList` | 0 | 0 |

## Localization verification

- Spanish Home no longer contains the Workforce English labels `Organization context`, `Authorization boundaries`, or `Auditable workflows`.
- Spanish Workforce card renders `Enfoque de arquitectura`, `Contexto de organización`, `Límites de autorización`, and `Flujos auditables`.
- Spanish page titles, descriptions, navigation, headings, workflow copy, and contact copy render in Spanish.
- Technical names such as PostgreSQL, FastAPI, RLS, ETag, Cognito, AuthenticationContext, and TenantContext remain unchanged where they are identifiers or approved technology names.

## Review result

`PASS` for tested SEO/accessibility surfaces, with production `metadataBase` configuration and the separate Engineering Note audit remaining outside this release-free local pass.
