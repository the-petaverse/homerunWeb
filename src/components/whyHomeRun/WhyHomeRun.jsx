import React, { useState } from "react";
import "./WhyHomerun.css";
import HowItWorks from "../../assets/trip.png";
import TimeWork from "../../assets/time.png";
import SecureImg from "../../assets/secure.png";
import FeedbackImg from "../../assets/feedback.png";

const WhyHomeRun = () => {
  const [innerPageNumber, setInnerPageNumber] = useState(1);

  const showPage = (numberClicked) => {
    setInnerPageNumber(numberClicked);
  };
  return (
    <div className="why-container">
      <h2 className="why-header">How HomeRun Works</h2>
      <div className="inner-nav-container">
        <ul className="inner-list-wrapper">
          <button onClick={() => showPage(1)}>
            <li>What we do</li>
          </button>
          <button onClick={() => showPage(2)}>
            <li>How it works</li>
          </button>
          <button onClick={() => showPage(3)}>
            <li>Secure response</li>
          </button>
          <button onClick={() => showPage(4)}>
            <li>Feedback</li>
          </button>
        </ul>
      </div>
      <div className="inner-details-container">
        {innerPageNumber === 1 && (
          <div className="inner-what-we-do-wrapper">
            <div>
              <img src={TimeWork} alt="" className="what-we-do-img" />
            </div>
            <div className="details-inner-works">
              <div className="inner-header">
                <h3>What we do</h3>
              </div>
              <ul className="details-list-wrapper">
                <li>
                  User Registration: As a customer, you would need to register
                  on our site
                </li>
                <li>
                  Job Post: Then post the job with all the relevant information
                  such as where the service is to be provided date and time of
                  request; contact person; telephone number etc.
                </li>
                <li>
                  Process: Once payment is received, we assign the request to
                  one of our contractors and the work starts.
                </li>
                <li>Final: We provide the job results and feedback to you.</li>
              </ul>
            </div>
          </div>
        )}
        {innerPageNumber === 2 && (
          <div className="inner-what-we-do-wrapper">
            <div>
              <img src={HowItWorks} alt="" className="what-we-do-img" />
            </div>
            <div className="details-inner-works">
              <div className="inner-header">
                <h3>How it works</h3>
              </div>
              <ul className="details-list-wrapper">
                <li>
                  User Registration: As a customer, you would need to register
                  on our site
                </li>
                <li>
                  Job Post: Then post the job with all the relevant information
                  such as where the service is to be provided date and time of
                  request; contact person; telephone number etc.
                </li>
                <li>
                  Process: Once payment is received, we assign the request to
                  one of our contractors and the work starts.
                </li>
                <li>Final: We provide the job results and feedback to you.</li>
              </ul>
            </div>
          </div>
        )}
        {innerPageNumber === 3 && (
          <div className="inner-what-we-do-wrapper">
            <div>
              <img src={SecureImg} alt="" className="what-we-do-img" />
            </div>
            <div className="details-inner-works">
              <div className="inner-header">
                <h3>Secure Transaction</h3>
              </div>
              <ul className="details-list-wrapper">
                <li>
                  User Registration: As a customer, you would need to register
                  on our site
                </li>
                <li>
                  Job Post: Then post the job with all the relevant information
                  such as where the service is to be provided date and time of
                  request; contact person; telephone number etc.
                </li>
                <li>
                  Process: Once payment is received, we assign the request to
                  one of our contractors and the work starts.
                </li>
                <li>Final: We provide the job results and feedback to you.</li>
              </ul>
            </div>
          </div>
        )}
        {innerPageNumber === 4 && (
          <div className="inner-what-we-do-wrapper">
            <div>
              <img src={FeedbackImg} alt="" className="what-we-do-img" />
            </div>
            <div className="details-inner-works">
              <div className="inner-header">
                <h3>Prompt feedback</h3>
              </div>
              <ul className="details-list-wrapper">
                <li>
                  User Registration: As a customer, you would need to register
                  on our site
                </li>
                <li>
                  Job Post: Then post the job with all the relevant information
                  such as where the service is to be provided date and time of
                  request; contact person; telephone number etc.
                </li>
                <li>
                  Process: Once payment is received, we assign the request to
                  one of our contractors and the work starts.
                </li>
                <li>Final: We provide the job results and feedback to you.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyHomeRun;
