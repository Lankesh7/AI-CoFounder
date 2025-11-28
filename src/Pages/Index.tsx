import { AuroraBackground } from "@/components/AuroraBackground";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ChatDemo } from "@/components/ChatDemo";
import { PricingSection } from "@/components/PricingSection";
import { RobotLanding } from "@/components/RobotLanding";

const Index = () => {
  return (
    <div className="relative min-h-screen text-foreground overflow-hidden">
      <AuroraBackground />
      <FloatingNav />
      <HeroSection />
      <FeatureGrid />
      <ChatDemo />
      <PricingSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/50">
            © 2025 Co-Founder AI. Built for the future of entrepreneurship.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;