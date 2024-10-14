import React from "react";
import "./CustomDoubleRadioButton.css";

const CustomDoubleRadioButton = ({ register, error, name, label, style }) => {
  return (
    <>
      <div className="check-boxes-main-container" style={style}>
        <div className="chaeck-boxes-detail-wrapper">
          <p>{label}</p>
        </div>
        <div className="check-boxes-main-wrapper">
          <div className="check-boxes-option">
            <label for="Yes" className="checkbox-label">
              Yes
            </label>
            <input
              id="Yes"
              name={name}
              type="radio"
              {...register(name, {
                required: "Please accept the terms & Condition",
              })}
              // onClick={() => setModalOpen(true)}
            />

            {/* {errors.terms_conditions && (
        <p className="input-error-message">{errors.terms_conditions.message}</p>
      )} */}
          </div>
          <div className="check-boxes-option">
            <label for="No" className="checkbox-label">
              No
            </label>
            <input
              name={name}
              className="radio-style"
              id="No"
              type="radio"
              {...register(name, {
                required: "Please accept the terms & Condition",
              })}
              // onClick={() => setModalOpen(true)}
            />

            {/* {errors.terms_conditions && (
        <p className="input-error-message">{errors.terms_conditions.message}</p>
      )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDoubleRadioButton;
