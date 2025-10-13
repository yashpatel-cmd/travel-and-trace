import React, { createContext, useState } from "react";

// Create a Context
export const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle function
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};