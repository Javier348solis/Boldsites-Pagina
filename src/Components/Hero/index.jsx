import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentText, setCurrentText] = useState('');
  const [isLight, setIsLight] = useState(false); // <- nuevo: tema detectado
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

  // ---------- DETECCIÓN TEMA (robusta) ----------
  useEffect(() => {
    // función que comprueba si hay modo claro
    const checkLight = () => {
      try {
        const htmlHas = typeof document !== 'undefined' && document.documentElement?.classList?.contains('light');
        const bodyHas = typeof document !== 'undefined' && document.body?.classList?.contains('light');
        const ls = localStorage.getItem('darkMode'); // "true" o "false" o null
        const lsIsLight = ls === 'false';
        const isLightNow = !!(htmlHas || bodyHas || lsIsLight);
        setIsLight(isLightNow);
      } catch (e) {
        // en caso de SSR o error, no romper
        setIsLight(false);
      }
    };

    // 1) check inicial
    checkLight();

    // 2) escuchar cambios de localStorage (toggle en otra pestaña o componente)
    const onStorage = (ev) => {
      if (ev.key === 'darkMode') checkLight();
    };
    window.addEventListener('storage', onStorage);

    // 3) observer para cambios de atributo class en <html> o <body>
    const observerCallback = (mutationsList) => {
      for (const m of mutationsList) {
        if (m.type === 'attributes' && (m.attributeName === 'class' || m.attributeName === 'className')) {
          checkLight();
        }
      }
    };
    const obs = new MutationObserver(observerCallback);
    if (document && document.documentElement) obs.observe(document.documentElement, { attributes: true });
    if (document && document.body) obs.observe(document.body, { attributes: true });

    // limpieza
    return () => {
      window.removeEventListener('storage', onStorage);
      obs.disconnect();
    };
  }, []);

  return (
    // aplicamos la clase force-light si detectamos modo claro
    <section className={`hero ${isLight ? 'force-light' : ''}`}>
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
