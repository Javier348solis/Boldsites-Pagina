import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const fullText = "Creamos sitios web que venden";
  const typingSpeed = 100;
  const blinkSpeed = 500;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, blinkSpeed);

    return () => {
      clearInterval(typeInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="particle" style={{ 
            '--delay': `${Math.random() * 10}s`,
            '--duration': `${5 + Math.random() * 10}s`,
            '--left': `${Math.random() * 100}%`,
            '--top': `${Math.random() * 100}%`
          }} />
        ))}
      </div>
      <div className="hero-content">
        <h1 className={isVisible ? 'fade-in-up neon-text' : ''}>
          {currentText}
          {cursorVisible && <span className="cursor">|</span>}
        </h1>
        <p className={isVisible ? 'fade-in-up delay-1 pulse-text' : ''}>
          En <span className="boldsites">Boldsites</span>, diseñamos páginas modernas, rápidas y optimizadas para SEO que impulsan tu negocio.
        </p>
        <a href="/contacto" className={`hero-button ${isVisible ? 'fade-in-up delay-2' : ''}`}>
          🚀 Solicita tu sitio web
        </a>
      </div>
    </section>
  );
}