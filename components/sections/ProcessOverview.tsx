import { process } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ProcessOverview() {
  return (
    <section className="relative border-t border-line bg-ink-2/40 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                A clear process, <span className="text-gold-gradient italic">start to finish.</span>
              </>
            }
            intro="Six considered stages keep your project focused, transparent and on schedule."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/process" variant="ghost">
              Our process
            </Button>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 0.08} className="relative border-t border-line pt-8">
              <span aria-hidden className="absolute -top-px left-0 h-px w-16 bg-gold" />
              <span className="font-display text-5xl text-gold-gradient">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
