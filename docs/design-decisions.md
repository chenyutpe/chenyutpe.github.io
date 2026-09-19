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
- Keep `scrollbar-gutter: stable` on `html` to prevent horizontal content and navbar shifts between pages with different scrolling needs.
- Existing page layouts and publication presentation are the baseline. Discuss substantial changes before implementing them unless the current task already authorizes them.
- CV education and experience date ranges stay on one line. Below the `lg` breakpoint, place dates beneath their titles to avoid squeezing them beside long headings.
- Use `Quant/Qual` in compact CV skill labels; spelling out both terms made the badges unnecessarily tall in the three-column layout.

## Future directions and open questions

These items are not implemented requirements or permission to start work:

- Add a Projects index and individual project pages, initially for the two works currently featured on the homepage.
- Present project stories through motivation, what was done, results, and, where useful, tools and presentation context. Detailed content still needs to be supplied or verified.
- Decide how to extend the site beyond research, including whether and how casual interests belong in its professional presentation.
- Revisit readability of small green labels, especially the widely spaced CV section headings in light mode.
- Consider clearer color-token names while retaining the distinction between theme-dependent text and fixed decorative or tagline colors.

Keep this section short. Move a direction into the accepted sections when it is decided, and update implementation status when the corresponding work is completed.
