import React from "react";
import "./QuickActionCard.css";

const QuickActionCard = ({ serviceData, index }) => {
  return (
    <div className="quick-action-card-main-container" key={index}>
      <div>
        <serviceData.icon />
      </div>
      <div className="quick-action-card-title-wrapper">
        <p>{serviceData.title}</p>
      </div>
    </div>
  );
};

export default QuickActionCard;
