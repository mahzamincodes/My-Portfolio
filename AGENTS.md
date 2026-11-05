# AGENTS.md

This is a single-package Next.js 16 app (not a monorepo). The entrypoint is `src/app/`.

## Developer commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack (default port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |

## Key configuration

- `next.config.mjs` — enables `reactCompiler: true` and Turbopack CSS rules for Tailwind CSS 4
- `eslint.config.mjs` — global ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`
- Tailwind CSS 4 is configured via Turbopack rules in `next.config.mjs`, not `tailwind.config.*`
- `jsconfig.json` — provides `@/*` path mapping to `src/*` for editor IntelliSense
- Font: Geist is loaded automatically via `next/font` (Geist Sans / Geist Mono); classes `font-sans` / `font-mono` are used in `layout.js`

## Conventions & quirks

- **App router**: routes map to files under `src/app/`. `page.js` is the home route; `layout.js` is the root layout.
- **React Compiler** is enabled — JSX is compiled differently than in older Next.js versions. Don't assume `className` processing or `useState` behavior is identical to Next.js 14/15.
- **Tailwind CSS 4** via Turbopack — CSS is processed by Turbopack in dev, not `postcss`. The `globals.css` uses `@import "tailwindcss"` and a `@theme` block for CSS variables.
- ESLint is configured via `eslint.config.mjs` with `eslint-config-next`. Do not modify `globalIgnores` unless you understand the impact on Next.js default ignores.

## What to avoid

- Do not modify `next.config.mjs` `reactCompiler` setting unless you've verified the build impact.
- Do not expect a `tailwind.config.*` file — Tailwind is configured via Turbopack rules in `next.config.mjs`.
- Do not run `next build` outside a terminal with Node 20+ (Next.js 16 requires it).

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
