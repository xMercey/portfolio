import { useState } from "react";


const screenshots = [
  "/me.jpeg",
  "/assets/finecash/2.jpg",
  "/assets/finecash/3.jpg",
];

export function FinecashPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="page finecash-page">

      <section className="section header-links">
        <h1>Finecash Website</h1>
        <div className="links">
          <a href="https://www.finecash.de" target="_blank" rel="noreferrer" className="btn btn-primary">
            Website besuchen
          </a>
          <a href="https://gitlab.bht-berlin.de/finecash" target="_blank" rel="noreferrer" className="btn btn-secondary">
            GitLab Repo
          </a>
        </div>
      </section>

      <section className="section finecash-content">
        {/* Linke Spalte */}
        <div className="text-left">
          <h2>Was ich gemacht habe</h2>
          <div className="tasks">
            <div className="task-box">Design & Implementierung der Landingpage</div>
            <div className="task-box">Setup mit React, TypeScript und Vite</div>
            <div className="task-box">Performance Optimierung & SEO</div>
          </div>
        </div>

        {/* Rechte Spalte: Handy-Slider */}
        <div className="slider-right">
          <div className="phone-frame">
            <img src={screenshots[current]} alt={`Screenshot ${current + 1}`} />
          </div>
          <div className="slider-controls">
            <button onClick={prev}>←</button>
            <span>{current + 1} / {screenshots.length}</span>
            <button onClick={next}>→</button>
          </div>
        </div>
      </section>

    </div>
  );
}