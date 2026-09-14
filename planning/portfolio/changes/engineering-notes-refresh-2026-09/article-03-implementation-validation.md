# Article 03 — Implementation validation

## Scope

`mdx-implementation` was authorized for Article 03 after
`G3 ARTICLE 03 FINAL TECHNICAL EDITORIAL = PASS`. Only the bilingual Article 03
MDX and the shared table containment needed for its mobile rendering were
changed. Articles 01 and 02, existing Engineering Note bodies, unrelated public
copy, deployment state, and release commits were left untouched.

## Implemented files

- `content/engineering/en/postgresql-rls-multi-tenant-saas.mdx`
- `content/engineering/es/postgresql-rls-multi-tenant-saas.mdx`
- `lib/mdx.tsx` — wraps rendered tables in a bounded horizontal scroller.

The existing Engineering loader discovers the new files automatically, so no
listing registry or unrelated navigation file was required. Article routes,
listing cards, locale links, related-note links, canonical URLs, alternates,
and JSON-LD are produced by the existing architecture.

## Maintainer result

`portfolio-maintainer`: PASS

- Frontmatter preserves the approved titles, summaries, SEO identity, date,
  theme, article type, reading time, tags, and slugs.
- Article bodies begin at H2 because the route supplies the single H1.
- The approved SQL, context flow, test matrix, Workforce boundary, and
  human-accountability language were preserved.
- The implementation contains no production, scale, customer, credential,
  private-path, or security-absolute claim.

## Experience finding and correction

The independent small-viewport check found that the two content tables could
extend past the page edge in the ES article. The shared MDX renderer now wraps
tables with `max-w-full overflow-x-auto`; the page itself remains bounded and
the table remains readable by horizontal scrolling. Code blocks retain their
existing internal overflow behavior. No broad redesign was made.

## Scope decision

The existing EN Engineering listing has a small `engineering-ambient` visual
element whose scroll width is wider than the viewport at one narrow browser
width. This is pre-existing listing decoration, not introduced by Article 03,
and is outside the approved change scope. The Article 03 routes themselves
have no page overflow at the checked narrow and wide viewports.

## Result

`ARTICLE 03 IMPLEMENTATION = PASS`

`READY FOR HUMAN QA AND RELEASE`
