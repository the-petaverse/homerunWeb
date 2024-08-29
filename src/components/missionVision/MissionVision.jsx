import React from "react";
import "./MissionVision.css";
import MissionImage from "../../assets/mission.png";
import VisionImage from "../../assets/vision.png";

const MissionVision = () => {
  return (
    <div className="misson-main-container">
      <div className="mission-wrapper">
        <h1>Our Mission</h1>
        <p>
          To redefine errands for Africans in the diaspora and busy local
          clients by providing seamless, efficient, and sustainable solutions
          that allow our users to focus on what truly matters.
        </p>
        <img src={MissionImage} alt="mission" className="mission-icon" />
      </div>
      <div className="vision-wrapper">
        <h1>Our Vision</h1>
        <p>
          To be the leading provider of innovative, eco-friendly errand
          solutions, creating a connected and convenient world where users can
          effortlessly manage their tasks and contribute to a healthier planet
          and stronger global economy.
        </p>
        <img src={VisionImage} alt="mission" className="vision-icon" />
      </div>
    </div>
  );
};

export default MissionVision;
