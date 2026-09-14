# Portfolio content editor handoff

## Editorial decisions

- This pass produces message architecture and content requirements only; it does not draft final public copy.
- Home, Systems, About, Engineering, and Contact must remain bilingual in meaning, claim scope, and status.
- The confirmed title, employer/date, career progression, and language levels are locked inputs.
- Workforce must be described as an independent product in development, not production software.
- Existing Engineering Note bodies remain unchanged and need a separate evidence audit.

## Exact Home fixes for later implementation

1. The current shared `system.technologies` array contains Workforce architecture concerns in English. Replace the shared-only data shape with locale-aware display data or a typed capability field.
2. In Spanish, render the three labels as:
   - `Contexto de organización`
   - `Límites de autorización`
   - `Flujos auditables`
3. Do not render those three items under `Tecnologías principales`. Use a label equivalent to `Enfoque arquitectónico`, `Capacidades principales`, or `Enfoque del producto`, selected consistently with the surrounding card design.
4. Keep actual technologies separate from architecture concerns. PostgreSQL belongs in the capability taxonomy only after its source and wording are approved.
5. Add the workflow method as a compact narrative/entry point, not as a flat list of AI features.

## Bilingual consistency check

Before any future implementation is accepted, compare EN/ES pairs for:

- title, employer, employment period, and progression;
- language levels;
- system status and attribution;
- Workforce architecture labels and “in development/not production” boundary;
- PostgreSQL scope (direction/design versus production);
- SDD/agent/review/evidence terminology;
- note titles, dates, and links.
