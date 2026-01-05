export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

                {/* Logo / Brand */}
                <div>
                    <h2 className="font-display text-2xl uppercase tracking-widest text-primary mb-1">
                        Punta del Este Food & Wine
                    </h2>
                    <p className="text-xs text-white/40 uppercase tracking-wider">© 2025 Todos los derechos reservados.</p>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-xs uppercase tracking-widest font-light text-white/70">
                    <a href="https://www.instagram.com/puntafoodandwine/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Contacto</a>
                    <a href="#" className="hover:text-primary transition-colors">Prensa</a>
                </div>

            </div>
        </footer>
    );
}
