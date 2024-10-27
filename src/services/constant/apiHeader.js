import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiHeader = fetchBaseQuery({
  baseUrl: "https://homerun-backend.onrender.com/api/v1/",
  // baseUrl: "http://localhost:4200/api/v1/",
  credentials: "include",

  prepareHeaders: (headers, { getState }) => {
    let token;
    if (getState().auth.accessToken) {
      token = getState().auth.accessToken;
    } else if (getState().auth.passwordResetToken) {
      token = getState().auth.passwordResetToken;
    } else {
      token = getState().auth.registrationToken;
    }

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
