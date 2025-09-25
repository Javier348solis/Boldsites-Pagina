import '../../Styles/servicios.css';
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";

export default function ServicesSection() {
  const services = [
    {
      title: "Diseño UI/UX Innovador",
      description:
        "Creamos interfaces visuales atractivas y experiencias de usuario intuitivas que enganchan a tus visitantes desde el primer clic.",
    },
    {
      title: "Desarrollo de Páginas Web Personalizadas",
      description:
        "Construimos sitios modernos, rápidos y adaptables, desde landing pages hasta e-commerce robustos, optimizados para tu éxito online.",
    },
    {
      title: "Optimización SEO Avanzada",
      description:
        "Aumentamos tu ranking en Google con estrategias de SEO de última generación, atrayendo tráfico orgánico y clientes potenciales.",
    },
    {
      title: "Hosting y Rendimiento Optimizado",
      description:
        "Ofrecemos alojamiento de alta velocidad con soporte 24/7, asegurando que tu sitio siempre esté disponible y cargue en segundos.",
    },
    {
      title: "Integraciones y Automatización Inteligente",
      description:
        "Conectamos tu sitio con herramientas como pagos en línea, CRM y redes sociales, automatizando procesos para maximizar tu eficiencia.",
    },
    {
      title: "Mantenimiento y Soporte Proactivo",
      description:
        "Mantenemos tu sitio actualizado, seguro y en perfectas condiciones con soporte continuo y mejoras personalizadas.",
    },
  ];

  return (
    <div>
     <Navbar/>
    <section className="services-section">
      <h2 className="services-title">Nuestros Servicios de Elite</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
}