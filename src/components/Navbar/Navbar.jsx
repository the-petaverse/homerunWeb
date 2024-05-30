import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="" className="image-wrapper" />
      <ul className="menu-list-wrapper">
        <Link to="/" className="nav-links">
          <li>Home</li>
        </Link>
        <Link to="/services" className="nav-links">
          <li>Services</li>
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
    </div>
  );
};

export default Navbar;
