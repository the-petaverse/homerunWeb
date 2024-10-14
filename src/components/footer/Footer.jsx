import React from "react";
import "./Footer.css";
import Logo from "../../assets/white-logo.png";
import { Link } from "react-router-dom";
import { FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer-main-container">
      <div className="fotter-social-holder">
        <div className="footer-icon-wrapper">
          <span>
            <FaRegEnvelope size={40} />
          </span>
          <span>support@homerun.com</span>
        </div>
        <div className="footer-icon-wrapper">
          <span>
            <IoCallOutline size={40} />
          </span>
          <span>+2348160178711</span>
        </div>

        <div className="footer-icon-container">
          <FiLinkedin size={40} />
          <FiInstagram size={40} />
          <FiTwitter size={40} />
          <FaWhatsapp size={40} />
        </div>
      </div>
      <div className="footer-logo-wrapper">
        <div className="company-wrapper ">
          <Link to="/">
            <img src={Logo} alt="logo" className="footer-logo" />
          </Link>
        </div>
        <div className="inner-footer-wrapper">
          <div>
            <p>{`© ${year} homerun. All rights reserved`}</p>
          </div>
          <div>
            <Link className="policy-btn">
              <p>Privacy policy</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
