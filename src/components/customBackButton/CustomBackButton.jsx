import React from "react";
import BackIcon from "../../assets/back-arrow.png";
import "./CustomBackButton.css";

const CustomBackButton = () => {
  return (
    <div className="back-arrow-wrapper">
      <img src={BackIcon} alt="back button" />
      <span>Back</span>
    </div>
  );
};

export default CustomBackButton;
