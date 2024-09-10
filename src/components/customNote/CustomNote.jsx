import React from "react";
import "./CustomNote.css";
import CircleInfo from "../../../public/images/info-circle.png";

const CustomNote = () => {
  return (
    <div className="note-main-container">
      <div className="note-title-wrapper">
        <img src={CircleInfo} alt="cirle-info" />
        <h4>PLEASE NOTE</h4>
      </div>
      <p>
        Processing times and costs may vary based on the institution and
        location. We’ll provide a detailed cost breakdown and timeline once your
        request is verified
      </p>
    </div>
  );
};

export default CustomNote;
