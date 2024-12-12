import { useGetUserReferrerCodeQuery } from "../services/referrerSystem/referrerSystem";

export const useReferAndWin = () => {
  const { data, isLoading, error, isSuccess } = useGetUserReferrerCodeQuery();

  return {
    data: data,
    isLoading: isLoading,
    error: error,
    isSuccess: isSuccess,
  };
};
