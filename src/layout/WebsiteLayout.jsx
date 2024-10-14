import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import "./layout.css";
import { ToastContainer } from "react-toastify";

function WebsiteLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = useCallback(
    () => setOpenSidebar(!openSidebar),
    [openSidebar]
  );
  return (
    <>
      <div className="website-wrapper">
        <Navbar />
        <div className="website-container">
          <main className="main">
            <section className="section-container">
              <Outlet />
            </section>
          </main>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WebsiteLayout;
