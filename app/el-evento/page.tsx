import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveMap from "../components/InteractiveMap";
import TimelineSection from "../components/TimelineSection";
import EventSubmenu from "../components/EventSubmenu";
import PurchaseBanner from "../components/PurchaseBanner";
import ChefsSection from "../components/ChefsSection";
import TicketsSection from "../components/TicketsSection";
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

                    {/* Legend */}
                    <div className="flex justify-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#B67784]"></div>
                            <span className="text-xs uppercase tracking-wide text-black/60">International Chefs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#E67E22]"></div>
                            <span className="text-xs uppercase tracking-wide text-black/60">Local Heroes</span>
                        </div>
                    </div>
                </section>

                {/* Map */}
                <InteractiveMap />

                {/* List fallback for mobile or SEO */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <h2 className="text-sm uppercase tracking-widest text-black mb-8 border-b border-black/10 pb-2">
                        Todas las Estaciones
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Station Card 1 */}
                        <div>
                            <Link href="https://www.instagram.com/oseillerestaurante/" target="_blank" className="block group">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#B67784]/20 text-[#B67784] text-[10px] font-bold uppercase mb-3">
                                    Thomas Troisgros
                                </span>
                                <h3 className="font-bold text-xl mb-1 text-black group-hover:text-primary transition-colors">Oseille Restaurante</h3>
                                <p className="text-sm text-black/60 font-light leading-relaxed">
                                    Oseille es el emblemático restaurante de la familia Troisgros en Río de Janeiro.
                                </p>
                            </Link>
                        </div>

                        {/* Station Card 2 */}
                        <div>
                            <Link href="https://www.instagram.com/toto.ipanema/" target="_blank" className="block group">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#B67784]/20 text-[#B67784] text-[10px] font-bold uppercase mb-3">
                                    Thomas Troisgros
                                </span>
                                <h3 className="font-bold text-xl mb-1 text-black group-hover:text-primary transition-colors">Toto Ipanema</h3>
                                <p className="text-sm text-black/60 font-light leading-relaxed">
                                    Toto Ipanema combina la elegancia parisina con el espíritu vibrante de Río.
                                </p>
                            </Link>
                        </div>

                        {/* Station Card 3 */}
                        <div>
                            <Link href="https://www.instagram.com/ctboucherie/" target="_blank" className="block group">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/20 text-[#E67E22] text-[10px] font-bold uppercase mb-3">
                                    Claude Troisgros
                                </span>
                                <h3 className="font-bold text-xl mb-1 text-black group-hover:text-primary transition-colors">CT Boucherie</h3>
                                <p className="text-sm text-black/60 font-light leading-relaxed">
                                    La excelencia en carnes con el sello inconfundible de los Troisgros.
                                </p>
                            </Link>
                        </div>

                        {/* Station Card 4 */}
                        <div>
                            <Link href="https://www.instagram.com/tijoladabar/" target="_blank" className="block group">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/20 text-[#E67E22] text-[10px] font-bold uppercase mb-3">
                                    Thomas Troisgros
                                </span>
                                <h3 className="font-bold text-xl mb-1 text-black group-hover:text-primary transition-colors">Tijolada</h3>
                                <p className="text-sm text-black/60 font-light leading-relaxed">
                                    Un bar descontracturado con la maestría culinaria de siempre.
                                </p>
                            </Link>
                        </div>

                    </div>
                </section>
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
