import Link from "next/link";
import { ArrowUpRight, Check, Minus } from "lucide-react";
import { formatAmount, planOptionLabels, plans, pricingMeta } from "@/lib/pricing";
import { Reveal } from "@/components/ui/Reveal";

export function planContactHref(index: number) {
  return `/contact?service=${encodeURIComponent(planOptionLabels[index])}`;
}

/**
 * The three subscription plan cards. `compact` hides the limits (used on the home page).
 *
 * Cards use CSS subgrid: every card shares the same row tracks, so the title, price,
 * inclusions, "Plan limits" heading and button line up horizontally across all three,
 * even when one card's list is longer or wraps onto more lines.
 */
export function PlanCards({ compact = false }: { compact?: boolean }) {
  // One row per direct child of <article> below. Keep in sync if you add or remove rows.
  const rowSpan = compact ? "row-span-7" : "row-span-9";

  return (
    <>
      <ul className="grid gap-x-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal
            as="li"
            key={plan.id}
            delay={i * 0.08}
            className={`${rowSpan} mb-8 grid grid-rows-subgrid gap-0 last:mb-0 lg:mb-0`}
          >
            <article
              className={`relative ${rowSpan} grid grid-rows-subgrid gap-0 rounded-3xl p-8 transition-all duration-500 ease-luxe hover:-translate-y-1 sm:p-10 ${
                plan.featured
                  ? "border border-gold/60 bg-gradient-to-b from-gold/[0.12] via-ink-2 to-ink-2 shadow-[0_30px_100px_-40px_rgba(198,161,91,0.55)]"
                  : "border border-line bg-ink-2/70 hover:border-gold/30"
              }`}
              aria-labelledby={`plan-${plan.id}`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-gradient-to-r from-gold to-gold-light px-4 py-1 text-[0.65rem] font-bold tracking-[0.2em] text-ink uppercase">
                  Most popular
                </span>
              )}

              {/* 1 */}
              <h3 id={`plan-${plan.id}`} className="font-display text-3xl text-white">
                {plan.name}
              </h3>
              {/* 2 */}
              <p className="mt-3 text-sm leading-relaxed text-muted">{plan.tagline}</p>
              {/* 3 */}
              <p className="mt-8 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-display text-6xl leading-none text-gold-gradient">{formatAmount(plan.price)}</span>
                <span className="text-sm text-muted">
                  <span className="font-semibold text-white/80">{pricingMeta.currency}</span> / month
                </span>
              </p>
              {/* 4 */}
              <p className="mt-3 text-xs tracking-[0.15em] text-white/50 uppercase">{plan.idealFor}</p>
              {/* 5 */}
              <div className="gold-hairline my-8 h-px" aria-hidden />
              {/* 6 */}
              <ul className="space-y-3.5 text-sm">
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-white/90">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Check aria-hidden className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {!compact && (
                <>
                  {/* 7 */}
                  <p className="mt-8 self-end text-[0.65rem] font-semibold tracking-[0.25em] text-white/50 uppercase">
                    Plan limits
                  </p>
                  {/* 8 */}
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {plan.limits.map((item) => (
                      <li key={item} className="flex gap-3 text-muted">
                        <Minus aria-hidden className="mt-0.5 size-4 shrink-0 text-white/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* last row */}
              <div className="self-end pt-10">
                <Link
                  href={planContactHref(i)}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-500 ease-luxe ${
                    plan.featured
                      ? "bg-gradient-to-r from-gold to-gold-light text-ink hover:shadow-[0_14px_50px_-10px_rgba(229,201,139,0.75)]"
                      : "border border-white/15 text-white hover:border-gold/70 hover:text-gold-light"
                  }`}
                >
                  Choose {plan.name}
                  <ArrowUpRight aria-hidden className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 text-center text-xs text-muted">
        {pricingMeta.taxNote} {pricingMeta.billingNote}
      </p>
    </>
  );
}
