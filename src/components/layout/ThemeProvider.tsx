import { createContext, useContext, type ReactNode } from "react";

type Theme = "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

// Simplified ThemeProvider: single curated theme (light) with no toggling.
// This removes runtime theme switching while keeping the `useTheme` hook
// available so other components do not need refactors.
export function ThemeProvider({ children }: { children: ReactNode }) {
  const toggle = () => {
    // no-op: theme switching intentionally removed for a single, refined theme
  };

  return (
    <ThemeContext.Provider value={{ theme: "light", toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);