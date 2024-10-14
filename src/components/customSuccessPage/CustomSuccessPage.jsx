import React from "react";
import "./CustomSuccessPage.css";

import SuccessImage from "../../assets/success.png";
import { useNavigate } from "react-router-dom";

const CustomSuccessPage = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard", { replace: true });
  };
  return (
    <div className="success-screen-main-wrapper">
      <div className="success-inner-container">
        <p>Password change</p>
        <h2>Successful</h2>
        <img src={SuccessImage} alt="Success Image" className="success-image" />

        <button className="success-btn" onClick={navigateToDashboard}>
          Proceed to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CustomSuccessPage;
