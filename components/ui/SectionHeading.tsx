import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", as: Tag = "h2" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
      <Tag className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
        {title}
      </Tag>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-pretty text-muted sm:text-lg">{intro}</p>
      )}
    </Reveal>
  );
}
