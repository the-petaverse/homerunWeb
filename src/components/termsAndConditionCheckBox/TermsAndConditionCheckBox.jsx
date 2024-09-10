import React from "react";
import "./TermsAndConditionCheckBox.css";

const TermsAndConditionCheckBox = () => {
  return (
    <div className="term-check-container">
      <input type="checkbox" />
      <p>
        Acept Homerun’s <span>Terms & Privacy Policy.</span>
      </p>
    </div>
  );
};

export default TermsAndConditionCheckBox;
