import React from "react";
import "./CustomUpload.css";
import PlusIcon from "/images/plus.png";

const CustomUpload = ({ title, titleStyle }) => {
  return (
    <div className="custom-upload-container">
      <div className="custom-upload-header">
        <h2 className={titleStyle ? titleStyle : ""}>
          {title ? title : "Upload Document"}
        </h2>
        <div className="custom-header-btn">
          <img src={PlusIcon} /> <span>Add</span>
        </div>
      </div>
    </div>
  );
};

export default CustomUpload;
