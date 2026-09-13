import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="site-container contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">
            <span>06</span>
            Contact
          </p>
          <h2 id="contact-title" className="contact-title">
            Let&apos;s build something useful.
          </h2>
          <p>
            I&apos;m open to Flutter Developer, Mobile Software Engineer, and product-focused
            mobile opportunities—including remote roles and selected freelance work.
          </p>
          <p>
            If you&apos;re hiring for a mobile engineering role or need help building or improving
            a Flutter application, feel free to reach out.
          </p>
        </div>

        <div className="contact-actions">
          <p className="contact-availability">
            <span aria-hidden="true" />
            Open to remote and relocation opportunities
          </p>

          <a className="contact-email" href={contact.email.href}>
            <span>Email Me</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-resume"
            href={contact.resume}
            download="Muhammad_Ahmad_Resume.pdf"
            aria-label="Download Muhammad Ahmad's Resume (PDF)"
          >
            Download Resume
            <span aria-hidden="true">↓</span>
          </a>

          <nav className="contact-social" aria-label="Professional profiles">
            {contact.social.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
