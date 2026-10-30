import { Camera, MessageCircle, ArrowUpRight } from "lucide-react";

function Footer() {
    return (
        <footer className="flex flex-col p-6 bg-zinc-950 lg:p-16">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-4">
                    <h2 className="font-title font-semibold text-4xl text-white">BIG INK.</h2>
                    <p className="text-sm leading-7 text-zinc-400 lg:text-base">
                        Transformando sentimentos em arte.
                        Sua história merece ser eternizada na pele.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold tracking-wide text-lg uppercase text-white">Navegação</h3>
                    <nav className="flex flex-col gap-3 text-sm text-zinc-400">
                        <a href="#" className="hover:text-white transition-colors">Início</a>
                        <a href="#" className="hover:text-white transition-colors">Sobre Nós</a>
                        <a href="#" className="hover:text-white transition-colors">Galeria</a>
                        <a href="#" className="hover:text-white transition-colors">Avaliações</a>
                        <a href="#" className="hover:text-white transition-colors">Agendamento</a>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold tracking-wide text-lg uppercase text-white">Contato</h3>
                    <div className="flex flex-col gap-4 text-sm text-zinc-400">
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Camera size={18} />
                            Instagram
                            <ArrowUpRight size={14} />
                        </a>
                        <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <MessageCircle size={18} />
                            WhatsApp
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-zinc-800 pt-6">
                <p className="text-center text-xs text-zinc-500 lg:text-sm">
                    Todos os direitos reservados © 2026 Big Ink.
                </p>
            </div>
        </footer>
    );
}

export default Footer;