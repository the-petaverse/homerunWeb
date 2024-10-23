import { apiHeader } from "../constant/apiHeader";
import {
  addUserAuth,
  logout,
  setAccessToken,
  setLogoutMessage,
} from "../slices/authSlice";

export const baseQueryWithReauth = async (
  args,
  api,
  extraOptions,
  navigate
) => {
  let result = await apiHeader(args, api, extraOptions);
  console.log("Initial calling", result);
  if (result?.error?.status === 401) {
    const refreshResult = await apiHeader(
      "auth/user/refresh-token",
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // Store the new token
      api.dispatch(setAccessToken(refreshResult.data.accessToken));
      api.dispatch(addUserAuth(refreshResult.data.accessToken));

      // Retry the original query with the new token
      result = await apiHeader(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        // refreshResult.error.data.message = "Your login has expired.";
        api.dispatch(
          setLogoutMessage("Your login has expired. Please login again.")
        );

        api.dispatch(logout());

        navigate("/login", {
          state: { errorMessage: refreshResult.error.data.message },
        });

        return;
      }
      return refreshResult;
    }
  }

  return result;
};
