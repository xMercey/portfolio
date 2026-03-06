


// ProjectsGallery.tsx
const projects = [
  {
    title: "FineCash",
    description:
      "FineCash ist eine moderne Webanwendung, die es Nutzern ermöglicht, ihre Finanzen einfach zu verwalten. Sie bietet eine übersichtliche Darstellung von Einnahmen, Ausgaben und Budgets, damit man jederzeit den Überblick behält.",
    tech: ["React", "TypeScript", "Rest", "TailwindCSS"],
    link: "/finecash",
    image:"src/assets/finecash/logo.png",
  },
  {
    title: "Projekt 2",
    description:
      "Noch ein cooles Projekt, das deine Skills zeigt.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://gitlab.bht-berlin.de/finecash",
    image: "/images/projekt2.png",
  },
  {
    title: "Projekt 3",
    description:
      "Beschreibe hier ein persönliches oder Lernprojekt.",
    tech: ["Node.js", "REST API"],
    link: "#",
    image: "/images/projekt3.png",
  },
  {
    title: "Projekt 4",
    description:
      "Ein weiteres spannendes Projekt, um deine Fähigkeiten zu zeigen.",
    tech: ["React", "GraphQL", "Apollo"],
    link: "#",
    image: "/images/projekt4.png",
  },
  {
    title: "Projekt 5",
    description:
      "Kleines Experiment oder Lernprojekt, das du umgesetzt hast.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    image: "/images/projekt5.png",
  },
  {
    title: "Projekt 6",
    description:
      "Dein bisher größtes Projekt oder Praxisbeispiel.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "#",
    image: "/images/projekt6.png",
  },
];

export function ProjectsPage() {
  return (
    <>
      <section className="section" id="projects">
        <h1>Meine Projekte</h1>
        <p>Klicke auf ein Projekt, um es direkt anzusehen.</p>

        <div className="gallery-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className="gallery-card"
              onClick={() => window.location.href =project.link}
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
              <p className="gallery-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t) => (
                  <span key={t} className="tech">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}