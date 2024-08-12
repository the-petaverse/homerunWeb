import React from "react";
import CloseIcon from "../../assets/close.png";
import LoginIcon from "../../assets/login-icon.png";
import VerifyIcon from "../../assets/verify.png";
import AboutIcon from "../../assets/emoji-happy.png";
import TransIcon from "../../assets/trans-icon.png";
import GrocyIcon from "../../assets/grocy-icon.png";
import SurpriseIcon from "../../assets/surprise-icon.png";
import HotelIcon from "../../assets/hotel-icon.png";
import PropertyIcon from "../../assets/property-icon.png";
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
            <Link
              to="/about"
              className="inner-menu-list"
              // onClick={handleCloseSideBar}
            >
              <li>
                <img
                  src={AboutIcon}
                  alt="login"
                  className="side-bar-menu-icon"
                />
                About Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="post-request-nav-modal-container">
          <h3 className="post-errand-sidebar">Post Errand</h3>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={TransIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <h1>Transcript & Doc...</h1>
              <p>Obtain credentials and other necessary documents on...</p>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={GrocyIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <h1>Grocery & Food</h1>
              <p>Groceries and food items delivered to your door...</p>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={SurpriseIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <h1>Surprise Packages</h1>
              <p>We deliver delightful surprises that brighten your day.</p>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={HotelIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <h1>Hotel & Car Booking</h1>
              <p>Secure accommodations, recreation centers and cars...</p>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={PropertyIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <h1>Property Inspection</h1>
              <p>
                Acquire property in your home country while you’re abroad...
              </p>
            </div>
          </div>
          <button className="side-menu-bar-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
