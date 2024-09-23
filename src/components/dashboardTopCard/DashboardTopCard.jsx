import React from "react";
import "./DashboardTopCard.css";
import CustomButton from "../customButton/CustomButton";

const DashboardTopCard = () => {
  return (
    <div className="dashboard-top-card-main-container">
      <div className="dashboard-top-card-left-pane">
        <p>Request ID: #765322</p>
        <div className="dashboard-card-request-inner-wrapper">
          <p>Request: Jul. 24, 2024</p>
          <p>Delivery: Jul. 24, 2024</p>
          <CustomButton
            title="View Details"
            btnStyles="dashboard-top-card-style"
          />
        </div>
      </div>
      <div className="dashboard-top-card-right-pane"></div>
    </div>
  );
};

export default DashboardTopCard;
