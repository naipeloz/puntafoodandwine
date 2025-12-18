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

            <div className="max-w-4xl mx-auto px-6 text-center z-10" style={{ transform: `translateY(${offset * -0.2}px)` }}>
                <h2 className="font-display text-4xl md:text-6xl text-primary leading-tight">
                    "Imáginate una noche bajo las estrellas,<br />
                    donde el sabor y el arte se encuentran."
                </h2>
                <p className="mt-8 text-black/60 font-light text-lg md:text-xl max-w-2xl mx-auto">
                    Una experiencia sensorial única que despierta todos tus sentidos.
                </p>
            </div>
        </section>
    );
}
