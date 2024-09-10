import React from "react";
import BackIcon from "../../assets/back-arrow.png";
import "./CustomBackButton.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "iconsax-react";

const CustomBackButton = () => {
  const navigate = useNavigate()
  return (
    <button type="button" onClick={() => navigate(-1)} className="back-arrow-wrapper">
      {/* <img src={BackIcon} alt="back button" /> */}
      <ArrowLeft color="#000" size={32} />
      <span >Back</span>
    </button>
  );
};

export default CustomBackButton;
