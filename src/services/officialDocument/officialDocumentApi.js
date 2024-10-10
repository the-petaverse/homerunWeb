import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";

export const officialDocumentApi = createApi({
  reducerPath: "officialDocumentApi",
  baseQuery: apiHeader,
  endpoints: (builder) => ({
    createOfficialDocumentErrand: builder.mutation({
      query: (data) => ({
        url: "request/official-document-order",
        method: "POST",
        body: data,
      }),
    }),
    getAUserErrands: builder.query({
      query: () => "request/my-official-document-orders/",
    }),
  }),
});

export const {
  useCreateOfficialDocumentErrandMutation,
  useGetAUserErrandsQuery,
} = officialDocumentApi;
