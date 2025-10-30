import React, { createContext, useState, ReactNode} from 'react';
 
type ThemeContextType = {
  isDarkMode: string;
  setIsDarkMode: (element: string )=> void ;
};
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState('light');

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider

