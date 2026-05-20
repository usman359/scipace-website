# Scipace Website — Agent Guide

React + Vite static landing page. **Do not use Next.js** — this project has no App Router, `next/image`, `next/link`, or server components.

## Stack

- **Vite 7** — dev server (`npm run dev`, port 5173) and production build (`dist/`)
- **React 19** — client-only SPA
- **TypeScript** — strict mode
- **Tailwind CSS 4** — styles in `src/styles/index.css`
- **shadcn/ui** — components in `src/components/ui/`

## Path aliases

`@/` maps to `src/`:

```ts
import { SiteHeader } from "@/components/layout/site-header";
import { scrollToSection } from "@/lib/scroll";
```

## Conventions

- **Sections** live in `src/components/sections/`
- **Layout** (header/footer) in `src/components/layout/`
- **Shared** primitives in `src/components/shared/`
- In-page navigation uses `scrollToSection()` from `@/lib/scroll` — **no hash URLs** (`#mission`)
- Section IDs are defined in `@/lib/nav-sections.ts`

## Adding shadcn components

```bash
npx shadcn@latest add <component>
```

Config: [`components.json`](components.json) (`rsc: false`, CSS: `src/styles/index.css`).

## Do not

- Add Next.js or migrate routes to `app/`
- Use `next/link` or `next/image`
- Reference `app/page.tsx` or `app/layout.tsx` (removed)

## Verify changes

```bash
npm run build
```
