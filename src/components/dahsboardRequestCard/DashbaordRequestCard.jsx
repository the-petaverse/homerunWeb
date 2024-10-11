import React, { useEffect, useState } from "react";
import "./DashbaordRequestCard.css";

const DashbaordRequestCard = ({
  requesActiveCounter,
  requesCompletedCounter,
  requesCancelledCounter,
}) => {
  console.log(requesCompletedCounter);
  useEffect(() => {}, [
    requesActiveCounter,
    requesCompletedCounter,
    requesCancelledCounter,
  ]);
  return (
    <div className="dashbaord-request-card-main-container">
      <p className="dashboard-request-main-header">My Requests</p>
      <div className="dash-request-card-status-section">
        <div className="dash-request-status-card">
          <p>Active</p>
          <p className="dash-point-counter">{requesActiveCounter}</p>
        </div>
        <div className="dash-request-status-card">
          <p>Completed</p>
          <p className="dash-point-counter">{requesCompletedCounter}</p>
        </div>
        <div className="dash-request-status-card">
          <p>Cancelled</p>
          <p className="dash-point-counter">{requesCancelledCounter}</p>
        </div>
      </div>
    </div>
  );
};

export default DashbaordRequestCard;
