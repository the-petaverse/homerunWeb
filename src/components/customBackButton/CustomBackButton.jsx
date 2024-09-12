import React from "react";
import BackIcon from "/images/back-arrow.png";
import "./CustomBackButton.css";

const CustomBackButton = ({ title, backBtnClick }) => {
  return (
    <button onClick={backBtnClick} className="back-arrow-wrapper">
      <img src={BackIcon} alt="back button" />
      <span>{title}</span>
    </button>
  );
};

export default CustomBackButton;
