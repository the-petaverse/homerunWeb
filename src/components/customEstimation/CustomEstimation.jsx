import React, { useEffect } from "react";
import "./CustomEstimation.css";
import ProcessDownload from "/images/document-download.png";

const currencyFlip = [
  { id: "1", title: "USD", synbol: "$", flag: "" },
  { id: "2", title: "NGN", cost: "N", flag: "" },
];
const CustomEstimation = ({ serviceData }) => {
  console.log(serviceData[0]?.sub_service_estimated_cost);
  useEffect(() => {}, [serviceData]);
  return (
    <div className="estimated-main-container">
      <div className="estimated-header">
        <h4 className="font-bold">Estimated Payment</h4>
        <h4 className="font-semibold">flag</h4>
      </div>

      {serviceData &&
        serviceData[0]?.sub_service_estimated_cost.map((pay, index) => {
          return (
            <ul className="payment-list">
              <li className="text-lg">{pay.title}</li>
              <li className="text-lg">N {pay.cost}</li>
            </ul>
          );
        })}
      <div className="download-section">
        <img src={ProcessDownload} alt="process" />
        <h4>Download the errand process and requirement</h4>
      </div>
    </div>
  );
};

export default CustomEstimation;
