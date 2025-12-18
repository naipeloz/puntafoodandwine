export default function SponsorsSection() {


    return (
        <section className="bg-black py-20 px-4 border-t border-white/10">
            <div className="max-w-5xl mx-auto text-center">

                {/* Group 1 */}
                <div className="mb-12">
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-6 font-bold">
                        Organizan
                    </h3>
                    <div className="flex justify-center gap-8 flex-wrap items-center">
                        <div className="w-32 opacity-70 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/AEROPUERTO/isologotipo-aeropuerto-punta-del-este-rgb-horizontal.png" alt="Aeropuerto Punta del Este" className="brightness-0 invert" />
                        </div>
                        {/* Add other organizers if known, otherwise kept minimal */}
                    </div>
                </div>

                {/* Group 2 */}
                <div>
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-8 font-bold">
                        Acompañan
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
                        {/* ATREVIA */}
                        <div className="w-24 opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/ATREVIA/Logo ATREVIA blanco sin claim.png" alt="Atrevia" />
                        </div>
                        {/* CARPANO */}
                        <div className="w-24 opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/CARPANO/Carpano_Logos_BLANCO-2.png" alt="Carpano" />
                        </div>
                        {/* CLARIN */}
                        <div className="w-24 opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/CLARÍN/logo clarin circulo rojo.png" alt="Clarin" />
                        </div>
                        {/* EL PAIS */}
                        <div className="w-24 opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/EL PAÍS/El_Pais_Uruguay.svg.png" alt="El Pais" />
                        </div>
                        {/* ITAU */}
                        <div className="w-24 opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/ITAU/itau personal bank.png" alt="Itau" />
                        </div>
                        {/* KIA */}
                        <div className="w-24 opacity-50 hover:opacity-100 transition-opacity">
                            <img src="/assets/sponsors/KIA/White/RGB Color (For Digital)/Logo.png" alt="Kia" />
                        </div>
                        {/* Other Placeholders/Generics if needed */}
                    </div>
                </div>

            </div>
        </section>
    );
}
