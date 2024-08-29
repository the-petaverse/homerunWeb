import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4200/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const cookies = new Cookies();
      const token = cookies.get("auth_token");

      //If the token is available
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (data) => ({
        url: "/stripe/create-checkout-session",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
