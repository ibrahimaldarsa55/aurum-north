import type { Metadata } from "next";
import { process } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From discovery to launch and ongoing support — a clear, six-stage process for designing and building your website.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title={
          <>
            Considered at every stage, <span className="text-gold-gradient italic">clear at every step.</span>
          </>
        }
        intro="A structured, transparent workflow means you always know where your project stands, what comes next, and what we need from you."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <ol className="relative mx-auto max-w-4xl">
            <span aria-hidden className="absolute top-2 bottom-2 left-7 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent sm:left-9" />
            {process.map((step, i) => (
              <Reveal as="li" key={step.title} className="relative pb-16 pl-20 last:pb-0 sm:pl-28">
                <span className="absolute top-0 left-0 grid size-14 place-items-center rounded-full border border-gold/50 bg-ink text-gold sm:size-[4.5rem]">
                  <step.icon aria-hidden className="size-6" />
                </span>
                <p className="font-display text-lg text-gold-gradient">Stage {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-3xl font-medium text-white sm:text-4xl">{step.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{step.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {step.outputs.map((o) => (
                    <li key={o} className="rounded-full border border-line bg-ink-2 px-3.5 py-1.5 text-xs text-white/75">
                      {o}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title={
          <>
            Ready for <span className="text-gold-gradient italic">step one?</span>
          </>
        }
        body="Every project begins with a relaxed, no-obligation conversation about your business and goals."
      />
    </>
  );
}
