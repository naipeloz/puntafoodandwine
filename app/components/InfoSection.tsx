export default function InfoSection() {
    const features = [
        {
            title: "Chefs",
            description: "Chefs internacionales de renombre presentando sus platos insignia.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
            ),
        },
        {
            title: "Bodegas",
            description: "Una selección de los mejores vinos de la región y el mundo.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3a1.5 1.5 0 00-1.5 1.5v2.25h1.5v-2.25A1.5 1.5 0 009.75 3zM6 3h1.5v5.25H6V3zM12.75 3v5.25H12V3h.75zM15 3h1.5v5.25H15V3zM3 15.75c0 .414.336.75.75.75H6v2.25h1.5V16.5h3v2.25h1.5V16.5h3v2.25h1.5V16.5h2.25c.414 0 .75-.336.75-.75V8.25H3v7.5z" />
                </svg>
            ),
        },
        {
            title: "Experiencia",
            description: "Música en vivo, arte y una atmósfera inolvidable frente al mar.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 12.25v-7.5" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-secondary py-20 px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                        <div className="w-16 h-16 md:w-20 md:h-20 mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl mb-3 text-black">{feature.title}</h3>
                        <p className="font-light text-black/70 leading-relaxed max-w-xs text-sm md:text-base">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
