# Book A Ride — Landing Page

Marketing landing page for Book A Ride, a student-focused ride booking system
launching at BOUESTI, Ikere-Ekiti.

## Stack
React + TypeScript + Vite, Tailwind CSS v4, Framer Motion, GSAP (ScrollTrigger + MotionPathPlugin), React Router.

## Getting started
```bash
npm install
npm run dev
```
Then open the printed local URL. Build for production with `npm run build`
(output goes to `dist/`).

## Production build & prerendering

`npm run build` runs three steps in sequence:

1. **TypeScript check** — `tsc -b`
2. **Vite bundle** — outputs JS/CSS/assets to `dist/`
3. **Prerender** — `node scripts/prerender.mjs`

The prerender step starts a local static server against `dist/`, visits
each route (`/`, `/privacy-policy`, `/terms-and-conditions`) in a headless
Chromium browser, waits for React to finish painting, then writes the
fully-rendered HTML back:

- `/` → `dist/index.html` (overwritten in-place)
- `/privacy-policy` → `dist/privacy-policy/index.html`
- `/terms-and-conditions` → `dist/terms-and-conditions/index.html`

**Why?** The site is client-side rendered, so the first raw HTML response
is an empty `<div id="root">`. Google can execute JavaScript and sees the
real content, but AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
do not — they only read the initial HTML. Prerendering bakes the real
markup into the HTML files so every crawler gets real content immediately,
with no JavaScript required.

`npm run dev` is unaffected — prerendering only runs for production builds.


## Editing content
- Team members: `src/data/team.ts` — add an object to the array to add a
  teammate; set `lead: true` on exactly one person for the founder's larger card.
- Legal pages: `src/pages/PrivacyPolicy.tsx` and `src/pages/TermsAndConditions.tsx`
  contain placeholder copy ready for you to replace.
- Brand colors and fonts: `src/index.css` under the `@theme` block.
- Logo / favicon: `public/logo.png`.
