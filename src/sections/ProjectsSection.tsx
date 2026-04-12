import finecashLogo from "../assets/finecash/logo.png";
import figmaLogo from "../assets/figma/logodark.jpg";
import paletteImg from "../assets/colorpalette/paletteImg.jpeg";
import mernProductImg from "../assets/mern_product/mern_product.jpg";

const projects = [
  {
    title: "FineCash",
    description: "Finanz-Dashboard zur Verwaltung von Einnahmen und Ausgaben und zur besseren Übersicht über persönliche Finanzen.",
    highlight: "Automatische Belegerkennung mit OCR",
    tags: ["Dashboard", "Datenvisualisierung", "API Integration"],
    link: "/finecash",
    image: finecashLogo,
  },
  {
    title: "Campus Navigator App",
    description: "Konzept und Design einer App, die Studierenden mithilfe von AR die Orientierung auf dem Campus erleichtert.",
    highlight: "UX-Konzept mit Fokus auf Navigation und Orientierung",
    tags: ["App Development", "Augmented Reality", "UX/UI"],
    link: "/figmaapp",
    image: figmaLogo,
  },
  {
    title: "Color Palette Generator",
    description: "Tool, das aus Bildern automatisch Farbpaletten erstellt und Kontraste auf Lesbarkeit überprüft.",
    highlight: "Fokus auf Farbkontraste und einfache Nutzbarkeit",
    tags: ["JavaScript", "Color Extraction", "WCAG"],
    link: "/colorpalette",
    image: paletteImg,
  },
  {
    title: "MERN Product",
    description: "Full-Stack-Anwendung zur Verwaltung von Produkten mit Such- und Filterfunktionen.",
    highlight: "CRUD-App mit API-Anbindung und UI-Feedback",
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