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
  }),
});

export const { useCreatePropertyErrandMutation } = propertyErrandApi;
