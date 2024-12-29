// src/contexts/ThemeContext.js
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Default theme is light

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        // Update the `data-theme` attribute on the <body> tag
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};