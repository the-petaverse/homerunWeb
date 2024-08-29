import React from "react";
import "./Testimonial.css";
import GooglePlay from "../../assets/google.png";
import AppleStore from "../../assets/apple.png";
import HappyUsers from "../../assets/happyusers.png";
import Pen from "../../assets/Pen.png";
import Pin from "../../assets/pin.png";
import Reader from "../../assets/reader.png";
import { Link } from "react-router-dom";
const Testimonial = () => {
  return (
    <div className="testimonia-main-container">
      <div className="happy-user-image-container">
        <img src={HappyUsers} alt="" className="happy-user-image" />
      </div>
      <div className="users-rate-wrapper">
        <h3>500+ Happy users spread</h3>
        <h3>Across Africa continent</h3>
        <div>
          <div className="happy-detail-wrapper">
            <div>
              <img src={Pen} alt="" className="sign-image" />
            </div>
            <div>
              <h2>Singup for free</h2>
              <p>Register and post any request of your choice.</p>
            </div>
          </div>
          <div className="happy-detail-wrapper">
            <div>
              <img src={Pin} alt="" className="sign-image" />
            </div>
            <div>
              <h2>Post a Request</h2>
              <p>Enter your request details, home or abroad.</p>
            </div>
          </div>
          <div className="happy-detail-wrapper">
            <div>
              <img src={Reader} alt="" className="sign-image" />
            </div>
            <div>
              <h2>We Will Run It For You</h2>
              <p>Relax and we will run the errands for you</p>
            </div>
          </div>
        </div>
        <div className="playstore-icons-wrapper">
          <Link className="store-logo-wrapper">
            <img src={GooglePlay} alt="" className="google-icon" />
          </Link>
          <Link className="apple-logo-wrapper another-color-for-wrapper">
            <img src={AppleStore} alt="" className="iphone-icon" />
          </Link>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
