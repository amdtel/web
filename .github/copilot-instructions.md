# Project context (read first)

Business website: property maintenance, gardening & clearance, computer repair & web dev, home network install. Collects enquiries/booking requests. Business name/contact details live in `src/data/site.ts` (owner fills in; empty fields are hidden).

## Stack & principles
- Astro (static output) + Lit (`@astrojs/lit`) + Open Props CSS + Netlify hosting.
- **No-JS mantra**: Lit components are SSR-only (never add `client:*` directives unless asked). Plain CSS, no frameworks beyond Open Props. Keep minimal.
- Enquiries use **Netlify Forms** (`src/pages/enquire.astro`, `data-netlify`, honeypot). No adapter/functions.
- Booking = a "preferred date" field on the form (request-based, no calendar yet).

## Layout
- `src/data/site.ts` – business name, tagline, email, phone, area, address, hours.
- `src/data/services.ts` – single source of truth for services (add an entry = new page, nav link, form option).
- `src/pages/` index, `services/[slug].astro`, `enquire`, `thanks`, `credits`.
- `src/components/service-card.ts` – Lit SSR card. `src/layouts/Base.astro`. `src/styles/global.css`.
- `public/images/` – Wikimedia Commons photos; credits listed in `src/pages/credits.astro` (keep updated when adding images).

## Commands
`npm run dev` / `npm run build` / `npm run preview`

## Status
See `STATUS.md` for progress and next steps; update it at the end of each session.
