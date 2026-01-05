import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveMap from "../components/InteractiveMap";
import TimelineSection from "../components/TimelineSection";
import EventSubmenu from "../components/EventSubmenu";
import PurchaseBanner from "../components/PurchaseBanner";
import ChefsSection from "../components/ChefsSection";
import TicketsSection from "../components/TicketsSection";
import ImaginateSection from "../components/ImaginateSection";
import StationsSection from "../components/StationsSection";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "El Evento - UNIVERSO TROISGROS | PFW 2025",
    description: "Descubre Universo Troisgros, una experiencia gastronómica única por Thomas Troisgros y Santiago Inzaurralde en La Susana. Vinos de alta gama, tragos de autor y DJ en vivo.",
    openGraph: {
        title: "El Evento - UNIVERSO TROISGROS | PFW 2025",
        description: "Descubre Universo Troisgros, una experiencia gastronómica única por Thomas Troisgros y Santiago Inzaurralde en La Susana.",
        url: "https://puntafoodandwine.com/universo-troisgros",
        siteName: "Punta Food & Wine",
        locale: "es_UY",
        type: "website",
    },
};

export default function ElEvento() {
    return (
        <main className="min-h-screen bg-[#F1EFEA] flex flex-col pt-24">
            <Navbar variant="light" />
            <EventSubmenu />
            <ImaginateSection />
            <div className="max-w-6xl mx-auto px-6 text-black/70 font-light text-lg space-y-6">
                <p>
                    En el entorno único de La Susana, frente al océano, te esperamos al atardecer con vinos seleccionados, tragos de autor y una banda sonora creada por nuestro DJ en vivo.
                </p>
                <p>
                    Allí te recibirá el <strong>Chef Thomas Troisgros</strong> para presentarte lo mejor de sus restaurantes icónicos <strong>Oseille</strong>, <strong>Toto Ipanema</strong>, <strong>C.T. Boucherie</strong> y <strong>Tijolada</strong>. <strong>Cuatro estaciones gastronómicas que recorren el universo de este referente de la cocina carioca</strong> — <strong>Chef del Año 2025 por Veja Rio</strong>, estrella <strong>Michelin</strong>, reconocido por <strong>The Best Chef Awards</strong> y <strong>Man of the Year 2025 por GQ Brasil</strong>.
                </p>
                <p>
                    Junto a él, <strong>Santiago Inzaurralde</strong>, Chef Ejecutivo de La Susana - Vik José Ignacio, <strong>sumara otras dos estaciones con creaciones propias</strong> de este <strong>restaurant</strong> referente de José Ignacio y Punta del Este.
                </p>
                <p>
                    <strong>Una experiencia inmersiva, donde cada estación es un viaje, y cada plato cuenta una historia que marcará tu verano 2026.</strong>
                </p>
            </div>
            <ChefsSection />

            {/* <PurchaseBanner /> */}

            {/* Stations Section Wrapper */}
            {/* <section id="estaciones">
                <section className="pt-20 pb-12 px-6 text-center">
                    <span className="text-sm uppercase tracking-widest text-black/50 mb-2 block">
                        Experiencia Gastronómica
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl text-black mb-6">
                        LAS ESTACIONES
                    </h1>
                    <p className="max-w-2xl mx-auto text-black/70 font-light text-lg">
                        Explorá las 6 estaciones gastronómicas que conforman esta experiencia única.
                        Hacé clic en cada estación para descubrir más detalles.
                    </p>
                </section>

                <InteractiveMap />

            </section> */}

            {/* <TimelineSection /> Timeline/Itinerary - Separate Section */}
            {/* <PurchaseBanner /> */}

            {/* Tickets */}
            <div id="entradas">
                <TicketsSection />
            </div>

            <Footer />
        </main>
    );
}
