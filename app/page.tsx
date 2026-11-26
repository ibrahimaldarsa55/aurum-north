import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Industries } from "@/components/sections/Industries";
import { AurumDifference } from "@/components/sections/AurumDifference";
import { WorkPreview } from "@/components/sections/WorkPreview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesOverview />
      <Industries />
      <AurumDifference />
      <WorkPreview />
      <WhyChooseUs />
      <PricingPreview />
      <ProcessOverview />
      <CTASection />
    </>
  );
}
