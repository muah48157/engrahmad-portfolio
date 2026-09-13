"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const storageKey = "portfolio-theme";

function getAppliedTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = useCallback((selectedTheme: Theme, persist = true) => {
    document.documentElement.dataset.theme = selectedTheme;
    document.documentElement.style.colorScheme = selectedTheme;

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, selectedTheme);
      } catch {
        // The visual theme still changes when storage is unavailable.
      }
    }

    setTheme(selectedTheme);
  }, []);

  useEffect(() => {
    // The inline script in the root layout restores the saved theme before
    // React hydrates. Sync the control to that already-applied value instead
    // of reading storage again and potentially overwriting a user click.
    const syncTheme = () => setTheme(getAppliedTheme());
    window.queueMicrotask(syncTheme);
  }, []);

  const toggleTheme = () => {
    // Read from the DOM because it is the source of truth for the rendered
    // theme and may have been updated before this component's effect ran.
    const nextTheme: Theme = getAppliedTheme() === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Use light theme" : "Use dark theme"}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Moon
          className="theme-toggle__icon"
          aria-hidden="true"
          size={18}
          strokeWidth={1.75}
        />
      ) : (
        <Sun
          className="theme-toggle__icon"
          aria-hidden="true"
          size={18}
          strokeWidth={1.75}
        />
      )}
    </button>
  );
}
