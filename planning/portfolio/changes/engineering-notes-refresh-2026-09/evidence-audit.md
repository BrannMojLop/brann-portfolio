# Evidence-audit requirements

No existing note should be edited until the audit records a claim-level source,
scope, date, and safe public wording. A note can remain published while its
audit is pending only if its current wording is not presented as a newly
verified September 2026 fact; otherwise it should be temporarily de-emphasized
or held for editorial review.

## Required evidence record for every note

1. **Claim inventory:** quote or paraphrase each material statement, separating
   repository fact, user confirmation, general engineering guidance, local test,
   manual QA, and production/operational evidence.
2. **Project attribution:** verify every Businext or TR0V1 reference against the
   relevant first-party repository or approved project record. Workforce must be
   described as independent, in development, and not production software.
3. **Architecture evidence:** record the source for module boundaries, FastAPI
   structure, service-layer ownership, database constraints, scheduled work,
   reconciliation, or concurrency behavior. A plausible pattern is not proof of
   implementation.
4. **Operational status:** verify whether a job, alert, audit, deployment,
   support workflow, or incident statement is local design, implemented local
   behavior, historical operation, or production behavior.
5. **Temporal scope:** replace the undifferentiated March 2026 date with a
   defensible authored/updated date only after the body is actually reviewed.
6. **Outcome discipline:** remove or source words such as “improves,”
   “significantly reduces,” “faster,” “safer,” “production,” “real-world,” and
   “easier to diagnose” when no measured or directly observed evidence exists.
7. **Bilingual parity:** compare EN and ES title, summary, thesis, examples,
   scope boundaries, internal links, tags, and technical identifiers. Translation
   may change idiom, but not certainty, tense, attribution, or risk.
8. **Privacy review:** remove internal URLs, credentials, customer/employee
   identifiers, private business rules, financial identifiers, and unnecessary
   company detail. Keep only the context required to explain the engineering
   decision.
9. **Human checkpoint:** obtain approval before publishing changed project,
   employment, production, scale, client, security, or operational claims.

## Note-specific audit matrix

| Note pair | Evidence to collect before refresh | Claims to hold or soften until verified |
|---|---|---|
| `backend-service-boundaries` | One sanitized firsthand example showing a business action, its service boundary, state transition, audit side effect, and test/evidence path. | Production impact, incident diagnosis, audit alignment, and any implication that this structure was used across all systems. |
| `erp-modularity` | Current Businext module list; ownership/boundary evidence; mounted FastAPI structure; database relationship and deployment scope; source for the four boundary questions. | “From the beginning,” shared production database, independent module evolution, and operational confidence. |
| `erp-platform-architecture` | A dated architecture record for the modular-monolith decision; current domain map; deployment boundary; evidence that the overview still matches the system. | “Real-world operations,” single-developer/lower-complexity outcomes, and claims about support or trust in data as observed results. |
| `fastapi-financial-apis` | TR0V1 evidence for unique constraints, state guards, interest rules, event/job behavior, retry handling, and reconciliation. Keep financial examples abstract and sanitized. | Duplicate prevention under concurrency, correctness of interest behavior, and any claim about customer financial outcomes. |
| `fastapi-service-layer-patterns` | A real code example or approved case-study excerpt that demonstrates the pattern. If none exists, recast every section as general guidance. | Exactly-once side effects, retry safety, operational task behavior, and claims that the pattern is present in a named system. |
| `financial-systems-reconciliation-jobs` | Current evidence for schedule cadence, records compared, alert path, review state, correction authority, and whether the process is local, historical, or production. | Daily execution, independent verification, risk reduction, financial integrity, and customer-state protection. |
| `modular-monolith-vs-microservices-enterprise-software` | Decision record showing alternatives, domain maturity, transaction coordination needs, deployment/operations context, and what was actually measured. | Small-team benefits, simpler consistency, lower operational complexity, and claims that distribution would have increased risk in practice. |

## Audit outcome vocabulary

- `SUPPORTED`: material claims have current, attributable evidence and safe scope.
- `SUPPORTED WITH BOUNDARY`: evidence exists, but wording must state local,
  historical, illustrative, or non-production scope.
- `GENERAL GUIDANCE ONLY`: remove firsthand attribution and frame as a pattern.
- `UNVERIFIED`: omit the claim until a human supplies or approves evidence.
- `DO NOT PUBLISH`: confidential, sensitive, unsupported, or prohibited claim.
