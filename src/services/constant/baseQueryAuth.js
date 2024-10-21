// import { apiHeader } from "./apiHeader";

// export const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await apiHeader(args, api, extraOptions);

//   if (result.error && result.error.status === 403) {
//     // Access token expired, try to refresh it
//     const refreshResult = await apiHeader("/refresh", api, extraOptions);
//     if (refreshResult.data) {
//       // Store the new token
//       api.dispatch(
//         setCredentials({ accessToken: refreshResult.data.accessToken })
//       );
//       // Retry the original request with the new token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }

//   return result;
// };
