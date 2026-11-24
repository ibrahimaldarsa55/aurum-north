import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import { isContactConfigured } from "@/lib/contact";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start your project with ${site.name}. Tell us about your business and goals and we'll reply with clear next steps.`,
};

const steps = [
  "We review your enquiry and any references you share.",
  "We reply to arrange a short discovery call.",
  "You receive a clear proposal with scope, timeline and investment.",
];

export default function ContactPage() {
  const configured = isContactConfigured();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <span className="text-gold-gradient italic">your project.</span>
          </>
        }
        intro="Share a few details and we'll get back to you with thoughtful next steps. Every enquiry is read personally by the founder."
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Suspense fallback={<div className="card-surface h-[640px] animate-pulse" />}>
              <ContactForm configured={configured} />
            </Suspense>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 lg:col-span-4 lg:col-start-9">
            <div className="card-surface p-8">
              <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Direct contact</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <Mail aria-hidden className="size-5 shrink-0 text-gold" />
                  <a href={`mailto:${site.contact.email}`} className="text-white/85 transition-colors hover:text-gold-light">
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MapPin aria-hidden className="size-5 shrink-0 text-gold" />
                  <span className="text-white/85">
                    {site.location.city}, {site.location.region}
                    <span className="block text-muted">Serving {site.location.serviceArea}</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <Clock aria-hidden className="size-5 shrink-0 text-gold" />
                  <span className="text-white/85">
                    Monday – Friday
                    <span className="block text-muted">Eastern Time</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="card-surface p-8">
              <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">What happens next</h2>
              <ol className="mt-6 space-y-5">
                {steps.map((s, i) => (
                  <li key={s} className="flex gap-4 text-sm text-white/80">
                    <span className="font-display text-xl leading-none text-gold-gradient">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
