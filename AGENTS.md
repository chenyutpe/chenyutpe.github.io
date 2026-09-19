# Working on this website

## Context

This is Yu Chen's professional personal website for academic and industry audiences. Its research-centered identity is intentional. It uses Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, with static export for GitHub Pages.

## Scope and collaboration

- Make small, coherent changes that address the requested outcome.
- Preserve existing content, layout, visual identity, and animations unless changing them is part of the task.
- Treat requests to discuss, review, or compare as analysis; implement when requested.
- When a meaningful design choice is unresolved, present a concrete recommendation or comparison before applying it. Resolve routine implementation details independently within the agreed scope.
- Complete authorized implementation and relevant verification without repeatedly asking for permission.
- Report unrelated findings separately rather than incorporating them into the current change.

## Repository conventions

- `src/app/`: pages, layout, and global CSS.
- `src/components/`: reusable UI.
- `src/data/`: work and CV content.
- `src/lib/animations.ts`: shared animation definitions.
- `public/`: static assets.

Reuse existing components, theme tokens, and data structures where appropriate. Keep changes compatible with static export. Propose dependency, framework, or UI-toolkit changes with their rationale before introducing them, unless already authorized by the task.

Preserve factual details such as author ordering, titles, and awards. Ask for missing information rather than inventing it.

Consult [design decisions](docs/design-decisions.md) when changing visual styling, site identity, or content hierarchy. Its future directions provide context, not implementation authorization.

## Development and verification

Use npm with the existing `package-lock.json`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local preview |
| `npm run dev -- --webpack` | Preview fallback when Turbopack causes problems |
| `npm run lint` | Run ESLint |
| `npm run build` | Build the static export in `out/` |

There is currently no test script. Reuse a working preview server when possible.

- Match verification to the change's impact; documentation-only edits need content, link, and diff checks rather than a site build.
- Inspect visual changes in the browser. Check both themes when theme-dependent, desktop and mobile when layout or navigation is affected, and hover states or transitions when interaction styling changes.
- For behavior changes, exercise the affected behavior and run relevant available checks. Add regression tests when they meaningfully protect behavior.
- Distinguish checks actually performed from assumptions or unverified behavior. Report pre-existing failures separately.

## Completion and Git

- Review the diff for unintended changes and summarize what changed, how it was checked, and any remaining limitation.
- Commit and push when explicitly requested. Authorization to publish one change does not authorize publishing future changes.
- Pushing to `main` triggers the GitHub Pages deployment workflow in `.github/workflows/deploy.yml`.

## Documentation maintenance

When intentionally changing a documented decision, update its entry and rationale in the same change. Keep these instructions and the design record concise and current; replace superseded guidance rather than accumulating contradictory rules.
