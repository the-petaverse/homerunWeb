import React from "react";
import "./RewardCard.css";

import { FaMedal } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const RewardCard = () => {
  return (
    <div className="reward-card-main-container">
      <div className="reward-card-header-wrapper">
        <FaMedal size={35} color="orange" />
        <p>Rewards</p>
      </div>
      <div className="reward-card-points-holder-wrapper">
        <p className="reward-card-points-holder">834points</p>
        <div className="reward-card-points-wrapper">
          <FaArrowTrendUp size={30} />
          <p>15.0%</p>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
