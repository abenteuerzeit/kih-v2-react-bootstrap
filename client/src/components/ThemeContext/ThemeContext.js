import React from "react";

export const ThemeContext = React.createContext({
  darkMode: window.matchMedia(" (prefers-color-scheme: dark)").matches,
  toggleDarkMode: () => {},
});
