import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

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
      <Footer/>
    </>
  );
} 

export default App;
