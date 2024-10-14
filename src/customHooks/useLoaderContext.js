import { useContext } from "react";
import { LoaderContext } from "../context/LoaderProvider";

export const useLoaderContext = () => {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error(
      "Please use useLoader inside the context of LoaderProvider"
    );
  }

  return {
    start: loaderContext.start,
    stop: loaderContext.stop,
  };
};
