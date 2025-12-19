import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveMap from "../components/InteractiveMap";
import TimelineSection from "../components/TimelineSection";
import EventSubmenu from "../components/EventSubmenu";
import PurchaseBanner from "../components/PurchaseBanner";
import ChefsSection from "../components/ChefsSection";
import TicketsSection from "../components/TicketsSection";
import StationsSection from "../components/StationsSection";
import Link from "next/link";

export default function ElEvento() {
    return (
        <main className="min-h-screen bg-[#F1EFEA] flex flex-col pt-24">
            <Navbar variant="light" />
            <EventSubmenu />

            <ChefsSection />

            <PurchaseBanner />

            {/* Stations Section Wrapper */}
            <section id="estaciones">
                {/* Header moved here */}
                <section className="pt-20 pb-12 px-6 text-center">
                    <span className="text-sm uppercase tracking-widest text-black/50 mb-2 block">
                        Experiencia Gastronómica
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl text-black mb-6">
                        Las Estaciones
                    </h1>
                    <p className="max-w-2xl mx-auto text-black/70 font-light text-lg">
                        Explora las 6 estaciones culinarias que conforman esta experiencia única.
                        Haz clic en cada estación para descubrir más detalles.
                    </p>
                </section>

                {/* Map */}
                <InteractiveMap />

                {/* List of Stations (Reused from Home) */}
                <StationsSection disableHeader={true} />
            </section>

            <PurchaseBanner />

            {/* Timeline/Itinerary - Separate Section */}
            <TimelineSection />

            <PurchaseBanner />

            {/* Tickets */}
            <div id="entradas">
                <TicketsSection />
            </div>

            <Footer />
        </main>
    );
}
