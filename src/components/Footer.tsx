export function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <h3 className="footer-name">Lara Helmli</h3>
      </div>

      <div className="footer-contact">
        <div className="footer-item">
          <span>E-Mail</span>
          <a href="mailto:lara.helmli@gmx.net">lara.helmli@gmx.net</a>
        </div>

        <div className="footer-item">
          <span>Telefon</span>
          <a href="tel:+4915757059860">+49 157 57059860</a>
        </div>
      </div>
      <p className="footer-copy">
          © {new Date().getFullYear()} Alle Rechte vorbehalten
      </p>
    </footer>
  );
}