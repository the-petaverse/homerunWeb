import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";
import { baseQueryWithReauth } from "../baseQuery/authBaseQuery";

export const errandApi = createApi({
  reducerPath: "errandApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createErrand: builder.mutation({
      query: (data) => ({
        url: "user/errand",
        method: "POST",
        body: data,
      }),
    }),
    getUserErrans: builder.query({
      query: () => "user/errand",
    }),
  }),
});

export const { useCreateErrandMutation, useGetUserErransQuery } = errandApi;
