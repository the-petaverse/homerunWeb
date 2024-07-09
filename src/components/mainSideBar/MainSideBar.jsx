import React from "react";
import CloseIcon from "../../assets/close.png";
import { Link } from "react-router-dom";

import "./MainSideBar.css";
import Cookies from "universal-cookie";

const MainSideBar = ({ handleCloseSideBar, openSideBar }) => {
  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");
  if (!openSideBar) return null;

  const handleLogout = () => {
    cookies.remove("auth_token");
  };
  return (
    <div className="side-bar-container">
      <div className="inner-side-bar">
        <div className="close-icon-container">
          <img
            src={CloseIcon}
            alt=""
            className="mainside-bar-close-icon-wrapper"
            onClick={handleCloseSideBar}
          />
        </div>

        <div className="side-bar-menu-list-wrapper">
          <ul className="side-bar-right-main-list main-side-wrapper">
            <Link
              to="/"
              className="inner-menu-list"
              onClick={handleCloseSideBar}
            >
              <li>Home</li>
            </Link>
            <Link to="/requests-list" className="inner-menu-list blink-text">
              <li>Post a Request</li>
            </Link>
            <Link
              to="/about"
              className="inner-menu-list"
              onClick={handleCloseSideBar}
            >
              <li>About Us</li>
            </Link>
            <Link
              to="/contact"
              className="inner-menu-list"
              onClick={handleCloseSideBar}
            >
              <li>Contact Us</li>
            </Link>
            <section className="auth-wrapper">
              {!receivedCookies && (
                <Link to="/login" className="inner-menu-list">
                  <li>Login</li>
                </Link>
              )}

              {receivedCookies && (
                <Link
                  to="/login"
                  className="inner-menu-list"
                  onClick={handleLogout}
                >
                  <li> Logout</li>
                </Link>
              )}
              {receivedCookies && (
                <Link to="/dashboard" className="inner-menu-list">
                  <li> profile</li>
                </Link>
              )}

              <Link to="/register" className="inner-menu-list">
                {!receivedCookies && <li>Register</li>}
              </Link>
            </section>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
