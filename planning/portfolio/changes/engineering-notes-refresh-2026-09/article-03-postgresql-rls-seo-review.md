# Article 03 — SEO and semantic review

## Review mode

`portfolio-seo-accessibility-reviewer` was applied in editorial/semantic review
mode because no public MDX exists yet. This is a content and structure review,
not a rendered-route or metadata validation.

## Approved article identity

| Field | EN | ES |
| --- | --- | --- |
| Title | Designing PostgreSQL RLS for multi-tenant SaaS | Diseñar RLS de PostgreSQL para SaaS multi-tenant |
| Slug | `/engineering/postgresql-rls-multi-tenant-saas` | `/es/engineering/postgresql-rls-multi-tenant-saas` |
| SEO title | Designing PostgreSQL RLS for Multi-Tenant SaaS \| Brandon Mojica | Diseñar RLS de PostgreSQL para SaaS Multi-Tenant \| Brandon Mojica |
| Description | A Workforce-grounded explanation of PostgreSQL RLS, server-derived tenant context, application authorization, and isolation testing. | Una explicación basada en Workforce sobre RLS de PostgreSQL, contexto de tenant derivado del servidor, autorización y pruebas de aislamiento. |

## Semantic review

### PASS

- One H1 is planned in each language and matches the approved title.
- H2 sections follow a logical progression: problem, trust model, context flow,
  RLS policy, transactions/pooling, roles, constraints, tests, failures,
  trade-offs, bounded case, and conclusion.
- The responsibility table makes the four security concepts scannable without
  collapsing them.
- The text diagrams use plain text arrows and labels, so meaning does not depend
  on color or decorative rendering.
- The SQL block is small enough for a readable code block; the surrounding prose
  supplies the semantic explanation for users who do not read SQL, including
  missing context, `USING`/`WITH CHECK`, ownership, and `BYPASSRLS` nuance.
- The test matrix exposes negative paths and distinguishes application,
  database-policy, and integration evidence.
- Lists and tables are meaningful content, not decorative layout.
- EN and ES preserve the same title meaning, deck, technical distinctions,
  Workforce boundaries, exclusions, and approved related links.

## Link eligibility

Approved links in both drafts are limited to:

- Article 01 — specification-driven development;
- Article 02 — specialized AI agents;
- `backend-service-boundaries`;
- `erp-platform-architecture`.

No evidence-audit-pending note, `erp-modularity`, private path, or internal
planning path is linked.

## MDX-stage requirements

Before publication, the maintainer must preserve the planned H1/H2 structure,
frontmatter identity, canonical/alternate locale behavior, accessible code
blocks, and text-equivalent diagrams. Rendered route checks must separately
verify metadata, headings, internal links, and small-viewport code containment.

Result: `PASS — no semantic or editorial SEO blocker at draft level.`
