import { differences, freePreviewHref, launchGuaranteeTerms } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function AurumDifference() {
  return (
    <section className="grain relative isolate overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden className="absolute top-0 left-1/2 -z-10 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="The Aurum North Difference"
          title={
            <>
              Three promises <span className="text-gold-gradient italic">most agencies won&apos;t make.</span>
            </>
          }
          intro="We take the risk out of hiring a studio: you see the work first, it's built to earn revenue, and it launches on a guaranteed date."
        />

        <ol className="mt-16 grid gap-6 lg:grid-cols-3">
          {differences.map((d, i) => (
            <Reveal
              as="li"
              key={d.title}
              delay={i * 0.1}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-b from-ink-2 to-ink p-8 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/50 sm:p-10"
            >
              <div aria-hidden className="gold-hairline absolute inset-x-0 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <span className="grid size-14 place-items-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-all duration-500 group-hover:border-gold group-hover:bg-gold/15">
                  <d.icon aria-hidden className="size-6" />
                </span>
                <span className="font-display text-5xl leading-none text-gold-gradient opacity-40">0{i + 1}</span>
              </div>
              <p className="mt-10 text-[0.7rem] font-semibold tracking-[0.28em] text-gold uppercase">{d.kicker}</p>
              <h3 className="mt-3 font-display text-3xl leading-tight font-medium text-balance text-white">{d.title}</h3>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{d.body}</p>
              {i === differences.length - 1 && (
                <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-white/50">{launchGuaranteeTerms}</p>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-4 text-center">
          <Button href={freePreviewHref}>Request Your Free Live Preview</Button>
          <p className="text-xs text-muted">10-minute call · No payment details · No obligation</p>
        </Reveal>
      </div>
    </section>
  );
}
