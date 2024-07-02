import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu.png";
import { Link } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
const Navbar = ({ handleOpenSideBar }) => {
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
          <Link to="/login" className="nav-links">
            <li>Login</li>
          </Link>
          <Link to="/register" className="nav-links">
            <li>Register</li>
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
