import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { Provider, useDispatch } from "react-redux";
import { store } from "./store.js";
import { AuthContextProvider } from "./context/AuthContext";
import OrderContextProvider from "./context/orderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <AuthContextProvider>
          <OrderContextProvider>
            <App />
          </OrderContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
