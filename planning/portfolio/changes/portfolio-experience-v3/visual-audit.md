# Portfolio Experience V3 — Visual and UX audit

## Executive diagnosis

The portfolio is visually coherent, credible, and recognizably technical. The
dark navy/teal palette, monospace eyebrows, restrained line work, and readable
article column support the intended engineer → architect → systems thinker
direction.

The next quality step is structural, not more decoration. The site currently
uses the same visual language for almost every kind of information: rounded
panels, nested cards, muted metadata, borders, badges, gradients, and ambient
motion. That makes the site polished but also somewhat portfolio-template-like.
Architecture is described well, yet the UI does not consistently show the
relationship between decision, constraint, consequence, and current state.

Recommendation: keep the identity and make the information hierarchy more
editorial and architectural. Give the visitor fewer surfaces to parse, a
clearer proof sequence, and stronger visual distinction between a case study,
an engineering note, a capability, and a contact action.

## Priority findings

### P0 blocker

None found in the strategy-only audit.

### P1 high impact

#### P1-01 — Home first viewport delays proof and action

On mobile, the large H1 and two intro paragraphs consume the first screen. The
engineering chips, primary/secondary CTAs, system proof, and process signal are
below the fold. The positioning is clear, but the visitor cannot quickly move
from identity to evidence or next action.

Recommendation: use a responsive display scale and tighter hero spacing below
the desktop breakpoint; place one clear primary action immediately after the
lead; move the full chip set and secondary proof below that action. Preserve the
approved words and hierarchy.

#### P1-02 — Systems is a long stack of nested cards rather than an architecture index

Each system is a rich dossier, but the overview asks the visitor to traverse
three long panels before understanding the comparison. The repeated context,
solution, responsibility, stack, architecture, constraints, challenges, and
results blocks create high cognitive load and make the three systems feel more
similar than they are.

Recommendation: add a compact architecture summary/index at the top and give
each case a consistent decision row: primary constraint, architecture response,
and current state. Keep the full evidence below, but reduce nested borders and
surface changes.

#### P1-03 — Engineering listing gives current work insufficient priority

The listing starts with five current-theme cards and then presents ten notes
with nearly equal visual weight. Article 03 is first within the architecture
group, but there is no explicit featured/current layer. The page feels like an
archive before it feels like a current engineering practice.

Recommendation: establish a small “current practice” or featured-note region,
then retain topic groups as the archive. Keep dates and topics, but make the
current sequence the dominant discovery path.

#### P1-04 — Mobile menu and focus behavior need an explicit accessibility pass

The trigger exposes `aria-expanded` and `aria-controls`, which is good. The
closed drawer remains in the DOM with opacity and grid-row collapse rather than
an explicit hidden/inert state. Keyboard focus, escape behavior, focus return,
and screen-reader announcement should be verified before any visual polish.

Recommendation: make the collapsed drawer non-focusable, move focus into the
open drawer, return focus to the trigger on close, and expose a visible focus
style for all navigation and card links.

#### P1-05 — The pre-existing Engineering ambient overflow is fragile

The decorative `engineering-ambient` element exceeds its container width at a
checked `759px` state. `overflow-x: clip` prevents page scroll, but the visual
layer is still wider than its layout context and can complicate future focus,
zoom, or animation changes.

Recommendation: contain the decorative layer at its source or deliberately
anchor the orbit to the viewport. Treat this as a small global-shell fix before
adding more ambient effects. It is separate from Article 03's resolved table
overflow.

### P2 polish and consistency

#### P2-01 — Repeated panel language flattens hierarchy

Home, Systems, About, Contact, and Engineering all use related rounded panels.
The consistency is strong, but card-in-card-in-card treatment causes important
and supporting information to look equivalent.

Recommendation: reserve the largest panel for a primary narrative, use flat
editorial sections for secondary content, and use bordered cards only where a
comparison or independent action exists.

#### P2-02 — Ambient motion is broader than the information value

Grids, orbits, scanlines, signal traversals, hover sweeps, and reveal
animations appear across multiple surfaces. The reduced-motion media query is a
good safeguard, but the default experience still has more motion than the
architecture message needs.

Recommendation: keep one ambient motif per page, remove continuous card
traversals, and use motion primarily for entry, focus, and state change.

#### P2-03 — Focus and active navigation states are inconsistent

Theme and primary buttons define visible focus rings. Navigation links, card
links, and several inline links rely more heavily on browser defaults. The
header also does not visibly mark the current route.

Recommendation: define one focus-visible treatment and an active-route state
with `aria-current` for primary navigation.

