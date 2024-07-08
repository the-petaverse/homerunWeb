import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/api/v1/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "auth/users",
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useLoginUserMutation } = authApi;
