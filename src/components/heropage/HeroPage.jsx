import React from "react";
import "./HeroPage.css";
import HeroImage from "../../assets/person.png";
import { Link, useNavigate } from "react-router-dom";
import ServiceCard from "../serviceCard/ServiceCard";
import CustomButton from "../customButton/CustomButton";

const HeroPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="hero-container">
        <div className="outer-hero-container">
          <div className="header-wrapper">
            <div className="header-content-wrapper">
              <h3 className="text-2xl phone:text-4xl  tablet:text-5xl laptop:text-9xl font-bold mb-3">
                Relax and Enjoy Life While
              </h3>
              <h3 className="text-2xl phone:text-4xl  tablet:text-5xl laptop:text-9xl font-semibold mb-5">
                We Handle Your Errands
              </h3>
              <p className="heading-para">
                Whether you're abroad or at home, Homerun is here to take care
                of your errands, so you can focus on what matters most.
              </p>
            </div>
            <CustomButton
              btnOnClick={handleNavigate}
              title=" Get Started For Free"
              btnStyles="hero-get-stated-btn"
            />
          </div>
          <div className="banner-container">
            <img src={HeroImage} alt="hero-image" className="hero-img" />
          </div>
        </div>
        <div className="card-display-container">
          <ServiceCard />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
