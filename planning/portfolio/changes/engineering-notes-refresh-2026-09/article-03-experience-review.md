# Article 03 — Experience review

## Reviewer

`portfolio-experience-reviewer` — independent rendered-route review.

## Checked

- EN and ES article routes;
- EN and ES Engineering listing discovery;
- long-form reading rhythm and content width;
- title/deck/metadata rhythm;
- H1/H2 hierarchy;
- lists, responsibility/test tables, code blocks, and text diagrams;
- approved related-note navigation;
- narrow/mobile viewport and wide browser viewport.

## Findings

### Finding E03-01 — RESOLVED

The ES article's responsibility and test tables extended beyond the small
viewport before table containment was added. This was a real readability and
horizontal-scroll issue.

**Fix:** `lib/mdx.tsx` now renders each table inside a full-width horizontal
scroller. Post-fix checks show `pageOverflow: false`; the table scroll remains
local to the table wrapper.

### Finding E03-02 — OUT OF SCOPE / DOCUMENTED

At one narrow listing width, the pre-existing `engineering-ambient` decoration
has a scroll width wider than its container. It is not caused by Article 03 and
does not appear on the Article 03 article routes. No unrelated listing redesign
was authorized.

## Result

`PASS` after E03-01 correction. The article is readable at the checked wide
viewport and narrow/mobile viewport. Text diagrams remain understandable
without color, and the only horizontal scrolling after the fix is intentional
inside code/table containers.
