"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on route change and lock body scroll while it is open.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled || open
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`group relative py-2 text-sm tracking-wide transition-colors duration-300 ${
                isActive(item.href) ? "text-gold-light" : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
              <span
                aria-hidden
                className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-500 ease-luxe ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold-light transition-all duration-500 ease-luxe hover:bg-gold hover:text-ink md:inline-flex"
          >
            Start a project
            <ArrowUpRight aria-hidden className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-gold/60 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ink md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pt-8">
              {[...site.nav, { label: "Contact", href: "/contact" }].map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-line py-5 font-display text-4xl ${
                      isActive(item.href) ? "text-gold-light" : "text-white"
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight aria-hidden className="size-6 text-gold" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <p className="container-x mt-10 text-sm text-muted">
              {site.location.city}, {site.location.region} · {site.contact.email}
            </p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
