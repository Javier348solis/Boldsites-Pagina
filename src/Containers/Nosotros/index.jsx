import React from 'react';
import '../../Styles/nosotros.css';
import foto1 from "../../assets/photo_naomy.jpg";
import foto2 from "../../assets/photo_Javier_white.jpg"
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";

const Nosotros = () => {
  return (
    <div>
        <Navbar/>
    <section className="nosotros">
      <div className="container">
        <h2 className="section-title">Sobre Boldsites</h2>
        <p className="section-subtitle">
          En Boldsites, transformamos tus ideas en experiencias digitales impactantes. Somos un equipo joven y dinámico de desarrolladores full-stack, expertos en crear sitios web modernos, rápidos y personalizados que impulsan tu presencia online. Con un enfoque en la innovación y la calidad, utilizamos tecnologías de vanguardia como Python con Django, JavaScript con React y Node.js para construir soluciones robustas que se adaptan a las necesidades de tu negocio.
        </p>
        <p className="section-description">
          Nuestra pasión por la tecnología nos impulsa a estar siempre un paso adelante, ofreciendo diseños intuitivos y funcionales que no solo cumplen, sino que superan las expectativas. Ya sea que necesites una página web corporativa, una tienda en línea o una aplicación web a medida, en Boldsites trabajamos contigo para hacer realidad tu visión con resultados que destacan en un mundo digital competitivo.
        </p>
        <div className="fundadores">
          <div className="persona">
            <img src={foto2} alt="Javier Solís" />
            <p>Javier Solís<br /><span className="role">Desarrollador Full-Stack</span></p>
            <p className="bio">Apasionado por resolver problemas complejos con código limpio y eficiente. Experto en backend con Django y Node.js, Javier asegura que cada proyecto sea escalable y seguro.</p>
          </div>
          <div className="persona">
            <img src={foto1} alt="Naomy Sandi" />
            <p>Naomy Sandi<br /><span className="role">Desarrollador Full-Stack</span></p>
            <p className="bio">Especialista en interfaces dinámicas con React, Naomy combina creatividad y precisión técnica para crear experiencias de usuario fluidas y atractivas.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Nosotros;