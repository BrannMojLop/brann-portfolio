# Portfolio V3 — production smoke test

Date: `2026-09-14`

## Deployment

- Target: Vercel production deployment triggered by the authorized push to `main`.
- Production URL: `https://brandonmojica.dev`
- Release commit: `288a831` (`docs(planning): record portfolio refresh evidence`)
- Production response identified as Vercel; `www` redirects to the canonical apex domain.

## HTTP route matrix

All required EN/ES routes returned `200`:

| Surface | EN | ES |
|---|---:|---:|
| Home | PASS | PASS |
| Systems | PASS | PASS |
| About | PASS | PASS |
| Engineering listing | PASS | PASS |
| Article 01 | PASS | PASS |
| Article 02 | PASS | PASS |
| Article 03 | PASS | PASS |
| Contact | PASS | PASS |

Article 03 rendered two tables and three code blocks in both locales.

## Desktop and mobile checks

- Desktop spot checks at `1280 × 900`: Home, Systems, Engineering listing, and
  Article 03 rendered without page-level horizontal overflow.
- Mobile matrix at `360 × 740`: ten critical EN/ES routes rendered with one H1
  each and no page-level horizontal overflow.
- Article 03 code blocks and tables stayed inside horizontally scrollable
  regions on mobile; they did not widen the document.
- The mobile navigation opened with focus inside the drawer, made `main` and
  `footer` inert, and closed with its localized close control while restoring
  focus to the menu trigger.
- Light and dark theme toggles worked in the Spanish production route and the
  final browser state was restored to dark.

## Content and integration checks

- Home shows the approved architecture/backend positioning, PostgreSQL,
  evidence-based delivery, and engineering workflow.
- Systems shows Businext ERP, TR0V1 Credit Platform, and Workforce with the
  approved bounded local-development description.
- Engineering listing surfaces Articles 01–03 first in EN and ES.
- Article 03 preserves its RLS, tenant-context, transaction-boundary,
  relational-constraints, and isolation-test content in both locales.
- Contact actions resolve to the approved email, LinkedIn, and GitHub links.
- No visible legacy version, hydration failure, or runtime error appeared in
  the rendered production surfaces.

## Result

`PRODUCTION SMOKE TEST = PASS`

Console capture and automated axe/Lighthouse execution were unavailable in the
connected browser environment. No visible runtime error was observed; this
remains a human-QA limitation rather than a detected production regression.
