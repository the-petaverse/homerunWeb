import React from "react";
import "./Hq.css";
import EnvelopIcon from "../../assets/envelop.png";
import HqCallIcon from "../../assets/call.png";
import TwitterIcon from "../../assets/twitter.png";
import FacebookIcon from "../../assets/facebook.png";
import InstaIcon from "../../assets/insta.png";
import LinkedinIcon from "../../assets/linkedin.png";

const Hq = () => {
  return (
    <div className="overall">
      <div className="hq-main-container">
        <div className="hq-inner-wrapper">
          <div className="hq-email-wrapper">
            <img src={EnvelopIcon} alt="envelop icon" className="hq-email" />
            <p>support@homerun.com</p>
          </div>
          <div className="hq-number-wrapper">
            <img src={HqCallIcon} alt="phone icon" className="hq-number" />
            <p>+2348160178711</p>
          </div>
          <div className="hq-social-icons-wrapper">
            <img
              src={LinkedinIcon}
              alt="linkedIn icon"
              className="hq-social-icon"
            />
            <img
              src={InstaIcon}
              alt="linkedIn icon"
              className="hq-social-icon"
            />
            <img
              src={TwitterIcon}
              alt="linkedIn icon"
              className="hq-social-icon"
            />
            <img
              src={FacebookIcon}
              alt="linkedIn icon"
              className="hq-social-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hq;
