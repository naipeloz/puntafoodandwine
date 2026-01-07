"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
    className?: string;
    variant?: "transparent" | "light"; // transparent = default white textuals, light = dark text for light backgrounds
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isLightVariant = variant === "light";
    // Scrolled or Light Variant or Mobile Menu Open -> Black text
    // Otherwise -> White text (transparent bg)
    // BUT on Mobile with Menu Open, we want Black text on White bg.

    // Base colors (desktop / closed mobile)
    const baseTextColorClass = isScrolled || isLightVariant ? "text-black" : "text-black md:text-white";
    // Note: User wanted Itau logo in Hero (black) and Hero bg is light (#E6E4DE). 
    // So Navbar on Hero matches light bg behavior -> text-black always?
    // The Hero background is #E6E4DE (light).
    // So on Hero (Top), text should be BLACK.
    // So variant="transparent" on Hero should probably result in Black text if background is light.
    // Current logic: text-white if transparent & not scrolled. 
    // I need to change default to text-black for the Hero?
    // Or just rely on isScrolled.
    // Given the new Hero is Light, the Navbar should probably be Light (Black text) even at top?
    // Or Transparent with Black text?

    // Let's assume transparent with black text for now because Hero is light.
    // Updating logic:
    const effectiveTextColor = (isScrolled || isMobileMenuOpen) ? "text-black" : "text-black"; // Always black for now due to light Hero?
    // Wait, original Hero was Dark. New Hero is Light.
    // So Navbar links should be Black at top.

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isMobileMenuOpen
                ? "bg-[#E6E4DE] py-4"
                : isScrolled
                    ? "bg-white/90 py-4 shadow-md backdrop-blur-md"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                {/* Always show logo, swap version based on state */}
                <div className="z-50 relative">
                    <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <img
                            src={isScrolled || isMobileMenuOpen ? "/assets/logos_pfw/horizontal-black.png" : "/assets/logos_pfw/logo.png"}
                            alt="Punta del Este Food & Wine"
                            className={`w-auto object-contain transition-all duration-300 opacity-100 ${isScrolled || isMobileMenuOpen ? "h-8 md:h-10" : "h-12 md:h-16"}`}
                        />
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {/* Using Black text always for this Theme */}
                    <a href="/" className={`text-black/80 hover:text-black text-sm uppercase tracking-wider transition-colors`}>
                        Inicio
                    </a>
                    <a href="/universo-troisgros" className={`text-black/80 hover:text-black text-sm uppercase tracking-wider transition-colors`}>
                        Universo Troisgros
                    </a>
                    <a href="/#tickets" className={`text-black/80 hover:text-black text-sm uppercase tracking-wider transition-colors`}>
                        Tickets
                    </a>
                    <a href="/#contact" className={`text-black/80 hover:text-black text-sm uppercase tracking-wider transition-colors`}>
                        Contacto
                    </a>
                    <a href="https://redtickets.uy/evento/PFW-presenta-Universo-Troisgros/26239/" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-[#965764] text-white text-xs font-bold py-2 px-10 rounded-full uppercase tracking-widest transition-all">
                        Comprar
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-black focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#E6E4DE] z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                    <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black font-display uppercase tracking-widest">Inicio</a>
                    <a href="/universo-troisgros" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black font-display uppercase tracking-widest">Universo Troisgros</a>
                    <a href="/#tickets" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black font-display uppercase tracking-widest">Tickets</a>
                    <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-black font-display uppercase tracking-widest">Contacto</a>
                    <a href="https://redtickets.uy/evento/PFW-presenta-Universo-Troisgros/26239/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white text-sm font-bold py-3 px-12 rounded-full uppercase tracking-widest shadow-xl">
                        Comprar Ticket
                    </a>
                </div>
            </div>
        </nav>
    );
}
