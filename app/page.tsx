import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { CTASection } from "@/components/sections/CTASection";
import { Marquee } from "@/components/home/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesOverview />
      <WorkPreview />
      <WhyChooseUs />
      <ProcessOverview />
      <CTASection />
    </>
  );
}
