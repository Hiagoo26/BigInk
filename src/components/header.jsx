
function Header() {

    return (
    <>
        <header className="flex flex-row justify-center items-center p-5 font-sans bg-black md:justify-evenly gap-2">
            <a href="/">
                <img 
                src="./public/biginkLogo.png" 
                alt="Logo Bigink" 
                className="h-10"/>
            </a>
            <nav className="hidden p-5 lg:block">
                <ul className="flex flex-row justify-center items-center gap-16 text-white">
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">Avaliações</a></li>
                    <li>
                        <button className="border-0 rounded-xl p-2 text-black bg-white transition-colors duration-500 hover:cursor-pointer hover:text-white hover:bg-black">
                        Agendar
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    )
    
}

export default Header;