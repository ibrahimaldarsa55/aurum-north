import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/content";
import { ProjectMockup } from "./ProjectMockup";
import { ConceptBadge } from "./ConceptBadge";

/**
 * The whole card opens the concept's case-study page: the title link is stretched
 * over the card with an ::after overlay. The optional "View Live Concept" button sits
 * above that overlay, so it can link elsewhere without nesting one link inside another.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-line bg-ink-2/60 p-3 transition-all duration-700 ease-luxe hover:-translate-y-1 hover:border-gold/40 hover:bg-ink-2 sm:p-4">
      <div className="relative overflow-hidden rounded-xl">
        <div className="transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.03]">
          <ProjectMockup variant={project.variant} />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 px-2 pt-6 pb-3">
        <div>
          <ConceptBadge />
          <p className="mt-4 text-xs tracking-[0.2em] text-gold uppercase">{project.category}</p>
          <h3 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl">
            <Link
              href={`/work/${project.slug}`}
              className="rounded-sm after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-gold-light"
            >
              {project.name}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(198,161,91,0.6)] transition-all duration-500 ease-luxe hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(229,201,139,0.75)]"
            >
              View Live Concept
              <ExternalLink aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
        <span
          aria-hidden
          className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-500 ease-luxe group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </article>
  );
}
