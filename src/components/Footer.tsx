import { contact } from "@/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container footer-layout">
        <div className="footer-identity">
          <a href="#main-content">Muhammad Ahmad</a>
          <p>Flutter Developer | Mobile Software Engineer</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {contact.social.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          <a href={contact.email.href}>Email</a>
        </nav>

        <div className="footer-meta">
          <a href={contact.portfolio.href}>{contact.portfolio.label}</a>
          <p>© {currentYear} Muhammad Ahmad</p>
          <p>Built with Next.js and TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
