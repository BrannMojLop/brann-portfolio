# Portfolio Experience V3 — Rendered evidence

## Browser evidence

The local development site was reviewed in Chrome with a wide available
viewport of approximately `759 × 606` and a mobile emulation viewport of
`360 × 740`. A wider article check also used an `819px` viewport. Screenshots
were inspected for Home, Systems, About, Engineering, Contact, and Article 03
in both languages where practical.

### Route measurements

| Surface | EN | ES | Observation |
|---|---:|---:|---|
| Home | 1 H1, 3 H2, 3 H3 | 1 H1, 3 H2, 3 H3 | Good structural parity; the mobile hero pushes proof and CTAs below the first viewport. |
| Systems | 1 H1, 3 H2, 15 H3 | 1 H1, 3 H2, 15 H3 | Complete case content, but a very long single-page sequence of nested panels. |
| About | 1 H1, 1 H2, 6 H3 plus H4 groups | Same pattern | Clear profile headline; progression and capability evidence are visually buried by repeated panels. |
| Engineering | 1 H1, 1 H2, 18 H3 | Same pattern | Ten note cards are grouped by themes, with current notes not given a distinct visual priority. |
| Contact | 1 H1 | 1 H1 | Short and scannable; three contact actions have similar visual weight. |
| Article 03 | 1 H1, 14 H2 | 1 H1, 14 H2 | Strong article structure and mobile containment; long reading journey has no section navigation. |

All checked routes exposed a `main` landmark, one H1, non-empty link names,
labeled buttons, and no skipped heading levels. The EN/ES Home, Systems, About,
Engineering, Contact, and Article 03 routes had no page-level horizontal
overflow at the mobile viewport.

## Specific measurements

- At `360 × 740`, the ES Home H1 occupied approximately `307px` vertically;
  the intro began near `y=502`, stack chips near `y=806`, and CTAs near
  `y=982`. The first screen therefore communicates positioning but not the
  action hierarchy or systems proof.
- At the checked narrow viewport, Article 03 tables are intentionally wider
  than the content column but contained by local scrollers; the page itself did
  not overflow.
- Article 03 rendered with a readable single-column article and three contained
  code blocks. The body is long (`~14kpx` in the mobile render), making section
  orientation a potential future enhancement rather than a current defect.
- The EN Engineering listing's `engineering-ambient` element measured about
  `903px` scroll width inside a `759px` client width at one wide-available
  browser state. The page root remained clipped. This is pre-existing
  decorative overflow and should be fixed or explicitly accepted separately.

## Source corroboration

- `HomeContent` places the hero title, intro, stack, and actions before the
  signal board on narrow layouts; the main CTA group follows the stack.
- `SystemsContent` renders three full system dossiers with repeated context,
  solution, responsibility, architecture, constraints, challenges, and results
  blocks. Its contact CTA is currently hidden.
- `EngineeringContent` renders five current-theme cards followed by ten note
  cards in three theme groups; all notes use similar card treatment.
- The article route supplies the H1 and renders MDX H2 sections in a `max-w-3xl`
  column. Code and table containment are present.
- The header has a mobile drawer with `aria-expanded` and `aria-controls`, but
  its closed state is visually collapsed rather than removed from the tab order;
  keyboard verification is required before implementation.

## Tooling limitation

The repository browser skill's `browser-use` CLI is not installed, and no
Impeccable skill/tool is available. No axe-style automated scan, Lighthouse run,
or production-browser verification was performed. These limitations do not
block the strategy audit, but they remain human QA requirements for any future
implementation.
