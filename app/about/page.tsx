import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/sections/PageHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is an independent, founder-led digital agency based in Toronto, Ontario.`,
};

const principles = [
  {
    title: "Craft over volume",
    body: "We take on a focused number of projects so each one receives the attention it deserves.",
  },
  {
    title: "Honest advice",
    body: "We recommend what is right for your business — even when that means a simpler solution.",
  },
  {
    title: "Built to last",
    body: "Clean, documented, maintainable work that serves you well beyond launch day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            An independent studio, <span className="text-gold-gradient italic">rooted in Toronto.</span>
          </>
        }
        intro={`${site.name} is a founder-led digital agency based in ${site.location.city}, ${site.location.region}, helping businesses around the world present themselves online with the same quality and care they bring to their own work.`}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-3xl leading-snug text-white sm:text-4xl">
              &ldquo;Your website should feel like the{" "}
              <span className="text-gold-gradient italic">best version of your business</span> — the one
              your clients experience in person.&rdquo;
            </p>
            <p className="mt-6 text-sm tracking-[0.2em] text-gold uppercase">Our guiding idea</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-muted sm:text-lg lg:col-span-6 lg:col-start-7">
            <p>
              {site.name} was founded in {site.location.city} with a simple aim: give established and
              growing businesses access to premium, thoughtfully crafted websites — without the
              layers, hand-offs and overhead of a large agency.
            </p>
            <p>
              As a founder-led studio, you work directly with the person responsible for your project, from
              the first conversation through design, development and launch. That means clear
              communication, quick decisions and genuine accountability.
            </p>
            <p>
              We work across industries — from automotive, beauty and hospitality to retail, real estate,
              professional services, e-commerce and corporate businesses — adapting each website to how
              that sector&apos;s customers research and buy.
            </p>
            <p>
              Based in {site.location.city}, {site.location.region}, we work with {site.location.serviceArea},
              collaborating comfortably online across time zones.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2/40 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">How we approach every project</p>
          </Reveal>
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.08} className="border-t border-gold/30 pt-6">
                <h2 className="font-display text-3xl text-white">{p.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
