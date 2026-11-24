import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectMockup } from "./ProjectMockup";
import { ConceptBadge } from "./ConceptBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block rounded-2xl border border-line bg-ink-2/60 p-3 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:bg-ink-2 sm:p-4"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.03]">
          <ProjectMockup variant={project.variant} />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 px-2 pt-6 pb-3">
        <div>
          <ConceptBadge />
          <p className="mt-4 text-xs tracking-[0.2em] text-gold uppercase">{project.category}</p>
          <h3 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        </div>
        <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-500 ease-luxe group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
          <ArrowUpRight aria-hidden className="size-5" />
          <span className="sr-only">View concept</span>
        </span>
      </div>
    </Link>
  );
}
