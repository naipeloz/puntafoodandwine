import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImaginateSection from "./components/ImaginateSection"; // NEW
import StationsSection from "./components/StationsSection"; // NEW
// import StatsSection from "./components/StatsSection"; // Removed/Replaced
import TicketsSection from "./components/TicketsSection";
import RecapSection from "./components/RecapSection"; // NEW
import MapSection from "./components/MapSection";
import SponsorsSection from "./components/SponsorsSection";
import NewsletterSection from "./components/NewsletterSection"; // NEW
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <Navbar />
      <Hero />
      <ImaginateSection /> {/* Replaces InfoSection */}
      {/* NEW <StationsSection /> */}

      {/* Tickets might need an ID for the navbar link */}
      <div id="tickets">
        <TicketsSection />
      </div>
      <NewsletterSection />
      <RecapSection /> {/* New Recap replacing Stats, placed below tickets */}
      <SponsorsSection />
      <NewsletterSection />
      <MapSection />
      <NewsletterSection />

      <Footer />
    </main>
  );
}
