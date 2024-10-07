import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const { auth } = useContext(AuthContext);

  if (auth === undefined) {
    throw new Error("useAuthContext must be used with a AuthContextProvider");
  }

  return context;
};
