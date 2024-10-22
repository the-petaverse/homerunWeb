// import { configureStore } from "@reduxjs/toolkit/query/react";
// import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./services/auth/authApi";
import { configureStore } from "@reduxjs/toolkit";
import { requestsApi } from "./services/requestsCategory/requestApi";
import { errandApi } from "./services/errands/errandsApi";
import { paymentApi } from "./services/payment/stripe";
import cartReducer from "./services/slices/cartSlice";
import currentUser from "./services/slices/userSlice";
import { propertyErrandApi } from "./services/propertyErrands/propertyErrand";
import { referrerSystemApi } from "./services/referrerSystem/referrerSystem";
import authReducer from "./services/slices/authSlice";
import { paystackApi } from "./services/payment/paystack";
import userOrderReducer from "./services/slices/userOrder";
import { officialDocumentApi } from "./services/officialDocument/officialDocumentApi";
// import tokenRefreshMiddleware from "./services/middleWare/tokenRefreshMiddleware";

export const store = configureStore({
  reducer: {
    currentUser: currentUser,
    cart: cartReducer,
    auth: authReducer,
    userOrder: userOrderReducer,
    [paystackApi.reducerPath]: paymentApi.reducer,
    [propertyErrandApi.reducerPath]: propertyErrandApi.reducer,
    [referrerSystemApi.reducerPath]: referrerSystemApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [requestsApi.reducerPath]: requestsApi.reducer,
    [errandApi.reducerPath]: errandApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [officialDocumentApi.reducerPath]: officialDocumentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      requestsApi.middleware,
      errandApi.middleware,
      paymentApi.middleware,
      paystackApi.middleware,
      propertyErrandApi.middleware,
      referrerSystemApi.middleware,
      officialDocumentApi.middleware
      // tokenRefreshMiddleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
