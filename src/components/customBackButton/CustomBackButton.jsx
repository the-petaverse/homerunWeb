import React from "react";
import BackIcon from "/images/back-arrow.png";
import "./CustomBackButton.css";
import { useNavigate } from "react-router-dom";

const CustomBackButton = ({ title, backBtnClick }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back-arrow-wrapper">
      <img src={BackIcon} alt="back button" />
      <span>{title}</span>
    </button>
  );
};

export default CustomBackButton;
