export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Lara Helmli</span>
      <div className="footer-links">
        <a href="mailto:deine.mail@example.com">E-Mail</a>
        <a href="https://gitlab.bht-berlin.de/finecash" target="_blank" rel="noreferrer">
          GitLab
        </a>
      </div>
    </footer>
  )
}

