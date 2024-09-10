import React from "react";
import "./CustomTextArea.css";

const CustomTextArea = () => {
  return (
    <div className="custom-text-area-wrapper">
      <p>
        <label>Errand Description</label>
      </p>
      <textarea rows={10} cols={136} />
    </div>
  );
};

export default CustomTextArea;
