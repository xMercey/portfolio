import colorImg from "../assets/colorpalette/colorImg.jpeg";
import { Target, Sparkle, ListChecks } from "lucide-react";

export function ColorPalettePage() {

  return (
    <div className="page">

      <section className="header-slider">
        <div className="project-layout">

          <div className="project-info">
            <span className="project-tag">Projektübersicht</span>
            <h1>Color Palette Generator</h1>
            <p>
            Oft ist es gar nicht so einfach, passende Farben aus einem 
            Bild zu übernehmen oder zu prüfen, ob sie gut zusammenpassen. 
            Die Anwendung erstellt automatisch Farbpaletten aus Bildern und 
            hilft dabei, Farbkontraste direkt zu überprüfen.
            </p>

            <div className="project-tech">
              <div>
                <span>Tech</span>
                <p>HTML · CSS · Javascript</p>
              </div>
            </div>

            <div className="links">
              <a href="https://upload-color-generator.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Website</a>
              <a href="https://github.com/xMercey/upload-color-generator" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub Code</a>
            </div>
          </div>

          <div className="project-media">
            <div className="project-preview">

              <div className="project-preview-image">
              <a 
                href="https://upload-color-generator.vercel.app/" 
              >
                <img
                  src={colorImg}
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
              <li>Farben aus Bildern automatisch auslesen</li>
              <li>Farbpaletten für Designs erstellen</li>
              <li>Prüfen, ob Farbkontraste gut lesbar sind</li>
            </ul>
          </div>

          <div className="card">
            <ListChecks className="card-icon" />
            <h3>Was ich gelernt habe</h3>
            <ul>
              <li>Umsetzung interaktiver Funktionen mit JavaScript</li>
              <li>Arbeiten mit dem HTML-Canvas</li>
              <li>Umgang mit Farbwerten und Kontrasten</li>
              <li>UI-Interaktionen umgesetzt</li>
            </ul>
            </div>

          <div className="card">
            <Sparkle className="card-icon" />
            <h3>Besonderheiten</h3>
            <ul>
              <li>Erstellt aus einem Bild automatisch mehrere Farbtöne</li>
              <li>Zeigt Hex- und RGB-Werte direkt an</li>
              <li>Prüft Kontraste für Text und Hintergrund</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}