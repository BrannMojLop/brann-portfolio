# Claim-to-source map

Date: 2026-09-14
Scope: Approved refresh copy only; English and Spanish counterparts are mapped
to the same semantic claim.
Editorial gate: `G1 PASS`

## Sources

- **HD** — human decisions in the current request, authoritative for title,
  company, employment framing, career progression, language levels, Workforce
  status, LOC exclusion, client-count exclusion, and ecommerce scope.
- **CV** — `docs/cv.md`.
- **LI** — `docs/linkedin.md`.
- **P** — current portfolio implementation and content.
- **WF** — approved Workforce product context in the existing planning record;
  public wording is limited by HD to independent product in development, not
  production software.

## Approved copy claims

| ID | Claim in `copy-draft.md` | Source | Disposition |
| --- | --- | --- | --- |
| M01 | Software engineer focused on software architecture and backend systems | HD; CV:8-12; LI:10-15 | VERIFIED and approved wording |
| M02 | Designs and leads evolution of business-critical platforms around real operational constraints | HD; CV:10-14 | VERIFIED and approved wording |
| M03 | Head of Systems at Elements Of Steel, 2019–Present | HD; CV:79-86; LI:35-42 | VERIFIED and approved wording |
| M04 | Career progressed through QA, junior software development, project leadership, Head of Systems, and full-stack development without transition years | HD | VERIFIED and approved wording |
| M05 | Businext is a custom ERP built from scratch | CV:14,47-49; LI:13,46-47; P `lib/systems.ts:28-40` | VERIFIED at stated scope |
| M06 | Businext covers finance, sales, inventory, HR, dashboards, and accounting workflows | CV:47-62; P `lib/systems.ts:34-40` | VERIFIED at stated scope |
| M07 | TR0V1 supports credit lines, installments, interest, payments, and statements | CV:64-71; LI:49-50; P `lib/systems.ts:100-113` | VERIFIED at stated scope |
| M08 | Workforce is an independent workforce-management product in development and not production software | HD; WF | VERIFIED and explicitly bounded |
| M09 | Technical focus includes Python, FastAPI, React, AWS, REST APIs, SQLAlchemy, Pydantic, EC2/S3, Linux, and Nginx | CV:16-36; LI:17-31; P `lib/site.ts:23-35`, `lib/i18n.ts:225-245` | VERIFIED as curated profile focus |
| M10 | Architecture focus includes domain modeling, service layers, domain boundaries, and operational automation | CV:38-43; P `lib/i18n.ts:198-245` | VERIFIED as profile focus |
| M11 | Education is Computer Systems Engineering and a Master’s Degree in Data Science for Business at UTEL | CV:88-94; P `lib/i18n.ts:187-189` | VERIFIED and approved wording |
| M12 | Spanish is native; English is B1 · Intermediate | HD; CV:96-99; LI:52-55 | VERIFIED and normalized by HD |
| M13 | Engineering Notes are organized around architecture, backend/API design, and financial/operational correctness | P `lib/i18n.ts:105-130`, `lib/engineering.ts:22-28` | VERIFIED editorial taxonomy |

## Explicit exclusions and backlog boundaries

| Item | Decision | Scope |
| --- | --- | --- |
| 125K+ LOC | Excluded | Remove from this refresh and public implementation. |
| 200K+ LOC | Excluded | Do not publish in this refresh. |
| TR0V1 “30+ clients” | Excluded | Do not publish until independently revalidated. |
| Production labels for Businext/TR0V1 | Excluded | No current production claim is introduced here. |
| Existing Engineering Note bodies | Deferred | Outside this refresh; separate evidence audit precedes body changes. |
| Ecommerce modernization | Deferred | Future architecture-study/content backlog only; no first implementation. |
| Ecommerce scope | Bounded | Legacy client identity/authentication modernization only; no returns, sales, basket, catalog, orders, payments, or cutover claim. |
| Remote availability and seniority | Excluded | No availability or seniority claim is introduced here. |

## Bilingual consistency check

- The approved English and Spanish positioning statements preserve the same
  subject, responsibility, and operational-constraints meaning.
- Title, company, employment period, career progression, Workforce status, and
  language levels are present in both language versions.
- Businext and TR0V1 descriptions preserve the same scope in both languages.
- Exclusions apply equally to both locales: no LOC, 30+ clients, production
  labels, ecommerce implementation, or Engineering Note body changes.
