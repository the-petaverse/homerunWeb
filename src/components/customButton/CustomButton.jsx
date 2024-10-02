import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, btnStyles, btnOnClick, btnDisabled }) => {
  return (
    <div>
      <button
        onClick={btnOnClick}
        className={`${btnStyles}`}
        disabled={btnDisabled}
        style={{ backgroundColor: btnDisabled ? "gray" : "" }}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
