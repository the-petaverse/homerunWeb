import React from "react";
import "./TermsAndConditionCheckBox.css";

const TermsAndConditionCheckBox = () => {
  return (
    <div className="term-check-container">
      <input type="checkbox" />
      <label>
        Accept Homerun’s <span>Terms & Privacy Policy.</span>
      </label>
    </div>
  );
};

export default TermsAndConditionCheckBox;
