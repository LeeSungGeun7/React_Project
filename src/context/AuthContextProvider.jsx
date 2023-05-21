import React, { createContext, useState, useContext } from 'react';

// Create Context object.
const AuthContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
