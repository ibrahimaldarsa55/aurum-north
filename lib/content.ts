import {
  Blocks,
  CodeXml,
  Compass,
  ClipboardList,
  Gauge,
  LifeBuoy,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  PencilRuler,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wrench,
  LayoutTemplate,
  Car,
  Scissors,
  Store,
  UtensilsCrossed,
  House,
  Briefcase,
  ShoppingCart,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { formatPrice, planOptionLabels, plans } from "./pricing";

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export const industries: { icon: LucideIcon; name: string; body: string }[] = [
  { icon: Car, name: "Automotive", body: "Detailing, dealerships and auto services that need bookings and visual proof." },
  { icon: Scissors, name: "Beauty & Wellness", body: "Salons, spas and clinics where online booking and ambience matter." },
  { icon: Store, name: "Retail", body: "Boutiques and showrooms connecting in-store experience with online discovery." },
  { icon: UtensilsCrossed, name: "Restaurants & Hospitality", body: "Menus, reservations and atmosphere that bring guests through the door." },
  { icon: House, name: "Real Estate", body: "Agents and brokerages showcasing listings and building personal brands." },
  { icon: Briefcase, name: "Professional Services", body: "Law, accounting and consulting firms that win on credibility and clarity." },
  { icon: ShoppingCart, name: "E-commerce", body: "Shopify and online stores engineered for discovery and conversion." },
  { icon: Landmark, name: "Corporate", body: "Established companies needing structured, scalable, on-brand websites." },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "web-development",
    icon: CodeXml,
    title: "Website Development",
    short:
      "Custom, high-performance websites built on modern frameworks and engineered to grow with your business.",
    intro:
      "Your website is often the first serious conversation a client has with your business. We build custom sites with clean, modern code that load fast, rank well and present you with the polish your clients expect.",
    benefits: [
      "Bespoke design — no recycled templates",
      "Fast load times and strong Core Web Vitals",
      "Search-friendly structure and metadata",
      "Content you can update without a developer",
    ],
    deliverables: ["Custom design & build", "CMS integration", "Analytics setup", "SEO foundations"],
  },
  {
    id: "wordpress",
    icon: LayoutTemplate,
    title: "WordPress Development",
    short:
      "Tailored WordPress sites with custom themes and an editing experience your team will actually enjoy.",
    intro:
      "WordPress remains one of the most flexible platforms for businesses that publish often. We build lean, custom themes rather than bloated page-builder stacks, so your site stays fast, secure and easy to manage.",
    benefits: [
      "Custom, lightweight themes",
      "Intuitive editing with structured content blocks",
      "Security hardening and sensible plugin choices",
      "Migration from existing sites with care for SEO",
    ],
    deliverables: ["Custom theme", "Block editor setup", "Plugin audit", "Training session"],
  },
  {
    id: "shopify",
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    short:
      "Elegant online stores designed to convert — from product discovery through to a frictionless checkout.",
    intro:
      "Great e-commerce is equal parts storytelling and conversion engineering. We design and develop Shopify stores that showcase your products beautifully and make buying effortless on every device.",
    benefits: [
      "Conversion-focused product and collection pages",
      "Theme customization or fully custom builds",
      "Payments, shipping and tax configured for the markets you sell to",
      "App integrations chosen for real value, not clutter",
    ],
    deliverables: ["Store design", "Theme development", "Product setup", "Launch checklist"],
  },
  {
    id: "ui-ux",
    icon: PencilRuler,
    title: "UI/UX Design",
    short:
      "Interfaces grounded in research and refined in detail, so every interaction feels considered.",
    intro:
      "Good design is how something works, not just how it looks. We map user journeys, wireframe key flows and craft high-fidelity interfaces that make your product or website clear, intuitive and enjoyable.",
    benefits: [
      "User journey mapping and information architecture",
      "Wireframes and interactive prototypes",
      "Accessible, consistent design systems",
      "Developer-ready design files",
    ],
    deliverables: ["UX audit", "Wireframes", "UI design", "Clickable prototype"],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Digital Design",
    short:
      "Distinctive visual identities that position your business with confidence across every touchpoint.",
    intro:
      "A coherent brand earns trust before a word is read. We develop logos, typography, colour systems and digital assets that give your business a recognisable, premium presence online and offline.",
    benefits: [
      "Logo and visual identity design",
      "Typography and colour systems",
      "Social media and marketing templates",
      "Concise brand guidelines",
    ],
    deliverables: ["Logo suite", "Brand guidelines", "Social templates", "Digital assets"],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Optimization",
    short:
      "Ongoing care that keeps your site secure, fast and current — so you can focus on running your business.",
    intro:
      `Launch is the beginning, not the end. Our monthly care plans cover updates, backups, security, monitoring, performance and content changes, keeping your website healthy as your business evolves. Plans start at ${formatPrice(plans[0].price)}/month — see Pricing for full details.`,
    benefits: [
      "Regular updates and security patches",
      "Backups and uptime monitoring",
      "Performance and speed optimization",
      "Priority help with content and small changes",
    ],
    deliverables: [...plans.map((p) => `${p.name} · ${formatPrice(p.price)}/mo`), "Month-to-month"],
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export const reasons = [
  {
    icon: Sparkles,
    title: "Professional design",
    body: "Considered typography, spacing and detail that position your business as the premium choice.",
  },
  {
    icon: Blocks,
    title: "Customized solutions",
    body: "Every project is shaped around your goals, audience and workflow — never a one-size template.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive by default",
    body: "Layouts designed and tested for phones, tablets and large screens from the very first sketch.",
  },
  {
    icon: Gauge,
    title: "Performance & optimization",
    body: "Lean code, optimized media and SEO foundations so your site is fast and easy to find.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    body: "Work directly with the founder. Plain-language updates, clear timelines and no hand-offs.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    body: "Flexible care plans after launch, so your website keeps performing as your business grows.",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const process = [
  {
    icon: MessageSquare,
    title: "Discovery & consultation",
    body: "We start with a conversation about your business, audience, goals and constraints. You leave with clarity on what is needed and why.",
    outputs: ["Discovery call", "Goals & requirements", "Initial recommendations"],
  },
  {
    icon: ClipboardList,
    title: "Strategy & planning",
    body: "We define scope, sitemap, content needs and a realistic timeline, then agree on a clear proposal before any design begins.",
    outputs: ["Project proposal", "Sitemap & content plan", "Timeline & milestones"],
  },
  {
    icon: Compass,
    title: "Design",
    body: "Wireframes establish structure; high-fidelity designs bring your brand to life. You review and refine at each stage.",
    outputs: ["Wireframes", "Visual design", "Interactive prototype"],
  },
  {
    icon: CodeXml,
    title: "Development",
    body: "Designs are built into a fast, accessible, responsive website using modern, maintainable code and the right platform for you.",
    outputs: ["Front-end build", "CMS / Shopify setup", "Content population"],
  },
  {
    icon: ShieldCheck,
    title: "Testing & launch",
    body: "We test across browsers and devices, check performance and accessibility, then manage a smooth, carefully staged launch.",
    outputs: ["QA across devices", "Performance checks", "Go-live & handover"],
  },
  {
    icon: Rocket,
    title: "Ongoing support",
    body: "After launch we remain available for updates, improvements and maintenance through flexible care plans.",
    outputs: ["Training", "Care plans", "Continuous improvement"],
  },
];

/* ------------------------------------------------------------------ */
/* Concept projects                                                    */
/* ------------------------------------------------------------------ */

export type ProjectVariant = "automotive" | "luxury" | "corporate";

export type Project = {
  slug: string;
  variant: ProjectVariant;
  name: string;
  category: string;
  summary: string;
  brief: string;
  approach: string[];
  features: string[];
  stack: string[];
  palette: { name: string; hex: string }[];
};

export const projects: Project[] = [
  {
    slug: "luxury-ecommerce",
    variant: "luxury",
    name: "Maison Vale",
    category: "Luxury e-commerce · Shopify concept",
    summary:
      "An editorial Shopify storefront concept for a luxury leather-goods label, pairing magazine-style storytelling with a refined shopping experience.",
    brief:
      "Create a Shopify concept for a fictional luxury accessories brand that must feel as considered online as it would in a flagship boutique, while keeping the path to purchase short.",
    approach: [
      "Editorial layouts and generous whitespace inspired by print fashion magazines",
      "Product pages that lead with materials, craftsmanship and detail imagery",
      "Streamlined cart drawer and checkout to reduce friction",
      "Collection filtering designed for browsing on mobile",
    ],
    features: [
      "Editorial homepage",
      "Rich product storytelling",
      "Slide-out cart drawer",
      "Collection filtering",
    ],
    stack: ["Shopify", "Liquid / Online Store 2.0", "Shopify Payments"],
    palette: [
      { name: "Ivory", hex: "#F4EFE6" },
      { name: "Espresso", hex: "#2A211B" },
      { name: "Brass", hex: "#B08D57" },
    ],
  },
  {
    slug: "corporate-business",
    variant: "corporate",
    name: "Harbourline Advisory",
    category: "Corporate services · Website concept",
    summary:
      "A confident, content-led website concept for a professional advisory firm, designed to build credibility and generate qualified enquiries.",
    brief:
      "Design a website for a fictional Toronto advisory firm that needs to explain complex services clearly, project authority, and guide decision-makers towards a consultation.",
    approach: [
      "Structured information architecture organized around client needs",
      "Clear service pages with outcomes-focused messaging",
      "Insights section designed to showcase expertise over time",
      "Prominent, low-friction consultation request",
    ],
    features: [
      "Service architecture",
      "Insights / articles hub",
      "Team & expertise pages",
      "Consultation request form",
    ],
    stack: ["WordPress", "Custom block theme", "Form integration"],
    palette: [
      { name: "Navy", hex: "#0F1B2D" },
      { name: "Mist", hex: "#E9EDF2" },
      { name: "Harbour Gold", hex: "#C6A15B" },
    ],
  },
  {
    slug: "automotive-detailing",
    variant: "automotive",
    name: "Obsidian Auto Studio",
    category: "Automotive detailing · Website concept",
    summary:
      "A high-impact website concept for a premium auto detailing studio, built around service packages and effortless online booking.",
    brief:
      "Design a website for a fictional high-end detailing studio in the GTA that needs to communicate craftsmanship, justify premium pricing and turn visitors into booked appointments.",
    approach: [
      "Dark, cinematic visual language that mirrors a freshly finished paint surface",
      "Tiered service packages presented side by side for easy comparison",
      "A short, three-step booking flow surfaced from every page",
      "Before/after gallery layout designed for strong visual proof",
    ],
    features: [
      "Service package comparison",
      "Booking request flow",
      "Before & after gallery",
      "Mobile-first layout",
    ],
    stack: ["Next.js", "Tailwind CSS", "Booking integration (e.g. Calendly)"],
    palette: [
      { name: "Graphite", hex: "#0E0F11" },
      { name: "Gloss", hex: "#E8E8E8" },
      { name: "Signal Gold", hex: "#C6A15B" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Contact form options                                                */
/* ------------------------------------------------------------------ */

export const serviceOptions = [
  ...services.filter((s) => s.id !== "maintenance").map((s) => s.title),
  ...planOptionLabels,
  "Not sure yet",
];

export const budgetOptions = [
  "Under $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000+",
  "Not sure yet",
];
