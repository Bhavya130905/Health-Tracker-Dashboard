import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "vitalsync-theme";

export function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (
      savedTheme === "light" ||
      savedTheme === "dark" ||
      savedTheme === "system"
    ) {
      return savedTheme;
    }

    return "system";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const [systemTheme, setSystemTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  // Watch system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);

    return () =>
      mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const resolvedTheme =
    theme === "system" ? systemTheme : theme;

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    document.documentElement.classList.add(
      resolvedTheme
    );

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, resolvedTheme]);

  function toggleTheme() {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      systemTheme,
      setTheme,
      toggleTheme,
    }),
    [theme, resolvedTheme, systemTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}
