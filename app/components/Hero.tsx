"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen bg-[#E6E4DE] flex flex-col md:flex-row pt-12 md:pt-6">
            {/* Left Column: Text Content */}
            <div className="w-full md:w-[45%] flex flex-col justify-center items-center text-center px-4 py-2 md:py-0 z-10">

                <div className="flex flex-col items-center mb-2 md:mb-12">
                    {/* PFW Logo/Text - Responsive sizing */}
                    <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-black leading-none tracking-tighter uppercase">
                        Punta del Este<br />
                        Food <span className="font-ampersand">&</span> Wine
                    </h2>
                    <span className="text-[10px] md:text-sm uppercase tracking-[0.25em] text-black font-semibold mt-2 md:mt-3">
                        Presenta:
                    </span>
                </div>

                {/* Main Title - Responsive sizing with fluid adjustment */}
                <h1 className="font-display text-3xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[8rem] leading-[0.8] text-black mb-6 uppercase tracking-tight">
                    Universo<br />
                    Troisgros
                </h1>



                {/* Info Block */}
                <div className="flex flex-col items-center md:space-y-2 text-black font-bold text-xs md:text-base lg:text-xl uppercase tracking-wide mb-2 md:mb-2">
                    {/* Subtitle */}
                    <span className="font-sans font-black text-base md:text-base lg:text-xl uppercase tracking-wide text-black mb-4 md:mb-16">
                        By Chef Thomas Troisgros
                    </span>
                    <span className="font-sans font-black text-base md:text-base lg:text-xl uppercase tracking-wide text-black mb-4 md:mb-16">
                        Llega el Chef más premiado de la escena carioca, para presentar cuatro de sus restaurantes icónicos
                    </span>
                </div>

                {/* Info Block */}
                <div className="flex flex-col items-center md:space-y-2 text-black font-bold text-xs md:text-base lg:text-xl uppercase tracking-wide mb-8 md:mb-12">
                    <p>5 y 6 de Febrero - 19:30 HS.</p>
                    <p>La Susana, José Ignacio</p>
                </div>

                {/* Itau Logo */}
                <div className="mb-4 md:mb-0">
                    <img
                        src="/assets/sponsors/itau/logo_personal_bank.png"
                        alt="Itau Personal Bank"
                        className="h-6 md:h-12 object-contain brightness-0" // Force black
                    />
                </div>

                {/* Optional CTA - Mobile Only (Hidden if strictly following clean design, but keeping as requested previously) */}
                {/* <div className="md:hidden mt-4">
                    <Link
                        href="/#tickets"
                        className="bg-primary text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-black transition-all shadow-lg"
                    >
                        Comprá tu Ticket
                    </Link>
                </div> */}

            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-[55%] h-[40vh] md:h-screen relative flex items-start justify-center p-0 md:p-0">
                {/* items-start on mobile to pull image up if needed, or justify-center */}
                <img
                    src="/assets/slides/banner.png"
                    alt="Universo Troisgros - Chef Thomas Troisgros"
                    className="w-full h-full object-contain object-top md:object-center md:scale-110"
                />
            </div>

            {/* Desktop Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 md:left-[50%] -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce text-black">
                <span className="text-[10px] uppercase tracking-widest">Descubrí Más</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
