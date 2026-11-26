import { differences, freePreviewHref, launchGuaranteeTerms } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** Pricing-page callout for the Aurum North guarantees. Copy comes from `differences` in lib/content.ts. */
export function GuaranteeBanner() {
  return (
    <section aria-labelledby="guarantee-heading" className="pb-4">
      <div className="container-x">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-3xl border border-gold/30 bg-ink-2 p-8 sm:p-12">
            <div aria-hidden className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-[110px]" />
            <div aria-hidden className="gold-hairline absolute inset-x-0 top-0 h-px" />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="eyebrow">The Aurum North guarantee</p>
                <h2 id="guarantee-heading" className="mt-5 font-display text-3xl leading-[1.1] font-medium text-balance text-white sm:text-4xl">
                  See it before you pay. <span className="text-gold-gradient italic">Launch in 14 days.</span>
                </h2>
                <div className="mt-8">
                  <Button href={freePreviewHref}>Request Your Free Live Preview</Button>
                </div>
              </div>

              <ul className="space-y-5 lg:col-span-7">
                {differences.map((d) => (
                  <li key={d.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                      <d.icon aria-hidden className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-white">{d.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{d.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 border-t border-line pt-5 text-xs leading-relaxed text-white/50">{launchGuaranteeTerms}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
