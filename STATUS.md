# Status

## Done
- Scaffold: Astro 7 + Lit + Open Props, static build verified (8 pages).
- Home, 4 service pages (mock promo copy), enquiry form (Netlify Forms), thanks, credits.
- Images downloaded (Wikimedia Commons, attribution on /credits/).
- Build emits only a tiny Lit SSR/declarative-shadow-DOM hydration-support script; no component JS shipped.

- Business details centralised in `src/data/site.ts`.

## To do / ideas
- Owner to fill in `src/data/site.ts` (name, email, phone, area, address, hours); add logo.
- Owner to review promo copy in `src/data/services.ts`. Computer Repair + Web Development stays one skill (decided).
- Better-fitting photos (current ones are generic); add alt text review.
- Optional real booking (calendar embed e.g. Cal.com) later.
- Deploy to Netlify (connect repo; forms auto-detected) and enable form notifications.
- Add favicon, sitemap, local-business structured data.
