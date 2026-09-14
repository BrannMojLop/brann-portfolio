# Article 02 experience review

Reviewer: `portfolio-experience-reviewer`
Mode: independent post-implementation review
Scope: Article 02 EN/ES routes, Engineering listings, long-form rhythm, diagrams,
related-note navigation, and responsive behavior.

## Finding and fix

`P1 FIXED` — On the available narrow browser surface, the unstyled `<pre>`
elements allowed long diagram lines to enlarge the document beyond the mobile
viewport. The maintainer added a scoped shared MDX `<pre>` treatment in
`lib/mdx.tsx`: `max-w-full` contains the block and `overflow-x-auto` preserves
readability for lines that cannot wrap. This is a small rendering adjustment
required by the approved diagram requirement and does not alter note bodies.

## Verification

- EN Article 02 rendered with the approved title, deck, metadata line, headings,
  lists, three text diagrams, and related-note links.
- ES Article 02 rendered with the approved Spanish title, deck, metadata line,
  headings, lists, three text diagrams, and related-note links.
- EN and ES listings show Article 02 under the architecture theme before the
  existing Article 01 note.
- Desktop browser surface: title, deck, navigation, typography, and first
  content section were visually reviewed in Chrome with device emulation off.
- Mobile browser surface: Chrome Samsung Galaxy S8+ emulation at `360 × 740`
  was reviewed. After the fix, document width was `360/360`; the three `<pre>`
  blocks remained contained with internal horizontal scrolling where needed.
- Accessible browser tree exposes the article H1, section headings, lists,
  diagram text, and descriptive related-note link names.

## Result

`PASS` — no open experience finding remains within the approved scope. The
article remains a long-form engineering note rather than a broad redesign.
