"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
    className?: string;
    variant?: "transparent" | "light"; // transparent = default white textuals, light = dark text for light backgrounds
}

export default function Navbar({ variant = "transparent" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isLightVariant = variant === "light";
    const textColorClass = isScrolled || isLightVariant ? "text-black" : "text-white";
    const hoverTextColorClass = isScrolled || isLightVariant ? "hover:text-primary" : "hover:text-white";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 py-4 shadow-md backdrop-blur-md" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center">
                {/* Logo */}
                <div className="hidden md:block">
                    <a href="/">
                        <h1 className={`${textColorClass} font-display text-2xl tracking-widest uppercase transition-colors`}>
                            Punta Food & Wine
                        </h1>
                    </a>
                </div>

                {/* Links */}
                <div className="flex items-center gap-8">
                    <a href="/" className={`hidden md:block ${textColorClass}/80 ${hoverTextColorClass} text-sm uppercase tracking-wider transition-colors`}>
                        Inicio
                    </a>
                    <a href="/el-evento" className={`hidden md:block ${textColorClass}/80 ${hoverTextColorClass} text-sm uppercase tracking-wider transition-colors`}>
                        El Evento
                    </a>
                    <a href="#" className={`hidden md:block ${textColorClass}/80 ${hoverTextColorClass} text-sm uppercase tracking-wider transition-colors`}>
                        Cronograma
                    </a>
                    <a href="#" className={`hidden md:block ${textColorClass}/80 ${hoverTextColorClass} text-sm uppercase tracking-wider transition-colors`}>
                        Entradas
                    </a>
                    <a href="#" className={`hidden md:block ${textColorClass}/80 ${hoverTextColorClass} text-sm uppercase tracking-wider transition-colors`}>
                        Contacto
                    </a>
                    <button className="bg-primary hover:bg-[#965764] text-white text-xs font-bold py-2 px-6 rounded-full uppercase tracking-widest transition-all">
                        Comprar
                    </button>
                </div>
            </div>
        </nav>
    );
}
