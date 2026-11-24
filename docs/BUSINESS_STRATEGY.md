# Aurum North — Business Strategy

Internal document. Not published on the website.

## Positioning

Aurum North is a **general, multi-industry digital agency** based in Toronto, Ontario, serving clients globally. Target sectors: automotive, beauty & wellness, retail, restaurants & hospitality, real estate, professional services, e-commerce and corporate.

**Car detailing is the initial client-acquisition niche, not the brand.** It is a good starting point because detailers:

- sell visually (before/after work suits a strong portfolio),
- depend on bookings and local search,
- often have weak or outdated websites,
- form a tight local network that produces referrals.

The public website deliberately presents the agency as multi-industry. Niche-specific outreach (cold email, Instagram DMs, landing pages) can still target detailers directly.

## Revenue streams

### 1. One-time projects (primary revenue, cash up-front)

| Build | Starting at (USD) | Includes |
| --- | --- | --- |
| Business & Service Website | $1,500 | Custom design, responsive Next.js or WordPress build, on-page SEO, lead/booking forms |
| E-Commerce & Shopify Store | $2,800 | Custom storefront, product & variant architecture, checkout setup, mobile conversion optimization |
| Brand & UI/UX Design | $1,200 | Visual identity, design system, high-converting page layouts |

- Starting prices are published; the final quote follows a discovery call. **No subscription required.**
- Suggested terms: 50% deposit, 50% on launch. The client owns the site once it is paid in full.
- Edit prices and inclusions in `projectBuilds` in `lib/pricing.ts`.

### 2. Monthly care plans (recurring revenue)

| Plan | Price (USD/mo) | Included content hours | Support response |
| --- | --- | --- | --- |
| Starter | $99 | 0 (billed separately) | 3 business days |
| Professional | $199 | 2 hrs | 1 business day |
| Premium | $349 | 4 hrs | Same business day |

All plans are month-to-month with 30 days' notice, cover one site, and exclude hosting, domains, licences and third-party fees.

## Why the limits keep plans profitable

These are rough estimates. Replace them with your real time-tracking data.

| Plan | Est. hours at full use | Effective rate at full use (USD) |
| --- | --- | --- |
| Starter | ~0.75 hr (updates are mostly automated) | ~$130/hr |
| Professional | ~3 hrs (1 hr maintenance + 2 hrs content) | ~$66/hr |
| Premium | ~6 hrs (1.5 hrs maintenance/monitoring + 4 hrs content + ~0.5 hr call average) | ~$58/hr |

- Most clients use **well under** their included hours, so the real effective rate is usually higher.
- **Hours don't roll over.** This prevents a large backlog building up.
- **New pages, features and redesigns are excluded.** They become new one-time projects, which is an upsell.
- **One site per plan**, and sites built by others require a paid onboarding audit.
- Budget for tooling of about $5–20 USD per site per month (backup, uptime and security tools).
- Review the plans quarterly. If a plan regularly drops below your target hourly rate, raise the price or reduce its included hours in `lib/pricing.ts`.

## Client journey

1. **Discovery call.** Free, about 30 minutes.
2. **Proposal.** Project scope, plus a recommended care plan as an optional add-on.
3. **Build.** The one-time project.
4. **Launch.** Offer the plan at handover. A good default is the first month free or discounted.
5. **Retain.** A monthly report (Premium) or a short email summary keeps the value visible.
6. **Expand.** Use content-hour overages and new feature requests to quote new projects.

## Goals to track

- Number of active care-plan subscribers and monthly recurring revenue (MRR)
- Project close rate from discovery calls
- Average project value
- Plan upgrade rate (Starter → Professional → Premium)
- Monthly churn
