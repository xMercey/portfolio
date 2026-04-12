import { ListChecks, Target, Sparkle } from "lucide-react";
import mern_product from "../assets/mern_product/mern_product.jpg"



export function Product_mern() {

  return (
    <div className="page">

      <section>
        <div className="project-layout">

          <div className="project-info">
            <span className="project-tag">Projektübersicht</span>
            <h1>MERN Product</h1>
            <p>
            Einfache Full-Stack-Anwendung zur Verwaltung von Produkten. 
            Produkte können erstellt, bearbeitet und gelöscht werden. 
            Zusätzlich gibt es eine Suche, Filterfunktionen sowie eine Favoriten- und Warenkorbansicht.
            </p>

            <div className="project-tech">
              <div>
                <span>Tech</span>
                <p>React, Node.js, Express, MongoDB, Chakra UI</p>
              </div>
            </div>

            <div className="links">
              <a href="https://mernproduct-bay.vercel.app" target="_blank" rel="noreferrer" className="btn btn-primary">Live Demo</a>
              <a href="https://github.com/xMercey/mern_product" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Code</a>
            </div>
          </div>

          <div className="project-media">
            <div className="project-preview">

              <div className="project-preview-image">
              <a 
                href="https://mernproduct-bay.vercel.app" 
              >
                <img
                  src={mern_product}
                  alt="Color Palette Generator"
                />
              </a>
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
              <li>Full-Stack-Anwendung zur Produktverwaltung umsetzen</li>
              <li>CRUD-Funktionalität</li>
              <li>Suche und Filterung von Produkten</li>
            </ul>
            </div>

            <div className="card">
            <ListChecks className="card-icon" />
            <h3>Was ich gelernt habe</h3>
            <ul>
              <li>Arbeiten mit Chakra UI</li>
              <li>Aufbau und Anbindung einer MongoDB-Datenbank</li>
              <li>API-Routen zur Verarbeitung von Daten umgesetzt</li>
              <li>Deployment von Frontend und Backend</li>
            </ul>
            </div>

            <div className="card">
            <Sparkle className="card-icon" />
            <h3>Besonderheiten</h3>
            <ul>
              <li>Favoriten- und Warenkorb-Funktion integriert</li>
              <li>Kombination aus Such- und Filterfunktionen</li>
              <li>Direkte Rückmeldungen im UI (z. B. Toasts)</li>
            </ul>
            </div>
        </div>
        </section>
    </div>
  );
}