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


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UNIVERSO TROISGROS | Punta del Este Food & Wine 2025",
  description: "Frente al océano, cuando cae el sol, te espera la magia. Thomas Troisgros llega desde Río a La Susana para presentar Universo Troisgros. Una experiencia gastronómica única.",
  keywords: ["Punta del Este", "Food & Wine", "Universo Troisgros", "Thomas Troisgros", "La Susana", "José Ignacio", "Oseille", "Toto Ipanema", "CT Boucherie", "Tijolada", "Eventos Uruguay 2025"],
  openGraph: {
    title: "UNIVERSO TROISGROS | Punta del Este Food & Wine 2025",
    description: "Frente al océano, cuando cae el sol, te espera la magia. Thomas Troisgros llega a La Susana.",
    url: "https://puntafoodandwine.com",
    siteName: "Punta Food & Wine",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: 'https://puntafoodandwine.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UNIVERSO TROISGROS',
      },
    ],
  },
};

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
        <SponsorsSection />
      </div>
      <NewsletterSection />
      <RecapSection /> {/* New Recap replacing Stats, placed below tickets */}
      <MapSection />
      <NewsletterSection />

      <Footer />
    </main>
  );
}
