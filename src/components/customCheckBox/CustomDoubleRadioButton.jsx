import React from "react";
import "./CustomDoubleRadioButton.css";

const CustomDoubleRadioButton = ({
  register,
  error,
  name,
  label,
  style,
  optionOne,
  optionTwo,
  boxesWrapperStyle,
  ckeckBoxesOptionStyle,
  ckeckBoxesOptionTwoStyle,
}) => {
  return (
    <>
      <div className="check-boxes-main-container" style={style}>
        <div className="chaeck-boxes-detail-wrapper">
          <p>{label}</p>
        </div>
        <div
          className={
            boxesWrapperStyle ? boxesWrapperStyle : "check-boxes-main-wrapper"
          }
        >
          <div
            className={
              ckeckBoxesOptionStyle
                ? ckeckBoxesOptionStyle
                : "check-boxes-option"
            }
          >
            <p for="Yes" className="checkbox-label">
              {optionOne ? optionOne : "Yes"}
            </p>
            <input
              id="Yes"
              name={name}
              type="radio"
              {...register(name, {
                required: "Please accept the terms & Condition",
              })}
            />
          </div>
          <div
            className={
              ckeckBoxesOptionTwoStyle
                ? ckeckBoxesOptionTwoStyle
                : "check-boxes-option"
            }
          >
            <p for="No" className="checkbox-label">
              {optionTwo ? optionTwo : "No"}
            </p>
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
