import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import { Logo } from "@/components/ui/Logo";

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getYear();

  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="gold-hairline absolute inset-x-0 top-0 h-px" aria-hidden />
      <div className="container-x grid gap-14 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            An independent, founder-led digital agency based in {site.location.city},{" "}
            {site.location.region}, crafting premium websites, stores and brands for{" "}
            {site.location.serviceArea}.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <MapPin aria-hidden className="size-4 text-gold" />
              {site.location.city}, {site.location.region}, {site.location.country}
            </li>
            <li className="flex items-center gap-3">
              <Mail aria-hidden className="size-4 text-gold" />
              <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-gold-light">
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Explore</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[{ label: "Home", href: "/" }, ...site.nav, { label: "Contact", href: "/contact" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 transition-colors hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Services</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="text-white/70 transition-colors hover:text-gold-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {site.socials.length > 0 && (
          <div className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Follow</h2>
            <ul className="mt-6 space-y-3 text-sm">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition-colors hover:text-gold-light"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built in {site.location.city}, Canada.</p>
        </div>
      </div>
    </footer>
  );
}
