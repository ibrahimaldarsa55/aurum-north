const items = [
  "Custom websites",
  "Shopify stores",
  "WordPress",
  "UI/UX design",
  "Brand identity",
  "Performance",
  "Care plans",
  "Every industry",
];

/** Slow, decorative ticker. Pauses on hover; disabled for reduced-motion users. */
export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-line bg-ink-2/50 py-6" aria-hidden>
      <div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 pr-12 font-display text-2xl whitespace-nowrap text-white/40 italic sm:text-3xl">
            {t}
            <span className="size-1.5 rotate-45 bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
