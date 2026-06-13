# PHD Website — Partners in Health and Development

Redesign & development of [www.phd-bd.com](https://www.phd-bd.com) per PHD's
Terms of Reference (Ref: PHD/HO/05/2026). A modern, bilingual (English/বাংলা),
responsive, secure institutional website.

## Stack
- **Next.js 16** (App Router) + **React 19**
- **TypeScript** + **Tailwind CSS 4**
- **next-intl** — full English/Bangla localization (`/en`, `/bn`)
- **lucide-react** icons + custom brand SVGs
- **Playwright** for visual checks

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en)
npm run build    # production build (all pages prerendered)
npm run start
```

## Structure
```
src/
  app/
    layout.tsx               # root html + favicon
    page.tsx                 # redirects to default locale
    [locale]/                # localized routes
      layout.tsx             # Header / Footer / fonts / metadata
      page.tsx               # Home
      about/ what-we-do/ where-we-work/ news/ get-involved/ contact/
  components/
    layout/   Header, Footer, FloatingActions
    home/     Hero, Stats, Programs, AboutPreview, CTABanner
    shared/   LanguageSwitcher, SectionHeading, PageHero, ContactForm, BrandIcons
  i18n/       routing, request, navigation
  lib/        programs.ts
  middleware.ts
messages/     en.json, bn.json
public/       logo.jpg
```

## Brand
Palette derived from the PHD logo (deep teal/slate). Tokens in `src/app/globals.css`:
`--color-phd-primary #0E4D64`, `--color-phd-accent #1F9D57`, `--color-phd-gold #E0A82E`.

## ToR coverage (current vs. roadmap)
**Done:** modern responsive design, EN/BN multilingual, dynamic hero, nav + search-ready
structure, contact form, programs/portfolio, careers/get-involved, news scaffold,
SEO metadata (per-locale title/description/OG), social integration, accessible markup.

**Next (per ToR — wire before launch):**
- Connect contact form to a real endpoint/email service (`/api/contact`)
- Headless CMS (news/blog, downloads center, gallery, donors/partners) — qualifies as the
  "equivalent secure CMS" the ToR allows in place of WordPress
- Photo/video gallery, download center (reports/policies/forms)
- Google Analytics, sitemap/robots, SSL & security headers, backup
- Future modules: donation, project dashboards, e-learning, complaint/feedback, data viz
