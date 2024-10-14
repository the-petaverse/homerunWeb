import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, btnStyles, btnOnClick, btnDisabled }) => {
  return (
    <button
      onClick={btnOnClick}
      className={btnStyles ? btnStyles : "customBtnStyle"}
      disabled={btnDisabled}
      style={{ backgroundColor: btnDisabled ? "gray" : "" }}
    >
      {title}
    </button>
  );
};

export default CustomButton;
