"use client";

export default function ChefsSection() {
    return (
        <section id="chefs" className="py-20 bg-[#F1EFEA]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm uppercase tracking-widest text-black/50 mb-2 block">
                        Talento Culinario
                    </span>
                    <h2 className="font-display text-4xl md:text-6xl text-black">
                        LOS CHEFS
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Thomas Troisgros */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6">
                        <div className="w-[300px] aspect-[4/5] bg-black/5 relative overflow-hidden rounded-sm">
                            <img
                                src="/assets/chefs/troisgos/img_full.jpeg"
                                alt="Thomas Troisgros"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div>
                            <h3 className="font-display text-3xl text-black mb-2">Thomas Troisgros</h3>
                            <p className="text-[#B67784] uppercase tracking-widest text-xs font-bold mb-4">Brasil</p>
                            <p className="text-black/70 font-light leading-relaxed max-w-lg">
                                Nacido en una familia legendaria de la gastronomía, Thomas lleva el legado Troisgros con una visión moderna y personal. Al frente de Oseille y Toto, combina técnica francesa con alma brasileña.
                            </p>
                        </div>
                    </div>

                    {/* Santiago Inzaurralde */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-6">
                        <div className="w-[300px] aspect-[4/5] bg-black/5 relative overflow-hidden rounded-sm">
                            {/* Placeholder for Santiago if no specific image found in assets list, using a Troisgros one temporarily or generic placeholder if allowed. 
                                 Wait, user said "busca en internet y de Santiago Inzaurralde". I can't browse freely for images to download. 
                                 I will use a placeholder or another available image and advise user to replace. 
                                 Actually I can use `generate_image` or just putting a placeholder path.
                                 I'll use a placeholder div for now or reuse one of the Troisgros ones as placeholder but labeled clearly? No that's bad.
                                 I'll use a solid color or generic placeholder.
                             */}
                            <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                <span className="p-4 text-center">Santiago Inzaurralde Image (Placeholder)</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-display text-3xl text-black mb-2">Santiago Inzaurralde</h3>
                            <p className="text-[#E67E22] uppercase tracking-widest text-xs font-bold mb-4">Uruguay</p>
                            <p className="text-black/70 font-light leading-relaxed max-w-lg">
                                Chef Ejecutivo de La Susana, Santiago es un maestro del fuego y los productos locales. Su cocina rústica y refinada captura la esencia de José Ignacio como nadie.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
