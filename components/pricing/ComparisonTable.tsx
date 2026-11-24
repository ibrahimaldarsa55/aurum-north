import { Check, Minus } from "lucide-react";
import { comparison, formatPrice, plans } from "@/lib/pricing";
import { Reveal } from "@/components/ui/Reveal";

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <>
        <Check aria-hidden className="mx-auto size-4 text-gold" />
        <span className="sr-only">Included</span>
      </>
    );
  if (value === false)
    return (
      <>
        <Minus aria-hidden className="mx-auto size-4 text-white/25" />
        <span className="sr-only">Not included</span>
      </>
    );
  return <span className="text-white/85">{value}</span>;
}

export function ComparisonTable() {
  return (
    <Reveal>
      {/* Scrolls horizontally on small screens rather than squashing columns. */}
      <div className="overflow-x-auto rounded-2xl border border-line bg-ink-2/60">
        <table className="w-full min-w-[640px] text-sm">
          <caption className="sr-only">Comparison of monthly care plans</caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="p-5 text-left text-xs font-semibold tracking-[0.2em] text-white/50 uppercase sm:p-6">
                Feature
              </th>
              {plans.map((p) => (
                <th
                  key={p.id}
                  scope="col"
                  className={`p-5 text-center sm:p-6 ${p.featured ? "bg-gold/[0.07]" : ""}`}
                >
                  <span className="block font-display text-xl text-white">{p.name}</span>
                  <span className="text-xs text-gold">{formatPrice(p.price)}/mo</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.feature} className="border-b border-line last:border-0">
                <th scope="row" className="p-5 text-left font-normal text-white/75 sm:px-6">
                  {row.feature}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className={`p-5 text-center sm:px-6 ${plans[i].featured ? "bg-gold/[0.07]" : ""}`}>
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
