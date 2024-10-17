import React from "react";
// import "./Preloader.css";

function Preloader() {
  return (
    <div className="h-[100dvh] bg-white flex justify-center align-middle">
      <span className="text-slate-900">Loading</span>
      <div className="custom-bouncing-circle"></div>
      <div className="custom-bouncing-circle"></div>
      <div className="div-custom"></div>
    </div>
  );
}

export default Preloader;
