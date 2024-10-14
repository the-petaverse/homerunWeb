import { createContext } from "react";

export const LoaderContext = createContext({});

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loaderText, setLoaderText] = useState("");

  const start = (loaderText = "Loader...") => {
    setLoaderText(loaderText);
    setIsLoading(true);
  };

  const stop = () => setIsLoading(false);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        start,
        stop,
        loaderText,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
