"use client";

import { useEffect, useRef } from "react";

export default function RecapSection() {
    const videoRef = useRef<HTMLIFrameElement>(null);

    return (
        <section className="relative w-full py-20 overflow-hidden flex items-center justify-center text-white bg-black">

            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <iframe
                    ref={videoRef}
                    className="w-full h-full scale-150 pointer-events-none opacity-40 select-none pb[56.25%]"
                    src="https://www.youtube.com/embed/ulHBYXVqX-c?autoplay=1&mute=1&controls=0&loop=1&playlist=ulHBYXVqX-c&playsinline=1&showinfo=0&rel=0"
                    title="Recap Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
                {/* Video Overlay for contrast */}
                <div className="absolute inset-0 bg-black/50 z-10" />
            </div>

            <div className="relative z-20 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

                <h2 className="font-display text-5xl md:text-7xl text-white mb-16 tracking-wider uppercase drop-shadow-lg">
                    Recap 2025
                </h2>

                {/* Intro Texts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 w-full">
                    <div className="flex flex-col items-center">
                        <h3 className="font-display text-3xl mb-4 text-[#B67784]">Chefs</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
                            Convocamos a un conjunto internacional de talento culinario prestigioso, quienes presentan platos emblemáticos.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-display text-3xl mb-4 text-[#B67784]">Vinos</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
                            Una selección curada de bodegas de Uruguay y la región.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="font-display text-3xl mb-4 text-[#B67784]">Experiencia</h3>
                        <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs">
                            Un encuentro único de Chefs, vinos y cultura gastronómica.
                        </p>
                    </div>
                </div>

                {/* Numbers Block */}
                <div className="w-full border-t border-white/20 pt-16">
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 md:gap-4">
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <span className="block font-display text-5xl md:text-6xl mb-2 text-white group-hover:text-primary transition-colors">12</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-white/60">Bodegas</span>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <span className="block font-display text-5xl md:text-6xl mb-2 text-white group-hover:text-primary transition-colors">+50</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-white/60">Etiquetas</span>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <span className="block font-display text-5xl md:text-6xl mb-2 text-white group-hover:text-primary transition-colors">16</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-white/60">Chefs</span>
                        </div>
                        <div className="text-center group hover:scale-105 transition-transform duration-300">
                            <span className="block font-display text-5xl md:text-6xl mb-2 text-white group-hover:text-primary transition-colors">5</span>
                            <span className="text-xs uppercase tracking-[0.2em] text-white/60">Países</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
