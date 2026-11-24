import type { Metadata } from "next";
import { Check } from "lucide-react";
import { services } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, WordPress, Shopify and e-commerce, UI/UX design, branding and website maintenance from a Toronto-based studio serving clients around the world.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything your business needs <span className="text-gold-gradient italic">to look its best online.</span>
          </>
        }
        intro="Choose a single service or combine them into one cohesive engagement. Every project is scoped around your goals, timeline and budget."
      >
        <nav aria-label="Services on this page" className="mt-12 flex flex-wrap gap-3">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/75 transition-colors hover:border-gold/60 hover:text-gold-light"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x divide-y divide-line">
        {services.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 py-20 sm:py-28" aria-labelledby={`${s.id}-title`}>
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-full border border-gold/40 text-gold">
                    <s.icon aria-hidden className="size-6" />
                  </span>
                  <span className="font-display text-lg text-white/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h2 id={`${s.id}-title`} className="mt-8 font-display text-4xl font-medium text-white sm:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{s.intro}</p>
                <div className="mt-8">
                  <Button href={`/contact?service=${encodeURIComponent(s.title)}`} variant="ghost">
                    Enquire about {s.title.split(" ")[0]}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
                <div className="card-surface p-8 sm:p-10">
                  <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">What you gain</h3>
                  <ul className="mt-6 space-y-4">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-4 text-white/90">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                          <Check aria-hidden className="size-3.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="gold-hairline my-8 h-px" aria-hidden />
                  <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Typical deliverables</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="rounded-full border border-line bg-ink px-3.5 py-1.5 text-xs text-white/75">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CTASection />
    </>
  );
}
