// import { configureStore } from "@reduxjs/toolkit/query/react";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./services/auth/authApi";
import { configureStore } from "@reduxjs/toolkit";
import { requestsApi } from "./services/requestsCategory/requestApi";
import { errandApi } from "./services/errands/errandsApi";
import { paymentApi } from "./services/payment/stripe";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    [errandApi.reducerPath]: errandApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      requestsApi.middleware,
      errandApi.middleware,
      paymentApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
