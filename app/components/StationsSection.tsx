"use client";

import Link from "next/link"; // Changed from 'next/link' to 'next/link' (standard) or just <a> tag if preferred, but Link is better.

const STATIONS = [
    {
        name: "Oseille Restaurante",
        image: "/assets/PFW-230.JPG", // Placeholder
        description: "El calor de las brasas y los mejores cortes.",
        link: "https://www.instagram.com/oseillerestaurante/"
    },
    {
        name: "Toto Ipanema",
        image: "/assets/estaciones/toto/img_1.jpeg",
        description: "Una selección curada de las mejores bodegas.",
        link: "https://www.instagram.com/toto.ipanema/"
    },
    {
        name: "CT Boucherie",
        image: "/assets/PFW-275.JPG", // Placeholder
        description: "Postres artesanales que enamoran.",
        link: "https://www.instagram.com/ctboucherie/"
    },
    {
        name: "Tijolada",
        image: "/assets/estaciones/tijolada/img_1.jpeg",
        description: "Mixología creativa para brindar.",
        link: "https://www.instagram.com/tijoladabar/"
    },
    {
        name: "Estación 5",
        image: "/assets/PFW-326.JPG", // Placeholder
        description: "Una experiencia culinaria más por descubrir.",
        link: "#"
    },
    {
        name: "Estación 6",
        image: "/assets/PFW-359.JPG", // Placeholder
        description: "Sabores únicos en un entorno inigualable.",
        link: "#"
    }
];

export default function StationsSection({ disableHeader = false }: { disableHeader?: boolean }) {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {!disableHeader && (
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl text-black uppercase mb-4">Experiencias</h2>
                        <p className="text-black/60 font-light max-w-xl mx-auto">Descubrí las diferentes estaciones que hemos preparado para ti.</p>
                    </div>
                )}

                <div className="flex flex-col gap-0">
                    {STATIONS.map((station, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row h-[400px] w-full overflow-hidden group border-b border-black/5 last:border-none ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Container */}
                            <div className="w-full md:w-1/2 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${station.image}')` }}
                                />
                                {/* Overlay/Button Container - Only visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                                    <Link href={station.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-colors">
                                        Conocer más
                                    </Link>
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 bg-secondary transition-colors group-hover:bg-[#fcf8f5]">
                                <h3 className="font-display text-3xl md:text-4xl text-black mb-4 group-hover:text-primary transition-colors">
                                    {station.name}
                                </h3>
                                <p className="text-black/70 font-light text-lg mb-6 max-w-sm">
                                    {station.description}
                                </p>
                                <div className="w-12 h-0.5 bg-primary/30 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
