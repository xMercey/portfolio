export function AboutMePage() {
    const techStack = [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "Vite",
    ];
  
    return (
      <>
        {/* Über mich */}
        <section className="section" id="about">
          <h1>Über mich</h1>
  
          <p className="about-text">
            Ich bin Lara Helmli und studiere Medieninformatik an der
            Beuth Hochschule für Technik in Berlin. Besonders interessiere
            ich mich für Frontend-Entwicklung und moderne Webtechnologien.
            In meinen Projekten arbeite ich häufig mit React, TypeScript
            und Next.js und entwickle benutzerfreundliche Interfaces.
          </p>
  
          <p className="about-text">
            Neben dem Studium arbeite ich gerne an eigenen Projekten,
            um neue Technologien auszuprobieren und meine Fähigkeiten
            weiterzuentwickeln.
          </p>
        </section>
  
        {/* Tech Stack */}
        <section className="section" id="tech">
  
          <div className="tech-stack">
            {techStack.map((tech) => (
              <span key={tech} className="tech2">
                {tech}
              </span>
            ))}
          </div>
        </section>
  
        {/* Werdegang */}
        <section className="section" id="career">
          <h2>Werdegang</h2>
  
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-year">2023 – heute</span>
              <p>Studium Medieninformatik – BHT Berlin</p>
            </div>
  
            <div className="timeline-item">
              <span className="timeline-year">2022</span>
              <p>Abitur</p>
            </div>
  
            <div className="timeline-item">
              <span className="timeline-year">2021</span>
              <p>Erste Webprojekte mit HTML, CSS und JavaScript</p>
            </div>
          </div>
        </section>
      </>
    );
  }