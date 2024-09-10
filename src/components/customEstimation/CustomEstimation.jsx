import React from "react";
import "./CustomEstimation.css";
import { DocumentDownload, InfoCircle } from "iconsax-react";
import EstimatedListInfo from "./customEstimatedList/estimatedListInfo";
import CountryList from "../CountryList/CountryList";

const CustomEstimation = () => {
  return (
    <div className="estimated-main-container">
      <div className="estimated-header">
        <h5 className="estimated-heading">Estimated Payment</h5>

        <CountryList />
      </div>

      <EstimatedListInfo label="Letter of attestation" amount="$19.00" />
      <EstimatedListInfo label="Sworn affidavit at Court" amount="$19.00" />
      <EstimatedListInfo
        label="A non-refundable fee (First visit)"
        amount="$19.00"
      />
      <EstimatedListInfo label="Result Slip print out" amount="$19.00" />
      <EstimatedListInfo label="Courier Charges" amount="$19.00" />
      <EstimatedListInfo label="Miscellaneous" amount="$19.00" />
      <EstimatedListInfo
        label="A non-refundable fee (Second visit)"
        amount="$19.00"
      />

      <div className="estimated-header">
        <p className="estimated-texting-1">Total</p>
        <p className="estimated-texting-2">$211.00</p>
      </div>

      <div className="errand-process-container">
        <DocumentDownload color="#0B994C" size={20} />
        <p className="process-text">
          Download the errand process and requirement
        </p>
      </div>
    </div>
  );
};

export default CustomEstimation;
