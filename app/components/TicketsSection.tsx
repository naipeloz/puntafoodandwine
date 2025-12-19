export default function TicketsSection() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display text-4xl text-black mb-4 uppercase">Entradas</h2>
                <p className="text-black/60 mb-12 font-light">
                    Un evento único. Cupos limitados.
                </p>

                <div className="relative bg-white border border-primary/20 rounded-2xl p-8 shadow-xl overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

                    <div className="mb-2 text-primary font-bold tracking-widest uppercase text-xs">Punta Food & Wine Presenta</div>
                    <h3 className="font-display text-3xl text-black mb-4">Universo Troisgros</h3>

                    <div className="text-primary text-6xl font-bold font-display mb-2">
                        US$180
                    </div>
                    <p className="text-black/40 text-sm mb-6">por persona</p>

                    <a href="https://redtickets.uy/evento/PFW-presenta-Universo-Troisgros/26239/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary hover:bg-black text-white font-bold py-4 rounded-xl transition-all mb-8 shadow-lg hover:shadow-xl uppercase tracking-wider">
                        Comprar Ahora
                    </a>

                    <div className="text-left space-y-4 mb-8">
                        <div className="flex items-start text-black/70">
                            <span className="font-bold mr-2 text-primary">Lugar:</span>
                            <span className="font-light">La Susana - VIK, José Ignacio</span>
                        </div>
                        <div className="flex items-start text-black/70">
                            <span className="font-bold mr-2 text-primary">Fecha:</span>
                            <span className="font-light">5 y 6 de febrero | 18 a 00Hs.</span>
                        </div>
                        <div className="flex items-start text-black/70">
                            <span className="font-bold mr-2 text-primary">Dress Code:</span>
                            <span className="font-light">Casual</span>
                        </div>
                    </div>

                    {/* Itau Discount */}
                    <div className="border-t border-dashed border-primary/20 pt-6 mt-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                            <img src="/assets/itau-25.png" alt="Itau 25% Off" className="h-10 object-contain" />
                            <img src="/assets/itau-15.png" alt="Itau 15% Off" className="h-10 object-contain" />
                            <img src="/assets/itau-volar.png" alt="Itau Volar" className="h-10 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
