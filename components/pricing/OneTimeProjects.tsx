import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { buildOptionLabel, formatAmount, pricingMeta, projectBuilds } from "@/lib/pricing";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Three one-off build cards. Prices and inclusions come from lib/pricing.ts.
 * Cards share row tracks via CSS subgrid (9 rows = the 9 children of <article> below,
 * excluding the absolutely positioned hairline), so prices and lists line up.
 */
export function OneTimeProjects() {
  return (
    <>
      <ul className="grid gap-x-6 lg:grid-cols-3">
        {projectBuilds.map((b, i) => (
          <Reveal as="li" key={b.id} delay={i * 0.08} className="row-span-9 mb-6 grid grid-rows-subgrid gap-0 last:mb-0 lg:mb-0">
            <article
              aria-labelledby={`build-${b.id}`}
              className="group relative row-span-9 grid grid-rows-subgrid gap-0 overflow-hidden rounded-3xl border border-line bg-ink-2/70 p-8 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-gold/40 sm:p-10"
            >
              <span aria-hidden className="gold-hairline absolute inset-x-0 top-0 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="font-display text-sm text-white/30">{String(i + 1).padStart(2, "0")}</span>
              <h3 id={`build-${b.id}`} className="mt-4 font-display text-3xl leading-tight text-white">
                {b.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.description}</p>

              <p className="mt-8 text-[0.65rem] font-semibold tracking-[0.25em] text-white/50 uppercase">Starting at</p>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-5xl leading-none text-gold-gradient">{formatAmount(b.startingAt)}</span>
                <span className="text-sm font-semibold text-white/80">{pricingMeta.currency}</span>
              </p>
              <p className="mt-2 text-xs text-white/50">One-time · no subscription required</p>

              <div className="gold-hairline my-8 h-px" aria-hidden />

              <ul className="space-y-3.5 text-sm">
                {b.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-white/90">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Check aria-hidden className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="self-end pt-10">
                <Link
                  href={`/contact?service=${encodeURIComponent(buildOptionLabel(b))}`}
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-500 ease-luxe hover:shadow-[0_14px_50px_-10px_rgba(229,201,139,0.75)]"
                >
                  Request a Project Quote
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 text-center text-xs text-muted">
        Starting prices in {pricingMeta.currency}, plus applicable taxes. Every build is quoted precisely after a
        short discovery call. You own the finished project once it&apos;s paid in full.
      </p>
    </>
  );
}
