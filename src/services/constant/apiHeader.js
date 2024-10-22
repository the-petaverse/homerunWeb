import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiHeader = fetchBaseQuery({
  // baseUrl: "https://homerun-backend.onrender.com/api/v1/",
  baseUrl: "http://localhost:4200/api/v1/",
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    console.log(token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
