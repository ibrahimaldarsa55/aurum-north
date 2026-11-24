import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-luxe";

const variants = {
  primary:
    "bg-gradient-to-r from-gold to-gold-light text-ink shadow-[0_10px_40px_-12px_rgba(198,161,91,0.6)] hover:shadow-[0_14px_50px_-10px_rgba(229,201,139,0.75)] hover:-translate-y-0.5",
  ghost:
    "border border-white/15 text-white hover:border-gold/70 hover:text-gold-light hover:-translate-y-0.5",
};

export function Button({ href, children, variant = "primary", className = "", icon = true }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-500 ease-luxe group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
