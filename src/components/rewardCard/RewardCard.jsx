import React from "react";
import "./RewardCard.css";
const RewardCard = () => {
  return (
    <div className="reward-card-main-container">
      <div className="reward-card-header-wrapper">
        <p>Rewards</p>
      </div>
      <div className="reward-card-points-holder-wrapper">
        <p className="reward-card-points-holder">834points</p>
        <div>
          <p>15.0%</p>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
