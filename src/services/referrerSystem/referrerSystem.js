import { createApi } from "@reduxjs/toolkit/query/react";
import { apiHeader } from "../constant/apiHeader";
import { baseQueryWithReauth } from "../baseQuery/authBaseQuery";

export const referrerSystemApi = createApi({
  reducerPath: "referrerSystemApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUserReferrerCode: builder.query({
      query: () => "user/referrer/reward/me",
    }),
  }),
});

export const { useGetUserReferrerCodeQuery } = referrerSystemApi;
