import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-main-container">
      {/* <div className="logo-wrapper">
        <img src={Logo} alt="" className="footer-logo" />
      </div> */}
      <div className="footer-menu-wrapper">
        <div className="company-wrapper">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="company-wrapper">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="company-wrapper">
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="address-wrapper">
          <ul>
            <li className="list-header">About</li>
            <li>
              Process: Once payment is received, we assign the request to one of
              our contractors and the work starts.
            </li>
            <li>info@homerun.com.ng</li>
            <li>+234-9151555796</li>
          </ul>
        </div>
      </div>
      <div className="inner-footer-wrapper">
        <div>
          <p>© 2024 homerun. All rights reserved</p>
        </div>
        <div>
          <button className="policy-btn">
            <p>Privacy policy</p>
          </button>
        </div>
        <div>
          <button className="privacy-btn">
            <p>Privacy policy</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
