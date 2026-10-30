import { ArrowUpRight } from "lucide-react";
import tatuagem1 from "../../../assets/tatuagem1.jpeg";
import tatuagem2 from "../../../assets/tatuagem2.jpeg";


function Galeria() {
    return (
        <>
            <section className="flex flex-col p-6 bg-gray-200 lg:p-16">
                <h2 className="tracking-wide uppercase font-title font-semibold text-5xl text-zinc-900 lg:text-[10rem]">Galeria</h2>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-6">
                    <div className="flex flex-col gap-1">
                        <div className="border border-zinc-950 rounded-xl h-[400px] overflow-hidden lg:h-[600px]">
                            <img className="h-full w-full object-cover" src={tatuagem1} alt="Tatuagem"/>
                        </div>
                        <p className="text-sm text-zinc-950">Tatuagem Soul Eater</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="border border-zinc-950 rounded-xl h-[400px] overflow-hidden lg:h-[600px]">
                            <img className="h-full w-full object-cover" src={tatuagem2} alt="Tatuagem"/>
                        </div>
                        <p className="text-sm text-zinc-950">Tatuagem Luffy - One Piece</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="border border-zinc-950 rounded-xl h-[400px] overflow-hidden lg:h-[600px]">
                            <img className="h-full w-full object-cover" src={tatuagem2} alt="Tatuagem"/>
                        </div>
                        <p className="text-sm text-zinc-950">Tatuagem Luffy - One Piece</p>
                    </div>
                </div>
                <p className="mt-5 text-center text-semibold text-zinc-950 lg:text-xl">Confira mais artes <ArrowUpRight className="inline" size={14}/></p>
            </section>
        </>
    )
};

export default Galeria;