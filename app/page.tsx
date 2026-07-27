import JourneyTracker from "@/components/layout/JourneyTracker";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortfolioOverview from "@/components/sections/PortfolioOverview";
import TrackRecord from "@/components/sections/TrackRecord";
import Contact from "@/components/sections/Contact";
import Toolkit from "@/components/sections/Toolkit";

export default function Home() {
  return (
    <>
      <JourneyTracker />
      <main className="flex-1">
        <Hero />
        <About />
        <PortfolioOverview />
        <TrackRecord />
        <Contact />
        <Toolkit />
      </main>
    </>
  );
}
