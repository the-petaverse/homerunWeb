import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.png";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const Navbar = ({ handleOpenSideBar }) => {
  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");

  const handleLogout = () => {
    cookies.remove("auth_token");
  };

  useEffect(() => {}, [receivedCookies]);

  return (
    <div className="nav-container">
      <img src={logo} alt="" className="image-wrapper" />
      <section className="menu-list-sec-wrapper">
        <ul className="menu-list-wrapper">
          <Link to="/" className="nav-links">
            <li>Home</li>
          </Link>
          <Link to="/requests-list" className="nav-links blink-text">
            <li>Post a Request</li>
          </Link>
          <Link to="/about" className="nav-links">
            <li>About us</li>
          </Link>
          <Link to="/contact" className="nav-links">
            <li>Contact Us</li>
          </Link>
        </ul>
        <ul className="list-wrapper">
          {!receivedCookies && (
            <Link to="/login" className="nav-links">
              <li>Login</li>
            </Link>
          )}

          {receivedCookies && (
            <Link to="/login" className="nav-links" onClick={handleLogout}>
              <li> Logout</li>
            </Link>
          )}
          {receivedCookies && (
            <Link to="/dashboard" className="nav-links">
              <li> profile</li>
            </Link>
          )}

          <Link to="/register" className="nav-links">
            {!receivedCookies && <li>Register</li>}
          </Link>
        </ul>
      </section>
      <img
        src={MenuIcon}
        alt=""
        className="icon-image-nav"
        onClick={() => handleOpenSideBar()}
      />
    </div>
  );
};

export default Navbar;
