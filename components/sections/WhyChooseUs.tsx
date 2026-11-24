import { reasons } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
          <SectionHeading
            eyebrow="Why choose us"
            title={
              <>
                Agency-level quality, <span className="text-gold-gradient italic">founder-level care.</span>
              </>
            }
            intro="Working with an independent studio means you speak directly with the person designing and building your project — with the attention to detail that comes with it."
          />
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={(i % 2) * 0.08}
              className="card-surface group p-8 transition-all duration-500 hover:border-gold/30 hover:bg-ink-2"
            >
              <r.icon aria-hidden className="size-6 text-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
              <h3 className="mt-6 text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{r.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
