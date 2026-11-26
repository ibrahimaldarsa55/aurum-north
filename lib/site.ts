/**
 * Central brand configuration.
 * Change the agency name, contact details and links here — every page,
 * the metadata, sitemap and footer read from this file.
 */
export const site = {
  name: "Aurum North",
  shortName: "AN",
  tagline: "Digital craft for businesses worldwide",
  description:
    "Aurum North is an independent, founder-led digital agency based in Toronto, Ontario, designing and building premium websites, Shopify stores and brand identities for clients around the world.",
  // Canonical production domain (used for metadataBase, OpenGraph, sitemap and robots.txt).
  // NEXT_PUBLIC_SITE_URL overrides it, so keep that env var in sync or leave it unset.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aurumnorthstudio.com",
  location: {
    city: "Toronto",
    region: "Ontario",
    country: "Canada",
    serviceArea: "clients around the world",
  },
  // Displayed on the site. Form submissions are delivered to CONTACT_TO_EMAIL instead.
  // Phone is still a placeholder.
  contact: {
    email: "ibrahim@aurumnorthstudio.com",
    phone: "+1 (000) 000-0000",
  },
  // Add real profiles here, e.g. { label: "LinkedIn", href: "https://linkedin.com/in/..." }.
  // The footer's "Follow" column only appears when this list has entries.
  socials: [] as { label: string; href: string }[],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
  ],
} as const;

export type Site = typeof site;
