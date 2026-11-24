"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export const CONCEPT_NOTE =
  "Self-initiated studio concept built to demonstrate our design and engineering architecture; not commissioned client work.";

/**
 * Understated "Studio concept" pill. Hover, focus or click/tap reveals a dark-glass
 * popover explaining that the piece is self-initiated. It sits above the card's
 * stretched link (z-10), so interacting with it never opens the case study.
 */
export function ConceptBadge({ className = "" }: { className?: string }) {
  const [pinned, setPinned] = useState(false); // opened by click / tap
  const [hovered, setHovered] = useState(false); // pointer over or keyboard focus
  const ref = useRef<HTMLSpanElement>(null);
  const tipId = useId();
  const visible = pinned || hovered;

  // Close a pinned popover on outside click or Escape.
  useEffect(() => {
    if (!pinned) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setPinned(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinned(false);
        setHovered(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinned]);

  return (
    <span
      ref={ref}
      className={`relative z-10 inline-flex ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        aria-describedby={tipId}
        aria-expanded={visible}
        onClick={() => setPinned((p) => !p)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
          visible
            ? "border-gold/40 bg-gold/[0.06] text-gold-light"
            : "border-white/12 bg-white/[0.03] text-white/60 hover:text-white/80"
        }`}
      >
        Studio concept
        <Info aria-hidden className="size-3 text-gold/80" strokeWidth={2.25} />
      </button>

      <motion.span
        id={tipId}
        role="tooltip"
        initial={false}
        animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute bottom-full left-0 mb-2.5 w-[17.5rem] max-w-[80vw] origin-bottom-left rounded-xl border border-white/10 bg-ink/75 p-3.5 text-left text-xs leading-relaxed font-normal tracking-normal text-white/85 normal-case shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl ${
          visible ? "" : "pointer-events-none"
        }`}
      >
        <span aria-hidden className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        {CONCEPT_NOTE}
      </motion.span>
    </span>
  );
}
