import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import StatsSection from "./components/StatsSection";
import TimelineSection from "./components/TimelineSection";
import TicketsSection from "./components/TicketsSection";
import MapSection from "./components/MapSection";
import SponsorsSection from "./components/SponsorsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <Hero />
      <InfoSection />
      <StatsSection />
      <TimelineSection />
      <TicketsSection />
      <MapSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
