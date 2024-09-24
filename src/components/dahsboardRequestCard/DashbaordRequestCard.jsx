import React from "react";
import "./DashbaordRequestCard.css";

const DashbaordRequestCard = () => {
  return (
    <div className="dashbaord-request-card-main-container">
      <p className="dashboard-request-main-header">My Requests</p>
      <div className="dash-request-card-status-section">
        <div className="dash-request-status-card">
          <p>Active</p>
          <p className="dash-point-counter">1</p>
        </div>
        <div className="dash-request-status-card">
          <p>Completed</p>
          <p className="dash-point-counter">13</p>
        </div>
        <div className="dash-request-status-card">
          <p>Cancelled</p>
          <p className="dash-point-counter">1</p>
        </div>
      </div>
    </div>
  );
};

export default DashbaordRequestCard;
