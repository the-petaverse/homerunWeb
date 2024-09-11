import React from "react";
import "./CustomImageUpload.css";

const CustomImageUpload = () => {
  return (
    <div>
      <div className="input-image-upload-container">
        <label for="file-input">
          <img src="/images/upload.png" />
          Click to upload (jpg, pdf, png)
        </label>
        <input type="file" id="file-input" />
        <img src="/images/x-circle.png" alt="" />
      </div>
    </div>
  );
};

export default CustomImageUpload;
