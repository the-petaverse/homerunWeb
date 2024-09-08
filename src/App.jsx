import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./layout/WebsiteLayout";
import { websiteRoutes } from "./router";
import Preloader from "./components/preloader/Preloader";

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
    </Routes>
  );
};

export default App;
