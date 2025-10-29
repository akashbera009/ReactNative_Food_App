import React, { createContext, useState, ReactNode, useContext } from 'react';

type ThemeContextType = {
    isDarkMode: boolean,
    setIsDarkMode: (ele: boolean) => void;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    console.log(context)
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};