import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getProject, projects } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { ProjectMockup } from "@/components/work/ProjectMockup";
import { ConceptBadge } from "@/components/work/ConceptBadge";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Design Concept`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="grain relative isolate overflow-hidden pt-36 pb-16 sm:pt-44">
        <div aria-hidden className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold/12 blur-[140px]" />
        <div className="container-x">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-gold-light"
          >
            <ArrowLeft aria-hidden className="size-4" /> All concepts
          </Link>
          <Reveal className="mt-10 max-w-4xl">
            <ConceptBadge />
            <p className="mt-6 text-xs tracking-[0.25em] text-gold uppercase">{project.category}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] font-medium sm:text-7xl">{project.name}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-16">
            <div className="rounded-2xl bg-gradient-to-b from-gold/40 to-transparent p-px">
              <ProjectMockup variant={project.variant} className="rounded-2xl" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="eyebrow">The brief</h2>
            <p className="mt-6 font-display text-2xl leading-snug text-white sm:text-3xl">{project.brief}</p>
            <p className="mt-6 text-sm text-muted">
              This brief was self-set to explore the category. The brand is fictional.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <h2 className="eyebrow">Design approach</h2>
            <ul className="mt-6 space-y-5">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-4 text-white/85">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Check aria-hidden className="size-3.5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-ink-2/40 py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          <Reveal className="card-surface p-8">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Key features</h3>
            <ul className="mt-6 space-y-3 text-white/85">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="card-surface p-8">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Suggested stack</h3>
            <ul className="mt-6 space-y-3 text-white/85">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16} className="card-surface p-8">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Palette</h3>
            <ul className="mt-6 space-y-4">
              {project.palette.map((c) => (
                <li key={c.hex} className="flex items-center gap-4">
                  <span className="size-10 rounded-full border border-white/15" style={{ background: c.hex }} aria-hidden />
                  <span>
                    <span className="block text-white/90">{c.name}</span>
                    <span className="block font-mono text-xs text-muted">{c.hex}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-4 rounded-2xl border border-line p-8 transition-colors duration-500 hover:border-gold/40 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <span>
              <span className="text-xs tracking-[0.25em] text-gold uppercase">Next concept</span>
              <span className="mt-2 block font-display text-3xl text-white sm:text-4xl">{next.name}</span>
            </span>
            <span className="grid size-14 place-items-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
              <ArrowRight aria-hidden className="size-5" />
            </span>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
