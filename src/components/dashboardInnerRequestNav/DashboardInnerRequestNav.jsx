import React, { useEffect } from "react";
import "./DashboardInnerRequestNav.css";
const DashboardInnerRequestNav = ({
  myRequestInnerNavData,
  handleInnerNavBarClicked,
  innerNavMenuClicked,
  progressBarSteps,
  requestStages,
  activeCount,
  completedCount,
  cancelledCount,
}) => {
  useEffect(() => {}, [
    innerNavMenuClicked,
    progressBarSteps,
    requestStages,
    activeCount,
    completedCount,
    cancelledCount,
  ]);
  return (
    <div className="dashboard-inner-request-inner-nav-container">
      {myRequestInnerNavData &&
        myRequestInnerNavData.map((innerNaveMenu, index) => (
          <div
            className="dashboard-inner-request-inner-nav-card-wrapper inner-request-card-with-border-radius-left"
            key={index}
            onClick={() => handleInnerNavBarClicked(innerNaveMenu.title)}
            style={{
              borderBottom:
                innerNavMenuClicked === innerNaveMenu.title
                  ? `solid 8px gray`
                  : "",
            }}
          >
            <p className="dash-inner-request-counter-label">
              {innerNaveMenu.title} Request
            </p>
            {innerNaveMenu.title === "Active" && (
              <p className="dash-inner-request-counter">{activeCount}</p>
            )}
            {innerNaveMenu.title === "Completed" && (
              <p className="dash-inner-request-counter">{completedCount}</p>
            )}
            {innerNaveMenu.title === "Cancelled" && (
              <p className="dash-inner-request-counter">{cancelledCount}</p>
            )}
          </div>
        ))}
    </div>
  );
};

export default DashboardInnerRequestNav;
