import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import ServicesPage from "./pages/ServicesPage";
import Portafoliopage from "./pages/Portafoliopage";
import Nosotros from "./components/Nosotros"
import Paginacontact from "./pages/Paginacontact";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/portafolio" element={<Portafoliopage />} />
        
          <Route path="/contacto" element={<Paginacontact />} />
           <Route path="/Nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
