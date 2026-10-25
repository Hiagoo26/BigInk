import { X, Users, Image, Star, CalendarCheck, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react";

function SideBar({ fecharSideBar }) {
    return (
        <>
            <div className="fixed inset-0 z-50 bg-black/60">
                <motion.aside 
                initial={{x: "100%"}}
                animate={{x: 0}}
                transition={{duration: 0.5}}
                exit={{ x: "100%"}}
                className="flex flex-col absolute top-0 right-0 p-6 shadow-2xl h-screen bg-zinc-950">
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-6">
                        <div>
                            <p className="tracking-[0.3em] text-xs text-zinc-500">
                                BIG INK STUDIO
                            </p>
                        </div>

                        <button onClick={fecharSideBar} className="rounded-lg p-2 text-zinc-500 transition-colors duration-300 hover:cursor-pointer hover:bg-zinc-800 hover:text-white">
                            <X size={24}/>
                        </button>
                    </div>

                    <nav className="mt-8">
                        <p className="mb-4 px-3 tracking-widest uppercase text-xs text-zinc-500">
                            Navegação
                        </p>

                        <ul className="flex flex-col gap-2 text-white">
                            <li>
                                <a href="#sobre" className="flex gap-4 items-center rounded-lg p-3 transition-colors hover:bg-zinc-800">
                                    <Users size={19} className="text-zinc-400"/>
                                    <span>Sobre Nós</span>
                                </a>
                            </li>
                            <li>
                                <a href="#galeria" className="flex gap-4 items-center rounded-lg p-3 transition-colors hover:bg-zinc-800">
                                    <Image size={19} className="text-zinc-400"/>
                                    <span>Galeria</span>
                                </a>
                            </li>
                            <li>
                                <a href="#avaliacoes" className="flex gap-4 items-center rounded-lg p-3 transition-colors hover:bg-zinc-800">
                                    <Star size={19} className="text-zinc-400"/>
                                    <span>Avaliações</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="mt-auto border-t border-zinc-800 pt-6">
                        <button className="flex justify-center items-center gap-3 rounded-lg px-4 py-3 w-full font-semibold text-zinc-500 transition-colors hover:bg-zinc-300">
                            <CalendarCheck size={19}/>
                            Agendar sessão
                            <ArrowUpRight size={17}/>
                        </button>
                    </div>
                        
                </motion.aside>
            </div>
        </>
    )
};

export default SideBar;