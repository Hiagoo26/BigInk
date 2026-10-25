import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/header";
import SideBar from "./components/sideBar";

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
      
    </>
  );
}

export default App;
