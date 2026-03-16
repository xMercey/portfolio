export function AboutMePage() {
  const cards = [
    {
      title: "Design",
      text: "Ausbildung als Gestaltungstechnischer Assistent, jetzt Medieninformatik-Studentin. Ich kombiniere Designverständnis mit technischer Umsetzung."
    },
    {
      title: "Frontend",
      text: "Ich interessiere mich für die Schnittstelle zwischen Design und Entwicklung. Also Interfaces gestalten und die Technik dahinter umsetzen."
    },
    {
      title: "Full Stack",
      text: "Neben Frontend interessiert mich auch Full Stack Entwicklung, um Anwendungen ganzheitlich zu verstehen, vom UI bis zur Backend-Logik."
    }
  ];

  return (
    <>
      <h2>Mein Fokus</h2>
      <p className="subtitle">Von der Gestaltung zur Entwicklung</p>
      <section id="about">
        <div className="container">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}