import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";
import { baseQueryWithReauth } from "../baseQuery/authBaseQuery";

export const officialDocumentApi = createApi({
  reducerPath: "officialDocumentApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createOfficialDocumentErrand: builder.mutation({
      query: (data) => (
        console.log(data, "object created"),
        {
          url: "request/official-document-order",
          method: "POST",
          body: data,
        }
      ),
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
