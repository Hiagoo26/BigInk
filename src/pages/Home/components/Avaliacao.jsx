import { Star } from "lucide-react";

function Avaliacao() {
    return (
        <>
            <section className="flex flex-col justify-center p-6 bg-zinc-900 lg:p-16">
                <h2 className="pb-6 tracking-wide uppercase font-title font-semibold text-5xl text-white lg:text-[10rem]">Avaliações</h2>
                <p className="text-zinc-400 lg:text-xl">Veja oque nossos clientes acham</p>
                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-5 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
                        <div className="flex gap-1 text-yellow-500">
                            {[...Array(5)].map((valor, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-sm leading-7 text-zinc-300 lg:text-base">"O resultado ficou incrível! Desde o primeiro contatoaté a finalização, fui muito bem atendido. Com certeza voltaria para fazer outra tatuagem."</p>
                        <div className="mt-auto border-t border-zinc-800 pt-4">
                            <h3 className="font-semibold text-white">Cliente exemplo</h3>
                            <span className="text-xs text-zinc-500">Avaliação demonstrativa</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
                        <div className="flex gap-1 text-yellow-500">
                            {[...Array(5)].map((valor, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-sm leading-7 text-zinc-300 lg:text-base">"Muito profissional e cuidadoso em cada detalhe.A tatuagem ficou exatamente como eu imaginava.Experiência excelente!"</p>
                        <div className="mt-auto border-t border-zinc-800 pt-4">
                            <h3 className="font-semibold text-white">Cliente exemplo</h3>
                            <span className="text-xs text-zinc-500">Avaliação demonstrativa</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 rounded-xl border border-zinc-800 bg-zinc-950 p-6">
                        <div className="flex gap-1 text-yellow-500">
                            {[...Array(5)].map((valor, i) => (
                                <Star key={i} size={18} fill="currentColor" />
                            ))}
                        </div>
                        <p className="text-sm leading-7 text-zinc-300 lg:text-base">"Ambiente agradável, atendimento atencioso e um trabalho impecável. Superou minhas expectativas!"</p>
                        <div className="mt-auto border-t border-zinc-800 pt-4">
                            <h3 className="font-semibold text-white">Cliente exemplo</h3>
                            <span className="text-xs text-zinc-500">Avaliação demonstrativa</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Avaliacao