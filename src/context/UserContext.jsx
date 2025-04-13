import React, { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize from localStorage (if available)
  const [name, setName] = useState(() => localStorage.getItem("userName") || "");
  const [point, setPoint] = useState(() => parseInt(localStorage.getItem("userPoint")) || 10);

  // Save name to localStorage on change
  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  // Save point to localStorage on change
  useEffect(() => {
    localStorage.setItem("userPoint", point.toString());
  }, [point]);

  return (
    <UserContext.Provider value={{ name, setName, point, setPoint }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
