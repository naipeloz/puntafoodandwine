"use client";

import { useState } from "react";

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Call API
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }),
            });

            if (!response.ok) {
                if (response.status === 400) {
                    // Check if it's already subscribed or other error
                    const data = await response.json();
                    if (data.error) throw new Error(data.error);
                }
                throw new Error('Subscription failed');
            }

            setStatus("success");
            // Reset after showing success message
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setEmail("");
                setName("");
            }, 3000);

        } catch (error) {
            console.error(error);
            setStatus("error");
            // Optionally set status back to idle or show error message
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-md p-8 md:p-12 rounded-2xl shadow-2xl transform transition-all scale-100">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black/40 hover:text-black transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {status === "success" ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-display text-black mb-2">¡Suscripción Exitosa!</h3>
                        <p className="text-black/60">Gracias por unirte a nuestra comunidad.</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <h3 className="text-2xl md:text-3xl font-display text-black mb-2 uppercase">Newsletter</h3>
                        <p className="text-black/60 mb-8 font-light text-sm">
                            Dejanos tu email para enterarte de todas las novedades.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-primary hover:bg-black text-white font-bold py-3 px-8 rounded-lg uppercase tracking-widest text-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? "Procesando..." : "Suscribirme"}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
