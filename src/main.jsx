import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./screens/about/About";
import NotFound from "./components/NotFound/NotFound";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Dashboard from "./screens/dashboard/Dashboard.jsx";
import PrivateRoute from "./screens/private/PrivateRoutes.jsx";
import Verify from "./screens/verification/Verify.jsx";
import ContactUs from "./screens/contactUs/ContactUs.jsx";
import ErrandLists from "./screens/errandList/ErrandLists.jsx";
import ServiceDetailPage from "./screens/serviceDetailPage/ServiceDetailPage.jsx";
import CategoriesDetailPage from "./screens/categoriesDetailPage/CategoriesDetailPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import ProtectedRoutes from "./screens/private/ProtectedRoutes.jsx";
import Services from "./screens/services/Services.jsx";
import ResetPassword from "./components/resetPassword/ResetPassword.jsx";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/password-reset",
    element: <ResetPassword />,
  },
  {
    path: "/requests-list",
    element: <ErrandLists />,
  },
  {
    path: "/sub-category/:subcategory",
    element: <ServiceDetailPage />,
  },
  {
    path: "/request-category/:category",
    element: <CategoriesDetailPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/our-services",
    element: <Services />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  //This is placed outside of the authentication for design
  //To be removed after the design is complete
  {
    path: "/verify",
    element: <Verify />,
  },

  //This is placed outside of the authentication for design
  //To be removed after the design is complete
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      // {
      //   path: "/verify",
      //   element: <Verify />,
      // },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
