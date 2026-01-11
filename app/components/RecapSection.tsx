"use client";

import { useEffect, useRef, useState } from "react";

export default function RecapSection() {
    const videoRef = useRef<HTMLIFrameElement>(null);
    const [isInteractive, setIsInteractive] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [isPlaying, setIsPlaying] = useState(true);

    // Detect Mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const togglePlay = () => {
        if (!videoRef.current) return;
        const action = isPlaying ? 'pauseVideo' : 'playVideo';
        videoRef.current.contentWindow?.postMessage(`{"event":"command","func":"${action}","args":""}`, '*');
        setIsPlaying(!isPlaying);
    };

    const handleOpenExperience = () => {
        if (isMobile) {
            setShowModal(true);
        } else {
            setIsInteractive(true);
        }
    };

    // Handle Interactive Mode (Desktop) - Unmute/Mute
    useEffect(() => {
        if (!videoRef.current) return;

        if (isInteractive) {
            // Unmute and ensure playing
            videoRef.current.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            videoRef.current.contentWindow?.postMessage('{"event":"command","func":"setVolume","args":"[100]"}', '*');
        } else {
            // Mute and ensure playing (background loop)
            videoRef.current.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
            setIsPlaying(true);
            videoRef.current.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }
    }, [isInteractive]);

    return (
        <section className="relative w-full py-20 overflow-hidden flex items-center justify-center text-white bg-black min-h-[80vh]">

            {/* Background Video */}
            <div className={`absolute inset-0 z-0 transition-all duration-1000 ${isInteractive ? 'grayscale-0 opacity-100' : 'grayscale opacity-40'}`}>
                <iframe
                    ref={videoRef}
                    className="w-full h-full scale-[1.35] pointer-events-none select-none pb[56.25%]"
                    src={`https://www.youtube-nocookie.com/embed/yKuPtD0thLU?autoplay=1&mute=1&controls=0&loop=1&playlist=yKuPtD0thLU&playsinline=1&showinfo=0&rel=0&enablejsapi=1`}
                    title="REVIVÍ LA EDICIÓN 2025"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ border: 'none' }}
                />
                {/* Video Overlay for contrast - fades out when interactive */}
                <div className={`absolute inset-0 bg-black/50 z-10 transition-opacity duration-1000 ${isInteractive ? 'opacity-0' : 'opacity-100'}`} />
            </div>

            {/* Controls Container - Only visible when interactive */}
            <div className={`absolute top-8 right-8 z-50 hidden md:flex items-center gap-4 transition-all duration-500 ${isInteractive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>

                {/* Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className="text-white bg-black/20 backdrop-blur-md rounded-full p-4 hover:bg-black/40 transition-all duration-300"
                >
                    {isPlaying ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    )}
                </button>

                {/* Close Button */}
                <button
                    onClick={() => setIsInteractive(false)}
                    className="text-white bg-black/20 backdrop-blur-md rounded-full p-4 hover:bg-black/40 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>


            {/* Content Container - Fades out when interactive */}
            <div className={`relative z-20 max-w-6xl mx-auto px-6 flex flex-col items-center text-center transition-all duration-700 ${isInteractive ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>

                <img
                    src="/assets/recap_text.png"
                    alt="REVIVÍ LA EDICIÓN 2025"
                    className="w-full max-w-lg md:max-w-4xl h-auto object-contain mb-12 drop-shadow-lg"
                />

                {/* Play Button */}
                <button
                    onClick={handleOpenExperience}
                    className="group mb-16 flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-105"
                >
                    <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ml-1">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-white">Ver Experiencia</span>
                </button>

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

            {/* Mobile Video Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
                    {/* Close Button */}
                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-4 right-4 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 z-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube-nocookie.com/embed/yKuPtD0thLU?autoplay=1&mute=1&controls=1&playsinline=1&modestbranding=1&rel=0`}
                            title="PFW Recap Video"
                            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
