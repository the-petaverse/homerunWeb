import React, { useEffect, useState } from "react";
import "./DashbaordRequestCard.css";

const DashbaordRequestCard = ({
  activeCount,
  completedCount,
  cancelledCount,
}) => {
  useEffect(() => {}, [activeCount, completedCount, cancelledCount]);
  return (
    <div className="dashbaord-request-card-main-container">
      <p className="dashboard-request-main-header">My Requests</p>
      <div className="dash-request-card-status-section">
        <div className="dash-request-status-card">
          <p>Active</p>
          <p className="dash-point-counter">{activeCount ? activeCount : 0}</p>
        </div>
        <div className="dash-request-status-card">
          <p>Completed</p>
          <p className="dash-point-counter">
            {completedCount ? completedCount : 0}
          </p>
        </div>
        <div className="dash-request-status-card">
          <p>Cancelled</p>
          <p className="dash-point-counter">
            {cancelledCount ? cancelledCount : 0}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashbaordRequestCard;
