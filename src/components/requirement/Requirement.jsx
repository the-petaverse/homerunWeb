import React from "react";
import "./Requirement.css";

const Requirement = () => {
  return (
    <div className="requirement-container">
      <div className="requirement-header">
        <h2>Requirements</h2>
        <img src="/images/chevron-forw.png" alt="" />
      </div>
      <div className="requirement-content">
        <p>Please see a list of what is required from you</p>
        <ul>
          <li>Letter of attestation (Done by a Lawyer)</li>
          <li>Affidavit for WAEC (Done at Court)</li>
          <li>Copy of WAEC result</li>
          <li>A non-refundable fee of 98 dollars (Diaspora)</li>
          <li>A non-refundable fee of 45,000 naira (Local)</li>
          <li>Courier Fees</li>
          <li>2 passport photographs</li>
          <li>3 Tubers of yam and red oil</li>
        </ul>
      </div>
    </div>
  );
};

export default Requirement;
