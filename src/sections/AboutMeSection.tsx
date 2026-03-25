import { Palette, LayoutTemplate, Layers3 } from "lucide-react";

export function AboutMePage() {
  const cards = [
    {
      icon: Palette,
      title: "Design",
      text: "Ich habe eine Ausbildung als Gestaltungstechnische Assistentin gemacht und studiere jetzt Medieninformatik. Dadurch verbinde ich Design mit technischer Umsetzung."
    },
    {
      icon: LayoutTemplate,
      title: "Frontend",
      text: "Mich interessiert vor allem die Verbindung von Design und Entwicklung. Ich gestalte Interfaces und setze sie im Code um."
    },
    {
      icon: Layers3,
      title: "Full Stack",
      text: "Neben Frontend interessiert mich auch Full Stack Entwicklung, um besser zu verstehen, wie Anwendungen insgesamt funktionieren, vom UI bis zum Backend."
    }
  ];

  return (
    <>
      <h2 id="about">Mein Fokus</h2>
      <p className="subtitle">Von der Gestaltung zur Entwicklung</p>
      <section>
        <div className="card-container">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <card.icon className="card-icon"/>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}