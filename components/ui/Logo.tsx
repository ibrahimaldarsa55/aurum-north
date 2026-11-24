import Link from "next/link";
import { site } from "@/lib/site";

/** Monogram + wordmark. Text comes from lib/site.ts so renaming is one edit. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative grid size-10 place-items-center rounded-full border border-gold/50 transition-colors duration-500 group-hover:border-gold-light">
        <span className="absolute inset-1 rounded-full border border-gold/15" aria-hidden />
        <span className="font-display text-sm font-semibold tracking-wider text-gold-gradient">
          {site.shortName}
        </span>
      </span>
      <span className="font-display text-xl font-medium tracking-[0.12em] text-white uppercase">
        {site.name}
      </span>
    </Link>
  );
}
