import type { ProjectVariant } from "@/lib/content";

/**
 * Hand-built, code-only illustrations of each concept website.
 * No stock photography is used, so there are no licensing concerns,
 * and the mockups stay crisp at any size.
 */
export function ProjectMockup({ variant, className = "" }: { variant: ProjectVariant; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/10 bg-ink-3 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ${className}`}
      aria-hidden
    >
      <BrowserBar />
      <div className="aspect-[16/10] w-full [container-type:inline-size]">
        {variant === "automotive" && <Automotive />}
        {variant === "luxury" && <Luxury />}
        {variant === "corporate" && <Corporate />}
      </div>
    </div>
  );
}

function BrowserBar() {
  return (
    <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#151515] px-3 py-2">
      <span className="size-2 rounded-full bg-white/15" />
      <span className="size-2 rounded-full bg-white/15" />
      <span className="size-2 rounded-full bg-white/15" />
      <span className="ml-3 h-3 w-1/3 rounded-full bg-white/5" />
    </div>
  );
}

/* --- Automotive detailing ------------------------------------------ */
function Automotive() {
  return (
    <div className="relative flex h-full flex-col bg-[#0E0F11] text-white">
      <div className="flex items-center justify-between px-[5%] py-[3%]">
        <span className="text-[clamp(6px,2.4cqw,22px)] font-bold tracking-[0.3em]">OBSIDIAN</span>
        <div className="flex gap-[6%]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[3px] w-6 rounded bg-white/25" />
          ))}
        </div>
        <span className="rounded-full bg-[#C6A15B] px-2 py-0.5 text-[clamp(5px,1.8cqw,18px)] font-bold text-black">
          BOOK
        </span>
      </div>
      <div className="relative flex flex-1 items-center px-[5%]">
        <div className="relative z-10 w-1/2">
          <span className="mb-2 block h-[3px] w-8 bg-[#C6A15B]" />
          <p className="font-display text-[clamp(12px,5.7cqw,60px)] leading-[1.02] font-semibold">
            Showroom finish.
            <br />
            <span className="text-[#C6A15B]">Every time.</span>
          </p>
          <span className="mt-3 block h-1.5 w-3/4 rounded bg-white/15" />
          <span className="mt-1.5 block h-1.5 w-1/2 rounded bg-white/10" />
        </div>
        {/* Stylized car silhouette with light sweep */}
        <svg viewBox="0 0 400 160" className="absolute right-[2%] bottom-[18%] w-[62%]">
          <defs>
            <linearGradient id="car-body" x1="0" x2="1">
              <stop offset="0" stopColor="#1c1d21" />
              <stop offset="0.55" stopColor="#3a3b40" />
              <stop offset="1" stopColor="#121316" />
            </linearGradient>
            <linearGradient id="car-sweep" x1="0" x2="1">
              <stop offset="0" stopColor="#E5C98B" stopOpacity="0" />
              <stop offset="0.5" stopColor="#E5C98B" stopOpacity="0.9" />
              <stop offset="1" stopColor="#E5C98B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="146" rx="180" ry="8" fill="#000" opacity="0.6" />
          <path
            d="M20 120 Q30 92 80 86 L140 60 Q200 40 270 58 L330 84 Q378 92 384 118 L384 128 L20 128 Z"
            fill="url(#car-body)"
          />
          <path d="M150 64 Q205 48 262 62 L300 84 L128 86 Z" fill="#0b0c0e" opacity="0.85" />
          <path d="M40 100 Q200 70 370 100" stroke="url(#car-sweep)" strokeWidth="2.5" fill="none" />
          <circle cx="104" cy="128" r="22" fill="#08090a" stroke="#2d2e33" strokeWidth="4" />
          <circle cx="306" cy="128" r="22" fill="#08090a" stroke="#2d2e33" strokeWidth="4" />
          <circle cx="104" cy="128" r="8" fill="#C6A15B" opacity="0.7" />
          <circle cx="306" cy="128" r="8" fill="#C6A15B" opacity="0.7" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-[2%] px-[5%] pb-[4%]">
        {["Essential", "Signature", "Ceramic"].map((t, i) => (
          <div
            key={t}
            className={`rounded-md border p-[6%] ${i === 1 ? "border-[#C6A15B]/70 bg-[#C6A15B]/10" : "border-white/10 bg-white/[0.03]"}`}
          >
            <p className="text-[clamp(5px,1.8cqw,18px)] font-semibold tracking-widest text-white/80 uppercase">{t}</p>
            <span className="mt-1.5 block h-1 w-2/3 rounded bg-white/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Luxury e-commerce ---------------------------------------------- */
function Luxury() {
  return (
    <div className="flex h-full flex-col bg-[#F4EFE6] text-[#2A211B]">
      <div className="flex items-center justify-between border-b border-[#2A211B]/10 px-[5%] py-[2.5%]">
        <div className="flex gap-2">
          <span className="h-[3px] w-5 rounded bg-[#2A211B]/40" />
          <span className="h-[3px] w-5 rounded bg-[#2A211B]/40" />
        </div>
        <span className="font-display text-[clamp(8px,3.3cqw,32px)] tracking-[0.35em]">MAISON VALE</span>
        <span className="relative size-[clamp(8px,2.6cqw,28px)] rounded-sm border border-[#2A211B]/60">
          <span className="absolute -top-1 -right-1 size-1.5 rounded-full bg-[#B08D57]" />
        </span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-[3%] p-[4%]">
        <div className="col-span-2 flex flex-col justify-center">
          <p className="text-[clamp(5px,1.7cqw,18px)] tracking-[0.3em] text-[#B08D57] uppercase">Autumn Edit</p>
          <p className="mt-2 font-display text-[clamp(12px,5.7cqw,60px)] leading-[1.02] italic">
            Crafted to be
            <br />
            carried for life.
          </p>
          <span className="mt-3 inline-block w-fit border-b border-[#2A211B] pb-0.5 text-[clamp(5px,1.8cqw,18px)] tracking-[0.2em] uppercase">
            Shop the collection
          </span>
        </div>
        <div className="relative col-span-3 overflow-hidden rounded-sm bg-gradient-to-br from-[#d9cbb4] to-[#bfa685]">
          {/* Stylized handbag */}
          <svg viewBox="0 0 200 160" className="absolute inset-0 m-auto h-[80%] w-[80%]">
            <path d="M70 60 Q70 22 100 22 Q130 22 130 60" fill="none" stroke="#2A211B" strokeWidth="5" />
            <rect x="40" y="58" width="120" height="86" rx="10" fill="#5b3f2c" />
            <rect x="40" y="58" width="120" height="30" rx="10" fill="#6d4b34" />
            <rect x="92" y="80" width="16" height="12" rx="2" fill="#E5C98B" />
            <path d="M48 140 L152 140" stroke="#3e2a1e" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[2%] px-[4%] pb-[4%]">
        {["#cdb89a", "#a98563", "#e3d7c3", "#8b6a4f"].map((c) => (
          <div key={c}>
            <div className="aspect-square rounded-sm" style={{ background: c }} />
            <span className="mt-1 block h-1 w-3/4 rounded bg-[#2A211B]/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Corporate business --------------------------------------------- */
function Corporate() {
  return (
    <div className="flex h-full flex-col bg-[#0F1B2D] text-white">
      <div className="flex items-center justify-between px-[5%] py-[3%]">
        <span className="flex items-center gap-1.5 text-[clamp(6px,2.2cqw,22px)] font-semibold tracking-wide">
          <span className="size-2.5 rotate-45 border border-[#C6A15B]" />
          Harbourline
        </span>
        <div className="flex gap-3">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-[3px] w-5 rounded bg-white/25" />
          ))}
        </div>
        <span className="rounded border border-[#C6A15B] px-2 py-0.5 text-[clamp(5px,1.7cqw,18px)] text-[#E5C98B]">
          Consultation
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 items-center gap-[4%] px-[5%]">
        <div>
          <p className="text-[clamp(5px,1.7cqw,18px)] tracking-[0.25em] text-[#C6A15B] uppercase">Advisory · Toronto</p>
          <p className="mt-2 font-display text-[clamp(12px,5.3cqw,56px)] leading-[1.05]">
            Clarity for complex decisions.
          </p>
          <span className="mt-3 block h-1.5 w-5/6 rounded bg-white/15" />
          <span className="mt-1.5 block h-1.5 w-2/3 rounded bg-white/10" />
        </div>
        {/* Abstract chart */}
        <svg viewBox="0 0 200 120" className="w-full">
          {[20, 50, 80, 110].map((y) => (
            <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#ffffff" strokeOpacity="0.07" />
          ))}
          {[
            [14, 70],
            [44, 55],
            [74, 62],
            [104, 40],
            [134, 46],
            [164, 24],
          ].map(([x, h], i) => (
            <rect key={i} x={x} y={h} width="18" height={110 - h} rx="2" fill="#E9EDF2" opacity={0.08 + i * 0.04} />
          ))}
          <path d="M23 66 L53 50 L83 58 L113 36 L143 42 L173 18" fill="none" stroke="#C6A15B" strokeWidth="2.5" />
          <circle cx="173" cy="18" r="4" fill="#E5C98B" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-[2%] bg-[#E9EDF2] px-[5%] py-[3%]">
        {["Strategy", "Transactions", "Governance"].map((t) => (
          <div key={t} className="border-l-2 border-[#C6A15B] pl-2">
            <p className="text-[clamp(5px,1.8cqw,20px)] font-semibold text-[#0F1B2D]">{t}</p>
            <span className="mt-1 block h-1 w-3/4 rounded bg-[#0F1B2D]/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
