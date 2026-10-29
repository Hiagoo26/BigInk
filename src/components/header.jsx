import { Menu } from "lucide-react";

function Header({ abrirSideBar }) {

    return (
    <>
        <header className="flex flex-row justify-between items-center p-5 font-sans bg-zinc-950 md:justify-evenly gap-2">
            <a href="/">
                <img 
                src="/biginkLogo.png" 
                alt="Logo Bigink" 
                className="h-10"/>
            </a>

            <nav className="hidden p-5 lg:block">
                <ul className="flex flex-row justify-center items-center gap-16 text-white">
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">Avaliações</a></li>
                    <li>
                        <button className="rounded-xl p-2 text-black bg-white transition-colors duration-500 hover:cursor-pointer hover:text-white hover:bg-zinc-900">
                        Agendar
                        </button>
                    </li>
                </ul>
            </nav>

            <button onClick={abrirSideBar} className="border-0 text-white bg-zinc-950 hover:cursor-pointer lg:hidden">
                <Menu size={26}/>
            </button>
        </header>
    </>
    )
    
};

export default Header;