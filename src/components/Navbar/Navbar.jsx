import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logomark.png";
import MenuIcon from "../../assets/menu.png";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import RequestNavModal from "../requestNavModal/RequestNavModal";
import MainSideBar from "../mainSideBar/MainSideBar";
const Navbar = () => {
  const [openRequestNav, setOpenRequestNav] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");

  const handleOpenSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };
  const handleOpenRequestNav = () => {
    setOpenRequestNav((prev) => !prev);
  };
  const handleLogout = () => {
    cookies.remove("auth_token");
  };

  useEffect(() => {}, [receivedCookies, openRequestNav, openSideBar]);

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="" className="image-wrapper" />
        </Link>
        <section className="menu-list-sec-wrapper">
          <ul className="menu-list-wrapper">
            <Link to="/about" className="nav-links">
              <li>About Us</li>
            </Link>
            <Link to="/our-services" className="nav-links ">
              <li>Services</li>
            </Link>
            {/* <Link to="/about" className="nav-links">
            <li>About us</li>
          </Link> */}
            <Link to="/contact" className="nav-links">
              <li>Contact Us</li>
            </Link>
          </ul>

          <ul className="list-wrapper">
            <Link
              // to=""
              className="nav-links post-request-wrapper"
              onClick={handleOpenRequestNav}
            >
              <li className="post-request-wrapper-li">Post a Request</li>
            </Link>
            {!receivedCookies && (
              <Link to="/login" className="nav-links">
                <li className="login-wrapper">Login</li>
              </Link>
            )}

            {receivedCookies && (
              <Link to="/login" className="nav-links" onClick={handleLogout}>
                <li> Logout</li>
              </Link>
            )}
          </ul>
        </section>
        <img
          src={MenuIcon}
          alt=""
          className="icon-image-nav"
          onClick={handleOpenSideBar}
        />

        {openRequestNav && (
          <RequestNavModal handleOpenRequestNav={handleOpenRequestNav} />
        )}
      </div>

      {openSideBar && <MainSideBar handleOpenSideBar={handleOpenSideBar} />}
    </>
  );
};

export default Navbar;
