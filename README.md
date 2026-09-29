# local-seo-services

Local SEO & Google Business Profile Optimization Services Website, built with Next.js (App Router), TypeScript, Tailwind CSS, Lucide React, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Command         | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Create a production build        |
| `npm start`     | Serve the production build       |
| `npm run lint`  | Lint the code with ESLint        |

## Pages

- `/` Home: hero, trust bar, services, process, who we help, why choose us, testimonials, FAQ, CTA
- `/services` Detailed services and "what we will never do"
- `/how-it-works` Step-by-step process, realistic timelines, FAQ
- `/about` Mission and values
- `/contact` Free analysis request form

## Project structure

```
src/
  app/                 Routes, layout, metadata, sitemap, robots
  components/
    layout/            Navbar, Footer, Logo, ThemeToggle
    sections/          Page sections (Hero, TrustBar, Testimonials, FAQ, CTA, ...)
    contact/           ContactForm
    ui/                Button, Container, Reveal (animations), SectionHeading
  lib/
    site.ts            Brand name, email, nav links, main CTA
    data.ts            Services, steps, reasons, industries, testimonials, FAQs
```

Most copy lives in `src/lib/site.ts` and `src/lib/data.ts`, so you can edit text without touching components. Colors are CSS variables at the top of `src/app/globals.css`.

## Free Analysis form (Formspree)

The form in `src/components/contact/ContactForm.tsx` uses [`@formspree/react`](https://github.com/formspree/formspree-js/tree/master/packages/formspree-react) (`useForm` + `ValidationError`) and submits to the Formspree form `xppwkdgw` (`https://formspree.io/f/xppwkdgw`). Submissions are emailed to the recipient set on that form in your Formspree dashboard, and visitors see a success message on the page.

- The form ID lives in `src/lib/site.ts` (`formspreeFormId`). To use a different form, change it there or set `NEXT_PUBLIC_FORMSPREE_FORM_ID`.
- Fields sent: `name`, `email`, `business`, `location` (optional), `profile_url` (optional), `message`, plus `_subject` (email subject) and `_gotcha` (spam honeypot).
- Field-level and form-level errors returned by Formspree are shown inline.

## Testimonials

The testimonials in `src/lib/data.ts` are **placeholders** and are labeled as samples on the page. Replace them with real client feedback (with permission) and set `placeholder: false`. The "sample" note disappears automatically once none are placeholders.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to your live domain so canonical URLs, the sitemap, and social previews are correct. The site deploys as-is to Vercel or any Node.js host.
