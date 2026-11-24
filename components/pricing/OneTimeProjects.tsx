import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, oneTimeProjects } from "@/lib/pricing";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function OneTimeProjects() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
      {oneTimeProjects.map((p, i) => {
        const service = services.find((s) => s.id === p.serviceId);
        const Icon = service?.icon;
        return (
          <Reveal as="li" key={p.title} delay={i * 0.06} className="bg-ink">
            <Link
              href={`/contact?service=${encodeURIComponent(service?.title ?? p.title)}`}
              className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-ink-2"
            >
              {Icon && <Icon aria-hidden className="size-5 text-gold" />}
              <h3 className="mt-6 font-display text-xl text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <p className="mt-6 text-sm font-semibold text-gold-light">
                {p.startingAt ? `From ${formatPrice(p.startingAt)}` : "Custom quote"}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-[0.15em] text-white/60 uppercase transition-colors group-hover:text-gold-light">
                Request a quote <ArrowUpRight aria-hidden className="size-3.5" />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
