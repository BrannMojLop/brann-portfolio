# Portfolio refresh discovery brief

Date: 2026-09-14
Work mode: `strategy-only` / positioning discovery
Lead role: `portfolio-strategist`
Complexity: `MEDIUM`
Evidence mode: `standard`

## Request

Review the public-facing Home, Systems, About, Engineering, and Contact content
in English and Spanish. Inventory the professional claims currently exposed,
classify each claim, and produce positioning, information architecture, case
study, Engineering Notes, gap, and human-confirmation recommendations.

## In scope

- `app/`, `components/`, `lib/`, `content/engineering/`, and their public
  metadata/OG/schema inputs, read-only.
- Current internal source context in `docs/cv.md` and `docs/linkedin.md`.
- Bilingual parity and repeated claims across page copy, metadata, and notes.
- Workforce and ecommerce modernization as possible portfolio opportunities,
  not as established public claims.

## Out of scope

- Any edit to public code, MDX, metadata, assets, deployment, or links.
- Final public copy, content-editor drafting, implementation, or release.
- Treating historical project evidence as current production proof.
- Publishing confidential architecture, client data, credentials, or metrics.

## Source hierarchy used

1. Current repository implementation/content: current public exposure.
2. `docs/cv.md`: explicit profile and project source.
3. `docs/linkedin.md`: explicit profile and project source.
4. Planning/history: context only; not sufficient to promote a new public
   claim without revalidation.

## Final resolution boundary

The editorial discovery is `PASS` for the approved refresh scope. Human
decisions resolved the public title, company, employment period, career
progression framing, leadership positioning, language levels, Workforce status,
and exclusions. The refresh does not publish LOC, TR0V1 client counts, or
production labels. Ecommerce modernization and Engineering Note bodies remain
outside this implementation and are recorded as future evidence work.

The approved material is ready for implementation by `portfolio-maintainer`.
