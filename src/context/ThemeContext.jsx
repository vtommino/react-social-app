/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const ThemeContext = createContext();

// Provider 
export default function ThemeContextProvider({children}) {
    const mode = light;
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}