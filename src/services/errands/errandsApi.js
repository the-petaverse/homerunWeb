import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

export const errandApi = createApi({
  reducerPath: "errandApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/api/v1/",
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
  }),
});
