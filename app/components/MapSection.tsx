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
            <div className="max-w-6xl mx-auto animate-fade-in-up">

                {/* Form / Contact */}
                <div id="contact" className="w-full max-w-4xl mx-auto bg-[#B67784] rounded-3xl p-8 md:p-10 text-white shadow-2xl flex flex-col justify-center scroll-mt-24">
                    <h3 className="font-display text-4xl md:text-5xl mb-2 uppercase tracking-wide text-center">Contacto</h3>
                    <p className="mb-8 text-white/90 font-light text-base leading-relaxed text-center max-w-2xl mx-auto">
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
                        <form className="space-y-6 max-w-xl mx-auto w-full" onSubmit={handleSubmit}>
                            <input
                                required
                                type="text"
                                placeholder="Nombre"
                                className="w-full px-8 py-5 rounded-full bg-white text-primary placeholder-primary/50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-lg text-lg"
                            />
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="w-full px-8 py-5 rounded-full bg-white text-primary placeholder-primary/50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-lg text-lg"
                            />
                            <button
                                disabled={status === "submitting"}
                                className="w-full bg-black text-white font-bold py-5 rounded-full hover:bg-white hover:text-primary transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-75 disabled:cursor-wait"
                            >
                                {status === "submitting" ? "Enviando..." : "Enviar"}
                            </button>
                        </form>
                    )}

                    <p className="mt-8 text-xs text-white/60 text-center uppercase tracking-widest">
                        Punta del Este Food & Wine 2025
                    </p>
                </div>
            </div>
        </section>
    );
}
