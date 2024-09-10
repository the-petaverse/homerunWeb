import React from "react";
import "./CustomEstimation.css";
import ProcessDownload from "../../../public/images/document-download.png";

const paymentList = [
  { id: "1", title: "Notary fees (If Applicable)", cost: "$19.00" },
  { id: "2", title: "Notary fees (If Applicable)", cost: "$19.00" },
  { id: "3", title: "Notary fees (If Applicable)", cost: "$19.00" },
  { id: "4", title: "Notary fees (If Applicable)", cost: "$19.00" },
  { id: "5", title: "Notary fees (If Applicable)", cost: "$19.00" },
];
const CustomEstimation = () => {
  return (
    <div className="estimated-main-container">
      <div className="estimated-header">
        <h4>Estimated Payment</h4>
        <h4>flag</h4>
      </div>

      {paymentList.map((pay, index) => {
        return (
          <ul className="payment-list">
            <li>{pay.title}</li>
            <li>{pay.cost}</li>
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
