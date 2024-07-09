import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

export const requestsApi = createApi({
  reducerPath: "requestsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const cookies = new Cookies();
      const token = cookies?.get("auth_token");

      //If the token is available
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRequestCategories: builder.query({
      query: () => "request/categories",
    }),
    getRequestSubCategory: builder.query({
      query: () => "request/sub-categories",
    }),
  }),
});

export const { useGetRequestCategoriesQuery, useGetRequestSubCategoryQuery } =
  requestsApi;
