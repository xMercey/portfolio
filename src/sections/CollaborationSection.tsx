export function CollaborationSection() {
    const points = [
      {
        title: "Schnelle Auffassungsgabe",
        text: "Ich arbeite mich schnell in neue Themen ein und finde mich auch in bestehende Projekte gut ein."
      },
      {
        title: "Strukturiertes Arbeiten",
        text: "Komplexe Aufgaben teile ich in klare, umsetzbare Schritte auf, so bleibt alles übersichtlich"
      },
      {
        title: "Zuverlässige Kommunikation",
        text: "Ich stimme mich regelmäßig ab, stelle Fragen und halte den aktuellen Stand fest."
      },
      {
        title: "Design & Technik kombiniert",
        text: "Ich arbeite sowohl gerne an der Gestaltung als auch an der technischen Umsetzung."
      }
    ];
  
    return (
      <section className="collaboration">
        <h2>Warum mit mir zusammenarbeiten?</h2>
        <p className="subtitle">
          Das können Sie erwarten, wenn ich in Ihr Team komme.
        </p>
          <div className="collab-container">
          {points.map((point) => (
            <div key={point.title}>
              <div className="collaboration-item">
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
            </div>
          ))}
        </div>
      </section>
    );
  }