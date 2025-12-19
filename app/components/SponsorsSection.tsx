"use client";

export default function SponsorsSection() {
    return (
        <section className="bg-black py-20 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-16">

                {/* Title */}
                <h2 className="font-display text-4xl text-[#B67784] uppercase tracking-widest mb-8">
                    Sponsors
                </h2>

                {/* PRESENTA */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Presenta</span>
                    <img src="/assets/sponsors/itau/logo_personal_bank.png" alt="Itau Personal Bank" className="h-12 md:h-16 object-contain invert brightness-0" />
                </div>

                {/* OFFICIAL MOBILITY PARTNER */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Official Mobility Partner</span>
                    <img src="/assets/sponsors/KIA/White/RGB Color (For Digital)/Logo.png" alt="Kia" className="h-8 md:h-12 object-contain" />
                </div>

                {/* AUSPICIAN */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 block mb-8">Auspician</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                        {/* Tienda Inglesa */}
                        <img src="/assets/sponsors/TIENDA INGLESA/LOGO CAVA UNIQUE.pdf" alt="Tienda Inglesa" className="h-8 object-contain hidden" />
                        {/* PDF? Need png. Placeholder for now */}
                        <div className="h-8 w-24 bg-white/10 text-[8px] flex items-center justify-center text-white">Tienda Inglesa</div>

                        <img src="/assets/sponsors/miniterio_turismo/logo_horizontal_white.png" alt="Uruguay Natural" className="h-8 object-contain" />
                        <img src="/assets/sponsors/viasono/logo.png" alt="Viasono" className="h-6 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/aeropuerto/logo.png" alt="Aeropuerto" className="h-8 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/grand_hotel/logo.png" alt="The Grand Hotel" className="h-8 object-contain invert brightness-0" />
                    </div>
                </div>

                {/* Row 4: Uruguay XXI, Black River, Sofitel, Intendencia */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                    <img src="/assets/sponsors/uruguay_xxi/logo.png" alt="Uruguay XXI" className="h-8 object-contain invert brightness-0" />
                    {/* Black River uses PDF, fallback text */}
                    <img src="/assets/sponsors/black_river/logo_white.png" alt="Black River" className="h-8 object-contain" />
                    <img src="/assets/sponsors/sofite/Logo con lien_blanco.png" alt="Sofitel" className="h-8 object-contain" />
                    <img src="/assets/sponsors/intendecia_maldonado/logo.png" alt="Intendencia" className="h-8 object-contain invert brightness-0" />
                </div>

                {/* Row 5: Mar Austral, Punta del Este, etc */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                    <img src="/assets/sponsors/mar_austral/logo.png" alt="Mar Austral" className="h-8 object-contain invert brightness-0" />
                    {/* Punta del Este Municipio logo? */}
                    <div className="h-8 w-24 bg-white/10 text-[8px] flex items-center justify-center text-white">Punta del Este</div>

                    {/* Posada del Faro (not seen in find list? check later) */}
                    <img src="/assets/sponsors/dos_anclas/logo.png" alt="Dos Anclas" className="h-6 object-contain invert brightness-0" />

                    {/* Talar? Corp Gastronomica? */}
                    <img src="/assets/sponsors/corporacion_gastronomica/logo.png" alt="Corp Gastronomica" className="h-8 object-contain invert brightness-0" />

                    <img src="/assets/sponsors/smeg/logo_white.png" alt="Smeg" className="h-6 object-contain" />
                    <img src="/assets/sponsors/harvest/logo_white.png" alt="Harvest" className="h-6 object-contain" />
                    <img src="/assets/sponsors/aqa/logo.png" alt="AQA" className="h-6 object-contain invert brightness-0" />
                    <img src="/assets/sponsors/carpano/logo_white.png" alt="Carpano" className="h-6 object-contain" />

                    {/* Haagen Dazs, Centenario, Olivos, Covello, UTE, Chefworks */}
                    <img src="/assets/sponsors/haagen_dazs/Haagen Dazs logo.png" alt="Haagen Dazs" className="h-6 object-contain invert brightness-0" />
                    <div className="h-8 w-24 bg-white/10 text-[8px] flex items-center justify-center text-white">Centenario</div>
                    {/* Olivos PDF */}
                    <div className="h-8 w-24 bg-white/10 text-[8px] flex items-center justify-center text-white">Olivos</div>
                    <img src="/assets/sponsors/covello/logo.png" alt="Covello" className="h-5 object-contain invert brightness-0" />
                    <img src="/assets/sponsors/ute/logo_white.png" alt="UTE" className="h-6 object-contain" />
                    <div className="h-8 w-24 bg-white/10 text-[8px] flex items-center justify-center text-white">Chef Works</div>
                </div>

                {/* BODEGAS */}
                <div className="flex flex-col items-center space-y-4 pt-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784]">Bodegas</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Master Wine Partner</span>
                    <img src="/assets/sponsors/bodegas/sacromonte/logo_white.png" alt="Sacromonte" className="h-10 object-contain" />
                </div>

                {/* PREMIUM WINE PARTNERS */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 block mb-6">Premium Wine Partners</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/bodegas/gimenez_mendez/logo.png" alt="Gimenez Mendez" className="h-10 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/bodegas/cofradia_sierras/logo_full_white.png" alt="Cofradía" className="h-12 object-contain" />
                        <img src="/assets/sponsors/bodegas/cia_vinos_mar/logo-vectorizado.png" alt="Vinos del Mar" className="h-10 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/bodegas/cantera_montes_oca/logo.png" alt="Montes de Oca" className="h-10 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/bodegas/viña_eden/logo_blanco.png" alt="Viña Eden" className="h-10 object-contain" />
                        <img src="/assets/sponsors/bodegas/narbona/logo.png" alt="Narbona" className="h-8 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/bodegas/luigi_bosca/logo_white.png" alt="Luigi Bosca" className="h-10 object-contain" />
                    </div>
                </div>

                {/* WINE PARTNERS */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 block mb-6">Wine Partners</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/bodegas/garzon/logo.png" alt="Garzon" className="h-10 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/bodegas/de_lucca/logo_white.png" alt="De Lucca" className="h-10 object-contain" />
                        <img src="/assets/sponsors/bodegas/los_ranchos/logo.png" alt="Ranchos" className="h-12 object-contain invert brightness-0" />
                    </div>
                </div>

                {/* CULINARY PARTNER */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784]">Culinary Partner</span>
                    <img src="/assets/sponsors/vik/logo.png" alt="Vik Retreats" className="h-8 object-contain invert brightness-0" />
                </div>

                {/* MEDICAL PARTNER */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784]">Medical Partner</span>
                    <img src="/assets/sponsors/bluecross/logo_horizontal.png" alt="BlueCross" className="h-8 object-contain invert brightness-0" />
                </div>

                {/* MEDIA PARTNERS */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Media Partners</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/el_pais/logo.svg.png" alt="El Pais" className="h-6 object-contain invert brightness-0" />
                        <img src="/assets/sponsors/clarin/logo.png" alt="Clarin" className="h-6 object-contain invert brightness-0" />
                        <div className="h-8 w-24 bg-white/10 text-[8px] flex items-center justify-center text-white">Hola / Mola</div>
                        <img src="/assets/sponsors/mola/logo.png" alt="Mola" className="h-6 object-contain invert brightness-0" />
                    </div>
                </div>

                {/* APOYAN */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Apoyan</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/life/logo_vertical_white.png" alt="Life Cinemas" className="h-8 object-contain" />
                        <img src="/assets/sponsors/bohemia/logo.png" alt="Bohemia" className="h-8 object-contain invert brightness-0" />
                    </div>
                </div>

                {/* LIFESTYLE PARTNER */}
                <div className="flex flex-col items-center space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784]">Lifestyle Partner</span>
                    <img src="/assets/sponsors/optica_nova/logo.png" alt="Optica Nova" className="h-8 object-contain invert brightness-0" />
                </div>

                {/* COMUNICACION */}
                <div className="w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B67784] block mb-6">Comunicación</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                        <img src="/assets/sponsors/atrevia/logo-white.png" alt="Atrevia" className="h-5 object-contain" />
                        <img src="/assets/sponsors/from/logo.png" alt="From" className="h-5 object-contain invert brightness-0" />
                    </div>
                </div>

            </div>
        </section>
    );
}
