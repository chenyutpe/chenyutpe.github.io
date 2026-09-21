# Website TODOs

Prioritize helping visitors understand the work, then improve delivery, then add playful details. Preserve the site's research-centered identity and existing visual style.

This is a planning list, not blanket implementation authorization. Work in small, reviewable steps. Keep priorities and status current; remove completed items once their outcome is captured in Git history or [design decisions](design-decisions.md). Effort is relative, not a time estimate.

## Next

### 1. Media loading improvements

**Importance:** High. **Effort:** Medium.

- Measure loading before changing behavior, particularly on mobile connections.
- Review the roughly 5 MB and 6.9 MB publication PNGs for resizing and compression.
- Evaluate starting preview playback near the viewport and pausing offscreen videos; preserve reduced-motion behavior and featured-video controls.
- Verify visual quality, playback, and loading after changes. Keep static export compatible with GitHub Pages.

### 2. Project pages

**Importance:** High. **Effort:** Large; split into milestones.

1. Prepare the Reacquainting/GreenAR story: motivation, approach, key findings, selected visuals, and relevant tools and links. Use the paper to verify research details.
2. Build and review one complete project page.
3. Prepare and build Birdsong of the Island's story, including its concert setting and outcomes.
4. Add the Projects index, navbar item, and links from Featured Works.

Reuse shared work metadata rather than maintaining separate copies of titles, authors, and links across featured entries, publications, and project pages. Center the story; a separate role section is optional where ownership is already clear.

## Later

### 3. Focused readability and usability review

**Importance:** Medium–High. **Effort:** Small–Medium.

- Compare small green labels in light mode, especially CV section headings, without silently changing the palette.
- Check keyboard navigation, reduced motion, and narrow layouts; fix concrete findings.
- Continue relevant checks during each earlier milestone rather than postponing known defects until this review.

### 4. Content freshness — recurring

**Importance:** Medium. **Effort:** Small per update.

- Update current role, biography, and selected achievements when relevant information is available.
- Add work and interests when there is a worthwhile story to share; do not add sections merely to balance academic and industry content.

### 5. Playful 404 interaction

**Importance:** Low for core navigation; an opportunity for creative expression. **Effort:** Small–Large, depending on scope.

- Choose one lightweight interaction before considering a full mini-game.
- Keep the explanation and home link immediately available.
- Support touch, keyboard use, and reduced motion where applicable; avoid unnecessary loading overhead.

### 6. Internal cleanup — alongside related work

**Importance:** Low immediate visitor impact. **Effort:** Small–Medium.

- Consider clearer color-token names while retaining fixed and theme-dependent green roles.
- Review the hamburger-transition TODO against current behavior; remove or clarify stale comments.
- Replace unused `TBD` publication descriptions with an appropriate optional field when revisiting the data model. They are not currently displayed.

## Ideas

- Decide which non-research work or interests belong in this professional personal home as new material emerges.
- Revisit other typography, palette, or tooling choices only when a concrete need arises; current choices are sufficiently settled to proceed with content.
