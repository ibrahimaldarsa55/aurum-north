import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
};

/** Consistent hero for inner pages. Renders the page's single <h1>. */
export function PageHero({ eyebrow, title, intro, children }: Props) {
  return (
    <section className="grain relative isolate overflow-hidden border-b border-line pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div aria-hidden className="absolute -top-48 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-gold/12 blur-[140px]" />
      <div className="container-x">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} intro={intro} />
        {children}
      </div>
    </section>
  );
}
