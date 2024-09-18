import { lazy } from "react";

// import Home from "../pages/website/homePage/Home";
const Home = lazy(() => import("../pages/website/homePage/Home"));
const CarHotel = lazy(() =>
  import("../pages/website/carHotelBooking/CarHotelBooking")
);

const About = lazy(() => import("../pages/website/about/About"));
const CheckoutPage = lazy(() => import("../pages/website/cart/Cart"));
const GrocerySubscription = lazy(() =>
  import("../pages/website/grocerySubscription/GrocerySubscription")
);
const Login = lazy(() => import("../pages/auth/login/Login"));
const Register = lazy(() => import("../pages/auth/register/Register"));
const ForgotPassword = lazy(() =>
  import("../pages/auth/forgotPassword/ForgotPassword")
);
const ErrandLists = lazy(() =>
  import("../pages/website/errandList/ErrandLists")
);
const ContactUs = lazy(() => import("../pages/website/contactUs/ContactUs"));
const SurpriseDetailPage = lazy(() =>
  import("../pages/website/surprisesSubServices/SurprisesSubServices")
);
const Services = lazy(() => import("../pages/website/services/Services"));
const ServiceDetailPage = lazy(() =>
  import("../pages/website/serviceDetailPage/ServiceDetailPage")
);
const CategoriesDetailPage = lazy(() =>
  import("../pages/website/categoriesDetailPage/CategoriesDetailPage")
);
// const ResetPassword = lazy(() => import('../pages/auth/r'))

export const websiteRoutes = [
  {
    path: "/",
    title: "Landing Page",
    component: Home,
    //   errorcomponent: <NotFound />,
  },
  {
    path: "/about",
    title: "About Page",
    component: About,
  },
  // {
  //   path: "/password-reset",
  //   component: <ResetPassword />,
  // },
  {
    path: "/requests-list",
    title: "ErrandList Page",
    component: ErrandLists,
  },
  {
    path: "/sub-category/:subcategory",
    title: "Service Detail Page Page",
    component: ServiceDetailPage,
  },
  {
    path: "/checkout",
    title: "Checkout page",
    component: CheckoutPage,
  },
  {
    path: "/surprise-sub-category/:subcategory",
    title: "Surprise Detail Page",
    component: SurpriseDetailPage,
  },
  {
    path: "/grocery-sub-category/:subcategory",
    title: "Grocery Detail Page",
    component: GrocerySubscription,
  },
  {
    path: "/request-category/:category",
    title: "Categories Page",
    component: CategoriesDetailPage,
  },
  {
    path: "/contact",
    title: "Contact Us Page",
    component: ContactUs,
  },
  {
    path: "/our-services",
    title: "Services Page",
    component: Services,
  },
  {
    path: "/services-sub-category/:subcategory",
    title: "Care & Hotel Page",
    component: CarHotel,
  },

  // {
  //   path: "dashboard",
  //   component: <Dashboard />,
  // },
  // {
  //   path: "/",
  //   element: <ProtectedRoutes />,
  //   children: [
  //     {
  //       path: "/verify",
  //       element: <Verify />,
  //     },
  //   ],
  // },
  // {
  //   path: "/",
  //   element: <PrivateRoute />,
  //   children: [
  //     {
  //       path: "dashboard",
  //       element: <Dashboard />,
  //     },
  //   ],
  // },
];

export const authRoutes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },

  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
];
