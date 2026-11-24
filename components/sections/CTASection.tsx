import { Mail } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type Props = {
  title?: React.ReactNode;
  body?: string;
};

export function CTASection({
  title = (
    <>
      Let&apos;s build something <span className="text-gold-gradient italic">remarkable.</span>
    </>
  ),
  body = "Tell us about your business and what you want to achieve. We'll reply with clear next steps and an honest recommendation — no obligation.",
}: Props) {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-3xl border border-gold/25 bg-ink-2 px-6 py-20 text-center sm:px-16 sm:py-24">
            <div aria-hidden className="absolute -top-32 left-1/2 -z-10 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
            <div aria-hidden className="gold-hairline absolute inset-x-0 top-0 h-px" />
            <p className="eyebrow justify-center">Start a project</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] font-medium text-balance sm:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{body}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact">Book a consultation</Button>
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-gold-light"
              >
                <Mail aria-hidden className="size-4 text-gold" />
                {site.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
