import React from "react";
// import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader-container">
      <span className="sr-only">Loading</span>
      <div className="custom-bouncing-circle"></div>
      <div className="custom-bouncing-circle"></div>
      <div className="div-custom"></div>
    </div>
  );
}

export default Preloader;
