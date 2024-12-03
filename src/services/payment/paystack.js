import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
import { apiHeader } from "../constant/apiHeader";
import { baseQueryWithReauth } from "../baseQuery/authBaseQuery";

export const paystackApi = createApi({
  reducerPath: "paystackApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => ({
        url: "payment/request",
        method: "POST",
        body: data,
      }),
    }),
    getAmountPaid: builder.mutation({
      query: (data) => ({
        url: "transaction/get-amount-payment",
        method: "POST",
        body: "B2C960CKHE",
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
  useGetAmountPaidMutation,
} = paystackApi;
