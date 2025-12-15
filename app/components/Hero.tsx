"use client";

import { useEffect, useState, useRef } from "react";

const SLIDES = [
    { type: "image", src: "/assets/PFW-182.JPG" },
    { type: "image", src: "/assets/PFW-230.JPG" },
    { type: "image", src: "/assets/PFW-234.JPG" },
    { type: "image", src: "/assets/PFW-275.JPG" },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Auto-advance for images, but wait for video to end
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (SLIDES[currentSlide].type === "image") {
            interval = setInterval(() => {
                nextSlide();
            }, 5000); // 5 seconds per image
        }

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const handleVideoEnded = () => {
        nextSlide();
    };

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black text-white">

            {/* Slides */}
            {SLIDES.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
                        }`}
                >
                    {slide.type === "video" ? (
                        <video
                            ref={videoRef}
                            src={slide.src}
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            loop={false} // We want it to end to trigger next slide
                            playsInline
                            onEnded={handleVideoEnded}
                        />
                    ) : (
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${slide.src}')` }}
                        />
                    )}
                    {/* Dark Overlay for text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-8 z-20 text-white/50 hover:text-white transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-8 z-20 text-white/50 hover:text-white transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-24 flex gap-2 z-20">
                {SLIDES.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${idx === currentSlide ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center text-center p-4 max-w-4xl mt-16">
                <h2 className="text-secondary tracking-[0.2em] uppercase mb-4 text-sm md:text-base font-medium drop-shadow-md">
                    Grand Tasting
                </h2>
                <h1 className="font-display text-5xl md:text-8xl font-bold uppercase tracking-wide mb-6 leading-none drop-shadow-lg">
                    Punta Food & <br /> Wine 2025
                </h1>
                <p className="text-secondary/90 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed drop-shadow-md">
                    El festival gastronómico más exclusivo del verano. <br />
                    Experience world-class cuisine and wines.
                </p>

                <div className="flex flex-col md:flex-row gap-4">
                    <button className="bg-primary hover:bg-[#965764] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wider text-sm shadow-lg transform hover:scale-105 border border-primary">
                        Comprar Entradas
                    </button>
                    <button className="border border-white hover:bg-primary hover:border-primary hover:text-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 uppercase tracking-wider text-sm shadow-sm backdrop-blur-sm bg-black/10">
                        Más Información
                    </button>
                </div>
            </div>

            {/* Decorative arrow/scroller */}
            <div className="absolute bottom-8 animate-bounce flex flex-col items-center gap-2 opacity-80 z-20">
                <span className="text-[10px] uppercase tracking-widest text-white drop-shadow-sm">Descubre Más</span>
                <svg className="w-5 h-5 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
