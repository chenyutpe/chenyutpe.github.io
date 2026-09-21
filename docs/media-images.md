# Still-image delivery

## Baseline and result — 21 September 2026

The baseline includes the switch of `publication_03` (RoomDreaming) to video. Only four still images are currently rendered across Home, About, and Publications; unused source images and the social sharing image are outside this change.

| Image | Original bytes | Served WebP bytes | Derivative dimensions |
| --- | ---: | ---: | --- |
| Homepage portrait | 1,601,709 | 15,476 | 560 × 560 |
| About photo | 1,508,026 | 119,258 / 336,854 | 720 × 960 / 1440 × 1920 |
| Publication 05 | 5,204,785 | 70,350 | 720 × 239 |
| Publication 06 | 7,256,633 | 124,270 | 720 × 403 |

Across all three pages, the four images total **15,571,153 bytes before**, versus **329,354–546,950 bytes after** (96.5–97.9% less). The browser selects one About size, not both. These are image payload sizes, not total page weight or measured page-load speedups.

At the same reduced dimensions, PNG alternatives were 524,889 bytes for the portrait, 453,107 for publication 05, and 850,468 for publication 06. A quality-85 JPEG of the 1440 px About photo was 380,565 bytes. WebP gave the smaller files with acceptable detail at the site's display sizes. The retained originals remain available for future larger project-page images.

## Generation and editing

Run from the repository root after updating an original:

```sh
npm run media:images
```

The script uses Sharp, already installed by Next.js in the existing lockfile. It writes five WebP files to `public/images/`; commit those files with their references. Generation is an explicit maintenance step, not a runtime service or an extra build requirement.

- Keep originals at their current paths. The CHI photo needs EXIF auto-orientation before resizing; the script applies it. Preserve image transparency.
- Portrait: 560 px supports the 280 px desktop container at 2× density. Retain priority loading and the existing fixed circle.
- About: native `<picture>` selection supplies 720 or 1440 px according to the declared display size and screen density. Keep lazy loading, the 4:5 container, and `object-cover` crop. Revisit `sizes` if this grid changes.
- Publication images: 720 px supports their 240 px maximum display width at 3× density. Keep lazy loading and supply `mediaWidth`/`mediaHeight` in work data to reserve the aspect ratio. Update these dimensions when replacing a derivative.
- Compression settings are in `scripts/optimize-images.mjs`: quality 85 for portraits, 90 for publication figures. Review new images at their actual display size; do not apply these settings blindly to diagrams or text-heavy figures.
- Keep Next.js `images.unoptimized: true`. The generated files are served directly by GitHub Pages; no image optimization server is needed.

## Verification and limits

- Built separate production static exports before and after the changes; both passed compilation and TypeScript checks. The development server's build output was not reused for measurements.
- Inspected images side by side at their displayed sizes, in color and grayscale against light and dark backgrounds. Checked site layouts at 1280 px desktop and 390 px phone widths.
- Publication image content boxes remained approximately 190 × 106 / 190 × 63 px on desktop and 238 × 133 / 238 × 79 px on phones (excluding borders).
- In the initial 390 px Publications view, the browser fetched publication 06 but deferred publication 05. Both loaded after scrolling, with their space already reserved. Native lazy loading can fetch ahead of the viewport; its threshold is browser-dependent.
- Local resource timing confirmed WebP requests and warm-cache reuse (zero transferred bytes for the two cached publication images). The observed production-page runs recorded no non-input layout-shift entries. This is a local observation, not a field Core Web Vitals score.
- RoomDreaming's new video decoded as 1920 × 1080 and played successfully. Video loading/playback code was not changed.
- Lint: no errors; one pre-existing `no-img-element` warning in the unused image branch of `FeaturedWork.tsx`.

These checks used a local static server, a 1× browser display, and no mobile-network throttling. Network-limited loading, high-density physical displays, and public GitHub Pages performance remain to be measured. Video requests still start offscreen; posters and visibility-based video loading are the next separate step.
