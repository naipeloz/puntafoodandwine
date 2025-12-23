"use client";

interface NewsletterBannerProps {
    onOpenModal: () => void;
}

export default function NewsletterBanner({ onOpenModal }: NewsletterBannerProps) {
    return (
        <section className="bg-black py-16 text-center text-white border-t border-white/10">
            <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex flex-col text-left max-w-lg">
                    <span className="text-2xl md:text-3xl font-display mb-2">
                        Suscríbete a nuestro Newsletter
                    </span>
                    <p className="text-white/60 font-light text-sm">
                        Recibí las últimas novedades, anuncios de chefs y lanzamientos exclusivos de entradas.
                    </p>
                </div>
                <button
                    onClick={onOpenModal}
                    className="bg-white text-black font-bold py-3 px-8 rounded-full uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all shadow-lg whitespace-nowrap"
                >
                    Suscribirse
                </button>
            </div>
        </section>
    );
}
