import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ConceptFootnote } from "@/components/work/ConceptFootnote";

export function WorkPreview() {
  const [first, ...rest] = projects;
  return (
    <section className="relative border-t border-line bg-ink-2/40 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected concepts"
            title={
              <>
                Ideas that show <span className="text-gold-gradient italic">what&apos;s possible.</span>
              </>
            }
            intro="Independent design concepts created to demonstrate our approach across industries. They are not client projects — they show the thinking and craft we bring to yours."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button href="/work" variant="ghost">
              View all concepts
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <div className="lg:mx-auto lg:max-w-4xl">
              <ProjectCard project={first} />
            </div>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <ConceptFootnote />
      </div>
    </section>
  );
}
