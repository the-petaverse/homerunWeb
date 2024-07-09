// import { configureStore } from "@reduxjs/toolkit/query/react";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./services/auth/authApi";
import { configureStore } from "@reduxjs/toolkit";
import { requestsApi } from "./services/requestsCategory/requestApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, requestsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
