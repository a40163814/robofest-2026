# ROBOFEST 2026 — NEON FORGE

An original, responsive landing page concept for ROBOFEST 2026, a fictional
robotics festival by ROBOTiX Club at NIT Raipur. The page presents event and
registration details as concepts until organizers confirm them.

## Project description

ROBOFEST is imagined as a meeting ground for curious makers: students can
experiment, build, collaborate, and take on engineering challenges. The
experience guides visitors from the festival idea through three proposed
challenge concepts—ROBORACE, ROBOWARS, and ROBOTHON—and a four-stage maker process, ending at a clearly marked
registration destination placeholder.

### NEON FORGE theme

NEON FORGE pairs a near-black technical canvas with fine gridwork, cyan
instrumentation, violet system accents, and restrained orange signal marks.
Editorial oversized typography and asymmetrical compositions give the page an
arena-like energy without leaning on stock imagery or heavy glass effects.
Every illustration is custom SVG or CSS, so the visuals remain lightweight and
cohesive with the engineering theme.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Vite prints a local development URL after startup.

## Production build

```bash
npm run build
npm run preview
```

The optimized static site is generated in `dist/`.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. No server-side configuration is required.

### GitHub Pages

The Vite config uses `base: "./"` so generated assets resolve relative to the
deployed page path. A deployment workflow is included at
`.github/workflows/deploy.yml`. Push this project to a GitHub repository's
`main` branch, then in repository settings set **Pages → Build and deployment
→ Source** to **GitHub Actions**. The workflow builds the app and deploys
`dist/`; the generated live URL appears in the workflow run's deployment
environment. For a standard project repository it is usually
`https://<owner>.github.io/<repository-name>/`. A user/organization site
repository named `<owner>.github.io` is served at `https://<owner>.github.io/`.

## Before publishing

- Replace `REGISTRATION_URL` in `src/components/Registration.jsx` with the
  official organizer-provided link. Until then, the button deliberately points
  to an `example.com` placeholder and clearly identifies itself as such.
- Confirm festival details and update the conceptual event descriptions,
  organizer contact details, and any official schedule only after they are
  supplied. This page intentionally has no invented dates, prizes, sponsors,
  counters, or attendance claims.
- Google Fonts are used as progressive enhancement; system font fallbacks are
  defined for offline use.

## Component map and interview notes

- `src/App.jsx` composes the page from reusable section components and provides
  the skip-to-content link.
- `src/components/Navbar.jsx` owns the responsive navigation state. Its
  button exposes `aria-expanded`/`aria-controls`; Escape and choosing a link
  close the menu. `Navbar.css` changes the desktop link row into a mobile
  disclosure.
- `src/components/Hero.jsx` contains the first-screen content and the custom
  SVG robot. SVG paths, gradients, and accessible title/description elements
  create a scalable illustration without image assets.
- `src/components/About.jsx` uses a CSS circuit-board visual and a split layout
  to explain the festival concept.
- `src/data/events.js` holds event content separately from
  `src/components/Events.jsx`, which maps each record to a reusable, keyboard
  focusable card with an original inline SVG.
- `src/components/Experience.jsx` renders a data-driven four-stage process
  with Lucide icons.
- `src/components/Registration.jsx` keeps the registration destination in
  one clearly named constant. The placeholder is visible, labeled, and never
  simulates a submission.
- `src/components/Footer.jsx` provides the quick links and back-to-top action.
- `src/hooks/useReveal.js` uses `IntersectionObserver` to reveal elements as
  they enter view, then disconnects on cleanup. Reduced-motion users and
  browsers without observer support get immediately visible content.
- `src/index.css` defines design tokens, global focus styles, fluid section
  spacing, smooth anchor scrolling, and reduced-motion behavior. Each section
  has its own CSS file for maintainable styling.

### JavaScript and CSS concepts used

The app demonstrates React function components, props, `map()` rendering,
state-driven conditional classes, effects with cleanup, and a small custom
hook. CSS demonstrates custom properties, Grid and Flexbox, `clamp()` fluid
type, breakpoints, pseudo-elements, SVG styling, keyframes, `:focus-visible`,
and `prefers-reduced-motion`. Semantic sections and headings, accessible
labels, touch-sized controls, and an explicit mobile navigation state support
keyboard and mobile use.

## AI disclosure template

> I used GitHub Copilot, an AI coding assistant, to help scaffold and implement
> parts of this ROBOFEST 2026 landing-page concept. I reviewed, tested, and
> edited the generated work. **Edit this disclosure to accurately list the
> tools actually used and describe your own contribution before submitting.**

## Asset and originality note

The robot, event illustrations, circuit visual, and festival mark are original
inline SVG/CSS artwork created for this concept. Lucide React provides
open-source interface icons. No copied website template or third-party
photography is used.
