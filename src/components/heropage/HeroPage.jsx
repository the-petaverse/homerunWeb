import React from "react";
import "./HeroPage.css";
import HeroImage from "../../assets/person.png";
import { Link } from "react-router-dom";
import ServiceCard from "../serviceCard/ServiceCard";

const HeroPage = () => {
  return (
    <>
      <div className="hero-container">
        <div className="header-wrapper">
          <div className="header-content-wrapper">
            <h3 className="heading-txt-one">Relax and Enjoy Life While</h3>
            <h3 className="heading-txt-two">Handle Your Errands</h3>
            <p className="heading-para">
              Whether you're abroad or at home, Homerun is here to take care of
              your errands, so you can focus on what matters most.
            </p>
          </div>
          <div className="howitworks-wrapper">
            <Link to="/register" className="get-stated-btn">
              Get Started For Free
            </Link>
          </div>
        </div>
        <div className="banner-container">
          <img src={HeroImage} alt="hero-iage" className="hero-img" />
        </div>
      </div>
      <div className="card-display-container">
        <ServiceCard />;
      </div>
    </>
  );
};

export default HeroPage;
