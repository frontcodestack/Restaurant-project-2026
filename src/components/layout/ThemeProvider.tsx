import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // 1. Synchronously read initial theme to prevent flash/hydration mismatch
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    }
    return "light"; // Default fallback
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // 2. Apply theme to DOM and save to localStorage whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.dataset.theme = "dark";
    } else {
      root.classList.remove("dark");
      root.dataset.theme = "light";
    }
    
    // 3. Try-catch is CRUCIAL for users with strict ad-blockers/privacy extensions
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      console.warn("⚠️ localStorage write failed. Your ad-blocker or browser privacy settings may be blocking it.", err);
    }
  }, [theme]);

  // 4. Extracted toggle function for clean, predictable state updates
  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);