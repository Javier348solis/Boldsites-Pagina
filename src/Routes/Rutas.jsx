import { Routes, Route } from "react-router-dom";
import Home from "../Containers/Home/index";
import Contacto from "../Containers/Contacto/index";
import Servicios from "../Containers/Servicios/index";
import Nosotros from "../../src/Containers/Nosotros/";
// 

export default function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
       <Route path="/servicios" element={<Servicios />} />
       <Route path="/Nosotros" element={<Nosotros />} />
     
      {/* <Route path="/portafolio" element={<Portafoliopage />} />
      <Route path="/contacto" element={<Paginacontact />} />
      <Route path="/nosotros" element={<Nosotros />} /> */}
    </Routes>
  );
}
