import finecashLogo from "../assets/finecash/logo.png";
import figmaLogo from "../assets/figma/logodark.jpg";
import paletteImg from "../assets/colorpalette/paletteImg.jpeg";
import mernProductImg from "../assets/mern_product/mern_product.jpg";

const projects = [
  {
    title: "FineCash",
    description: "Finanz-Dashboard zur Verwaltung von Einnahmen und Ausgaben. Es hilft dabei, den Überblick über die eigenen Finanzen zu behalten.",
    highlight: "OCR & KI zur automatischen Belegerkennung",
    tags: ["Dashboard", "Datenvisualisierung", "API Integration"],
    link: "/finecash",
    image: finecashLogo,
  },
  {
    title: "Campus Navigator App",
    description: "Konzept und Design einer App für unsere Hochschule, die mithilfe von Augmented Reality die Orientierung auf dem Campus erleichtern soll.",
    highlight: "Praxisprojekt mit Fokus auf AR-Integration und Nutzerführung",
    tags: ["App Development", "Augmented Reality", "UX/UI"],
    link: "/figmaapp",
    image: figmaLogo,
  },
  {
    title: "Color Palette Generator",
    description: "Webanwendung, die aus hochgeladenen Bildern automatisch eine Farbpalette erstellt und zusätzlich Kontraste prüft.",
    highlight: "Fokus auf Farbanalyse und Barrierefreiheit",
    tags: ["JavaScript", "Color Extraction", "WCAG"],
    link: "/colorpalette",
    image: paletteImg,
  },
  {
    title: "MERN Product",
    description: "Full-Stack Webanwendung zur Verwaltung von Produkten mit CRUD-Funktionen sowie integrierter Such- und Filterlogik.",
    highlight: "Produktverwaltung mit Favoriten und Warenkorb-Anzeige",
    tags: ["CRUD", "REST API", "Filterfunktion"],
    link: "/mern-products",
    image: mernProductImg,
  }
];

export function ProjectsPage() {
  return (
    <>
      <section id="projects">
        <h2>Meine Projekte</h2> 
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div
              key={project.title + index}
              className="card"
              onClick={() => (window.location.href = project.link)}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="gallery-image"
                />
              )}

              <div className="gallery-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>


                  {project.highlight && (
                    <p className="highlight">
                      <strong>Highlight:</strong> {project.highlight}
                    </p>
                  )}

                <div className="tags-container">
                  {project.tags.map((t) => (
                    <span key={t} className="tags">{t}</span>
                  ))}
                </div>

                <div className="arrow-container">
                  Projekt ansehen <span className="arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}