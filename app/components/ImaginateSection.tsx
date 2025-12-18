"use client";

import { useEffect, useRef, useState } from "react";

export default function ImaginateSection() {
    const [offset, setOffset] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollSpeed = 0.3;
                // Calculate offset based on section position relative to viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setOffset((window.innerHeight - rect.top) * scrollSpeed);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="bg-secondary relative overflow-hidden py-32 md:py-48 flex items-center justify-center">
            {/* Background elements if needed */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                {/* Abstract shapes or texture */}
            </div>

            <div className="max-w-2xl mx-auto px-6 text-center z-10" style={{ transform: `translateY(${offset * -0.2}px)` }}>
                <h2 className="font-display text-3xl md:text-5xl text-primary leading-tight mb-8">
                    Frente al océano, cuando cae el sol, <br />
                    te espera la magia.
                </h2>
                {/* <div className="text-black/60 font-light text-lg md:text-xl max-w-3xl mx-auto space-y-4">
                    <p>
                        Thomas Troisgros —Chef del Año 2025, estrella Michelin y cuarta generación de una de las grandes familias de la gastronomía mundial— llega desde Río a La Susana para presentar, por primera vez, un recorrido por sus cuatro restaurantes icónicos: Oseille, Toto Ipanema, C.T. Boucherie y Tijolada junto a vinos de alta gama, tragos de autor y DJ en vivo.
                    </p>
                    <p className="font-medium text-black/80">
                        El evento gastronómico del verano se llama Universo Troisgros.
                    </p>
                </div> */}
            </div>
        </section>
    );
}
