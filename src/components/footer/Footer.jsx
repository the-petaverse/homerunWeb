import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="main-level-wrapper">
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
        </div>
        <div className="footer-address">
          <p className="list-header">Contact</p>
          <p>
            Process: Once payment is received, we assign the request to one of
            our contractors and the work starts.
          </p>
          <p>info@homerun.com.ng</p>
          <p>+234-9151555796</p>
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
