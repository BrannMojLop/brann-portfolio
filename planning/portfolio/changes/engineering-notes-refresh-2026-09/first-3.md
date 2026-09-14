# First three notes to write

## Recommended sequence

### 1. Specification-driven development for complex software changes

Start here because it gives the section a current process narrative. It can
explain architecture-first planning, explicit acceptance evidence, handoffs,
independent review, and release gates without claiming that every historical
project used the method.

### 2. How I structure specialized AI agents for software engineering

Follow with the bounded agent workflow. The note should show how roles divide
analysis, strategy, implementation, and review, while making human judgment and
responsibility explicit. It should use a real sanitized handoff rather than
general AI productivity language.

### 3. Designing PostgreSQL RLS for multi-tenant SaaS

Close the first group with a deep database case. Workforce provides the most
relevant current local evidence for tenant context, RLS, authorization, and
negative-path testing. The note must state its local/non-production boundary and
avoid absolute security or scale claims.

## Why this set works

Together the three notes establish:

- **Current engineering process:** SDD, architecture-first planning, evidence,
  review, and release gates.
- **AI-assisted/agentic workflow:** specialized responsibilities and explicit
  handoffs, presented as structured engineering support.
- **Deep architecture/database work:** PostgreSQL RLS, tenant isolation,
  authorization boundaries, and testable failure paths.

The next note should be `Why implementation and engineering review should be
separate roles`, followed by `Designing tenant context and authorization
boundaries`. This keeps independent review and authorization depth visible
without overloading the first three notes.

## Gate before drafting any of the three

- Confirm the exact firsthand evidence packet and public-safe scope.
- Confirm whether the evidence is local, historical, or production; omit any
  unsupported production statement.
- Approve the EN/ES title, thesis, outline, and privacy boundary.
- Run a claim/source review before MDX drafting, then bilingual editor and
  SEO/accessibility review before implementation.
