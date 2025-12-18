export default function TimelineSection() {
    const events = [
        {
            time: "20:00",
            title: "Recepción",
            description: "Bienvenida con copa de espumante y appetizers exclusivos.",
            side: "left",
        },
        {
            time: "21:00",
            title: "Apertura de Stands",
            description: "Degustación de platos principales y vinos de alta gama.",
            side: "right",
        },
        {
            time: "22:30",
            title: "Show en Vivo",
            description: "Música en directo para amenizar la velada.",
            side: "left",
        },
        {
            time: "00:00",
            title: "Cierre",
            description: "Brindis final y despedida.",
            side: "right",
        },
    ];

    return (
        <section id="itinerario" className="bg-white py-12 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto relative">
                <h2 className="text-center font-display text-4xl md:text-5xl text-black mb-12 uppercase tracking-[0.15em]">
                    Itinerario
                </h2>

                <div className="relative">
                    {/* Vertical Line with Brand Color */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#B67784]/30 top-0 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-16">
                        {events.map((event, idx) => (
                            <div
                                key={idx}
                                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${event.side === "left" ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Empty Side for Desktop */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Center Node - Brand Color */}
                                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex">
                                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#B67784] rounded-full shadow-lg border-4 border-white">
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-5/12 ${event.side === "left" ? "md:text-right" : "md:text-left"}`}>
                                    <div className={`border border-[#B67784]/20 rounded-lg p-6 md:p-8 relative bg-white transition-transform hover:-translate-y-1 duration-300 shadow-sm animate-fade-in-up ${event.side === "left" ? "md:mr-12" : "md:ml-12"
                                        }`} style={{ animationDelay: `${idx * 0.2}s` }}>
                                        <span className="font-bold text-sm tracking-widest block mb-4 text-black uppercase">
                                            {event.time}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-medium text-black mb-3 leading-tight">{event.title}</h3>
                                        <p className="text-gray-500 font-light leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
