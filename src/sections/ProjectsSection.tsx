

const projects = [
  {
    title: "FineCash",
    description: "Finanz-Dashboard zur Verwaltung von Einnahmen und Ausgaben.",
    highlight: "OCR & KI zur automatischen Belegerkennung",
    tags: ["Dashboard", "Datenvisualisierung", "API Integration"],
    link: "/finecash",
    image: "src/assets/finecash/logo.png",
  },
  {
    title: "Campus Navigator App",
    description: "Konzept und Design einer App für unsere Hochschule, die mithilfe von Augmented Reality die Orientierung auf dem Campus erleichtern soll.",
    highlight: "Praxisprojekt mit Fokus auf AR-Integration und Nutzerführung",
    tags: ["App Development", "Augmented Reality", "UX/UI"],
    link: "/figmaapp",
    image: "src/assets/figma/figmadark.jpg",
  }
];

export function ProjectsPage() {
  return (
    <>
      <h2 id="projects">Meine Projekte</h2>

      <section>
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