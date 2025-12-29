"use client";

import Link from "next/link";

export default function PurchaseBanner() {
    return (
        <section className="bg-primary py-8 text-center text-white">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6">
                {/* <span className="text-2xl md:text-3xl">
                    ¡Asegurá tu lugar en el evento del año!
                </span> */}
                <Link
                    href="/#tickets"
                    className="bg-white text-primary font-bold py-3 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-xl"
                >
                    Comprá tu Ticket
                </Link>
            </div>
        </section >
    );
}
