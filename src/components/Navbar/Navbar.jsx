import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.png";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import RequestNavModal from "../requestNavModal/RequestNavModal";
const Navbar = ({ handleOpenSideBar }) => {
  const [openRequestNav, setOpenRequestNav] = useState(false);
  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");

  const handleOpenRequestNav = () => {
    setOpenRequestNav((prev) => !prev);
  };
  const handleLogout = () => {
    cookies.remove("auth_token");
  };

  useEffect(() => {}, [receivedCookies, openRequestNav]);

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
            <Link to="/our-services" className="nav-links blink-text">
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
              to=""
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
          onClick={() => handleOpenSideBar()}
        />
      </div>
      {openRequestNav && (
        <section>
          <RequestNavModal />
        </section>
      )}
    </>
  );
};

export default Navbar;
