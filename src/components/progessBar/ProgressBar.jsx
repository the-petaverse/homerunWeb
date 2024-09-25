import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progressBarSteps, innerNavMenuClicked }) => {
  console.log(innerNavMenuClicked, "progressBar");
  return (
    <div className="progress-bar-main-container">
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{
            width: `${progressBarSteps}%`,
            backgroundColor:
              innerNavMenuClicked === "Cancelled" ? "red" : "#23a45a",
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
