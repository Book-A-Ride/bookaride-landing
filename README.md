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

## Editing content
- Team members: `src/data/team.ts` — add an object to the array to add a
  teammate; set `lead: true` on exactly one person for the founder's larger card.
- Legal pages: `src/pages/PrivacyPolicy.tsx` and `src/pages/TermsAndConditions.tsx`
  contain placeholder copy ready for you to replace.
- Brand colors and fonts: `src/index.css` under the `@theme` block.
- Logo / favicon: `public/logo.png`.
