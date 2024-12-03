import React, { useEffect, useState } from "react";
import "./DashboardTopCard.css";
import CustomButton from "../customButton/CustomButton";
import ProgressBar from "../progessBar/ProgressBar";

import { convertIsoDate } from "../../helpers/dateConverter";
import { useGetAmountPaidMutation } from "../../services/payment/paystack";

const DashboardTopCard = ({
  showIconsOnly,
  innerNavMenuClicked,
  data,
  progressBarSteps,
  requestStages,
  setProgressBarStatus,
}) => {
  const [createdDate, setCreatedDate] = useState();

  const [amountOfPayment, setAmountOfPayment] = useState({});
  const [getAmountPaid] = useGetAmountPaidMutation();

  const handleSubmit = async () => {
    const response = await getAmountPaid({
      requestId: data?.request_id,
    }).unwrap();
    setAmountOfPayment(response);
  };

  useEffect(() => {
    let convertedDate = convertIsoDate(data && data?.createdAt);
    if (convertedDate) {
      setCreatedDate(convertedDate);
    }
    handleSubmit();
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
          Request ID:
          <span className="font-bold">
            {data ? data?.request_id : "No Request"}
          </span>
        </p>
        <div className="dashboard-card-request-inner-wrapper max-sm:text-xs lg:text-lg">
          <p>Request: {createdDate ? createdDate : "No Date"}</p>
          <p>Delivery: {createdDate ? createdDate : "No Date"}</p>
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
          {/* <p>Transcript</p> */}
          <div className="dashboard-card-detail-title-wrapper">
            <p className="dashboard-card-main-title">
              {data?.ordered_service_title
                ? data?.ordered_service_title
                : "No Request at the moment by you"}
            </p>
            {data ? (
              <p className="dashboard-card-main-sub-title">
                {`${data?.ordered_service_title} retrieval ${data?.order_status}`}
              </p>
            ) : (
              <p className="dashboard-card-main-sub-title">
                Please create a new request
              </p>
            )}
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
              <p className="dashbaord-card-total-amount">
                {amountOfPayment ? amountOfPayment.amountPaid : "No data yet"}
              </p>
            </div>
            <div className="dashbaord-card-paid-amount-wrapper">
              <p className="dashbaord-card-paid-amount-label">Total Amount:</p>
              <p className="dashbaord-card-paid-amount">
                {amountOfPayment ? amountOfPayment.total_amount : "No data yet"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopCard;
