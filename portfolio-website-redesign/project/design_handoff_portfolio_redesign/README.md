# Handoff: Portfolio Website Redesign

## Overview
A visual and interaction redesign of Raif Karaahmetoğlu's personal portfolio site (software & control engineer). Restructures the existing content into: hero with career-impact stat highlights, a work-experience timeline, case-study-style project cards, grouped skills, a validated contact form, and a footer — replacing the prior generic MUI look with a dark, technical, "engineer-report" aesthetic.

## About the Design Files
The files in this bundle (`Portfolio Redesign.dc.html` and the screenshots, if included) are **design references built in HTML** — high-fidelity prototypes showing intended look, layout, and behavior. They are **not production code to copy directly**. The task is to **recreate this design in the target codebase's existing environment** — the current site is React + MUI + Vite — using that stack's existing patterns/components (or, if starting fresh, choosing the most appropriate framework). Do not ship the HTML file itself; rebuild the UI natively in the app.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and component states below are final — implement pixel-for-pixel using the values in "Design Tokens." Copy/content is final real content (from the owner's résumé), not placeholder.

## Screens / Views
This is a single-page site with five in-page sections beneath a fixed nav, plus a modal overlay. All content sits on one continuous dark canvas (`--surface-canvas`, `#05070b` via `--ink-950`).

### 1. Nav (persistent, fixed)
- **Purpose:** jump to any section; reflects scroll position.
- **Layout:** floating pill, `position: fixed`, `top: 24px`, horizontally centered (`left:50%; transform:translateX(-50%)`), `z-index:50`.
- **Component:** pill container, background `--surface-pill` (`--paper-050` / near-white), fully rounded (`--radius-pill`). Five text buttons: Home, Experience, Projects, Skills, Contact. Active item gets a white/raised pill sub-background (`--surface-pill-hover`) behind its label; inactive items are plain text in `--text-on-pill-muted`.
- **Behavior:** clicking scrolls smoothly to the target section (offset ~90px above it for the fixed nav). Active state also auto-updates on scroll via viewport-intersection tracking of each section (not just click) — implement with `IntersectionObserver` (rootMargin biased so the section crossing ~40–45% down the viewport counts as "current"), plus a bottom-of-page check that forces the *last* nav item active when scrolled to the document's bottom (short trailing sections otherwise never win).

### 2. Home / Hero
- **Purpose:** identity + headline career stats.
- **Layout:** two-column grid (`auto auto` columns, 60px gap), centered as a block with `max-width:1400px; margin:0 auto; justify-content:center`. Section background is the one-time aurora glow (`--gradient-aurora`, a soft radial highlight, `oklch(45% 0.1 210 / 0.35)` fading to transparent, anchored above the section). Padding `170px 80px 90px` (top padding clears the fixed nav).
  - **Left column:** profile photo — circular/elliptical avatar (`border-radius:50%`, `aspect-ratio:3/4`), with a 3px padding ring using the legacy gradient (`--gradient-legacy-ring`: teal→mint diagonal). Current size in this mockup is intentionally large (~560px) per the owner's latest request — treat this as a live editable value, not a fixed spec; a more conservative default (~140–180px) is the original recommended size if the owner wants to dial it back.
  - **Right column**, top to bottom:
    - Name: "Raif Karaahmetoğlu", `--text-display` (clamp 2.75rem–4.5rem), weight `--fw-thin` (100), `--lh-display` 1.05, `--ls-display` -0.02em.
    - Eyebrow: "SOFTWARE & CONTROL ENGINEER", mono font, `--text-mono-label` (0.8125rem), letter-spacing `--ls-mono-label` (0.02em), color `--accent-primary`.
    - Bio paragraph (`--text-body-lg`/1.125rem, `--lh-body-lg` 1.6, color `--text-secondary`), max-width 620px. Exact copy: "I am a dedicated software and control engineer with a deep commitment to the core pillars of mechatronics: mechanical design, control systems and software development. I enjoy adapting quickly and expanding my knowledge to deliver innovative, high-impact solutions."
    - Two buttons, 14px gap: **"Get in touch"** (accent/filled, links to `#contact`) and **"Résumé"** (outline, downloads the résumé PDF).
    - Stat-card grid: 2×2 grid, 16px gap, max-width 620px (aligned to the bio's width). Each card: `--surface-card` background, 1px `--border-subtle` border, `--radius-lg` (16px), `--shadow-card`, 22px padding. Card content: big mono value in `--accent-primary` (26px) → bold 13px label → 11px `--text-muted` sub-line. Four cards, exact content:
      - €5M+ / Annual revenue contribution / ISAC real-time simulation market position
      - €1.5M / R&D budget secured / TEYDEB-funded diesel control program
      - 66% / Test benches restored / Full department turnaround in one year
      - 3 / Published papers / IEEE Transactions & OTEKON congress

### 3. Experience (id: experience)
- **Purpose:** reverse-chronological work history as an interactive timeline/grid.
- **Layout:** centered content column, `max-width:1120px`. Section title "Experience" (SectionTitle style, see Design Tokens). Below: 3-column grid (`1fr 1fr 1fr`), 16px gap, 6 cards (2 rows of 3).
- **Card:** `--surface-card` bg, `--border-subtle` border, `--radius-md` (12px), 18px padding, `cursor:pointer`. Content: mono 11px period (`--text-muted`) → 14px bold role → 12px company in `--accent-primary` → 12px summary (`--text-secondary`). **Click toggles an expanded state** revealing a 12px detail paragraph (`--text-secondary`, 1.6 line-height) below the summary — one card open at a time is fine, or independent per-card toggles (this mockup keeps one open at a time via a single `openRoleId` state value, but independent toggles are equally valid).
- **Content** (6 roles, most recent first):
  1. 09/2024 — Present · Software Development Engineer · AVL MTC Motortestcenter AB · Stockholm, Sweden — summary: "Python mapping application generating drivable areas from LiDAR/GPS for autonomous mining vehicles." detail: "Automated the build/install process via CI pipelines, redesigned the threaded data-download procedure, and introduced a UI architecture separating interface from logic. Ensured auxiliary C++ projects meet MISRA C++ 23 at Scania, and ran systems-engineering work on hauler wiper control and IMU self-calibration at Volvo Construction Equipment."
  2. 07/2018 — 09/2024 · Application Development Engineer · AVL List GmbH · Istanbul, Türkiye — summary: "Modernized the ISAC vehicle-simulation library and integrated the EPA GEM model onto a real power-pack test rig." detail: "Increased ISAC's position in the real-time simulation market, contributing to roughly €5M in annual revenue. Built Route Studio vehicle subsystem models, a battery-parameter Model Factory, an RDE cycle generator, FMI/Model.Connect modules, and an automated dSPACE HIL project-creation tool."
  3. 08/2016 — 02/2018 · Electronic Design Supervisor · Hema Endüstri A.Ş. · Tekirdağ, Türkiye — summary: "Led the Test Systems department, recommissioning 66% of inoperable test benches within a year." detail: "Coordinated electro-hydraulic steering control unit development, set guidelines curbing wiring and interference issues, mentored test engineers, and led a Bluetooth-controlled electro-hydraulic lift project shown at exhibitions."
  4. 10/2013 — 01/2015 · R&D Engineer · Tümosan A.Ş. · Istanbul, Türkiye — summary: "Secured a €1.5M TEYDEB-funded program to build the company's control & electronics lab." detail: "Developed mean-value and zero-dimensional diesel engine simulation models, integrated electronic control units to meet Stage 3B emissions, and led a small controls engineering team."
  5. 03/2012 — 08/2013 · Electromechanics Design Engineer · Otokar A.Ş. · Sakarya, Türkiye — summary: "Designed the mechanical infrastructure for UCOK, a compact remote-controlled weapon station." detail: "Delivered the turret and RCWS mechanical design from concept through integration into the company's ground-defence vehicle product line."
  6. 06/2010 — 08/2011 · Volunteer Researcher · Mekar Laboratory · Istanbul, Türkiye — summary: "Built the semi-autonomous vehicle and CACC control algorithm for the Grand Cooperative Driving Challenge." detail: "Team Mekar finished 7th of 11 overall entries at GCDC 2011 in the Netherlands; the work was later published in IEEE Transactions on Intelligent Transportation Systems."

### 4. Selected Projects (id: projects)
- **Purpose:** case-study style project showcase.
- **Layout:** centered column, `max-width:1120px`. Below the section title, a vertical stack (36px gap) of 7 project cards — **all cards use the same layout direction** (image left, text right; no alternating/mirroring — this was explicitly corrected during design for visual consistency).
- **Card:** `--surface-card` bg, `--border-subtle` border, `--radius-lg`, 16px padding, flex row, 28px gap, `align-items:flex-start` (all cards align to the same top edge regardless of text length).
  - Image: fixed 280×180px, `object-fit:cover`, `--radius-md`.
  - Text column: fixed-height 180px (matches image) so badge/button positions are consistent across all cards regardless of headline length. Structure top→bottom: an outline "accent" badge (mono font, `white-space:nowrap` so it never wraps) showing the project's one-line description tag → a flexible centered middle zone containing the headline (15px, `--text-secondary`, 1.6 line-height) vertically centered in the remaining space → a "Read case study →" ghost-button/link pinned at the bottom, which opens the project detail modal.
  - Note: earlier iterations tried showing the project's acronym title (e.g. "GCDC") as a heading and a solid-color badge overlaid on the photo — both were explicitly removed/changed per design feedback. Final state has **no title heading on the card**, and the badge is an outlined tag above the headline, not on the image.
- **Content** (7 projects — description tag / headline / full modal content):
  1. **GCDC** — tag: "Grand Cooperative Driving Challenge" — headline: "Semi-autonomous vehicle for the GCDC 2011 competition — mechanical design, simulation, and a platooning control algorithm." — modal body: "The Grand Cooperative Driving Challenge is a European competition showcasing cooperative autonomous driving. Our team developed a Co-operative Adaptive Cruise Control system with vehicle-to-vehicle communication, automatically following lead vehicles, obeying traffic lights and speed limits over a 6km track at 100km/h. Team Mekar finished 7th of 11 overall, and 5th in speed-profile tracking." — image: gcdc-2.png
  2. **UCOK** — tag: "Remote controlled weapon station" — headline: "Lightweight RCWS with a new sight system, optimized balance, and improved functionality." — modal body: "Developing a new lightweight remote weapon station required an independent front-edge sight system, increased elevation range, doubled ammo capacity and compatibility across three weapon types. A new compact sight system reduced size and weight while improving elevation range and balance, embedding motor control units securely within the forks." — image: ucok-1.png
  3. **ICE Model** — tag: "Internal combustion engine model" — headline: "Crank-angle-based diesel engine model for real-time control algorithm development." — modal body: "A zero-dimensional engine model was built for accuracy and real-time speed, covering slider-crank kinematics, fluid dynamics for cylinder/turbo/intercooler flows, and in-cylinder thermodynamics. Wiebe and Constien combustion models captured pressure and temperature states with high precision for multi-injection strategies." — image: ice-1.jpg
  4. **Automated Tractor** — tag: "Automated steering system" — headline: "GPS-guided automatic steering system for agricultural vehicles." — modal body: "GPS localization converted lat/long into easting/northing positions; a trajectory-construction algorithm built routes from waypoints; a path-following algorithm regulated position and heading via the steering valves. The prototype was validated on asphalt roads with accurate tracking." — image: automated-tractor-1.png
  5. **GEM Model** — tag: "Greenhouse Gas Emissions Model" — headline: "Integrating the EPA's GEM vehicle model with Puma/IGEM2 for real-time test-bench simulation." — modal body: "The EPA's GEM model, originally offline-only, was refactored for real-time use on a power-pack test bench: parameterization was wrapped into the workflow, unnecessary components were stripped for real hardware, and bumpless-transfer logic enabled parameter updates mid-cycle." — image: gem-2.png
  6. **AVL ISAC** — tag: "Real-time vehicle simulation on testbed" — headline: "Modernizing the ISAC vehicle simulation library for contemporary architectures." — modal body: "Advanced powertrain components, vehicle kinematics/dynamics models, and tire-road interaction models were developed to bring the ISAC simulation library up to modern vehicle-architecture standards for future development and testing." — image: isac-1.png
  7. **AVL Route Studio** — tag: "Road digitalization for virtual testing" — headline: "Modern vehicle subsystem models, battery identification, and RDE route generation for Route Studio." — modal body: "Legacy vehicle models were rebuilt in Simulink, modern EV components (motors, battery models, regen strategies) were added and migrated back to Python. A real-driving-emission cycle generator and a battery-model factory algorithm were integrated, plus an automated HIL project-creation module using dSpace APIs." — image: route-studio-1.png

#### Project detail modal
- **Trigger:** clicking "Read case study →" on any card.
- **Layout:** full-screen fixed overlay, `background: rgba(5,7,11,.88)` + backdrop blur (6px) — the only blur/transparency use in the whole design, `z-index:100`, click-outside-to-close (click on the dimmed backdrop closes; click inside the card must `stopPropagation`).
- **Card:** centered, 720px wide, max-height 80vh with internal scroll, `--surface-raised` bg, `--border-strong` border, `--radius-lg`, `--shadow-raised`. Top: project image full-bleed 100%×280px. Below (32px padding): title (`--text-h2`/`--fw-h2`) with a "✕" close button top-right, the description tag in `--accent-primary`, then the full modal body paragraph, justified text, 15px/1.7 line-height.

### 5. Skills (id: skills)
- **Layout:** centered column `max-width:1120px`, 4-column grid, 20px gap.
- **Card:** `--surface-card` bg, `--border-subtle` border, `--radius-md`, 16px padding. 12px `--text-muted` group label, then each skill listed as its own line in mono 12px `--text-secondary` (not pill/chip badges — plain stacked list per group).
- **Groups & content:**
  - Control & Simulation: MATLAB/Simulink, CarMaker, GT-SUITE, AVL Puma, AVL Concerto, AVL Model.CONNECT, AVL fmi.lab, AVL Testbed.Connect
  - Software Engineering: C, C++, Python, JavaScript, React & Router, HTML/CSS, MUI, OOP, SOLID, Unit Testing
  - Engineering Design: CATIA, Enterprise Architect
  - DevOps & Delivery: AWS, Docker, Git, GitHub CI/CD, TeamCity, Microsoft TFS, Jira/Confluence, Scrum/Agile

### 6. Contact (id: contact)
- **Layout:** centered narrow column, `max-width:760px`. A single card (`--surface-card`, `--border-subtle`, `--radius-lg`, 40px padding) containing the section title and the form. (No separate email/phone text line — contact info was intentionally removed from this section per design feedback; the footer's sign-off line is the only remaining direct-contact touchpoint besides the form.)
- **Form fields** (14px gap, each a labeled input): Name (text), Email (text, validated), Message (multiline/textarea). "Send message" button is the **outline** variant with a **transparent background** (explicitly requested), centered, wrapped in a native `<button type="submit">` with all default browser button chrome stripped (`background:none;border:none;padding:0;margin:0;font:inherit` on the native element) so only the styled pill shows.
- **Validation (client-side only):** on submit — Name required (non-empty after trim); Email required and must match a standard email pattern; Message required (non-empty after trim). Each field shows its own inline error message when invalid. On success, the form is replaced with: "Thanks — your message has been sent. I'll get back to you soon."
- **⚠️ Important for the developer:** in this mockup, "success" only flips local UI state — **no email is actually sent anywhere**. There is no backend. For production, wire the submit handler to a real delivery mechanism: a form backend (Formspree, Web3Forms, Getform, etc.), a `mailto:` link (opens the visitor's own mail client, simplest but not a true in-page send), or a custom backend/serverless function (e.g., Resend/SendGrid/SES via a small API route) that emails the owner. This is likely the primary implementation task, per the owner's stated goal of integrating a real mail service.

### 7. Footer
- **Layout:** full-width bar, same `--gradient-aurora` background as the hero, `1px solid --border-subtle` top border, 28px/80px padding, flex row `justify-content:space-between`, `align-items:center`, wraps on narrow widths.
- **Content:** left — "© 2026 All rights reserved." (13px, `--text-secondary`, weight 200). Center — "Thanks for visiting! Feel free to connect with me." (13px, `--text-secondary`, weight 400). Right — two icon-only buttons (LinkedIn, GitHub) using inline SVG marks (not an icon font), each a real link: LinkedIn → `https://linkedin.com/in/raif-karaahmetoglu`, GitHub → `https://github.com/SonofDarkAhmet`, both `target="_blank" rel="noopener"`.

## Interactions & Behavior (summary)
- **Nav:** click-to-scroll (smooth, ~90px offset for the fixed pill) + scroll-driven active-state via IntersectionObserver, with an explicit bottom-of-page override.
- **Get in touch button:** anchors to `#contact`.
- **Résumé button:** downloads the résumé PDF file directly (`download` attribute).
- **Experience cards:** click toggles an inline expanded detail paragraph.
- **Project cards:** click "Read case study" opens the full-screen modal; click backdrop or ✕ closes it; click inside the modal card does not close it.
- **Contact form:** client-side validation as described above; no live network call in this mockup.
- **Footer social icons:** external links, new tab.
- **Hover states:** buttons/cards should lighten or lift subtly (per design system: card border brightens + slight raised feel; icon buttons shift text to accent color) — 120–200ms ease-out transitions, no dramatic scale/bounce.

## State Management
Minimal local UI state is sufficient (no global store needed):
- `openProjectId` (string|null) — which project's modal is open.
- `openRoleId` (string|null) — which experience card is expanded.
- `active` (string) — current nav id, driven by scroll position (IntersectionObserver + scroll listener), not just click.
- `form` — `{ name, email, message, errors: {name?, email?, message?}, submitted }`.

## Design Tokens

### Colors
- Canvas/background: `--ink-950 #05070b` (near-black, never pure black)
- Surfaces: `--surface-card #0d121b` (ink-850), `--surface-raised #121826` (ink-800, modals)
- Borders: `--border-subtle #1b2231` (ink-700), `--border-strong #2a3344` (ink-600)
- Text: `--text-primary #f3f6f9` (ink-050), `--text-secondary #b7c2d1` (ink-200), `--text-muted #5b6b82` (ink-400)
- Accent ("signal" cyan-blue, oklch-based): `--accent-primary oklch(70% 0.125 205)`, hover `oklch(60% 0.12 205)`, strong/light variant `oklch(82% 0.08 205)`; text-on-accent `#04141a`
- Nav pill surface: `--surface-pill #f0f2f5` (near-white), text-on-pill `#24262e`
- Gradients: `--gradient-aurora` — `radial-gradient(ellipse 80% 80% at 50% -20%, oklch(45% 0.1 210 / 0.35), oklch(100% 0 0 / 0))`, used once per view (hero + footer only); `--gradient-legacy-ring` — `linear-gradient(to right,#205072,#329D9C,#56C596,#7BE495,#CFF4D2)`, used only as the avatar's ring accent.

### Typography
- Sans: Inter (`--font-sans`), Mono: JetBrains Mono (`--font-mono`) — mono used only for tags/labels/small technical accents.
- Display (hero name): `clamp(2.75rem, 4vw, 4.5rem)`, weight 100, line-height 1.05, letter-spacing -0.02em.
- H2 (section/modal titles): `clamp(1.5rem, 2vw, 2rem)`, weight 300, line-height 1.2.
- Body large (bio): 1.125rem/1.6.
- Small mono label (eyebrow/tags): 0.8125rem, letter-spacing 0.02em.
- Weights available: thin 100, light 200, regular 400, medium 500, semibold 600.

### Spacing
4px base scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px. Content max-width 1120px standard sections / 1400px hero / 760px narrow (contact).

### Radii
Small UI (badges/inputs) 8–12px; cards 16px; nav pill and all buttons fully pill-shaped (999px).

### Shadows
- Card: `0px 4px 6px rgba(0,0,0,.1), 0px 1px 3px rgba(0,0,0,.08)`
- Raised/modal: `0 12px 32px rgba(0,0,0,.35), 0 2px 8px rgba(0,0,0,.25)`

### Motion
Ease-standard `cubic-bezier(.4,0,.2,1)`, ease-out `cubic-bezier(0,0,.2,1)`; durations 120ms (fast, hover) / 200ms (base) / 400ms (slow). No entrance animation, parallax, or bounce anywhere.

## Assets
- `profile-pic.jpeg` — owner's real portrait photo.
- `gcdc-2.png`, `ucok-1.png`, `ice-1.jpg`, `automated-tractor-1.png`, `gem-2.png`, `isac-1.png`, `route-studio-1.png` — real project photography/renders, one per project card above.
- `Raif_Karaahmetoglu_Resume.pdf` — the résumé file the "Résumé" button downloads.
- Social icons (LinkedIn, GitHub) are inline SVG marks embedded directly in the HTML (see file) — no icon library dependency; reimplement as local SVG assets or an icon library of your choice in the target codebase.

## Files
- `Portfolio Redesign.dc.html` — the full design reference (structure, inline styles, and interaction logic for every section described above). Use this as the visual/behavioral source of truth; read it top-to-bottom alongside this README.
- `assets/` — the real images and résumé PDF listed above, ready to drop into the target project.
