import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

export const errandApi = createApi({
  reducerPath: "errandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://homerun-backend.onrender.com/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const cookies = new Cookies();
      const token = cookies.get("auth_token");

      //If the token is available
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
