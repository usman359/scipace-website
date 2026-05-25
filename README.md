# Scipace Website

Marketing landing page for [Scipace](https://scipace.com) — built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start Vite dev server with HMR              |
| `npm run build`   | Type-check and build static site to `dist/` |
| `npm run preview` | Preview the production build locally        |
| `npm run lint`    | Run ESLint                                  |

## Project structure

```
src/
├── App.tsx                 # Page layout and sections
├── main.tsx                # React entry point
├── styles/index.css        # Global styles and design tokens
├── lib/                    # Utilities (scroll, nav config)
└── components/
    ├── layout/             # Header, footer
    ├── sections/           # Page sections (hero, mission, FAQ, …)
    ├── shared/             # Reusable UI (logo, headings, scroll links)
    └── ui/                 # shadcn/ui primitives
```

## Editing content

- **Page composition:** [`src/App.tsx`](src/App.tsx)
- **Section copy:** files in [`src/components/sections/`](src/components/sections/)
- **Navigation targets:** [`src/lib/nav-sections.ts`](src/lib/nav-sections.ts)
- **Colors and theme:** CSS variables in [`src/styles/index.css`](src/styles/index.css)

## Deployment

This is a **static site**. After `npm run build`, deploy the `dist/` folder.

**AWS S3 + CloudFront (step-by-step):** see [docs/DEPLOYMENT-AWS.md](docs/DEPLOYMENT-AWS.md)

Quick deploy after setup:

```bash
cp .env.deploy.example .env.deploy
# Edit .env.deploy with your S3 bucket and CloudFront distribution ID
npm run deploy:aws
```

Other hosts: Vercel, Netlify, Cloudflare Pages — build command `npm run build`, output `dist/`.

## Tech stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React](https://react.dev/) — UI
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [shadcn/ui](https://ui.shadcn.com/) — accessible components
- [Lucide](https://lucide.dev/) — icons
