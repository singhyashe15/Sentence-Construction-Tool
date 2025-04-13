import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [point,setPoint] = useState(0);

  return (
    <UserContext.Provider value={{ name, setName,point,setPoint }}>
      {children}
    </UserContext.Provider>
  );
};
