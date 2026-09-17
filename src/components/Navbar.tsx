"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { trackEvent } from "@/lib/analytics";

const navigation = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const main = document.querySelector<HTMLElement>("main");
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const wasMainInert = main?.inert ?? false;
    const focusableElements = Array.from(
      mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      ) ?? [],
    );

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (main) main.inert = true;

    focusableElements[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      if (main) main.inert = wasMainInert;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const closeMenuAndRestoreFocus = () => {
    setIsOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <>
      <header
        className={`site-header ${isScrolled || isOpen ? "site-header--active" : ""}`}
      >
        <nav className="site-container navbar" aria-label="Primary navigation">
          <Link
            className="brand"
            href="/#main-content"
            tabIndex={isOpen ? -1 : undefined}
            onClick={closeMenu}
          >
            <span className="brand-mark" aria-hidden="true">
              MA
            </span>
            <span className="brand-name">Muhammad Ahmad</span>
          </Link>

          <div className="navbar-controls">
            <div className="desktop-navigation">
              <ul className="nav-links" role="list">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link className="nav-link" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                className="nav-cta"
                href="/#contact"
                onClick={() => trackEvent("email_click", { location: "navbar_cta" })}
              >
                Let&apos;s Talk
              </Link>
            </div>

            <ThemeToggle />

            <button
              ref={menuButtonRef}
              className="menu-button"
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span className="menu-button__label">{isOpen ? "Close" : "Menu"}</span>
              <span
                className={`menu-icon ${isOpen ? "menu-icon--open" : ""}`}
                aria-hidden="true"
              >
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`mobile-menu-layer ${isOpen ? "mobile-menu-layer--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <button
          className="mobile-menu-backdrop"
          type="button"
          tabIndex={-1}
          aria-label="Close navigation menu"
          onClick={closeMenuAndRestoreFocus}
        />

        <aside
          ref={mobileMenuRef}
          id="mobile-navigation"
          className="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <span className="brand-mark" aria-hidden="true">
                MA
              </span>
              <span>Muhammad Ahmad</span>
            </div>
            <button
              className="mobile-drawer-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenuAndRestoreFocus}
            >
              <span>Close</span>
              <span className="menu-icon menu-icon--open" aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>

          <nav className="mobile-drawer-nav" aria-label="Mobile menu links">
            <ul role="list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            className="mobile-nav-cta"
            href="/#contact"
            onClick={() => {
              closeMenu();
              trackEvent("email_click", { location: "navbar_mobile_cta" });
            }}
          >
            Let&apos;s Talk
            <span aria-hidden="true">↗</span>
          </Link>

          <a
            className="mobile-nav-resume"
            href="/resume.pdf"
            download="Muhammad_Ahmad_Resume.pdf"
            onClick={() => {
              closeMenu();
              trackEvent("resume_download", {
                mode: "download",
                location: "navbar_mobile",
              });
            }}
            aria-label="Download Muhammad Ahmad's Resume (PDF)"
          >
            <span>Download Resume</span>
            <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </div>
    </>
  );
}
