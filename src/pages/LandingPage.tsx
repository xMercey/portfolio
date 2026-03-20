import { AboutMePage } from "../sections/AboutMeSection";
import { CollaborationSection } from "../sections/CollaborationSection";
import { ProjectsPage } from "../sections/ProjectsSection";

export function LandingPage() {
  return (
    <>
    
      <section className="hero">
      <div className="hero-content">
  <div className="hero-main">
    <h1>Lara</h1>
    <img src="/ich5.jpg" alt="Lara Helmli" className="hero-image" />
    <h1>Helmli</h1>
    <p className="hero-subtitle">
    Medieninformatik Studentin an der BHT Berlin mit Fokus auf
    Frontend-Entwicklung und modernen Webanwendungen.
  </p>
    <div className="hero-actions">
    <a href="#projects" className="btn btn-primary">
      Projekte ansehen
    </a>
    <a href="#about" className="btn btn-secondary">
      Kontakt
    </a>
  </div>
  </div>
</div>
      </section>
      <div className="page">
        <hr/>
        <AboutMePage/>
        <hr/>
        <ProjectsPage />
        <hr/>
        <CollaborationSection/>
        <hr/>
      </div>
    </>
  );
}