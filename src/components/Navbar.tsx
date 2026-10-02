"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Container } from "@/components/portfolio/primitives";

const profile = { name: "Muhammad Ahmad", initials: "MA" };

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-8 items-center justify-center rounded-lg bg-primary text-[13px] font-semibold tracking-tight text-primary-foreground",
        className,
      )}
    >
      {profile.initials}
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    
    if (open) {
      const focusableElements = Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      );
      focusableElements[0]?.focus();
      
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpen(false);
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
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-background/85 backdrop-blur-md"
          : "border-transparent bg-background/0",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/#main-content"
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          onClick={closeMenu}
          tabIndex={open ? -1 : undefined}
        >
          <Monogram />
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {profile.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          <Link
            href="/#contact"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
            onClick={() => trackEvent("email_click", { location: "navbar_cta" })}
          >
            Let&apos;s Talk
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
            <span className="sr-only">
              {open ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        ref={mobileMenuRef}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-border bg-background lg:hidden"
      >
        <Container className="flex h-full flex-col py-6">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <li key={item.href} className="border-b border-border">
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-4 text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-8 flex flex-col gap-3">
            <Link
              href="/#contact"
              onClick={() => {
                closeMenu();
                trackEvent("email_click", { location: "navbar_mobile_cta" });
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground"
            >
              Let&apos;s Talk
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            
            <a
              href="/resume.pdf"
              download="Muhammad_Ahmad_Resume.pdf"
              onClick={() => {
                closeMenu();
                trackEvent("resume_download", {
                  mode: "download",
                  location: "navbar_mobile",
                });
              }}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card text-sm font-medium text-foreground"
              aria-label="Download Muhammad Ahmad's Resume (PDF)"
            >
              Download Resume
              <Download className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