#### P2-04 — Systems CTA path is visually absent

The systems source contains a contact CTA inside a hidden wrapper. The case
studies therefore end as information rather than a clear next step.

Recommendation: expose one low-pressure CTA at the end of the Systems page or
each case only if it improves the visitor journey; do not add repeated buttons.

#### P2-05 — Contact actions have equal weight

LinkedIn, GitHub, and email are presented as three similar actions. For a
technical-leadership portfolio, the desired conversation action should be more
obvious than the reference links.

Recommendation: make email or LinkedIn the primary contact action and keep the
other references visually secondary without changing their availability.

#### P2-06 — The article layout is strong but repetitive over long reads

Article 03 has a readable width, clear title/deck, contained code, and
accessible text diagrams. Fourteen H2 sections with the same bordered heading
pattern create a long, steady rhythm.

Recommendation: soften repeated H2 rules, add more deliberate section grouping,
and consider a compact table of contents only for notes above a measured length
threshold. Do not add reading progress merely as decoration.

### P3 optional

- Add topic filters or an anchored topic index to Engineering only after the
  featured/current layer is measured.
- Add a desktop-only article TOC if long notes continue to exceed roughly ten
  sections and usability testing shows orientation difficulty.
- Add a small “decision / evidence / current state” visual key to case studies;
  avoid charts unless they encode real evidence.
- Consider a light-theme contrast refinement after a measured contrast audit;
  the dark theme should remain the primary identity.

## Recommended design direction

### Keep

- dark navy foundation with restrained teal and blue accents;
- monospace eyebrow labels as a technical annotation layer;
- generous single-column article width;
- concise technical metadata;
- text-based diagrams and accessible code/table containment;
- clear EN/ES route parity;
- restrained borders and one primary accent per content group;
- reduced-motion support and no decorative charts.

### Reduce or remove

- page-wide ambient layers that repeat the same orbit/grid/scanline idea;
- continuous animated sweeps across every card;
- nested rounded containers when a simple section would work;
- badges as the main way to communicate architecture;
- equal visual weight for archive notes, current practice, and primary CTAs;
- duplicated headline treatment in adjacent introductory surfaces.

### Target visual grammar

`Position → proof → decision → constraint → current state → next step`

The visual hierarchy should make that sequence obvious without adding more
copy. This supports seniority through judgment and structure rather than title
emphasis or visual spectacle.

## Component-level recommendations

1. `SiteHeader`: add active-route styling, `aria-current`, consistent
   focus-visible treatment, skip-to-content, and a properly inert/collapsed
   mobile drawer.
2. `Section`: support a restrained eyebrow and density variant so the same
   spacing contract can serve landing sections, dossiers, and archives without
   repeated one-off classes.
3. `SystemCard` / Systems page: introduce a compact `ArchitectureSummary` or
   `DecisionRow` pattern with constraint, response, and state; keep detailed
   evidence below.
4. Engineering listing: introduce `FeaturedNote` and `NoteCard` variants;
   current notes should not look identical to the archive.
5. Article route: introduce a reusable article header and optional measured TOC;
   keep the existing readable MDX primitives.
6. Visual tokens: centralize radius, border opacity, surface elevation, and
   ambient intensity so the site can become quieter without hand-editing every
   section.

## Page-specific recommendations

### Home

- Keep the current positioning as the visual anchor.
- Compress the mobile H1/intro block so one CTA enters the first viewport.
- Convert the engineering focus chips into a quieter secondary annotation.
- Present the signal board as a compact proof rail, not another stack of cards.
- Differentiate Businext, TR0V1, and Workforce through a summary row that
  exposes domain, architecture concern, and current state; preserve the content.
- Keep “How I engineer software” as the bridge from systems to process, but
  display the sequence as a short progressive rail rather than another panel of
  equal cards.

### Systems

- Add an at-a-glance index with three systems and one architecture distinction
  each.
- Keep each full case study, but establish a consistent top-level summary before
  the detailed blocks.
- Reduce nested surface changes and reserve accent treatment for architecture
  decisions or current state.
- Restore one final next-step CTA if human-approved in a later implementation
  brief.

### About

- Make professional progression a visual spine, ideally a short timeline or
  sequence of responsibility transitions, without inventing dates.
- Keep the capability taxonomy, but present it as four capability bands rather
  than four more card islands.
- Use leadership language through responsibility and decisions, not a larger job
  title treatment.
- Reduce repetition between the page description, profile panel, and first
  headline through spacing and typographic differentiation rather than copy
  deletion.

### Engineering listing

