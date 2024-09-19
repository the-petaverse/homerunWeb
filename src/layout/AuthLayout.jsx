import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = useCallback(
    () => setOpenSidebar(!openSidebar),
    [openSidebar]
  );
  return (
    <div className="auth-layout-container">
      <div className="auth-website-container">
        <main className="auth-main">
          <section className="auth-section-container">
            <Outlet />
          </section>
        </main>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default AuthLayout;
