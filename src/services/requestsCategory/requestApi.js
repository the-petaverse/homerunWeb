import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";
import { baseQueryWithReauth } from "../baseQuery/authBaseQuery";

export const requestsApi = createApi({
  reducerPath: "requestsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getRequestCategories: builder.query({
      query: () => "request/categories",
    }),
    getRequestSubCategory: builder.query({
      query: () => "request/service-sub-category",
    }),
  }),
});

export const { useGetRequestCategoriesQuery, useGetRequestSubCategoryQuery } =
  requestsApi;
