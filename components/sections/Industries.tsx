import { industries } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Industries() {
  return (
    <section className="relative border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Built for businesses <span className="text-gold-gradient italic">of every kind.</span>
            </>
          }
          intro="We bring the same premium standard to every sector — adapting structure, features and tone to how your customers actually buy."
        />
        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal
              as="li"
              key={ind.name}
              delay={(i % 4) * 0.06}
              className="card-surface group p-7 transition-all duration-500 hover:border-gold/30 hover:bg-ink-2"
            >
              <ind.icon aria-hidden className="size-6 text-gold transition-transform duration-500 group-hover:-translate-y-0.5" />
              <h3 className="mt-6 text-base font-semibold text-white">{ind.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{ind.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
