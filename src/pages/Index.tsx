import SiteLayout from "@/components/site/SiteLayout";
import HeroSection from "@/components/HeroSection";
import AudiencePaths from "@/components/home/AudiencePaths";
import SystemTeaser from "@/components/home/SystemTeaser";
import StatsBar from "@/components/home/StatsBar";
import HowItWorks from "@/components/home/HowItWorks";
import PlatformTabs from "@/components/home/PlatformTabs";
import ResultsSection from "@/components/home/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => (
  <SiteLayout>
    <HeroSection />
    <AudiencePaths />
    <StatsBar />
    <HowItWorks />
    <PlatformTabs />
    <ResultsSection />
    <SystemTeaser />
    <ServicesSection />
    <FAQSection />
    <ContactSection />
  </SiteLayout>
);

export default Index;
