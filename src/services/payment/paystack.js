import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
import { apiHeader } from "../constant/apiHeader";

export const paystackApi = createApi({
  reducerPath: "paystackApi",
  baseQuery: apiHeader,
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => ({
        url: "payment/request",
        method: "POST",
        body: data,
      }),
    }),
    verifyPayment: builder.query({
      query: (reference) => `transaction/verify-payment?reference=${reference}`,
    }),
    getPaymentStatus: builder.query({
      query: (reference) =>
        `/transaction/verify-payment-status?reference=${reference}`,
    }),
  }),
});

export const {
  useCreatePaymentMutation,
  useVerifyPaymentQuery,
  useGetPaymentStatusQuery,
} = paystackApi;
