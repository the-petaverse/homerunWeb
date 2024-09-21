import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";

export const requestsApi = createApi({
  reducerPath: "requestsApi",
  baseQuery: apiHeader,
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
