import React from "react";
import "./TermsAndConditionCheckBox.css";

const TermsAndConditionCheckBox = ({ name, register, ...rest }) => {
  return (
    <div className="term-check-container">
      <input
        type="checkbox"
        name={name}
        {...register(name, {
          required: "Please accept the terms & Condition",
        })}
      />
      <p>
        Acept Homerun’s <span>Terms & Privacy Policy.</span>
      </p>
    </div>
  );
};

export default TermsAndConditionCheckBox;
