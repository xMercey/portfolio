import { AboutMePage } from "../sections/AboutMeSection";
import { CollaborationSection } from "../sections/CollaborationSection";
import { ContactSection } from "../sections/ContactSection";
import { ProjectsPage } from "../sections/ProjectsSection";

export function LandingPage() {
  return (
    <>
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-main">

            <div className="hero-left">
              <h1>Lara</h1>
              <h1>Helmli</h1>
              <p className="hero-role">Webentwicklung</p>
            </div>

            <div className="hero-center">
            <img src="/ich2.jpg" alt="Lara Helmli" className="hero-image" />
            
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">Projekte ansehen</a>
              <a href="#contact" className="btn btn-primary-light">Kontakt</a>
            </div>
          </div>

            <div className="hero-right">
              <p className="hero-subtitle">Medieninformatik (B.Sc.)</p>
              <p className="hero-description">
                Studentin an der BHT Berlin mit Fokus auf Frontend und moderne Webanwendungen.
              </p>
            </div>

          </div>
        </div>
      </section>
      
        <hr/>
        <AboutMePage/>
        <hr/>
        <ProjectsPage />
        <hr/>
        <CollaborationSection/>
        <hr/>
        <ContactSection/>
      </div>
    </>
  );
}