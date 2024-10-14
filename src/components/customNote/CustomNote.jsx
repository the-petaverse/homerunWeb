import React, { useEffect } from "react";
import "./CustomNote.css";
import CircleInfo from "/images/info-circle.png";

const CustomNote = ({ serviceData }) => {
  useEffect(() => {}, [serviceData]);
  return (
    <div className="note-main-container">
      <div className="note-title-wrapper">
        <img src={CircleInfo} alt="cirle-info" />
        <h4>PLEASE NOTE</h4>
      </div>
      <p>{serviceData && serviceData[0]?.sub_service_note}</p>
    </div>
  );
};

export default CustomNote;
