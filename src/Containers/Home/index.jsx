import React from 'react';
import '../../Styles/home.css';
import Hero from "../../Components/Hero/index";
import Footer from "../../Components/Footer/index";
import Navbar from "../../Components/Navbar/index";
import Foto1 from "../../assets/photo_naomy.jpg";
import foto2 from "../../assets/photo_Javier_white.jpg"

function PaginaPrincipal() {
  return (
    <div className="pagina-principal">
      <Navbar/>
      <Hero />
      
      {/* Sección Bienvenida */}
      <header className="header">
        <div className="container">
          <h1 className="neon-title">Bienvenidos a Boldsites</h1>
          <p className="intro-text">
            Transformamos tus ideas en sitios web impactantes que capturan la esencia de tu marca. 
            Con tecnología de punta y un diseño innovador, elevamos tu presencia digital a otro nivel. 
            ¡Descubre cómo podemos hacer crecer tu negocio hoy!
          </p>
        </div>
      </header>

      {/* Servicios */}
      <section className="servicios">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones personalizadas para potenciar tu negocio en el mundo digital.
          </p>
          <ul>
            <li>
              Diseño de Páginas Web
              <span className="descripcion">Creamos sitios modernos, atractivos y funcionales con un enfoque en la experiencia del usuario.</span>
            </li>
            <li>
              Optimización SEO
              <span className="descripcion">Aumentamos tu visibilidad en motores de búsqueda con estrategias avanzadas.</span>
            </li>
            <li>
              Desarrollo Responsivo
              <span className="descripcion">Garantizamos que tu sitio se adapte perfectamente a cualquier dispositivo.</span>
            </li>
            <li>
              Asesoría y Soporte Técnico
              <span className="descripcion">Te acompañamos con soporte continuo para mantener tu web en óptimas condiciones.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sobre nosotros */}
    

      {/* Testimonios */}
      <section className="testimonios">
        <div className="container">
          <h2 className="section-title">Testimonios</h2>
          <p className="section-subtitle">
            Escucha lo que nuestros clientes dicen sobre nosotros.
          </p>
          <div className="testimonio-cards">
            <div className="testimonio-card">
              <img src="../src/assets/testimonio1.jpg" alt="Cliente 1" />
              <h3>María López</h3>
              <p className="testimonio-text">
                "Boldsites transformó mi negocio con un sitio increíble. ¡El soporte fue excepcional!"
              </p>
            </div>
            <div className="testimonio-card">
              <img src="../src/assets/testimonio2.jpg" alt="Cliente 2" />
              <h3>Juan Pérez</h3>
              <p className="testimonio-text">
                "Gracias a su SEO, mi tienda online duplicó sus ventas en meses. ¡Altamente recomendado!"
              </p>
            </div>
            <div className="testimonio-card">
              <img src="../src/assets/testimonio3.jpg" alt="Cliente 3" />
              <h3>Ana Gómez</h3>
              <p className="testimonio-text">
                "El diseño responsivo es perfecto. Mi sitio luce genial en todos los dispositivos."
              </p>
              
            </div>
            
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default PaginaPrincipal;