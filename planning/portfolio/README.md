# Portfolio Agent Runtime

This is the source of truth for AI-assisted portfolio work. It is intentionally
small: the product is one public Next.js site with bilingual MDX, not a
multi-repository application.

## Source hierarchy

1. Verified source and repository implementation.
2. Explicitly approved CV, LinkedIn, project evidence, or user instruction.
3. Planning artifacts and prior evidence.
4. Agent recommendation, clearly labelled as a proposal.

No agent may convert an inference into a professional claim. Quantitative,
employment, client, live-production, security, and architecture claims need a
source reference and human approval when they change public content.

## Work modes and routing

| Request | Lead role | Typical handoff |
| --- | --- | --- |
| Positioning, target audience, professional profile, technology radar | portfolio-strategist | content-editor -> maintainer |
| Home, About, Contact, or systems copy | portfolio-content-editor | seo-accessibility-reviewer -> maintainer |
| New or revised project narrative | case-study-architect | content-editor -> strategist -> maintainer |
| Engineering MDX | portfolio-engineering-writer | content-editor + seo-accessibility-reviewer |
| Visible layout or journey critique | portfolio-experience-reviewer | maintainer |
| Metadata, schema, indexation, i18n, a11y audit | portfolio-seo-accessibility-reviewer | maintainer |
| Code/content implementation or release | portfolio-maintainer | independent reviewer(s) -> release decision |

The `portfolio-orchestrator` is the intake owner. For SMALL, factual edits it
may route directly to the maintainer plus the relevant focused review. MEDIUM
or larger work requires a change folder and manifest. HIGH_RISK public claims,
production deployment, analytics/privacy changes, or an irreversible content
decision require a human checkpoint.

## Gates

| Gate | Purpose | Normally active |
| --- | --- | --- |
| G0 Context | instructions, sources, scope, locale, risk | required |
| G1 Claim/Scope | distinguish verified facts from proposals | required |
| G2 Plan | acceptance criteria, paths, bilingual and review plan | medium+ |
| G3 Implement | approved MDX/copy/source edits | conditional |
| G4 Experience | visual hierarchy and responsive journey review | UI-visible change |
| G5 SEO/A11y | technical SEO, i18n, semantics and accessibility | public-content change |
| G6 Validate | lint/build plus proportional browser/manual checks | source change |
| G7 Release | independent consolidation of evidence and scope | release/deploy |
| G8 Knowledge | record reusable decision or state N/A | medium+ |
| G9 Close | final state, limitations, handoffs | required |

## Artifacts

For a medium-or-larger change create only what applies:

```text
planning/portfolio/changes/<slug>/
  brief.md
  session-manifest.md
  claim-inventory.md
  review-experience.md
  review-seo-accessibility.md
  validation.md
  handoff-<role>.md
```

Copy the templates in `templates/`; do not create empty files just to complete
the tree. Historical evidence is not a truth source for new public claims.

## Existing skills

The repository already includes `seo-*`, `browser-use`, and `interface-design`
skills. Treat `interface-design` as inapplicable to marketing pages unless its
guidance fits; use the experience-reviewer role for the portfolio's public
experience. The SEO skills are tools for the SEO/accessibility reviewer, not a
substitute for verified claims or bilingual editorial review.
