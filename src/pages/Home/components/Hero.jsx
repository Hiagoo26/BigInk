import { MoveUpRight } from "lucide-react";
import TatuadorBigInk from "../../../assets/TatuadorBigInk.png";
import InkTransition from "./InkTransition";

function Hero() {
    return (
        <>
            <div className="flex flex-col overflow-x-clip bg-zinc-900 lg:flex-row lg:h-screen">
                <section className="flex flex-col justify-center gap-3 relative p-6 z-1 h-[50dvh] lg:h-screen lg:gap-6 lg:w-1/2 lg:p-12">
                    <h1 className="tracking-wide uppercase font-title font-semibold text-5xl text-white lg:text-9xl">
                        Big ink
                        <span className="block text-xl text-zinc-500 lg:text-5xl">Sua história.</span>
                    </h1>
                    <p className="text-zinc-400 lg:text-xl">Transformando sentimentos em arte.</p>
                     <button className=" rounded-xl px-4 py-2 w-fit font-medium text-black bg-white transition-colors duration-300 hover:bg-zinc-400 hover:cursor-pointer">
                        Agendar sessão <MoveUpRight className="inline" size={14}/>
                    </button>
                    <div className="absolute -bottom-58 left-1/2 translate-x-1/2 h-full rotate-270 lg:-right-8 lg:-bottom-0 lg:left-auto lg:top-0 lg:translate-x-0 lg:rotate-180">
                        <InkTransition />
                    </div>
                </section>
                <section className="h-[60dvh] overflow-hidden lg:h-screen lg:w-1/2">
                    <img src={TatuadorBigInk} alt="Tatuador" className="h-full w-full object-cover lg:object-center"/>
                </section>

            </div>
        </>
    )
};

export default Hero;