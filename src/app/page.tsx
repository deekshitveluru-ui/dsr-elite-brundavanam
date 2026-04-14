import dynamic from "next/dynamic";
import HeroVideo from "@/components/HeroVideo";
import Vision from "@/components/Vision";
import ProjectHighlights from "@/components/ProjectHighlights";
import ConnectivityHUD from "@/components/ConnectivityHUD";
import ProjectLocationMap from "@/components/ProjectLocationMap";
import UnifiedAmenities from "@/components/UnifiedAmenities";
import HeritageWellnessSection from "@/components/HeritageWellnessSection";
import Infrastructure from "@/components/Infrastructure";
import VideoTour from "@/components/VideoTour";
import InvestmentBar from "@/components/InvestmentBar";
import ContactSection from "@/components/ContactSection";
import EcoPulseWidget from "@/components/EcoPulseWidget";
import DeveloperPedigree from "@/components/DeveloperPedigree";
import ChatConcierge from "@/components/ChatConcierge";

// Lazy Load Heavy Media Components
const MasterPlanMap = dynamic(() => import("@/components/MasterPlanMap"));

export default function Home() {
  return (
    <main className="min-h-screen bg-dsr-base text-gray-800">
      <HeroVideo />
      <Vision />
      <ProjectHighlights />
      <ConnectivityHUD />
      <ProjectLocationMap />
      <UnifiedAmenities />
      <MasterPlanMap />
      <HeritageWellnessSection />
      <Infrastructure />
      <VideoTour />
      <InvestmentBar />
      <DeveloperPedigree />
      <ContactSection />

      <EcoPulseWidget />
      <ChatConcierge />
    </main>
  );
}
