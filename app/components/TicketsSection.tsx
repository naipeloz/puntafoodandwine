export default function TicketsSection() {
    return (
        <section className="bg-secondary py-24 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-display text-4xl text-black mb-4 uppercase">Tickets</h2>
                <p className="text-black/60 mb-12 font-light">
                    {/* TODO: Add description */}
                </p>

                <div className="relative bg-white border border-primary/20 rounded-2xl p-8 shadow-xl overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

                    <div className="mb-2 text-primary font-bold tracking-widest uppercase text-xs">Punta del Este Food <span className="font-ampersand">&</span> Wine Presenta</div>
                    <h3 className="font-display text-3xl text-black mb-4">UNIVERSO TROISGROS</h3>

                    <div className="text-primary text-6xl font-bold font-display mb-2">
                        US$180
                    </div>
                    <p className="text-black/40 text-sm mb-6">por persona</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-center md:text-left">
                        {/* Event Info */}
                        <div className="space-y-4">
                            <div className="flex items-center md:items-start justify-center md:justify-start text-black/70 flex-col md:flex-row gap-1 md:gap-0">
                                <span className="font-bold md:mr-2 text-primary">Lugar:</span>
                                <span className="font-light">La Susana - VIK, José Ignacio</span>
                            </div>
                            <div className="flex items-center md:items-start justify-center md:justify-start text-black/70 flex-col md:flex-row gap-1 md:gap-0">
                                <span className="font-bold md:mr-2 text-primary">Fecha:</span>
                                <span className="font-light">5 y 6 de febrero | 19:30 Hs.</span>
                            </div>
                            <div className="flex items-center md:items-start justify-center md:justify-start text-black/70 flex-col md:flex-row gap-1 md:gap-0">
                                <span className="font-bold md:mr-2 text-primary">Dress Code:</span>
                                <span className="font-light">Casual</span>
                            </div>
                        </div>

                        {/* Includes */}
                        <div className="space-y-1 text-center md:text-left">
                            <p className="font-bold text-primary mb-2">Incluye</p>
                            <p className="text-sm text-black/60 font-light">Degustación libre</p>
                            <p className="text-sm text-black/60 font-light">Todos los platos de los Chefs</p>
                            <p className="text-sm text-black/60 font-light">Vinos seleccionados</p>
                            <p className="text-sm text-black/60 font-light">Tragos de autor</p>
                            <p className="text-sm text-black/60 font-light">Bebidas sin alcohol</p>
                            <p className="text-sm text-black/60 font-light">Postres</p>
                            <p className="text-sm text-black/60 font-light">Café</p>
                        </div>
                    </div>

                    <a href="https://redtickets.uy/evento/PFW-presenta-Universo-Troisgros/26239/" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary hover:bg-black text-white font-bold py-4 rounded-xl transition-all mb-8 shadow-lg hover:shadow-xl uppercase tracking-wider">
                        Comprar Ahora
                    </a>



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
