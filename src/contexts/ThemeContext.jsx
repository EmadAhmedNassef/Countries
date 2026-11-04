import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return ["light", "dark", "system"].includes(savedTheme)
      ? savedTheme
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      const activeTheme = theme === "system" ? getSystemTheme() : theme;

      root.classList.toggle("dark", activeTheme === "dark");
    };

    applyTheme();
    localStorage.setItem("theme", theme);

    if (theme !== "system") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  function setThemePreference(nextTheme) {
    if (["light", "dark", "system"].includes(nextTheme)) {
      setTheme(nextTheme);
    }
  }

  function toggleTheme() {
    setThemePreference(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: setThemePreference, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
