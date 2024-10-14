import React from "react";
import "./Footer.css";
import Logo from "../../assets/white-logo.png";
import { Link } from "react-router-dom";
import Hq from "../hq/Hq";
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="main-level-wrapper">
        {/* <Hq /> */}
        <div className="footer-menu-wrapper">
          <div className="company-wrapper ">
           <Link to="/"><img src={Logo} alt="logo" className="footer-logo" /></Link>
          </div>
        </div>
      </div>
      <div className="inner-footer-wrapper">
        <div>
          <p>© 2024 homerun. All rights reserved</p>
        </div>
        <div>
          <Link className="policy-btn">
            <p>Privacy policy</p>
          </Link>
        </div>
        {/* <div>
          <Link className="privacy-btn">
            <p>Privacy policy</p>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
