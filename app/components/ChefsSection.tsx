"use client";

import Link from "next/link";

const CHEFS = [
    {
        name: "Thomas Troisgros",
        subtitle: "Brasil",
        image: "/assets/chefs/troisgos/img_full.jpeg",
        description: 'Formado en el prestigioso Culinary Institute of America, Thomas regresó a Río de Janeiro para ponerse al frente del multipremiado Olympe. Hoy lidera varios restaurantes de autor, entre ellos Toto y Oseille, este último un concepto de fun dining distinguido con una estrella Michelin en 2025 y ubicado en el puesto 65 del Latin America’s 50 Best Restaurants, además del bar Tijolada, en Ipanema. En 2025 fue elegido Chef del Año por GQ Men of the Year y recibió una cuchilla (Excellent) en The Best Chef Awards. Con toda su experiencia, la cocina de Thomas une la mejor tradición francesa, con el alma tropical en cada plato.',
        link: "https://www.instagram.com/ttroisgros/"
    },
    {
        name: "Santiago Inzaurralde",
        subtitle: "Uruguay",
        image: "/assets/chefs/santiago/img_1.png",
        description: "Chef Ejecutivo de La Susana, Santiago es un maestro del fuego y los productos locales. Su cocina rústica y refinada captura la esencia de José Ignacio como nadie.",
        link: "https://www.instagram.com/lasusanajoseignacio/"
    }
];

export default function ChefsSection() {
    return (
        <section id="chefs" className="py-20 bg-[#F1EFEA]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    {/* <span className="text-sm uppercase tracking-widest text-black/50 mb-2 block">
                        Talento Culinario
                    </span> */}
                    <h2 className="font-display text-4xl md:text-6xl text-black">
                        NUESTROS CHEFS
                    </h2>
                </div>

                <div className="flex flex-col gap-0">
                    {CHEFS.map((chef, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row h-auto md:h-[500px] w-full overflow-hidden group border-b border-black/5 last:border-none ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Container */}
                            <div className="w-full md:w-1/2 h-[300px] md:h-full relative overflow-hidden bg-black/5">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${chef.image}')` }}
                                />
                                {/* Overlay/Button Container - Only visible on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px]">
                                    <Link href={chef.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-colors">
                                        Conocer más
                                    </Link>
                                </div>
                            </div>

                            {/* Text Container */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-16 bg-[#F1EFEA] transition-colors group-hover:bg-[#fcf8f5]">
                                <h3 className="font-display text-3xl md:text-5xl text-black mb-2 group-hover:text-primary transition-colors">
                                    {chef.name}
                                </h3>
                                <p className={`uppercase tracking-widest text-xs font-bold mb-4 ${idx === 0 ? 'text-[#B67784]' : 'text-[#E67E22]'}`}>
                                    {chef.subtitle}
                                </p>
                                <p className="text-black/70 font-light text-base md:text-lg leading-snug md:leading-relaxed max-w-lg">
                                    {chef.description}
                                </p>
                                {/* <div className="w-12 h-0.5 bg-primary/30 group-hover:w-24 group-hover:bg-primary transition-all duration-500 mt-8"></div> */}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
