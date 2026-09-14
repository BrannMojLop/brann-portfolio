# Portfolio Experience V3 — Slice 4 implementation validation

Reviewer: `portfolio-maintainer`
Mode: `experience-implementation-slice-4`
Status: `PASS`

## Scope implemented

This slice is limited to the approved Engineering article reading experience,
Contact hierarchy, and shared visual/accessibility polish.

Scoped source files:

- `app/(en)/engineering/[slug]/page.tsx`
- `app/(es)/es/engineering/[slug]/page.tsx`
- `components/engineering-related-notes.tsx`
- `components/pages/contact-content.tsx`
- `lib/mdx.tsx`
- `app/globals.css`

Article bodies, approved public claims, Home, Systems, About, and the
Engineering listing content were not rewritten in this slice. Existing note
bodies remain unchanged.

## Implemented behavior

- Article pages use a wider reading shell with a bounded long-form content
  measure.
- EN and ES article pages now expose localized breadcrumbs, article metadata,
  readable title/deck spacing, and related-note navigation for Articles 01–03.
- Headings, links, preformatted code/diagram blocks, and tables retain semantic
  rendering while gaining stronger spacing and visible keyboard focus.
- Code and table regions remain horizontally scrollable on narrow viewports;
  the scrollable table wrapper is keyboard focusable.
- Contact uses one restrained surface with the existing approved content. Email
  is the primary action, with LinkedIn and GitHub as secondary paths.
- Contact decorative ambient layers are no longer part of the rendered layout;
  the page keeps the dark identity without adding motion that does not improve
  comprehension.
- Light theme was checked and the browser was restored to dark theme.

## TOC / reading progress decision

No table of contents or reading-progress widget was added. The articles already
have a clear sequence of descriptive H2 headings, and a persistent TOC would
add interaction and mobile density without a demonstrated comprehension gain.
Breadcrumbs, heading anchors, and related notes provide enough orientation for
this slice. Revisit only if human readers report long-article navigation as a
problem.

## Validation

- `pnpm lint`: PASS.
- `pnpm build`: PASS; 39 routes generated.
- `git diff --check`: PASS.
- No deploy performed.
- No commit created.

The build retains the pre-existing warning that `metadataBase` is not set and
that local `http://localhost:3000` is used for social-image resolution. This
was not broadened into a metadata change in this experience slice.

## Release boundary

This is implementation evidence only. Human QA and release authorization
remain separate gates.
