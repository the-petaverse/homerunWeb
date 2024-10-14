import { apiHeader } from "../constant/apiHeader";

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await apiHeader(args, api, extraOptions);

  // If access token expired (e.g. 401 response), refresh token
  if (result?.error?.status === 401) {
    // Attempt to refresh the token
    const refreshResult = await apiHeader(
      "auth/user/refresh-token",
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      // Store the new token
      api.dispatch(
        authSlice.actions.setAccessToken(refreshResult.data.accessToken)
      );

      // Retry the original query with the new token
      result = await apiHeader(args, api, extraOptions);
    } else {
      // Logout if refresh failed
      api.dispatch(authSlice.actions.logout());
    }
  }

  return result;
};
