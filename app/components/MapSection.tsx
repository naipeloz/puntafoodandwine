"use client";

import { useState } from "react";

export default function MapSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            // Reset after a while if needed
        }, 1500);
    };

    return (
        <section className="py-20 px-8 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center animate-fade-in-up">
                {/* Map Placeholder */}
                <div className="w-full md:w-1/2 h-80 rounded-2xl overflow-hidden relative shadow-lg">
                    <img
                        src="/uploaded_image_1_1765807862552.png"
                        alt="Mapa"
                        className="w-full h-full object-cover"
                    />

                    {/* Floating Location Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Form / Contact */}
                <div className="w-full md:w-1/2 bg-[#B67784] rounded-3xl p-10 text-white shadow-2xl flex flex-col justify-center min-h-[400px]">
                    <h3 className="font-display text-4xl mb-2 uppercase tracking-wide">Contacto</h3>
                    <p className="mb-6 text-white/90 font-light text-sm leading-relaxed">
                        SUSCRÍBETE PARA RECIBIR NOVEDADES Y ACCESO EXCLUSIVO A LA PREVENTA DE ENTRADAS.
                    </p>

                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-8 animate-in fade-in zoom-in">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="font-display text-2xl uppercase">¡Gracias!</h4>
                            <p className="text-white/80 text-sm">Tu mensaje ha sido enviado.</p>
                        </div>
                    ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                required
                                type="text"
                                placeholder="Nombre"
                                className="w-full px-6 py-4 rounded-full bg-white text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-inner"
                            />
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="w-full px-6 py-4 rounded-full bg-white text-primary placeholder-primary/50 focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-inner"
                            />
                            <button
                                disabled={status === "submitting"}
                                className="w-full bg-white text-primary font-bold py-4 rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm shadow-md hover:shadow-lg transform hover:-translate-y-1 disabled:opacity-75 disabled:cursor-wait"
                            >
                                {status === "submitting" ? "Enviando..." : "Enviar"}
                            </button>
                        </form>
                    )}

                    <p className="mt-4 text-[10px] text-white/60 text-center uppercase tracking-widest">
                        Punta Food & Wine 2025
                    </p>
                </div>
            </div>
        </section>
    );
}
