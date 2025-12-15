"use client";

import { useState } from "react";
import StationModal, { Station } from "./StationModal";

const STATIONS: Station[] = [
    {
        id: 1,
        name: "La Susana Classics",
        chef: "Santiago Inosaurralde",
        description: "Los platos icónicos que han hecho de La Susana un referente. Una muestra de la evolución culinaria del restaurante.",
        chefBio: "Santiago Inosaurralde es el chef ejecutivo de La Susana, donde ha revolucionado la escena gastronómica de Punta del Este...",
        photos: ["/assets/PFW-480.JPG", "/assets/PFW-492.JPG"]
    },
    {
        id: 2,
        name: "Oseille Restaurante",
        chef: "Thomas Troisgros",
        description: "Oseille es el emblemático restaurante de la familia Troisgros en Río de Janeiro. Una experiencia única.",
        chefBio: "Heredero de una dinastía culinaria legendaria, Thomas Troisgros mantiene viva la tradición familiar mientras innova...",
        photos: ["/assets/PFW-230.JPG", "/assets/PFW-234.JPG"]
    },
    {
        id: 3,
        name: "Toto Ipanema",
        chef: "Thomas Troisgros",
        description: "Toto Ipanema combina la elegancia parisina con el espíritu vibrante de Río.",
        chefBio: "Heredero de una dinastía culinaria legendaria, Thomas Troisgros mantiene viva la tradición familiar mientras innova...",
        photos: ["/assets/PFW-275.JPG", "/assets/PFW-282.JPG"]
    },
    // Add more mock stations if needed
];

export default function InteractiveMap() {
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);

    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-[#F1EFEA] flex flex-col items-center justify-center p-4">
            {/* Map Container */}
            <div className="relative w-full max-w-5xl h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                {/* Background (Map Image placeholder) */}
                <div className="absolute inset-0 bg-[#F9F8F6] flex items-center justify-center pointer-events-none">
                    <span className="text-black/10 text-9xl font-display opacity-20">MAPA</span>
                    {/* Add a subtle grid or texture here ideally */}
                </div>

                {/* Pins */}
                {/* Pin 1 - Top Left */}
                <button
                    onClick={() => setSelectedStation(STATIONS[1])}
                    className="absolute top-[25%] left-[25%] group"
                >
                    <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#B67784] to-[#965764] rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform z-10 text-white">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="absolute top-full mt-2 bg-white px-3 py-1 rounded shadow text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {STATIONS[1].name}
                        </div>
                    </div>
                </button>

                {/* Pin 2 - Center */}
                <button
                    onClick={() => setSelectedStation(STATIONS[2])}
                    className="absolute top-[45%] left-[55%] group"
                >
                    <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#B67784] to-[#965764] rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform z-10 text-white">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="absolute top-full mt-2 bg-white px-3 py-1 rounded shadow text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {STATIONS[2].name}
                        </div>
                    </div>
                </button>


                {/* Pin 3 - Bottom Right (Orange for contrast/variety as per screenshot) */}
                <button
                    onClick={() => setSelectedStation(STATIONS[0])}
                    className="absolute bottom-[30%] right-[35%] group"
                >
                    <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E67E22] to-[#D35400] rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform z-10 text-white">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div className="absolute top-full mt-2 bg-white px-3 py-1 rounded shadow text-xs font-bold text-black opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {STATIONS[0].name}
                        </div>
                    </div>
                </button>
            </div>

            <StationModal station={selectedStation} onClose={() => setSelectedStation(null)} />
        </section>
    );
}
