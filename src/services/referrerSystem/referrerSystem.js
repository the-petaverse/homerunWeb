import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";

export const referrerSystemApi = createApi({
  reducerPath: "referrerSystemApi",
  baseQuery: apiHeader,
  endpoints: (builder) => ({
    getUserReferrerCode: builder.query({
      query: () => "user/referrer/reward/me",
    }),
  }),
});

export const { useGetUserReferrerCodeQuery } = referrerSystemApi;
