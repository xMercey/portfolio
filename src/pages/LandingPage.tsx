import { AboutMePage } from "./AboutMePage";
import { ProjectsPage } from "./ProjectsPage";

export function LandingPage() {
  return (
    <>
      <section className="hero">
        <img src="/ich3.png" alt="Lara Helmli" className="hero-image" />

        <div className="hero-content">
          <h1>
            Hi, ich bin <span>Lara</span>
          </h1>

          <p className="hero-subtitle">
            Medieninformatik Studentin an der BHT Berlin mit Fokus auf
            Frontend-Entwicklung und modernen Webanwendungen.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Projekte ansehen
            </a>
            <a href="#about" className="btn btn-secondary">
              Über mich
            </a>
          </div>
        </div>
      </section>

      <div className="page">
        <AboutMePage/>
        <ProjectsPage />
      </div>
    </>
  );
}