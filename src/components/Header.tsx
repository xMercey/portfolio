import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';


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
      </div>

      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <Link smooth to="/#">Start</Link>
        <Link to="/#about">Fokus</Link>
        <Link to="/#projects">Projekte</Link>
<       Link to="/#contact">Kontakt</Link>
        <button 
        className={`mode-toggle ${isOpen ? "rotate" : ""}`} onClick={() => {toggleDarkMode()}}>
        {darkMode ? <svg className="sun" xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" 
        strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg> : 
        <svg className="moon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" 
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>}
      </button>
      </nav>

    </header>
  );
}