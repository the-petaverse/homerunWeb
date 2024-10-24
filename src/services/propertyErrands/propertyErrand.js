import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";

export const propertyErrandApi = createApi({
  reducerPath: "propertyErrandApi",
  baseQuery: apiHeader,
  endpoints: (builder) => ({
    createPropertyErrand: builder.mutation({
      query: (data) => ({
        url: "request/property-order",
        method: "POST",
        body: data,
      }),
    }),
    getUserPropertyOrders: builder.query({
      query: () => "request/my-property-order",
    }),
  }),
});

export const {
  useCreatePropertyErrandMutation,
  useGetUserPropertyOrdersQuery,
} = propertyErrandApi;
