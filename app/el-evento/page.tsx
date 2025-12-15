import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InteractiveMap from "../components/InteractiveMap";

export default function ElEvento() {
    return (
        <main className="min-h-screen bg-[#F1EFEA] flex flex-col">
            <Navbar variant="light" />

            {/* Header */}
            <section className="pt-32 pb-12 px-6 text-center">
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
                        <span className="inline-block px-3 py-1 rounded-full bg-[#B67784]/20 text-[#B67784] text-[10px] font-bold uppercase mb-3">
                            Thomas Troisgros
                        </span>
                        <h3 className="font-bold text-xl mb-1 text-black">Oseille Restaurante</h3>
                        <p className="text-sm text-black/60 font-light leading-relaxed">
                            Oseille es el emblemático restaurante de la familia Troisgros en Río de Janeiro.
                        </p>
                    </div>

                    {/* Station Card 2 */}
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#B67784]/20 text-[#B67784] text-[10px] font-bold uppercase mb-3">
                            Thomas Troisgros
                        </span>
                        <h3 className="font-bold text-xl mb-1 text-black">Toto Ipanema</h3>
                        <p className="text-sm text-black/60 font-light leading-relaxed">
                            Toto Ipanema combina la elegancia parisina con el espíritu vibrante de Río.
                        </p>
                    </div>

                    {/* Station Card 3 */}
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/20 text-[#E67E22] text-[10px] font-bold uppercase mb-3">
                            Santiago Inosaurralde
                        </span>
                        <h3 className="font-bold text-xl mb-1 text-black">La Susana Classics</h3>
                        <p className="text-sm text-black/60 font-light leading-relaxed">
                            Los platos icónicos que han hecho de La Susana un referente.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
