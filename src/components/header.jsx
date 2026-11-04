import { Menu } from "lucide-react";

function Header({ abrirSideBar }) {
    return (
        <>
            <header className="sticky top-0 z-50 flex flex-row justify-between items-center px-6 py-4 font-sans bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/70 md:px-10 lg:justify-evenly">
                <a href="/" className="shrink-0">
                    <img src="/biginkLogo.png" alt="Logo Big Ink" className="h-10 transition-opacity duration-300 hover:opacity-75"/>
                </a>
                <nav className="hidden lg:block">
                    <ul className="flex flex-row justify-center items-center gap-10 text-sm font-medium tracking-wide text-zinc-300 xl:gap-14">
                        <li>
                            <a href="#" className="transition-colors duration-300 hover:text-white">Sobre Nós</a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors duration-300 hover:text-white">Galeria</a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors duration-300 hover:text-white">Avaliações</a>
                        </li>
                        <li>
                            <a href={`https://wa.me/5514998047149?text=${encodeURIComponent("Olá,gostaria de fazer um agendamento.")}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/5">Agendar</a>
                        </li>
                    </ul>
                </nav>

                <button onClick={abrirSideBar} className="border-0 text-white bg-zinc-950 hover:cursor-pointer lg:hidden">
                    <Menu size={26}/>
                </button>
            </header>
        </>
    );

}

export default Header;