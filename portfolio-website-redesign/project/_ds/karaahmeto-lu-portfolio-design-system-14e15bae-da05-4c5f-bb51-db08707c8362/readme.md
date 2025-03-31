# Karaahmetoğlu Portfolio — Design System

A redesign system for **Raif Karaahmetoğlu's** personal portfolio: a software & control engineer showcasing mechatronics, embedded control, and simulation projects (GCDC, UCOK, engine modeling, automated tractors, EPA GEM, AVL ISAC/Route Studio).

The existing site (React + MUI, Vite) is functional but generic-MUI in feel. This system keeps its real content, structure, and a few signature motifs (the floating light pill nav, the gradient-ringed elliptical profile photo, the dark aurora-glow hero/footer) and rebuilds everything else — type, color, spacing, components — into a more modern, technical, professional aesthetic fit for a controls engineer's portfolio.

**Source:** [github.com/SonofDarkAhmet/portfolio](https://github.com/SonofDarkAhmet/portfolio) (branch `main`). Explore it directly for the original component code, copy, and asset URLs — it's the ground truth this system was derived from and a good next stop if you want to go deeper than what's captured here.

## Content Fundamentals

- **Voice:** first-person, plain and factual — "I am a dedicated software and control engineer…", "I enjoy my ability to adapt quickly…". No marketing hype, no forced enthusiasm. Sentences read like engineering reports: precise, results-oriented, technical vocabulary used without apology (LQR-based control, zero-dimensional modeling, CACC, RDE cycles).
- **Casing:** sentence case throughout; project titles are acronyms/proper nouns in Title/Upper case (GCDC, UCOK, ICE Model, AVL ISAC).
- **Structure:** each project has a short **description** (one line, what it is), a **headline** (1–2 sentence summary/result), and long-form **content** (3–5 paragraphs: context → approach → outcome). Consistent three-tier depth lets a visitor skim or dive in.
- **Tone:** serious, competent, understated. Outcomes are stated as fact ("Team Mekar finished 7th overall of 11 teams") not spun as triumphs. No emoji, no exclamation points, no filler adjectives ("amazing", "revolutionary").
- **Pronouns:** "I" for the owner; no direct address ("you") anywhere in the current copy — this is a CV/portfolio voice, not a marketing-site voice. Contact section switches briefly to a light, warm sign-off: "Thanks for visiting! Feel free to connect with me."
- **Vibe:** engineer-to-engineer. Assume the reader understands the domain; explain mechanisms, not benefits.

## Visual Foundations

- **Palette:** dark-first. Canvas is near-black cool slate (`--ink-950`), never pure `#000`. One accent family carries all emphasis: a muted cyan-blue "signal" color (nods to oscilloscope/telemetry traces, fitting a controls engineer), used sparingly for links, focus states, active tags, and CTA fills. A secondary amber exists only for rare highlight/status use. The original site's teal→mint gradient (`--gradient-legacy-ring`) is preserved as a single decorative accent — the ring around the profile photo — and nowhere else; it is a signature, not a texture to repeat.
- **Type:** Inter (sans) for everything humans read; JetBrains Mono for tags, skill labels, and small technical accents (a deliberate nod to "software engineer"). Headings lean thin/light-weight (100–300) at large sizes — restrained, not shouty. Body copy is justified in long-form project text (matches the original site) and left-aligned elsewhere.
- **Spacing:** 4px base scale (`--space-1`…`--space-32`). Sections use generous vertical rhythm (\~80px top/bottom padding) with a max content width (`--content-max: 1120px`) so text doesn't stretch on wide screens.
- **Backgrounds:** flat dark surfaces are the default. The only textured background is a very soft radial "aurora" glow (`--gradient-aurora`) behind the hero and footer only — one glow per view, never tiled or repeated as a pattern. No photography-as-background, no illustration, no grain.
- **Animation:** minimal and functional — hover/press transitions only (120–200ms, standard ease-out curves). No entrance animations, parallax, or bounce. This matches an engineering-tool sensibility: motion communicates state change, not delight-for-its-own-sake.
- **Hover states:** buttons and cards lighten/lift subtly (card: -4px translateY + border brightens; icon buttons: text shifts to accent color with a faint raised backdrop). No color-inversion hovers.
- **Press/active states:** no dramatic scale/shrink; rely on the same hover treatment holding through `:active` (kept subtle — this is a portfolio, not a game UI).
- **Borders:** 1px hairlines in a muted slate (`--border-subtle` / `--border-strong`), used to separate cards from the dark canvas rather than shadows alone.
- **Shadows:** two-tier system taken directly from the source code — `--shadow-card` (`0 4px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.08)`) for everyday cards/nav, `--shadow-raised` for modals and the project-detail overlay.
- **Radii:** small UI (badges, inputs) at 8–12px; cards at 16px; the nav bar and all buttons are fully pill-shaped (`--radius-pill`) — the pill is the site's one strong shape signature.
- **Layout rules:** the nav is a fixed, floating pill centered at the top of the viewport (not a full-width bar) — a deliberate departure from typical site chrome. Content scrolls beneath it.
- **Transparency/blur:** used exactly once — the project-detail modal's backdrop (`rgba(5,7,11,.88)` + blur) to focus attention without full-black.
- **Imagery vibe:** project photography is documentary/technical (lab benches, vehicles, CAD renders, competition photos) — cool-neutral, no filters, no forced warmth. The profile photo is the only "polished" portrait shot.
- **Cards:** dark surface, 1px hairline border, 16px radius, `--shadow-card`, no colored left-border accents, no colored top bars.

## Iconography

- **No system icon font in the source** — the original app uses **MUI Icons** (`@mui/icons-material`, one SVG-backed React component per icon: `GitHubIcon`, `LinkedInIcon`, `ArrowBackIcon`, `ShareIcon`, `SendIcon`, `ExpandMoreIcon`, `FavoriteIcon`, `CancelPresentationIcon`). Since MUI isn't part of this design system's own dependency set, the UI kit inlines equivalent outline-style SVGs (GitHub mark, LinkedIn mark, share glyph) directly in the components that need them — same visual weight, no icon library required.
- **Skill logos** are third-party brand marks hot-linked from `cdn.jsdelivr.net/gh/devicons/devicon` (MATLAB, C, C++, Python, JS, HTML, CSS, React, Material UI) plus one local `ea-logo.png`. These are **not part of this design system's asset set** — they're per-skill third-party logos and should be sourced live per-project rather than copied in.
- **No emoji, no unicode-glyph icons** anywhere in the source.
- **Favicon** (`batdev.png`) is a novelty Batman/dev mashup icon — not a real brand mark, excluded from `assets/` (see Assets note below).
- This system does not bundle its own icon set. For new UI, either draw simple 20–24px outline SVGs matching the style already inlined in `IconButton`/`ProjectDetail`, or link a stroke-style CDN set (Lucide/Heroicons) if broader coverage is needed — flag any such substitution.

## Assets

- `assets/photos/profile-pic.jpeg` — the owner's real portrait, used in `Avatar`.
- `assets/projects/*` — real project photography/renders copied from the source repo (GCDC, UCOK, ICE model, tractor, GEM, ISAC, Route Studio).
- **No logo/wordmark exists for this brand.** The favicon is a joke image, not a mark — do not use it. Anywhere a logo would go, render "Raif Karaahmetoğlu" (or "raif.dev") in type, per this system's type tokens.

## Intentional additions

Since the source is a from-scratch MUI app rather than a documented component library, this system authors a standard small primitive set sized to what the portfolio actually uses: **Button, IconButton, Badge, Avatar, SectionTitle, ProjectCard, NavPill, Input, Toast** — one component per real usage in the source (nav buttons → `Button`/`NavPill`, social icons → `IconButton`, skill tags → `Badge`, profile photo → `Avatar`, section headers → `SectionTitle`, project tiles → `ProjectCard`, form fields → `Input`, share/submit confirmations → `Toast`). No speculative additions beyond this (no Tabs, Select, Checkbox, etc. — the source doesn't use them).

## Index

- `styles.css` — root stylesheet; import this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `fonts.css`.
- `guidelines/` — 13 foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab.
- `components/core/` — Button, IconButton, Badge, Avatar, SectionTitle, ProjectCard.
- `components/navigation/` — NavPill.
- `components/forms/` — Input.
- `components/feedback/` — Toast.
- `ui_kits/portfolio/` — full interactive recreation of the portfolio site (`index.html`).
- `assets/` — real photos and project imagery copied from the source repo.
- `SKILL.md` — Claude Code / Agent Skills-compatible entry point for this design system.
