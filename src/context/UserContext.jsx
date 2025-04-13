import React, { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize from localStorage (if available)
  const [name, setName] = useState(() => localStorage.getItem("userName") || "");
  const [score, setScore] = useState(() => parseInt(localStorage.getItem("userPoint")) || 0);
  const [answers, setAnswers] = useState([]); // Store answers
  // Save name to localStorage on change
  useEffect(() => {
    localStorage.setItem("userName", name);
  }, [name]);

  // Save point to localStorage on change
  useEffect(() => {
    localStorage.setItem("userPoint", score.toString());
  }, [score]);


  return (
    <UserContext.Provider value={{ name, setName, score, setScore, answers, setAnswers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
