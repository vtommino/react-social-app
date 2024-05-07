import { createContext } from 'react';

export const AuthContext = createContext();

// Provider 
export default function AuthContextProvider({children}) {
    const user = null;
    return <AuthContext.Provider value={{user:user}}>{children}</AuthContext.Provider>;
}