import { useEffect, useState } from "react";
import { Target, ListChecks, MountainSnow } from "lucide-react";
import landing from "../assets/finecash/landing.png";
import donutchart from "../assets/finecash/donutchart.png";
import uebersicht from "../assets/finecash/uebersicht.png"
import transaktion from "../assets/finecash/transaktion.png";
import transaktion2 from "../assets/finecash/transaktion2.png";
import transaktionanzeige from "../assets/finecash/transaktionanzeige.png"
import transaktionuebersicht from "../assets/finecash/transaktionuebersicht.png"
import belege from "../assets/finecash/belegupload.png";
import haushalt from "../assets/finecash/haushalt.png";


const screenshots = [
  landing,
  donutchart,
  uebersicht,
  transaktion,
  transaktion2,
  transaktionanzeige,
  transaktionuebersicht,
  belege,
  haushalt
];

const titles = [
  "Landing Page",
  "Finanzübersicht (Donut-Chart)",
  "Dashboard Übersicht",
  "Transaktion erstellen",
  "Übertrag zu Haushalt",
  "Transaktionanzeige",
  "Transaktionsübersicht",
  "Beleg hochladen",
  "Haushaltsverwaltung"
];


export function FinecashPage() {
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
            <h1>Finecash</h1>
            <p>
            Viele bestehende Finanz-Tools sind entweder unübersichtlich oder nicht für gemeinsame Haushalte geeignet.
            Mit Finecash haben wir eine Webanwendung entwickelt, die eine klare Struktur und eine einfache Verwaltung von Einnahmen, Ausgaben und Haushalten bietet.
            </p>

            <div className="project-tech">
              <div>
                <span>Tech</span>
                <p>React · TypeScript · Vite · RestAPI · MongoDB · Tailwind</p>
              </div>
            </div>

            <div className="links">
              <a href="https://www.finecash.de" target="_blank" rel="noreferrer" className="btn btn-primary">Live Website</a>
              <a href="https://gitlab.bht-berlin.de/finecash" target="_blank" rel="noreferrer" className="btn btn-secondary">Web Code (React)</a>
              <a href="https://gitlab.bht-berlin.de/ios_abschlussprojekt/frontend" target="_blank" rel="noreferrer" className="btn btn-secondary">iOS App Code (Swift)</a>
            </div>
          </div>

          <div className="project-media">
            <div className="slider-container">
              <div className="slider-frame">
              <img
                key={current}
                src={screenshots[current]}
                alt={`Screenshot ${current + 1}`}
                className="slider-image"
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
            <li>Persönliche und gemeinsame Finanzen verwalten</li>
            <li>Übersichtliche Darstellung von Einnahmen und Ausgaben</li>
            <li>Automatisierte Kategorisierung von Belegen per OCR und KI</li>
          </ul>
        </div>

        <div className="card">
        <ListChecks className="card-icon" />
          <h3>Meine Aufgaben</h3>
          <ul>
            <li>Dashboard-UI entwickeln</li>
            <li>API für Einnahmen, Ausgaben und Haushalte eingebunden</li>
            <li>Fehlerbehandlung im Frontend umgesetzt</li>
            <li>Arbeit an Backend-Logik und API-Endpunkten</li>
          </ul>
        </div>

        <div className="card">
        <MountainSnow className="card-icon" />
          <h3>Zentrale Herausforderungen</h3>
          <ul>
            <li>OCR-Belege korrekt auslesen und automatisch kategorisieren</li>
            <li>Gemeinsame Haushalte synchron zu halten</li>
            <li>Dashboards trotz vieler Daten flüssig halten</li>
            <li>Responsives Layout für Desktop und Mobile</li>
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