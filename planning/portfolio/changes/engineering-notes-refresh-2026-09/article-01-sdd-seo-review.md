# SEO and semantic review — Article 01 SDD

Reviewer: `portfolio-seo-accessibility-reviewer`.
Scope: editorial/semantic review only. No public source was edited.

## Approved metadata

- SEO title EN: `Specification-Driven Development for Complex Changes | Brandon Mojica`
- SEO title ES: `Desarrollo guiado por especificaciones para cambios complejos | Brandon Mojica`
- SEO description EN: `How I use specifications, architecture decisions, acceptance evidence, and explicit handoffs to make complex software changes easier to review.`
- SEO description ES: `Cómo uso especificaciones, decisiones de arquitectura, evidencia de aceptación y handoffs explícitos para revisar mejor cambios complejos de software.`
- Suggested slug EN: `/engineering/specification-driven-development-complex-changes`
- Suggested slug ES: `/es/engineering/specification-driven-development-complex-changes`

The metadata matches the approved source brief and describes the article’s
actual argument without introducing an AI, scale, or production claim.

## Heading and semantic structure

- One document title/H1 per language.
- H2 sections represent the narrative arc: implementation-first ambiguity,
  SDD definition/workflow, SDD contents, example, architecture versus plan,
  handoffs, review/evidence, failure modes, proportionality, and conclusion.
- H3 headings are used for SDD components where needed; no heading level is
  skipped in the proposed structure.
- The workflow diagram is represented as text, so it remains understandable in
  source and assistive technology. The surrounding prose repeats its meaning.
- Lists are used for scope, evidence, handoff fields, risks, and principles;
  none are used as empty decoration.

## Links and discoverability

- EN links to existing public notes: `backend-service-boundaries` and
  `erp-platform-architecture`.
- ES links use the localized `/es/engineering/` path.
- Future MDX should add the article to the Engineering collection through the
  existing content loader and preserve EN/ES slug parity.
- No link to internal planning paths, private project repositories, or hidden
  runtime resources is proposed.

## Readability and accessibility

- Target length and reading time are appropriate for a technical note rather
  than a short landing-page blurb.
- Paragraphs are short, key reasoning is broken into headings, and the article
  uses concrete questions instead of unexplained abstractions.
- The code-block diagram is semantic text, not an image; preserve an equivalent
  textual sequence if the visual treatment changes during implementation.
- Avoid putting essential claim boundaries only in visual callouts.
- EN and ES retain the same sequence and risk boundaries; Spanish is idiomatic
  rather than mechanically literal.

## SEO/content risks to avoid

- Do not add “best,” “guaranteed,” “production-proven,” or “AI-powered” claims
  to the title or description.
- Do not create a second article title that competes with the existing service
  layer notes before their evidence audit.
- Do not imply the article is a case study of a named confidential system.

## Review result

`PASS` for editorial/semantic SEO readiness. Final MDX implementation still
requires the normal route, metadata, structured-data, accessibility, and
rendered-page checks.
