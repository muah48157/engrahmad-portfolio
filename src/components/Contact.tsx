"use client";

import { contact } from "@/data/contact";
import { trackEvent } from "@/lib/analytics";

export default function Contact() {
  const handleSocialClick = (label: string) => {
    if (label.toLowerCase().includes("linkedin")) {
      trackEvent("linkedin_click", { location: "contact" });
    } else if (label.toLowerCase().includes("github")) {
      trackEvent("github_click", { location: "contact" });
    }
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="site-container contact-layout">
        <div className="contact-copy">
          <p className="section-kicker">
            <span>09</span>
            Contact
          </p>
          <h2 id="contact-title" className="contact-title">
            Let&apos;s build something reliable.
          </h2>
          <p>
            I am open to Flutter Developer, Mobile Software Engineer, and cross-platform
            product engineering roles—including remote opportunities worldwide and selected
            technical collaborations.
          </p>
          <p>
            If you are hiring for a mobile engineering role or need architecture, payment,
            map, or store deployment expertise for a production Flutter application, feel free
            to reach out.
          </p>
        </div>

        <div className="contact-actions">
          <p className="contact-availability">
            <span aria-hidden="true" />
            Open to remote opportunities worldwide
          </p>

          <a
            className="contact-email"
            href={contact.email.href}
            onClick={() => trackEvent("email_click", { location: "contact" })}
          >
            <span>Email Me</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="contact-resume-group">
            <a
              className="contact-resume"
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("resume_download", { mode: "view", location: "contact" })
              }
            >
              <span>View Resume</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-resume contact-resume--download"
              href={contact.resume}
              download="Muhammad_Ahmad_Resume.pdf"
              aria-label="Download Muhammad Ahmad's Resume (PDF)"
              onClick={() =>
                trackEvent("resume_download", { mode: "download", location: "contact" })
              }
            >
              <span>Download PDF</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <nav className="contact-social" aria-label="Professional profiles">
            {contact.social.map((link) => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick(link.label)}
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
