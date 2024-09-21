import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import Cookies from "universal-cookie";

export const apiHeader = fetchBaseQuery({
  // baseUrl: "https://homerun-backend.onrender.com/api/v1/",
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
});
