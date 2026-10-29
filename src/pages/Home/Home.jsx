import Hero from "./components/Hero";
import Galeria from "./components/Galeria"

function Home() {
    return (
        <>
            <main>
                <Hero/>
                <section className="flex flex-col p-6 bg-zinc-950 lg:p-16">
                    <div className="lg:mb-10 lg:py-10">
                        <h2 className="border-b border-zinc-800 pb-6 tracking-wide uppercase font-title font-semibold text-5xl text-white lg:text-[10rem]">Sobre Nós</h2>
                        <p className="mt-4 text-left text-sm leading-7 text-zinc-400 lg:text-lg lg:leading-8">
                        A tatuagem vai muito além da tinta: é uma forma de expressão,
                        identidade e significado. Cada projeto é uma oportunidade de
                        transformar ideias em arte, respeitando a personalidade e a
                        história de cada pessoa.
                        </p>

                        <p className="mt-4 text-left text-sm leading-7 text-zinc-400 lg:text-lg lg:leading-8">
                        Meu objetivo é criar tatuagens únicas, com atenção aos detalhes,
                        dedicação em cada traço e cuidado em todas as etapas do processo,
                        desde a primeira conversa até o resultado final.
                        </p>

                        <p className="mt-6 border-l-2 border-zinc-500 pl-4 text-base font-medium text-white lg:text-xl">
                        Sua história merece ser representada de forma única.
                        </p>
                    </div>
                </section>
                <Galeria/>
            </main>
        </>
    )
};

export default Home;