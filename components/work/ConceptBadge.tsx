export function ConceptBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-ink/85 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-gold-light uppercase backdrop-blur ${className}`}
    >
      <span className="size-1.5 rounded-full bg-gold" aria-hidden />
      Design concept
    </span>
  );
}
