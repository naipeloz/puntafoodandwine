export default function StatsSection() {
    const stats = [
        { value: "300+", label: "Vinos" },
        { value: "100", label: "Bodegas" },
        { value: "+25", label: "Chefs" },
        { value: "5", label: "Continentes" },
    ];

    return (
        <section className="bg-black text-white py-16 px-8">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex-1 min-w-[150px] text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary text-2xl">★</span>
                        </div>
                        <h3 className="font-display text-4xl md:text-5xl text-primary mb-2">
                            {stat.value}
                        </h3>
                        <p className="text-sm uppercase tracking-widest text-secondary/60">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
