import React from "react";
import "./CustomInputUpload.css";

const CustomInputUpload = () => {
  return (
    <div className="input-upload-container">
      <label for="file-input">
        <img src="/images/upload.png" />
        Click to upload (jpg, pdf, png)
      </label>
      <input type="file" id="file-input" />
      <img src="/images/x-circle.png" alt="" />
    </div>
  );
};

export default CustomInputUpload;
