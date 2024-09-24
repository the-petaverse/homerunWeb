import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarSteps }) => {
  return (
    <div className="progress-bar-main-container">
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressBarSteps}%` }}
        ></div>
      </div>
      <div className="progress-bar-label-wrapper">
        <p>{progressBarSteps}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
