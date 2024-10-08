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
    // getUserErrans: builder.query({
    //   query: () => "user/errand",
    // }),
  }),
});

export const { useCreateOfficialDocumentErrandMutation } = officialDocumentApi;
