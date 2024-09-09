import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layout/WebsiteLayout";
import { websiteRoutes } from "./router";
import Preloader from "./components/preloader/Preloader";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
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
    </Routes>
  );
};

export default App;
