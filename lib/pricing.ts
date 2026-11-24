/**
 * Pricing & plans — the single source of truth.
 * Edit prices, inclusions and limits here; the Pricing page, home preview,
 * comparison table and contact form all read from this file.
 */

export const pricingMeta = {
  currency: "USD",
  taxNote: "All prices in USD, plus applicable taxes.",
  billingNote: "Billed monthly. No long-term contract — cancel with 30 days' notice.",
};

export type Plan = {
  id: "starter" | "professional" | "premium";
  name: string;
  price: number; // per month, USD
  tagline: string;
  idealFor: string;
  featured?: boolean;
  /** Short headline inclusions shown on the plan card. */
  includes: string[];
  /** The limits that keep each plan sustainable. Shown openly to clients. */
  limits: string[];
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    tagline: "Essential care to keep your website secure and up to date.",
    idealFor: "Brochure websites that rarely change",
    includes: [
      "Monthly core, theme & plugin updates",
      "Weekly off-site backups",
      "Monthly uptime & broken-link check",
      "Email support",
    ],
    limits: [
      "1 website",
      "Backups kept for 30 days",
      "Content changes billed separately",
      "Replies within 3 business days",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 199,
    tagline: "Proactive care plus hands-on content updates every month.",
    idealFor: "Growing businesses that update their site regularly",
    featured: true,
    includes: [
      "Everything in Starter",
      "Weekly updates & daily backups",
      "Security monitoring & malware scanning",
      "Up to 2 hours of content updates / month",
      "Priority support",
    ],
    limits: [
      "1 website",
      "Backups kept for 60 days",
      "Unused hours don't roll over",
      "Replies within 1 business day",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 349,
    tagline: "Complete peace of mind with performance monitoring and expanded support.",
    idealFor: "Revenue-critical sites and online stores",
    includes: [
      "Everything in Professional",
      "Performance monitoring & monthly speed report",
      "24/7 uptime monitoring with alerts",
      "Up to 4 hours of content updates / month",
      "Quarterly website review call",
    ],
    limits: [
      "1 website",
      "Backups kept for 90 days",
      "Unused hours don't roll over",
      "Same-business-day replies",
    ],
  },
];

/** Rows for the comparison table. `true` = included, `false` = not, string = detail. */
export const comparison: { feature: string; values: [string | boolean, string | boolean, string | boolean] }[] = [
  { feature: "Core, theme & plugin updates", values: ["Monthly", "Weekly", "Weekly"] },
  { feature: "Off-site backups", values: ["Weekly", "Daily", "Daily"] },
  { feature: "Backup retention", values: ["30 days", "60 days", "90 days"] },
  { feature: "Uptime monitoring", values: ["Monthly check", "Daily check", "24/7 with alerts"] },
  { feature: "Security monitoring & malware scans", values: [false, true, true] },
  { feature: "Content updates included", values: [false, "2 hrs / month", "4 hrs / month"] },
  { feature: "Performance monitoring & speed report", values: [false, false, true] },
  { feature: "Quarterly review call", values: [false, false, true] },
  { feature: "Support response time", values: ["3 business days", "1 business day", "Same business day"] },
];

/** Applies to every plan — keeps scope clear and plans profitable. */
export const planTerms = [
  "Each plan covers one website. Additional sites are quoted at a discounted rate.",
  "Included hours cover content edits, small layout tweaks and image swaps — not new pages, features or redesigns.",
  "Work beyond your included hours, and anything outside the plan, is quoted before it starts.",
  "Hosting, domains, premium plugin licences and third-party app fees are not included.",
  "Websites not built by us start with a one-time onboarding audit, quoted after a review.",
  "Support is provided during business hours, Monday – Friday, Eastern Time.",
];

/* ------------------------------------------------------------------ */
/* One-time projects                                                    */
/* ------------------------------------------------------------------ */

export type OneTimeProject = {
  title: string;
  description: string;
  /** Set a number (USD) to show "From $X USD", or leave null to show "Custom quote". */
  startingAt: number | null;
  serviceId: string; // anchor on /services
};

export const oneTimeProjects: OneTimeProject[] = [
  {
    title: "Business Website",
    description: "A custom, high-performance website designed around your brand and goals.",
    startingAt: null,
    serviceId: "web-development",
  },
  {
    title: "WordPress Website",
    description: "A lean, custom WordPress theme your team can easily update.",
    startingAt: null,
    serviceId: "wordpress",
  },
  {
    title: "Shopify & E-commerce",
    description: "A conversion-focused online store, from product pages to checkout.",
    startingAt: null,
    serviceId: "shopify",
  },
  {
    title: "UI/UX Design",
    description: "Research-led journeys, wireframes and polished interface design.",
    startingAt: null,
    serviceId: "ui-ux",
  },
  {
    title: "Branding & Digital Design",
    description: "Logo, visual identity and digital assets that build recognition.",
    startingAt: null,
    serviceId: "branding",
  },
];

export const pricingFaqs = [
  {
    q: "Do I need a subscription to work with you?",
    a: "No. One-time projects are completely independent. You own your website once the project is paid in full, and you can add a care plan later — or never.",
  },
  {
    q: "What counts as a content update?",
    a: "Text and image changes, adding a team member or product, updating opening hours, small layout adjustments and similar edits. New pages, new features or redesigns are quoted as separate projects.",
  },
  {
    q: "What happens if I need more than my included hours?",
    a: "We'll let you know before going over and provide a quote for the extra work, so there are never surprise charges.",
  },
  {
    q: "Can I change or cancel my plan?",
    a: "Yes. Plans are month-to-month. You can move up or down a plan, or cancel with 30 days' notice.",
  },
  {
    q: "Do the plans work with Shopify stores?",
    a: "Yes. Shopify handles platform updates and hosting, so for stores the plans focus on theme and app maintenance, content updates, performance and support.",
  },
];

/** Amount only, e.g. "$99". Use where "USD" is shown separately next to it. */
export function formatAmount(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: pricingMeta.currency,
    maximumFractionDigits: 0,
  }).format(n);
}

/** Amount with currency code, e.g. "$99 USD". */
export function formatPrice(n: number) {
  return `${formatAmount(n)} ${pricingMeta.currency}`;
}

export const planOptionLabels = plans.map((p) => `Care plan — ${p.name} (${formatPrice(p.price)}/mo)`);
