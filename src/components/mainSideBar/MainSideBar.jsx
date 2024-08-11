import React from "react";
import PostErrandSideBar from "../postErrandSideBar/PostErrandSideBar";
import CloseIcon from "../../assets/close.png";
import LoginIcon from "../../assets/login-icon.png";
import VerifyIcon from "../../assets/verify.png";
import AboutIcon from "../../assets/emoji-happy.png";
import { Link } from "react-router-dom";

import "./MainSideBar.css";
import Cookies from "universal-cookie";

const MainSideBar = () => {
  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");
  // if (!openSideBar) return null;

  const handleLogout = () => {
    cookies.remove("auth_token");
  };
  return (
    <div className="side-bar-container">
      <div className="inner-side-bar">
        <div className="side-bar-menu-list-wrapper">
          <ul className="side-bar-right-main-list main-side-wrapper">
            <section className="auth-wrapper">
              {!receivedCookies && (
                <Link to="/login" className="inner-menu-list">
                  <li>
                    <img
                      src={LoginIcon}
                      alt="login"
                      className="side-bar-menu-icon"
                    />
                    Login
                  </li>
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
              {/* {receivedCookies && (
                <Link to="/dashboard" className="inner-menu-list">
                  <li> profile</li>
                </Link>
              )} */}

              {/* <Link to="/register" className="inner-menu-list">
                {!receivedCookies && <li>Register</li>}
              </Link> */}
            </section>
            <Link to="/our-services" className="inner-menu-list">
              <li>
                <img
                  src={VerifyIcon}
                  alt="login"
                  className="side-bar-menu-icon"
                />
                Services
              </li>
            </Link>
            {/* <Link
              to="/about"
              className="inner-menu-list"
              onClick={handleCloseSideBar}
            >
              <li>
                <img
                  src={AboutIcon}
                  alt="login"
                  className="side-bar-menu-icon"
                />
                About Us
              </li>
            </Link> */}
          </ul>
          <section className="post-errand-sidebar-container">
            <h3 className="post-errand-sidebar">Post Errand</h3>
            <PostErrandSideBar />
          </section>
          <section className="side-menu-bar-btn-container">
            <button className="side-menu-bar-btn">Contact Us</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
