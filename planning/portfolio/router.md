# Portfolio Router

Before editing, declare: request, work mode, change slug, affected paths and
locales, claim sources, complexity (`SMALL | MEDIUM | LARGE | HIGH_RISK`),
evidence mode (`lightweight | standard | full | full+human`), gates, and human
checkpoint.

Route by intent using the table in `README.md`. Use the smallest viable flow:

- **SMALL:** verified factual correction or isolated technical fix -> lead role
  -> maintainer -> focused independent review -> checks.
- **MEDIUM:** brief + manifest -> specialist(s) -> maintainer -> required
  reviews -> validation -> close.
- **LARGE:** strategist/case-study brief -> approved content contract ->
  implementation -> experience and SEO/a11y reviews -> validation -> release.
- **HIGH_RISK:** same as LARGE, with human approval before public changes or
  deployment.

Never use the same role's unreviewed output as release approval. If a required
source is missing, mark the claim `UNVERIFIED`, omit it from publication, and
hand off the evidence request to the human.
