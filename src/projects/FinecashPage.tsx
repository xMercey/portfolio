import { useState } from "react";

const screenshots = [
  "https://picsum.photos/300/600",
  "https://picsum.photos/301/600",
  "https://picsum.photos/302/600",
];

export function FinecashPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="page finecash-page">
      {/* Header */}
      <section className="section project-header">
        <h1>Finecash</h1>

        <p className="description">
          Finecash ist eine Plattform zur Verwaltung und Analyse von Finanzdaten.
          Die Anwendung bietet eine moderne Weboberfläche zur Darstellung und
          Verwaltung von Finanzinformationen.
        </p>

        <div className="links">
          <a
            href="https://www.finecash.de"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Website
          </a>

          <a
            href="https://gitlab.bht-berlin.de/finecash"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitLab Repo
          </a>

          <a
            href="https://gitlab.bht-berlin.de/finecash/app"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            App Code
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section finecash-content">
        {/* TEXT LINKS */}
        <div className="tasks-summary">
          <h2>Meine Aufgaben</h2>

          <p>
            <strong>Landingpage Design</strong> mit Fokus auf moderne UX und
            responsive Layouts.
          </p>

          <p>
            <strong>Technisches Setup</strong> mit React, TypeScript und Vite.
          </p>

          <p>
            <strong>Performance & SEO</strong> Optimierungen.
          </p>
        </div>

        {/* SLIDER RECHTS */}
        <div className="slider-right">
          <div className="phone-frame">
            <img src={screenshots[current]} alt={`Screenshot ${current + 1}`} />
          </div>

          <div className="slider-controls">
            <button onClick={prev}>‹</button>

            <div className="dots">
              {screenshots.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${current === index ? "active" : ""}`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>

            <button onClick={next}>›</button>
          </div>
        </div>
      </section>
    </div>
  );
}