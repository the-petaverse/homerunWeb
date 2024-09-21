import { createApi } from "@reduxjs/toolkit/query/react";

import { apiHeader } from "../constant/apiHeader";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: apiHeader,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "auth/users",
    }),
    getUser: builder.query({
      query: () => "auth/user",
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "auth/user",
        method: "POST",
        body: data,
      }),
    }),
    verifyUser: builder.mutation({
      query: (otp) => (
        console.log(otp),
        {
          url: "auth/verify_otp",
          method: "POST",
          body: { otp: otp },
        }
      ),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useGetUserQuery,
  useRegisterUserMutation,
  useVerifyUserMutation,
} = authApi;
