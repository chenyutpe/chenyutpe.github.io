# Design decisions

This document records the current agreed baseline and its rationale. Decisions may evolve with the website. When intentionally changing a documented decision, update its entry and rationale in the same change. Keep open questions separate from accepted decisions; neither an open question nor a future direction authorizes implementation.

## Purpose and identity

- The site is a professional personal home for research, work, and selected interests, serving both academic and industry audiences.
- Research prominence is intentional. The site does not need equal amounts of academic and industry material.
- Keep the homepage tagline **HCI & XR | Creative Technology**. Creative Technology remains part of the intended identity even while the presented work is predominantly academic.
- Preserve the existing nature-and-technology character: warm light surfaces, deep blue dark surfaces, green accents, soft glows, and motion.

## Theme and green accents

| Role | Current decision | Rationale |
| --- | --- | --- |
| Light background | `#FFF8E7` (`cosmic-latte`) | Warm, soft foundation |
| Dark background | `#000718` (`cosmic-blue`) | Deep blue foundation |
| Neutral foreground | Light `#27303e`; dark `#f1f5f9` | Theme-dependent primary text |
| General green text | Light `#83b06c`; dark `#a0d4a0` (`organic-strong`) | Balance the visual identity and readability |
| Homepage tagline | `#a0d4a0` in both themes (`organic-green`) | Retain its distinctive pale-green character |
| Decorative green | Retain fixed pale green with existing opacity where applicable | Glows, borders, and dots have different roles from text |

In `src/app/globals.css`, `organic-strong` resolves through `--organic-text-dynamic`; `organic-green` is fixed pale green. `organic-dark` currently supplies the light-theme green despite its name. Avoid blanket replacements that erase the tagline or decorative exceptions.

The `@theme inline` mapping `--color-foreground: var(--foreground)` enables theme-aware Tailwind utilities such as `text-foreground` and `text-foreground/80`. Keep that mapping functional when changing the color system.

Green accents appear in active navigation, featured-work type labels, publication year headings, CV section headings, About's name and emphasis, and selected hover states. Existing award-badge colors retain their separate roles.

### Known readability tradeoff

Light-mode green remains low contrast, particularly for small labels. The pale tagline intentionally favors its softer appearance. These choices do not establish accessibility compliance; small green labels remain a candidate for a separate improvement. Reconsider them through an actual visual comparison rather than silently darkening every accent.

## Typography

- Use Inter throughout the site for a consistent typeface across devices. Keep existing sizes, weights, spacing, and animations; review wrapping when changing typography.
- Apply the existing `next/font/google` Inter class to the body. Next.js serves the generated font assets with the static site; the build still needs access to Google Fonts.
- Use Inter in the sharing image as well for a consistent identity.

## Text hierarchy

Choose emphasis according to what the reader needs to notice. Opacity is not a universal ranking applied identically to every page.

| Text role | Accepted treatment | Rationale |
| --- | --- | --- |
| Yu Chen in author lists | Full foreground, bold | Make the site owner's name identifiable at first glance |
| Coauthors | `text-foreground/60` | Keep attribution visible while preserving the owner's prominence |
| Homepage introduction and featured-work descriptions | `text-foreground/80` | Support titles without competing with them |
| CV institutions, organizations, and supporting details | `text-foreground/80` | Maintain readable supporting context |
| CV dates, featured-project dates, and skill-category labels | `text-foreground/75` | Keep metadata subordinate but legible |
| Primary titles, inactive navigation, and individual skill names | Full foreground | Preserve clear scanning and navigation |
| Active navigation | Theme-dependent green | Identify the current page |
| About biography, including green emphasis | Parent `opacity-80` | Keep emphasis softly integrated with the paragraph |
| About goal statement | Full foreground with full-strength theme-dependent green emphasis | Give the central goal more prominence than supporting prose |
| About closing sentence | `text-foreground/80` | Support the goal statement |

`text-foreground/80` changes the text color's alpha. Parent `opacity-80` fades the entire group, including colored descendants. About's biography deliberately uses the latter. Do not combine the two for the same text unless the additional fading is intentional.

These are role-specific decisions, not instructions to apply opacity suffixes indiscriminately to new text.

## Motion and layout

- Existing entrance animations, hover behavior, and theme transitions are part of the visual identity. Preserve them during unrelated styling or structural cleanup.
- Respect the device's reduced-motion preference: suppress entrance transforms, decorative movement, CSS transitions, and automatic preview-video playback. Keep gentle entrance fades and allow manual playback through featured-video controls. Normal motion remains the default experience.
- Keep `scrollbar-gutter: stable` on `html` to prevent horizontal content and navbar shifts between pages with different scrolling needs.
- Existing page layouts and publication presentation are the baseline. Discuss substantial changes before implementing them unless the current task already authorizes them.
- CV education and experience date ranges stay on one line. Below the `lg` breakpoint, place dates beneath their titles to avoid squeezing them beside long headings.
- Use `Quant/Qual` in compact CV skill labels; spelling out both terms made the badges unnecessarily tall in the three-column layout.

## Accessible navigation

- Give icon-only links and buttons accessible names without adding visible text beside them.
- Expose the mobile navigation's expanded state and current-page links. Escape closes the mobile navigation and returns focus to its button.
- Use a foreground-colored focus outline for keyboard navigation so it remains visible in both themes without changing the green palette.

## Page metadata and sharing

- Keep site defaults and the metadata helper in `src/lib/metadata.ts`; put each page's title, description, and canonical path in its route layout. Server layouts supply metadata while existing client pages retain their animations.
- Use `Yu Chen` for the home title and `Page | Yu Chen` for other pages to identify browser tabs and shared links clearly.
- Share one 1200 × 630 preview image with a cream background (`#FFF8E7`), pale-green and blue glows, dark name and URL, and a green tagline (`#83b06c`). This preserves the warm identity while making the tagline clearer than pale green at thumbnail sizes.
- Set the sharing-image tagline in Inter at 44 px, regular weight, mixed case, and 1 px letter spacing. Judge it separately from the homepage's pale-green uppercase tagline because the image scales down as a whole. `public/social-preview.svg` is the editable source; regenerate `public/social-preview.png` when changing it.
- Update metadata when a page's purpose changes. Future project metadata should reuse project content rather than duplicate descriptions. Ordinary CV edits do not require metadata changes.

To regenerate the sharing image from the repository root (using Sharp installed with Next.js), ensure Inter is available to the SVG renderer through Fontconfig first. Otherwise it may silently use a fallback. Use an installed Inter font or set `FONTCONFIG_FILE` to a configuration that includes its directory, then inspect the generated image.

```sh
node -e "require('sharp')('public/social-preview.svg').png().toFile('public/social-preview.png')"
```

## Future directions and open questions

These items are not implemented requirements or permission to start work:

- Add a Projects index and individual project pages, initially for the two works currently featured on the homepage.
- Present project stories through motivation, what was done, results, and, where useful, tools and presentation context. Detailed content still needs to be supplied or verified.
- Decide how to extend the site beyond research, including whether and how casual interests belong in its professional presentation.
- Revisit readability of small green labels, especially the widely spaced CV section headings in light mode.
- Consider clearer color-token names while retaining the distinction between theme-dependent text and fixed decorative or tagline colors.

Keep this section short. Move a direction into the accepted sections when it is decided, and update implementation status when the corresponding work is completed.
