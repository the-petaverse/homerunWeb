import React from "react";
import "./HeroPage.css";
import HeroImage from "../../assets/hero.png";
import GooglePlay from "../../assets/google.png";
import AppleStore from "../../assets/apple.png";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div className="hero-container">
      <div className="header-wrapper">
        <h3 className="heading-txt">
          The most effective homerun application for Africans in Diaspora
        </h3>
        <p className="heading-para">
          Let homerun do the running arround for you while you spend your time
          on other things.
        </p>
        <div className="howitworks-wrapper">
          <h3 className="howitworks-text">How it works</h3>
          <div className="playstore-icons-wrapper">
            <Link className="store-logo-wrapper">
              <img src={GooglePlay} alt="" className="google-icon" />
            </Link>
            <Link className="apple-logo-wrapper">
              <img src={AppleStore} alt="" className="iphone-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <img src={HeroImage} alt="hero-iage" className="hero-img" />
      </div>
    </div>
  );
};

export default HeroPage;
