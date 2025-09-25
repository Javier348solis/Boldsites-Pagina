import "../../Styles/footer.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Boldsites – Todos los derechos reservados</p>
        <p>San José, Costa Rica</p>

        <div className="footer-socials">
          <a
            href="https://wa.me/50685526923"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/boldsites_CR/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/BoldsitesCR/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}