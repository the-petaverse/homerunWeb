import React from "react";
import "./WhatYouGet.css";
import ArrowForward from "/images/chevron-forw.png";

const WhatYouGet = () => {
  return (
    <div className="what-you-get-container">
      <div className="what-you-get-header-wrapper">
        <div className="what-you-get-main-header">
          <h2>What You’ll Get</h2>
          <img src={ArrowForward} alt="chevron" />
        </div>
        <p>Please see the entire on this package</p>
      </div>
      <div className="what-you-get-accodion-container"></div>
    </div>
  );
};

export default WhatYouGet;
