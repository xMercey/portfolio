import { useState } from "react";


type HeaderProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({darkMode, toggleDarkMode}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <a href="/">Start</a>
        <a href="#about">Über mich</a>
        {/* <a href="#career">Werdegang</a> */}
        <a href="#projects">Projekte</a>
        <a href="#contact">Kontakt</a>
        <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "🌞" : "🌙"}
      </button>
      </nav>

    </header>
  );
}