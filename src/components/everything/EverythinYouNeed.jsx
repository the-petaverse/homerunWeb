import React from "react";
import "./Everything.css";
import GooglePlay from "../../assets/google.png";
import AppleStore from "../../assets/apple.png";

const EverythinYouNeed = () => {
  return (
    <div className="evrything-container">
      <div className="everything-header-wrapper">
        <h2>
          Everything you need you need to know on how to use our platforms.
        </h2>
      </div>
      <div>
        <video width="950" height="500" controls>
          <source src="./Videos/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default EverythinYouNeed;
