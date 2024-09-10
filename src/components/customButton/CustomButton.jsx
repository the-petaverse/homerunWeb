import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, btnStyles, btnOnClick }) => {
  return (
    <div>
      <button onClick={btnOnClick} className={`${btnStyles}`}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
