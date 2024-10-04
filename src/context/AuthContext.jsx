import { createContext, useContext } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Create or receive the state to add
  // to the context here
  const userAuth = useSelector((state) => state.auth);

  return (
    <AuthContext.Provider value={userAuth}>{children}</AuthContext.Provider>
  );
};
