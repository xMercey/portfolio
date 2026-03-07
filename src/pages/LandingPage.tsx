
import { ProjectsPage } from "./ProjectsPage";


export function LandingPage() {
  return (
    <div className="page">

      <section className="hero">

        <div className="hero-left">

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

        <div className="hero-right">
          <img src="/ich.jpg" alt="Lara Helmli" className="hero-image" />
        </div>

      </section>

      
      <ProjectsPage/>
    
     

    </div>
  );
}