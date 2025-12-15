export default function TicketsSection() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-md mx-auto text-center">
                <h2 className="font-display text-4xl text-black mb-4 uppercase">Entradas</h2>
                <p className="text-black/60 mb-12 font-light">
                    Un evento único. Cupos limitados.
                </p>

                <div className="relative bg-white border border-primary/20 rounded-2xl p-8 shadow-xl overflow-hidden group hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

                    <h3 className="font-display text-2xl text-black mb-2">Punta Food & Wine 2025</h3>
                    <div className="text-primary text-6xl font-bold font-display mb-6">
                        $250 <span className="text-lg font-sans text-black/40 font-normal">/ pers</span>
                    </div>

                    <button className="w-full bg-primary hover:bg-black text-white font-bold py-4 rounded-xl transition-all mb-8 shadow-lg hover:shadow-xl uppercase tracking-wider">
                        Comprar Ahora
                    </button>

                    <div className="text-left space-y-4">
                        {[
                            "Acceso a todos los stands",
                            "Bebidas ilimitadas",
                            "Show en vivo",
                            "Estacionamiento VIP",
                            "Regalo exclusivo"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center text-black/70">
                                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="font-light">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
