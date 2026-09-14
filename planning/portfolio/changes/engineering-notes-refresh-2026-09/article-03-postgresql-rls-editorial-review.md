# Article 03 — Editorial and technical review

## Roles applied

- `portfolio-engineering-writer`: technical correctness, database reasoning,
  firsthand narrative, and proportionality.
- `portfolio-strategist`: differentiation through PostgreSQL/database-boundary
  reasoning without inflating expertise or changing professional positioning.
- `case-study-architect`: Workforce evidence, implemented-versus-planned
  boundaries, trust model, and privacy-safe case framing.
- `portfolio-seo-accessibility-reviewer` in editorial/semantic mode: heading
  structure, semantics, readability, code/diagram accessibility, and link
  eligibility before MDX exists.

## Engineering-writer review

### PASS

- The article is architecture reasoning grounded in a bounded Workforce example,
  not a copy-paste PostgreSQL tutorial.
- Authentication, membership/application authorization, tenant context, and RLS
  are explicitly separated.
- The article makes server-derived organization context the authority and treats
  client organization selection as untrusted input.
- The SQL is short, generic, and followed by the actual design questions: who
  sets context, transaction lifetime, cleanup, pooling, roles, and write policy.
- The SQL uses `current_setting(..., true)` and explains missing context,
  `USING` versus `WITH CHECK`, and the distinction between enabled and forced RLS.
- Connection pooling and transaction boundaries receive substantive treatment.
- RLS is described as defense in depth, never as the complete authorization
  system.
- SDD/agent workflow is referenced only through approved related links and does
  not hijack the database-focused narrative.
- Human review and evidence remain distinct in the testing and conclusion
  sections.

### Corrections applied during drafting

- Reduced tutorial-like syntax explanation and retained the architectural
  questions around the snippet.
- Kept `SET LOCAL` as a generic transaction-local technique rather than claiming
  a particular Workforce pool recipe.
- Restored an explicit explanation that pooled sessions and request lifecycles
  differ, while keeping pool reset behavior as an evidence requirement rather
  than a Workforce production claim.
- Changed the illustrative setting lookup to the missing-safe form and stated
  that application logic must still reject absent or invalid context.
- Added the `USING`/`WITH CHECK` distinction and qualified table ownership,
  `BYPASSRLS`, and `FORCE ROW LEVEL SECURITY` behavior.
- Qualified role/RLS statements as local implementation evidence.
- Repeated the distinction between a test contract and a dated passing run.
- Kept Workforce outside production, scale, customer, uptime, SLO, compliance,
  backup/PITR, and external-security claims.

## Strategist review

### Positioning outcome: PASS

This note adds a differentiated database-boundary layer to the current
portfolio narrative. It supports the positioning of a software engineer focused
on architecture and backend systems through concrete reasoning about trust,
transactions, relational integrity, and failure modes.

The note does not position the author as a PostgreSQL specialist by title, a
security expert, or an AI expert. “Current approach” and “current design work”
remain bounded to the article’s stated local evidence.

## Case-study architect review

### Evidence boundary: PASS

Workforce is used as a public case anchor only at the following level:

- independent workforce-management product;
- active local development, not production software;
- FastAPI backend, PostgreSQL transactional core, and multi-organization
  foundation;
- server-derived TenantContext after membership resolution;
- PostgreSQL roles/RLS-related boundaries with application authorization kept
  separate;
- User/Membership/Employee separation;
- locally implemented People/Employees and Structure/Scheduling slices;
- relational constraints, audited mutations, idempotency, and concurrency/ETag
  controls where the relevant workflow supports them.

No customer, employee, tenant identifier, private schema, credential, internal
URL, deployment, operational, or compliance detail is exposed. The diagrams are
conceptual and do not imply that the shown sequence is the only possible system
topology.

## Article-level editorial acceptance criteria

| Criterion | Result |
| --- | --- |
| Answers all 16 questions in the approved brief | PASS |
| EN/ES conceptual parity | PASS |
| Technical depth exceeds a generic RLS tutorial | PASS |
| Workforce local/non-production boundary | PASS |
| No security absolutes or AI hype | PASS |
| SQL and text diagrams are public-safe and explainable | PASS |
| Trade-offs and application-only alternative included | PASS |
| Related links limited to approved eligible notes | PASS |
| Existing Articles 01/02 untouched | PASS |

The current Markdown word count is approximately 2,357 words in EN and 2,597
in ES. Both drafts include the SQL block, two diagrams, responsibility/test
tables, and explicit technical qualification requested in the final review. ES
is longer than the brief’s orientative range because of bilingual expansion and
technical terminology; it may be lightly trimmed during MDX conversion if the
rendered rhythm requires it, without changing meaning. This is a length
optimization, not an unresolved claim or architecture issue.

Result: `PASS — publication-ready at draft level, pending human approval before MDX creation.`
