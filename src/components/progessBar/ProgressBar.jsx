import React, { useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({
  progressBarSteps,
  innerNavMenuClicked,
  requestStages,
}) => {
  useEffect(() => {}, [progressBarSteps, innerNavMenuClicked, requestStages]);

  return (
    <div className="progress-bar-main-container">
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{
            width: `${progressBarSteps}%`,
            backgroundColor: progressBarSteps > 50 ? "#23a45a" : "red",
          }}
        ></div>
      </div>
      <div className="progress-bar-label-wrapper">
        <p>{progressBarSteps}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
