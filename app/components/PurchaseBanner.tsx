"use client";

import Link from "next/link";

export default function PurchaseBanner() {
    return (
        <section className="bg-primary py-8 text-center text-white">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
                <span className="font-display text-2xl md:text-3xl">
                    ¡Asegura tu lugar en el evento del año!
                </span>
                <Link href="https://redtickets.uy/evento/PFW-presenta-Universo-Troisgros/26239/" target="_blank" rel="noopener noreferrer" className="bg-white text-primary font-bold py-3 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors shadow-lg">
                    Comprar Entradas
                </Link>
            </div>
        </section>
    );
}
