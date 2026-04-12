import { useEffect, useState } from "react";
import start from "../assets/figma/Start.png";
import sozial from "../assets/figma/Sozial.png";
import karte from "../assets/figma/Karte.png";
import kartear from "../assets/figma/Karte AR.png";
import kartear2 from "../assets/figma/Karte AR-1.png";
import essen from "../assets/figma/Essen-1.png";
import essen2 from "../assets/figma/Essen.png";
import { ListChecks, Target, Sparkle } from "lucide-react";


const screenshots = [
  start,
  sozial,
  karte,
  kartear,
  kartear2,
  essen,
  essen2
];


const titles = [
  "Startseite",
  "Community",
  "Karte",
  "Karte (AR)",
  "Karte (AR Navigation)",
  "Mensa & Restaurant",
  "Detailansicht",
];


export function FigmaPage() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (lightboxOpen) return; 
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screenshots.length);
    },5000);
  
    return () => clearInterval(interval);
  }, [lightboxOpen]);

  const next = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prev = () => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="page">

      <section className="header-slider">
        <div className="project-layout">

          <div className="project-info">
            <span className="project-tag">Projektübersicht</span>
            <h1>Campus Navigator</h1>
            <p>
            Gerade für neue Studierende ist es oft schwierig, sich auf dem Campus schnell zurechtzufinden. 
            Im Rahmen dieses Projekts haben wir eine App konzipiert, die eine einfache Orientierung ermöglicht 
            und durch eine AR-Idee bei der Navigation unterstützt.
            </p>

            <div className="project-tech">
              <div>
                <span>Tech</span>
                <p>Figma</p>
              </div>
            </div>

            <div className="links">
              <a href="https://www.figma.com/proto/mxOWnrWlf4EKjtpGhqSitX/Almila-BHT?page-id=316%3A2414&type=design&node-id=316-3820&viewport=1219%2C421%2C0.13&t=Ty7q4vyKxeRyD9TV-1&scaling=min-zoom&starting-point-node-id=316%3A3308" target="_blank" rel="noreferrer" className="btn btn-primary">Prototyp</a>
              <a href="https://www.figma.com/design/mxOWnrWlf4EKjtpGhqSitX/Almila-BHT?node-id=316-2414&t=4UOpY7FLArvd0iSx-1" target="_blank" rel="noreferrer" className="btn btn-secondary">Figma</a>
            </div>
          </div>

          <div className="project-media">
            <div className="slider-container">
              <div className="slider-frame">
              <img
                key={current}
                src={screenshots[current]}
                alt={`Screenshot ${current + 1}`}
                className="slider-image-zoom"
                onClick={() => setLightboxOpen(true)}
              />
              </div>
              <button className="slider-button prev" onClick={prev}>‹</button>
              <button className="slider-button next" onClick={next}>›</button>

              <div className="slider-dots">
                {screenshots.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === current ? "active" : ""}`}
                    onClick={() => setCurrent(idx)}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="card-container">
            <div className="card">
            <Target className="card-icon" />
            <h3>Projektziel</h3>
            <ul>
                <li>Orientierung auf dem Campus verbessern</li>
                <li>Wichtige Orte und Wege schnell auffindbar machen</li>
                <li>Einbindung einer AR-Idee zur intuitiven Weganzeige</li>
            </ul>
            </div>

            <div className="card">
            <ListChecks className="card-icon" />
            <h3>Meine Aufgaben</h3>
            <ul>
                <li>App-Struktur im Team mitentwickelt</li>
                <li>Wireframes und Screen-Designs in Figma erstellt</li>
                <li>Klickbaren Prototypen ausgearbeitet</li>
            </ul>
            </div>

            <div className="card">
            <Sparkle className="card-icon" />
            <h3>Besonderheiten</h3>
            <ul>
                <li>Fokus auf einfache Orientierung für neue Studierende</li>
                <li>AR-Navigation als Teil des Konzepts</li>
                <li>UI/UX-Projekt aus dem Hochschulkontext</li>
            </ul>
            </div>
        </div>
        </section>
            {lightboxOpen && (
            <div className="lightbox" onClick={() => setLightboxOpen(false)}>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>×</button>
                <img src={screenshots[current]} alt="Fullscreen" />
                <p>{titles[current]}</p>
                </div>
            </div>
            )}
    </div>
  );
}