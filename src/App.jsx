import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Home from "./pages/Home/Home";

function App() {

  
  const[sideBarAberta, setSideBarAberta] = useState(false);

  return (
    <> 
      <Header abrirSideBar={() => setSideBarAberta(true)}/>
      <AnimatePresence>
        {sideBarAberta && (
          <SideBar fecharSideBar={() => setSideBarAberta(false)} />
        )}
      </AnimatePresence>
      <Home/>
      <section className="flex flex-col p-6 bg-zinc-900 lg:p-16">
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
      </section>
    </>
  );
} 

export default App;
