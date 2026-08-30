# Raif Karaahmetoğlu — Portfolio (v2)

Personal portfolio site for Raif Karaahmetoğlu, a software & control engineer. This is the **second version** of the site: the first was a hand-built React app with a generic Material UI look. This rebuild started from a visual redesign produced in **Claude Design** — the design was drafted entirely in HTML/CSS/JS there first, then that design was implemented as a real React application, replacing the old MUI-default styling with a dedicated design-token system (colors, type, spacing, effects) while keeping the original site's content and core structure.

## What's in this version

- A true single-page layout — Home, Experience, Projects, Skills, and Contact as anchored sections behind a floating pill-shaped nav with scroll-spy active-state highlighting
- A new **Experience** section (a timeline of past roles) that didn't exist in the first version
- Project detail views open as a modal instead of a separate page, with the open project synced to the URL (`?project=<id>`) so links stay shareable
- A design-token system (CSS custom properties) driving both custom components and a matching MUI theme, so Material UI components and hand-built ones share one palette
- Light and dark themes, light by default, togglable from the nav and persisted per visitor
- Static pre-rendering (SSG) at build time for the homepage

## Technologies used

- **[React 19](https://react.dev/)** + **[React Router 8](https://reactrouter.com/)** (framework mode) — routing, layouts, and static pre-rendering
- **[Vite](https://vitejs.dev/)** — dev server and build tooling
- **[TypeScript](https://www.typescriptlang.org/)** — throughout the app
- **[MUI (Material UI) v9](https://mui.com/)** with **[Emotion](https://emotion.sh/)** — component primitives, restyled via CSS custom properties rather than MUI's default theme
- **[Tailwind CSS v4](https://tailwindcss.com/)** — available via `@tailwindcss/vite`, used sparingly for a few utility classes
- **[react-hook-form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — contact form state and validation
- **[EmailJS](https://www.emailjs.com/)** (`@emailjs/browser`) — sends the contact form without a backend
- **Design source:** [Claude Design](https://claude.ai/design) — the visual redesign (tokens, layout, copy direction) was authored there as an HTML/CSS/JS prototype and used as the implementation reference for this React rebuild

## Getting started

Install dependencies:

```bash
npm install
```

Copy `.env.example`-style variables into a local `.env` (see [Environment variables](#environment-variables) below), then start the dev server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

### Other scripts

```bash
npm run build      # Production build (static site, output in dist/client)
npm run start      # Serve the built app with react-router-serve
npm run typecheck  # Generate route types and run tsc
```

## Environment variables

The contact form sends mail via EmailJS and needs three variables, loaded by Vite from a local `.env` file (gitignored):

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Get these from your [EmailJS dashboard](https://dashboard.emailjs.com/admin/account). The public key is meant to be exposed client-side — that's part of how EmailJS's security model works.

## Building & deployment

This app runs in **SPA mode with pre-rendering** (`ssr: false` + `prerender: ["/"]` in `react-router.config.ts`), and builds to `dist/` instead of React Router's default `build/` directory (`buildDirectory: "dist"`), since most static hosts default to expecting a `dist` publish folder.

```bash
npm run build
```

produces:

```
dist/
├── client/   # the static site — point your host's publish directory here
└── server/   # only needed if you run `npm start` as a Node server
```

A `netlify.toml` is committed with the build command, publish directory (`dist/client`), and the SPA fallback redirect needed for client-side routing.

## Project structure

```
app/
├── routes.ts              # Route table (single page + 404 catch-all)
├── root.tsx                # App shell: theme provider, fonts, EmailJS init
├── app.css                  # Design tokens (light + dark) and base styles
├── data.ts                  # All site content: bio, experience, projects, skills, copy
├── types.ts                  # Shared TypeScript types
├── lib/                       # Small framework-agnostic helpers (scroll, theme)
├── components/                 # Reusable pieces (Header/nav, Footer, cards, project modal)
└── routes/                      # Page sections (Profile/Home, Experience, Skills, Projects, Contact)
```
