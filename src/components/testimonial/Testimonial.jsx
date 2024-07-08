import React from "react";
import "./Testimonial.css";
import GooglePlay from "../../assets/google.png";
import AppleStore from "../../assets/apple.png";
import HappyUser from "../../assets/happy.png";
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <div className="testimonia-main-container">
      <div>
        <img src={HappyUser} alt="" className="happy-user-image" />
      </div>
      <div className="users-rate-wrapper">
        <h3>500+ Happy users spread</h3>
        <h3>Across Africa continent</h3>
        <p>
          Over 80% of homerun users are not only able to achieve more successful
          tasks but also are sure of the integrity.
        </p>
        {/* <div className="howitworks-wrapper">
          <h4 className="download-text">How it works</h4>
          <div className="playstore-icons-wrapper">
            <button className="test-store-logo-wrapper">
              <img src={GooglePlay} alt="" className="google-icon" />
            </button>
            <button className="test-apple-logo-wrapper">
              <img src={AppleStore} alt="" className="iphone-icon" />
            </button>
          </div>
        </div> */}
        <div className="howitworks-wrapper">
          <h3 className="howitworks-text">How it works</h3>
          <div className="playstore-icons-wrapper">
            <Link className="store-logo-wrapper">
              <img src={GooglePlay} alt="" className="google-icon" />
            </Link>
            <Link className="apple-logo-wrapper another-color-for-wrapper">
              <img src={AppleStore} alt="" className="iphone-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
