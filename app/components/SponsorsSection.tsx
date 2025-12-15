export default function SponsorsSection() {
    const sponsors = [
        { name: "Sponsor 1" },
        { name: "Sponsor 2" },
        { name: "Sponsor 3" },
        { name: "Sponsor 4" },
        { name: "Sponsor 5" },
        { name: "Sponsor 6" },
        { name: "Sponsor 7" },
        { name: "Sponsor 8" },
        { name: "Sponsor 9" },
        { name: "Sponsor 10" },
        { name: "Sponsor 11" },
        { name: "Sponsor 12" },
    ];

    return (
        <section className="bg-black py-20 px-4 border-t border-white/10">
            <div className="max-w-5xl mx-auto text-center">

                {/* Group 1 */}
                <div className="mb-12">
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-6 font-bold">
                        Organizan
                    </h3>
                    <div className="flex justify-center gap-8 flex-wrap">
                        {/* Placeholders for visuals */}
                        <div className="w-24 h-12 bg-white/10 rounded"></div>
                        <div className="w-24 h-12 bg-white/10 rounded"></div>
                    </div>
                </div>

                {/* Group 2 */}
                <div>
                    <h3 className="text-white/40 uppercase tracking-widest text-xs mb-8 font-bold">
                        Acompañan
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {sponsors.map((s, idx) => (
                            <div key={idx} className="flex items-center justify-center p-4 bg-white/5 rounded hover:bg-white/10 transition-colors">
                                <span className="text-white/20 text-xs font-bold uppercase">{s.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
