import type { Metadata } from "next";
import { Info } from "lucide-react";
import { projects } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Independent design concepts demonstrating our approach to automotive, luxury e-commerce and corporate websites.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Concepts that show <span className="text-gold-gradient italic">how we think.</span>
          </>
        }
        intro="Each of these is an independent design concept created to demonstrate our capabilities across different industries."
      >
        <Reveal delay={0.15}>
          <p className="mt-10 flex max-w-2xl items-start gap-3 rounded-xl border border-gold/25 bg-gold/5 p-4 text-sm leading-relaxed text-white/80">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-gold" />
            <span>
              <strong className="font-semibold text-gold-light">Transparency note:</strong> the brands shown
              here are fictional. These are self-initiated concepts, not commissioned client work, and no
              client results are implied.
            </span>
          </p>
        </Reveal>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title={
          <>
            Imagine what we could <span className="text-gold-gradient italic">build for you.</span>
          </>
        }
      />
    </>
  );
}
