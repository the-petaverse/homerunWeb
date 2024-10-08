import React, { useState } from "react";
import "./DashboardTopCard.css";
import CustomButton from "../customButton/CustomButton";
import ProgressBar from "../progessBar/ProgressBar";

const DashboardTopCard = ({ showIconsOnly, innerNavMenuClicked }) => {
  const [progressBarSteps, setProgressBarSteps] = useState(50);

  return (
    <div className="dashboard-top-card-main-container">
      <div
        className={
          showIconsOnly
            ? "dashboard-top-card-left-pane-with-icons-only"
            : "dashboard-top-card-left-pane"
        }
      >
        <p>Request ID: #765322</p>
        <div className="dashboard-card-request-inner-wrapper">
          <p>Request: Jul. 24, 2024</p>
          <p>Delivery: Jul. 24, 2024</p>
          <CustomButton
            title="View Details"
            btnStyles="dashboard-top-btn-card-style"
          />
        </div>
      </div>
      <div
        className={
          showIconsOnly
            ? "dashboard-top-card-right-pane-with-icons-only"
            : "dashboard-top-card-right-pane"
        }
      >
        <div
          className={
            showIconsOnly
              ? "dashboard-card-header-container-with-icons-only"
              : "dashboard-card-header-container"
          }
        >
          <p>Transcript</p>
          <div className="dashboard-card-detail-title-wrapper">
            <p className="dashboard-card-main-title">
              Transcript Retrieval from Belamy University
            </p>
            <p className="dashboard-card-main-sub-title">
              Transcript retrieved and awaiting delivery
            </p>
          </div>
          <div className="dashboard-progress-bar-main-wrapper">
            <div className="dashboard-progress-bar-left-pane">
              <div className="dashboard-card-progress-counter-wrapper">
                <p>In progress (Stage 3 of 4)</p>
              </div>
              <ProgressBar
                progressBarSteps={progressBarSteps}
                innerNavMenuClicked={innerNavMenuClicked}
              />
            </div>
            <div className="dashboard-progress-bar-right-pane">
              <p>50pt</p>
              <p>50KgCO2</p>
            </div>
          </div>
          <div className="dashboard-card-amount-main-wrapper">
            <div className="dashbaord-card-total-amount-wrapper">
              <p className="dashbaord-card-total-amount-label">Total Amount:</p>
              <p className="dashbaord-card-total-amount">N120, 000.00</p>
            </div>
            <div className="dashbaord-card-paid-amount-wrapper">
              <p className="dashbaord-card-paid-amount-label">Total Amount:</p>
              <p className="dashbaord-card-paid-amount">N120, 000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopCard;
