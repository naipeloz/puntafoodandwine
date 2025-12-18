"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EventSubmenu() {
    return (
        <div className="sticky top-[70px] z-40 bg-[white] backdrop-blur-md border-b border-black/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center md:justify-start gap-8 overflow-x-auto">
                <Link href="#chefs" className="text-xs uppercase tracking-widest font-bold text-black/60 hover:text-primary transition-colors whitespace-nowrap">
                    Chefs
                </Link>
                <Link href="#estaciones" className="text-xs uppercase tracking-widest font-bold text-black/60 hover:text-primary transition-colors whitespace-nowrap">
                    Estaciones
                </Link>
                <Link href="#itinerario" className="text-xs uppercase tracking-widest font-bold text-black/60 hover:text-primary transition-colors whitespace-nowrap">
                    Itinerario
                </Link>
                <Link href="#entradas" className="text-xs uppercase tracking-widest font-bold text-black/60 hover:text-primary transition-colors whitespace-nowrap">
                    Entradas
                </Link>
            </div>
        </div>
    );
}
