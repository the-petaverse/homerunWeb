import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layout/WebsiteLayout";
import { authRoutes, websiteRoutes } from "./router";
import Preloader from "./components/preloader/Preloader";
import AuthLayout from "./layout/AuthLayout";
import Dashboard from "./screens/dashboard/Dashboard";
import PrivateRoute from "./screens/private/PrivateRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        {websiteRoutes.map(({ path, component: Component }, index) => (
          <Route
            path={path}
            key={index}
            element={
              <Suspense fallback={<Preloader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
      <Route path="/" element={<AuthLayout />}>
        {authRoutes.map(({ path, component: Component }, index) => (
          <Route
            path={path}
            key={index}
            element={
              <Suspense fallback={<Preloader />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
