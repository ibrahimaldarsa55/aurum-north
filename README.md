# Aurum North — Agency Website

Premium black-and-gold website for an independent, founder-led digital agency in Toronto.

**Stack:** Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production check:

```bash
npm run build
npm run start
npm run lint
```

## Where to edit things

| What | File |
| --- | --- |
| Agency name, email, phone, socials, navigation | `lib/site.ts` |
| Services, reasons, process steps, concept projects, form options | `lib/content.ts` |
| Colours & fonts (design tokens) | `app/globals.css` (`@theme`) and `app/layout.tsx` |
| Concept project illustrations | `components/work/ProjectMockup.tsx` |
| Favicon | `app/icon.svg` |

## Contact form

The form posts to `app/api/contact/route.ts`, which sends email through [Resend](https://resend.com).

1. Create a Resend account and verify your domain.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
3. Add the same variables in Vercel, then redeploy.

Until those are set, the form clearly tells visitors it isn't connected and opens their email app with the enquiry pre-filled instead — it never claims a message was sent when it wasn't.

## Deploy (GitHub + Vercel)

```bash
git init
git add .
git commit -m "Initial agency website"
git branch -M main
git remote add origin https://github.com/<you>/agency-portfolio.git
git push -u origin main
```

Then on vercel.com: **Add New → Project → Import** the repository (framework is auto-detected), add the environment variables from `.env.example`, and deploy. Add your custom domain under **Settings → Domains** and set `NEXT_PUBLIC_SITE_URL` to it.

## Before launch

- Replace the placeholder email, phone and social links in `lib/site.ts`.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain.
- Check that the agency name is available (Ontario business name search, CIPO trademarks database, domain).
