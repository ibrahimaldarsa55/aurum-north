import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PlanCards } from "@/components/pricing/PlanCards";

export function PricingPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Pricing & plans"
          title={
            <>
              Build once. <span className="text-gold-gradient italic">Keep it exceptional.</span>
            </>
          }
          intro="Start with a one-time project — no subscription required — then keep your website secure, current and fast with an optional monthly care plan."
        />
        <div className="mt-16">
          <PlanCards compact />
        </div>
        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/pricing">Compare plans</Button>
          <Button href="/pricing#projects" variant="ghost">
            One-time projects
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
