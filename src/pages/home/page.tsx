import SiteHeader from "@/components/feature/SiteHeader";
import SiteFooter from "@/components/feature/SiteFooter";
import CtaBand from "@/components/base/CtaBand";
import Hero from "./components/Hero";
import MarqueeBand from "./components/MarqueeBand";
import ServicesSection from "./components/ServicesSection";
import DepthSection from "./components/DepthSection";
import TransformationSection from "./components/TransformationSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import LightingSection from "./components/LightingSection";
import ProofSection from "./components/ProofSection";
import ServiceAreaSection from "./components/ServiceAreaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-50">
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeBand />
        <ServicesSection />
        <DepthSection />
        <TransformationSection />
        <BeforeAfterSection />
        <LightingSection />
        <ProofSection />
        <ServiceAreaSection />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}