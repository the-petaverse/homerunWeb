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
import Cookies from "universal-cookie";

const cookies = new Cookies();
const registeredCookies = cookies.get("resgitered");
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: !registeredCookies ? <Register /> : <Navigate to="/verify" />,
  },
  {
    path: "/verify",
    element: registeredCookies ? <Verify /> : <Navigate to="/register" />,
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
