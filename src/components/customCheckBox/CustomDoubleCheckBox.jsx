import React from "react";
import "./CustomDoubleCheckBox.css";

const CustomDoubleCheckBox = ({ register, error, name, label }) => {
  return (
    <>
      <div className="check-boxes-main-container">
        <div className="chaeck-boxes-detail-wrapper">
          <p>{label}</p>
        </div>
        <div className="check-boxes-main-wrapper">
          <div className="check-boxes-option">
            <p className="checkbox-label">Yes</p>
            <input
              name={name}
              type="checkbox"
              {...register("terms_conditions", {
                required: "Please accept the terms & Condition",
              })}
              // onClick={() => setModalOpen(true)}
            />

            {/* {errors.terms_conditions && (
        <p className="input-error-message">{errors.terms_conditions.message}</p>
      )} */}
          </div>
          <div className="check-boxes-option">
            <p className="checkbox-label">Yes</p>
            <input
              type="checkbox"
              {...register("terms_conditions", {
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

export default CustomDoubleCheckBox;
