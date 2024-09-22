import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import Cookies from "universal-cookie";

export const apiHeader = fetchBaseQuery({
  // baseUrl: "https://homerun-backend.onrender.com/api/v1/",
  baseUrl: "http://localhost:4200/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const cookies = new Cookies();

    let token;
    if (cookies.get("access_token") !== undefined) {
      token = cookies.get("auth_token");
    } else if (cookies.get("request-service")) {
      token = cookies.get("request-service");
    } else {
      token = cookies.get("resgitered");
    }
    console.log(token);
    //If the token is available
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
