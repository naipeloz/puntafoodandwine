"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function EventSubmenu() {
    return (
        <div className="sticky top-[70px] z-40 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-center md:justify-start gap-8 overflow-x-auto">
                <Link href="#chefs" className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors whitespace-nowrap">
                    Chefs
                </Link>
                {/* <Link href="#estaciones" className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors whitespace-nowrap">
                    Estaciones
                </Link> */}
                <Link href="#entradas" className="text-xs uppercase tracking-widest font-bold text-white/70 hover:text-white transition-colors whitespace-nowrap">
                    Tickets
                </Link>
            </div>
        </div>
    );
}
