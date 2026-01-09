"use client";

export default function SponsorsSection() {
    return (
        <section className="bg-black py-20 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-16">

                {/* Title */}
                {/* TITLE */}
                <h2 className="font-display text-4xl text-[#B67784] uppercase tracking-widest mb-8">
                    Sponsors
                </h2>

                {/* PRESENTA */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784]">Presenta</span>
                    <img src="/assets/sponsors/itau/logo_personal_bank.png" alt="Itau Personal Bank" className="h-14 md:h-16 object-contain invert brightness-0" />
                </div>

                {/* OTHER PARTNERS */}
                <div className="w-full">
                    {/* <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Medical Partners</span> */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80">
                        <img src="/assets/sponsors/vik/logo.png" alt="vik" className="h-20 md:h-24 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/la_susana/logo.png" alt="La Susana" className="h-20 md:h-24 object-contain" />
                    </div>
                </div>

                {/* OTHER PARTNERS */}
                <div className="w-full">
                    {/* <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Medical Partners</span> */}
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80">
                        <img src="/assets/sponsors/aeropuerto/logo.png" alt="Aeropuerto" className="h-20 md:h-24 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/black_river/logo_white.png" alt="Black River" className="h-20 md:h-24 object-contain" />
                        <img src="/assets/sponsors/mar_austral/logo_white.png" alt="Mar Austral" className="h-20 md:h-24 object-contain" />
                    </div>
                </div>

                {/* MEDIA PARTNERS */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Media Partners</span>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-80">
                        <img src="/assets/sponsors/clarin/logo.png" alt="Clarin" className="h-4 md:h-6 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/el_pais/logo.svg.png" alt="El Pais" className="h-4 md:h-6 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/mola/logo.png" alt="Mola" className="h-4 md:h-6 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/ministerio_diseno/logo_horizontal.png" alt="Ministerio de Diseño" className="h-20 md:h-24 object-contain invert" />
                        <img src="/assets/sponsors/bohemia/logo_color.png" alt="Bohemia FM" className="h-20 md:h-24 object-contain invert brightness-0" />
                    </div>
                </div>

                {/* COMUNICACION */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Comunicación</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/atrevia/logo-white.png" alt="Atrevia" className="h-4 md:h-5 object-contain" />
                    </div>
                </div>

                {/* MEDICAL PARTNERS */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Medical Partner</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/bluecross/logo_vertical_white.png" alt="Blue Cross" className="h-20 md:h-24 object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
}
