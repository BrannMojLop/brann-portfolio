# SEO and accessibility review

Date: 2026-09-14
Role: `portfolio-seo-accessibility-reviewer`
Scope: approved V2 public surface and metadata.

## Evidence

- Homepage DOM inspection: one `h1`, one `main`, zero images without `alt`,
  zero unnamed links.
- Systems DOM inspection before correction found no `h1`; this was corrected by
  allowing the page-level Section heading to render as `h1`.
- Recheck on `/es/systems`: one `h1`, one `main`, zero images without `alt`.
- Homepage metadata: title and description present; canonical and `en-US`,
  `es-MX`, and `x-default` alternates present.
- Structured data contains `Person` and `WebSite` entities; Person schema uses
  `Head of Systems` and the approved technology focus.
- Source inspection confirms robots and sitemap routes remain present and
  localized alternates are generated.

## Findings and corrections

- `P1 CORRECTED`: internal page headings were `h2` only. Added a `titleAs`
  option to `Section` and set the top-level heading to `h1` on Systems,
  Engineering, About, and Contact.
- `PASS`: no new public LOC, client-count, unconfirmed-production, seniority,
  remote-availability, or ecommerce-modernization claims were introduced.
- `PASS`: OpenGraph copy was updated to the approved positioning and Engineering
  themes; no Engineering Note body was changed.
- `PARTIAL / LIMITATION`: Next.js still emits two `metadataBase` warnings for
  the static root OpenGraph image routes. Explicit `metadataBase` is already
  present in the locale layouts and page metadata helper. Next's resolver
  treats special `opengraph-image` routes as static metadata files and falls
  back to localhost during this local build; removing the warning would require
  root-layout or deployment-environment changes outside this refresh.
