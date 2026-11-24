import type { Metadata } from "next";
import { projects } from "@/lib/content";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ConceptFootnote } from "@/components/work/ConceptFootnote";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Independent design concepts demonstrating our approach across e-commerce, corporate and service-business websites.",
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
      />

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
          <ConceptFootnote />
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
