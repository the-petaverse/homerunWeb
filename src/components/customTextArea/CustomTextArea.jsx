import React from "react";
import "./CustomTextArea.css";

const CustomTextArea = ({ title, textAreaStyle, placeHolder }) => {
  return (
    <div className="custom-text-area-wrapper">
      <p>
        <label>{title ? title : ""}</label>
      </p>
      <textarea
        rows={4}
        cols={92}
        className={textAreaStyle}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default CustomTextArea;
