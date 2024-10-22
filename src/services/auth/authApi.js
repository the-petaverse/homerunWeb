import { createApi } from "@reduxjs/toolkit/query/react";

import { apiHeader } from "../constant/apiHeader";
import { baseQueryWithReauth } from "../baseQuery/authBaseQuery";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "auth/users",
    }),
    getUser: builder.query({
      query: () => "auth/user/me",
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => (
        console.log(data),
        {
          url: "auth/user",
          method: "POST",
          body: data,
        }
      ),
    }),
    verifyUser: builder.mutation({
      query: (otp) => ({
        url: "auth/verify_otp",
        method: "POST",
        body: { otp: otp },
      }),
    }),
    resetUserOtp: builder.mutation({
      query: (data) => ({
        url: "auth/reset_otp",
        method: "POST",
        body: data,
      }),
    }),
    // User provide email to get authenticated
    // Before allowed to reset password
    forgotUserPassword: builder.mutation({
      query: (data) => ({
        url: "auth/forgot_password",
        method: "POST",
        body: data,
      }),
    }),
    resetUserPassword: builder.mutation({
      query: (data) => ({
        url: "auth/reset_password",
        method: "POST",
        body: data,
      }),
    }),
    refreshToken: builder.mutation({
      query: (data) => ({
        url: "auth/user/refresh-token",
        method: "GET",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useGetUserQuery,
  useRegisterUserMutation,
  useVerifyUserMutation,
  useResetUserOtpMutation,
  useForgotUserPasswordMutation,
  useResetUserPasswordMutation,
  useRefreshTokenMutation,
} = authApi;
