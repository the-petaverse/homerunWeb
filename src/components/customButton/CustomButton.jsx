import React from "react";
import "./CustomButton.css";

const CustomButton = ({ title, btnStyles }) => {
  return (
    <div>
      <button className={`${btnStyles}`}>{title}</button>
    </div>
  );
};

export default CustomButton;
