export interface Station {
    id: number;
    name: string; // e.g., "La Susana Classics"
    chef: string; // e.g., "Santiago Inosaurralde"
    description: string; // "Los platos icónicos..."
    chefBio: string; // "Santiago Inaurralde es el chef ejecutivo..."
    photos: string[]; // ["/assets/img1.jpg", "/assets/img2.jpg"]
}

interface StationModalProps {
    station: Station | null;
    onClose: () => void;
}

export default function StationModal({ station, onClose }: StationModalProps) {
    if (!station) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative flex flex-col">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black/50 hover:text-black transition-colors z-10"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-8 pb-4 border-b border-gray-100">
                    <h2 className="font-display text-3xl text-black mb-1">{station.name}</h2>
                    <p className="text-primary text-lg font-light">{station.chef}</p>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">

                    {/* Photos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {station.photos.map((photo, idx) => (
                            <div key={idx} className="h-64 rounded-lg overflow-hidden bg-gray-100">
                                <img src={photo} alt="" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>

                    {/* About Station */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-black">Sobre la Estación</h3>
                        <p className="text-black/70 font-light leading-relaxed">
                            {station.description}
                        </p>
                    </div>

                    {/* Audio Message Placeholder */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-black">Mensaje del Chef</h3>
                        <div className="bg-[#F1EFEA] rounded-xl p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white cursor-pointer hover:bg-black transition-colors">
                                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-black">Audio mensaje</h4>
                                <p className="text-xs text-black/60">Escucha lo que {station.chef} tiene que decir sobre esta estación</p>
                            </div>
                        </div>
                    </div>

                    {/* Chef Bio */}
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-black">Biografía del Chef</h3>
                        <p className="text-black/70 font-light leading-relaxed">
                            {station.chefBio}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
