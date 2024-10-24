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
import { Link, useNavigate } from "react-router-dom";

import "./MainSideBar.css";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

const MainSideBar = ({ handleOpenSideBar }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <div className="side-bar-container">
      <div className="inner-side-bar">
        <div className="side-bar-menu-list-wrapper">
          <ul className="side-bar-right-main-list main-side-wrapper">
            <section className="auth-wrapper">
              {auth.accessToken === null && (
                <Link
                  to="/login"
                  className="inner-menu-list"
                  onClick={handleOpenSideBar}
                >
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

              {auth.accessToken !== null && (
                <Link
                  to="/login"
                  className="inner-menu-list"
                  onClick={handleOpenSideBar}
                  // onClick={handleLogout}
                >
                  <li> Logout</li>
                </Link>
              )}
            </section>
            <Link
              to="/our-services"
              className="inner-menu-list"
              onClick={handleOpenSideBar}
            >
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
              onClick={handleOpenSideBar}
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
              <Link
                to={"/request-category/transcript"}
                onClick={handleOpenSideBar}
              >
                <h1>Transcript & Doc...</h1>
                <p>Obtain credentials and other necessary documents on...</p>
              </Link>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={GrocyIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <Link
                to={"/request-category/grocery"}
                onClick={handleOpenSideBar}
              >
                <h1>Grocery & Food</h1>
                <p>Groceries and food items delivered to your door...</p>
              </Link>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={SurpriseIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <Link
                to={"/request-category/surprise"}
                onClick={handleOpenSideBar}
              >
                <h1>Surprise Packages</h1>
                <p>We deliver delightful surprises that brighten your day.</p>
              </Link>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={HotelIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <Link to={"/request-category/hotel"} onClick={handleOpenSideBar}>
                <h1>Hotel & Car Booking</h1>
                <p>Secure accommodations, recreation centers and cars...</p>
              </Link>
            </div>
          </div>
          <div className="post-request-nav-card">
            <div className="request-nav-image">
              <img src={PropertyIcon} alt="transcript icon" />
            </div>
            <div className="request-nav-content">
              <Link
                to={"/request-category/property"}
                onClick={handleOpenSideBar}
              >
                <h1>Property Inspection</h1>
                <p>
                  Acquire property in your home country while you’re abroad...
                </p>
              </Link>
            </div>
          </div>
          <button className="side-menu-bar-btn" onClick={handleNavigate}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