- Surface Articles 03, 02, and 01 as the current engineering sequence.
- Keep topic groups, but subordinate them to a current-practice section.
- Use date as supporting metadata; do not let March 2026 notes visually imply
  equal freshness with the September 2026 sequence.
- Show fewer tags in cards and let the article page carry the complete taxonomy.
- Contain or remove the decorative ambient overflow in a dedicated global-shell
  slice.

### Article reading experience

- Preserve the `max-w-3xl` reading column and local code/table scrolling.
- Keep one H1, clear H2 sections, text-equivalent diagrams, and descriptive
  related links.
- Reduce visual repetition in H2 borders and metadata boxes.
- Add a TOC only when article length and testing justify it; prefer a static,
  accessible list of section links over a heavy interactive sidebar.
- Do not add reading progress unless it improves orientation in measured testing.

## Mobile recommendations

- Use a tighter responsive type scale for Home and long page headings.
- Keep touch targets at least the current comfortable button size.
- Verify drawer focus order, escape/return focus, and language-switch behavior.
- Preserve intentional table/code scrollers; never allow page-level horizontal
  movement.
- Avoid stacking three equal CTAs where one primary action is enough.
- Reduce the amount of nested border contrast on narrow screens.
- Validate at 360px and 390px widths, with text zoom and reduced motion enabled.

## Accessibility considerations

- Add a skip link and a clear `main` target.
- Add active-route semantics and focus-visible styles for nav, card links, and
  inline links.
- Make the closed mobile drawer inert/hidden to keyboard and assistive tech;
  manage focus on open/close.
- Run a real contrast audit for muted/opacity text over gradients in dark and
  light themes.
- Preserve reduced-motion behavior; remove default continuous motion where it
  carries no meaning.
- Keep text diagrams understandable without color and tables/code locally
  scrollable.
- Verify focus is not hidden behind the sticky header when following anchors.

## Motion and interactivity

Use motion to explain state: entering a section, opening a drawer, focusing a
control, or revealing a related note. Avoid motion that only signals “activity.”
The preferred sequence is:

1. one subtle page ambient layer;
2. short reveal on first load;
3. hover/focus transition on actionable elements;
4. no continuous sweep across content cards.

## Proposed implementation slices

1. **Baseline and global accessibility** — measure 360/390/768/1280 widths,
   capture current screenshots, fix ambient containment, add skip/focus/active
   route and drawer behavior. P1.
2. **Home hierarchy** — responsive hero type/spacing, first-viewport CTA,
   compact proof rail, and restrained ambient treatment. P1.
3. **Systems architecture index** — decision rows, comparison/index, reduced
   nesting, and one final CTA. P1/P2.
4. **Engineering discovery** — current-practice/featured layer, archive groups,
   calmer card metadata, and topic index only if needed. P1/P2.
5. **Article reading system** — heading rhythm, related-note treatment, and
   optional length-gated TOC. P2/P3.
6. **Theme and motion refinement** — contrast audit, ambient budget, reduced
   animation, hover/focus polish, and EN/ES visual parity regression. P2.

## Before / after conceptual description

### Current

The visitor moves through a polished sequence of similarly styled surfaces:
hero, panel, cards, nested cards, metadata, badges, and ambient effects. The
technical content is strong, but the UI asks the visitor to infer which surfaces
are proof, which are taxonomy, and which are next actions.

### Proposed

The visitor sees a quiet positioning anchor, a compact proof signal, an
architecture index, then detailed decisions and evidence. Current notes are
visibly current, archive notes remain available, and articles become calm,
focused reading environments. The same dark identity remains, but fewer visual
effects and stronger information roles make the experience feel more like an
architect's working notebook than a generic developer portfolio.

## Human decision checklist

- [ ] Approve the structural direction: fewer nested cards and stronger
  decision/constraint/state hierarchy.
- [ ] Approve a mobile Home change that brings one CTA into the first viewport.
- [ ] Approve the Systems architecture index/decision-row pattern.
- [ ] Approve a featured/current Engineering Notes layer for Articles 01–03.
- [ ] Approve the global accessibility slice: skip link, active route, focus,
  and inert mobile drawer.
- [ ] Decide whether the pre-existing `engineering-ambient` overflow is fixed in
  the global slice or explicitly accepted.
- [ ] Decide whether a Systems end CTA should be exposed.
- [ ] Decide whether a length-gated article TOC is worth implementation.
- [ ] Require visual QA at 360px, 390px, 768px, and 1280px after each slice.
- [ ] Preserve the approved claims, bilingual content architecture, dark theme,
  performance budget, and public privacy boundaries.

`G1 EXPERIENCE AUDIT = PASS`
