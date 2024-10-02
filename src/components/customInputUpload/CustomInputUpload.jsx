import React from "react";
import "./CustomInputUpload.css";

const CustomInputUpload = ({ handleDeleteFileUploader }) => {
  return (
    <div className="input-upload-container">
      <label for="file-input">
        <img src="/images/upload.png" />
        Click to upload (jpg, pdf, png)
      </label>
      <input type="file" id="file-input" />
      <img
        src="/images/x-circle.png"
        alt=""
        onClick={handleDeleteFileUploader}
      />
    </div>
  );
};

export default CustomInputUpload;
