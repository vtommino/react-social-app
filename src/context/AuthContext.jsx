import { createContext, useEffect, useState } from 'react';
import * as userApi from '../Apis/userApi';


// Provider 
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async () => {
    try {
      const response = await userApi.getUserById('1');
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}