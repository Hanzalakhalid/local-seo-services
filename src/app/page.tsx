import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProcessOverview } from "@/components/sections/ProcessOverview";
import { Industries } from "@/components/sections/Industries";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <ProcessOverview />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <HomeFAQ />
      <CTASection />
    </>
  );
}
