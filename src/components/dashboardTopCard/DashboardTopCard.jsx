import React, { useEffect, useState } from "react";
import "./DashboardTopCard.css";
import CustomButton from "../customButton/CustomButton";
import ProgressBar from "../progessBar/ProgressBar";
import { useGetAUserErrandsQuery } from "../../services/officialDocument/officialDocumentApi";

const DashboardTopCard = ({
  showIconsOnly,
  innerNavMenuClicked,
  data,
  progressBarSteps,
  requestStages,
  setProgressBarStatus,
}) => {
  console.log(requestStages);
  useEffect(() => {
    setProgressBarStatus(data);
  }, [
    requestStages,
    progressBarSteps,
    innerNavMenuClicked,
    setProgressBarStatus,
  ]);
  return (
    <div className="dashboard-top-card-main-container">
      <div
        className={
          showIconsOnly
            ? "dashboard-top-card-left-pane-with-icons-only"
            : "dashboard-top-card-left-pane"
        }
      >
        <p className="max-sm:text-xs lg:text-lg">
          Request ID: <span className="font-bold">{data.request_id}</span>
        </p>
        <div className="dashboard-card-request-inner-wrapper max-sm:text-xs lg:text-lg">
          <p>Request: Jul. 24, 2024</p>
          <p>Delivery: Jul. 24, 2024</p>
          <CustomButton
            title="View Details"
            btnStyles="dashboard-top-btn-card-style"
          />
        </div>
      </div>
      <div
        className={
          showIconsOnly
            ? "dashboard-top-card-right-pane-with-icons-only"
            : "dashboard-top-card-right-pane"
        }
      >
        <div
          className={
            showIconsOnly
              ? "dashboard-card-header-container-with-icons-only"
              : "dashboard-card-header-container"
          }
        >
          <p>Transcript</p>
          <div className="dashboard-card-detail-title-wrapper">
            <p className="dashboard-card-main-title">
              {data?.ordered_service_title}
            </p>
            <p className="dashboard-card-main-sub-title">
              {`${data?.ordered_service_title} retrieval ${data?.order_status}`}
            </p>
          </div>
          <div className="dashboard-progress-bar-main-wrapper">
            <div className="dashboard-progress-bar-left-pane">
              <div className="dashboard-card-progress-counter-wrapper">
                <p>In progress {`(Stage ${requestStages} of 4)`}</p>
              </div>
              <ProgressBar
                progressBarSteps={progressBarSteps}
                innerNavMenuClicked={innerNavMenuClicked}
                requestStages={requestStages}
              />
            </div>
          </div>
          <div className="dashboard-card-amount-main-wrapper">
            <div className="dashbaord-card-total-amount-wrapper">
              <p className="dashbaord-card-total-amount-label">Total Amount:</p>
              <p className="dashbaord-card-total-amount">N120, 000.00</p>
            </div>
            <div className="dashbaord-card-paid-amount-wrapper">
              <p className="dashbaord-card-paid-amount-label">Total Amount:</p>
              <p className="dashbaord-card-paid-amount">N120, 000.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopCard;
