"use client";

import { useState } from "react";
import StationModal, { Station } from "./StationModal";

// ... imports

const STATIONS: Station[] = [
    {
        id: 1,
        name: "Oseille Restaurante",
        chef: "Thomas Troisgros",
        description: "El calor de las brasas y los mejores cortes.",
        chefBio: "Bio placeholder...",
        photos: ["/assets/PFW-230.JPG"]
    },
    {
        id: 2,
        name: "Toto Ipanema",
        chef: "Thomas Troisgros",
        description: "Una selección curada de las mejores bodegas.",
        chefBio: "Bio placeholder...",
        photos: ["/assets/estaciones/toto/img_1.jpeg"]
    },
    {
        id: 3,
        name: "CT Boucherie",
        chef: "Claude Troisgros",
        description: "Postres artesanales que enamoran.",
        chefBio: "Bio placeholder...",
        photos: ["/assets/PFW-275.JPG"]
    },
    {
        id: 4,
        name: "Tijolada",
        chef: "Thomas Troisgros",
        description: "Mixología creativa para brindar.",
        chefBio: "Bio placeholder...",
        photos: ["/assets/estaciones/tijolada/img_1.jpeg"]
    },
    {
        id: 5,
        name: "Estación 5",
        chef: "Chef Invitado",
        description: "Una experiencia culinaria más por descubrir.",
        chefBio: "Bio placeholder...",
        photos: ["/assets/PFW-326.JPG"]
    },
    {
        id: 6,
        name: "Estación 6",
        chef: "Chef Invitado",
        description: "Sabores únicos en un entorno inigualable.",
        chefBio: "Bio placeholder...",
        photos: ["/assets/PFW-359.JPG"]
    }
];

const MARKER_POSITIONS = [
    { top: '50%', left: '50%' },
    { top: '35%', left: '40%' },
    { top: '35%', left: '60%' },
    { top: '65%', left: '40%' },
    { top: '65%', left: '60%' },
    { top: '50%', left: '30%' },
];

export default function InteractiveMap() {
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);

    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-[#F1EFEA] flex flex-col items-center justify-center p-4">
            {/* Map Container */}
            <div className="relative w-full max-w-5xl h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                {/* Background (Map Image placeholder) */}
                <div className="absolute inset-0 bg-[#F9F8F6] flex items-center justify-center pointer-events-none">
                    <img
                        src="/uploaded_image_1_1765807862552.png"
                        alt="Map Background"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <span className="text-black/10 text-9xl font-display opacity-20 relative z-10">MAPA</span>
                </div>

                {/* Pins */}
                {STATIONS.map((station, idx) => {
                    const pos = MARKER_POSITIONS[idx] || { top: '50%', left: '50%' };
                    return (
                        <button
                            key={station.id}
                            onClick={() => setSelectedStation(station)}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                            style={{ top: pos.top, left: pos.left }}
                        >
                            <div className="relative flex flex-col items-center justify-center">
                                <div className="w-12 h-12 bg-[#E67E22] rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform z-10 border-2 border-white">
                                    <span className="text-white font-bold text-sm md:text-base">{station.id}</span>
                                </div>
                                <div className="mt-2 bg-white px-3 py-1 rounded shadow text-xs font-bold text-black group-hover:opacity-100 opacity-90 transition-opacity whitespace-nowrap">
                                    {station.name}
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            <StationModal station={selectedStation} onClose={() => setSelectedStation(null)} />
        </section>
    );
}
