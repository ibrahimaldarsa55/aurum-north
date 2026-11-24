import type { Metadata } from "next";
import { Check } from "lucide-react";
import { formatPrice, planTerms, plans, pricingFaqs } from "@/lib/pricing";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PlanCards } from "@/components/pricing/PlanCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { OneTimeProjects } from "@/components/pricing/OneTimeProjects";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description: `One-time website, Shopify, UI/UX and branding projects, plus monthly website care plans from ${formatPrice(plans[0].price)}/month (CAD).`,
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & plans"
        title={
          <>
            Transparent pricing, <span className="text-gold-gradient italic">premium results.</span>
          </>
        }
        intro="Two simple ways to work with us: commission a one-time project, and — if you'd like — keep it performing with a monthly care plan. A subscription is never required."
      >
        <Reveal delay={0.15} className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a href="#projects" className="card-surface group p-6 transition-colors hover:border-gold/40">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">01 · One-time projects</p>
            <p className="mt-2 text-sm text-white/80">Websites, stores, UI/UX and branding — quoted per project.</p>
          </a>
          <a href="#plans" className="card-surface group p-6 transition-colors hover:border-gold/40">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">02 · Monthly care plans</p>
            <p className="mt-2 text-sm text-white/80">
              From {formatPrice(plans[0].price)}/month. Maintenance, security, updates and support.
            </p>
          </a>
        </Reveal>
      </PageHero>

      <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="One-time projects"
            title={
              <>
                Pay once. <span className="text-gold-gradient italic">Own it outright.</span>
              </>
            }
            intro="Every project is scoped around your goals and quoted upfront, with no subscription required. Once it's paid in full, the website is yours."
          />
          <div className="mt-14">
            <OneTimeProjects />
          </div>
        </div>
      </section>

      <section id="plans" className="scroll-mt-24 border-t border-line bg-ink-2/40 py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Monthly care plans"
            title={
              <>
                Ongoing care, <span className="text-gold-gradient italic">clearly defined.</span>
              </>
            }
            intro="Optional subscriptions that keep your website secure, current and fast — with clear limits, so you always know exactly what's included."
          />
          <div className="mt-16">
            <PlanCards />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Compare plans" title="Side by side." />
          <div className="mt-12">
            <ComparisonTable />
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-3xl text-white sm:text-4xl">What every plan includes — and doesn&apos;t.</h2>
              <p className="mt-4 text-muted">
                Clear boundaries keep our service fast and dependable for every client. Here&apos;s how scope works.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <ul className="space-y-4">
                {planTerms.map((t) => (
                  <li key={t} className="flex gap-4 border-b border-line pb-4 text-sm leading-relaxed text-white/80">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink-2/40 py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Questions, answered." />
          </div>
          <div className="space-y-3 lg:col-span-8">
            {pricingFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="card-surface group p-6 open:border-gold/30 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-white">
                    {f.q}
                    <span
                      aria-hidden
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-white/15 text-gold transition-transform duration-500 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Not sure which option <span className="text-gold-gradient italic">fits best?</span>
          </>
        }
        body="Tell us about your business and we'll recommend the right project scope and care plan — or confirm you don't need one."
      />
    </>
  );
}
