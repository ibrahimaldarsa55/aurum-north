import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ServicesOverview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Six disciplines. <span className="text-gold-gradient italic">One standard.</span>
                </>
              }
              intro="From the first sketch to ongoing care, every part of your digital presence is designed and built to the same premium standard."
            />
          </div>
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/services" variant="ghost">
              All services
            </Button>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={(i % 3) * 0.08} className="bg-ink">
              <Link
                href={`/services#${s.id}`}
                className="group relative flex h-full flex-col p-8 transition-colors duration-500 hover:bg-ink-2 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10">
                    <s.icon aria-hidden className="size-5" />
                  </span>
                  <span className="font-display text-sm text-white/30">0{i + 1}</span>
                </div>
                <h3 className="mt-10 font-display text-2xl font-medium text-white">{s.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-light opacity-80 transition-all duration-500 group-hover:gap-3 group-hover:opacity-100">
                  Learn more <ArrowUpRight aria-hidden className="size-4" />
                </span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-700 ease-luxe group-hover:scale-x-100"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
