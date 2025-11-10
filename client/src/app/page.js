import HeroSection from "@/components/heroSection";
import ServicesSection from "@/components/ourServicesSection";
import MacOSKeyboard from "@/components/keyboardSection";
import FeaturesSection from "@/components/whyUsSection";
import PricingSection from "@/components/pricingSection";
import TestimonialsSection from "@/components/testemonilas";
import GlobSection from "@/components/gloveSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <GlobSection />
      {/* <MacOSKeyboard /> */}
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
     
    </div>
  );
}
