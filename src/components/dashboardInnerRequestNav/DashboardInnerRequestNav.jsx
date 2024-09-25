import React from "react";
import "./DashboardInnerRequestNav.css";
const DashboardInnerRequestNav = ({
  myRequestInnerNavData,
  handleInnerNavBarClicked,
  innerNavMenuClicked,
}) => {
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
            <p className="dash-inner-request-counter">
              {innerNaveMenu.counter}
            </p>
          </div>
        ))}
    </div>
  );
};

export default DashboardInnerRequestNav;
