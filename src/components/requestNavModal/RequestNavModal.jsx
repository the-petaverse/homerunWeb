import React from "react";
import "./RequestNavModal.css";
import TransIcon from "../../assets/trans-icon.png";
import GrocyIcon from "../../assets/grocy-icon.png";
import SurpriseIcon from "../../assets/surprise-icon.png";
import HotelIcon from "../../assets/hotel-icon.png";
import PropertyIcon from "../../assets/property-icon.png";
import { Link } from "react-router-dom";

const RequestNavModal = ({ handleOpenRequestNav }) => {
  return (
    <div className="request-nav-modal-container">
      <div className="request-nav-card">
        <div className="request-nav-image">
          <img src={TransIcon} alt="transcript icon" />
        </div>
        <div className="top-request-nav-content">
          <Link
            to={"/request-category/transcript"}
            onClick={handleOpenRequestNav}
          >
            <h1>Transcript & Doc...</h1>
            <p>Obtain credentials and other necessary documents on...</p>
          </Link>
        </div>
      </div>
      <div className="request-nav-card">
        <div className="request-nav-image">
          <img src={GrocyIcon} alt="transcript icon" />
        </div>
        <div className="top-request-nav-content">
          <Link to={"/request-category/grocery"} onClick={handleOpenRequestNav}>
            <h1>Grocery & Food</h1>
            <p>Groceries and food items delivered to your door...</p>
          </Link>
        </div>
      </div>
      <div className="request-nav-card">
        <div className="request-nav-image">
          <img src={SurpriseIcon} alt="transcript icon" />
        </div>
        <div className="top-request-nav-content">
          <Link
            to={"/request-category/surprise"}
            onClick={handleOpenRequestNav}
          >
            <h1>Surprise Packages</h1>
            <p>We deliver delightful surprises that brighten your day.</p>
          </Link>
        </div>
      </div>
      <div className="request-nav-card">
        <div className="request-nav-image">
          <img src={HotelIcon} alt="transcript icon" />
        </div>
        <div className="top-request-nav-content">
          <Link to={"/request-category/hotel"} onClick={handleOpenRequestNav}>
            <h1>Hotel & Car Booking</h1>
            <p>Secure accommodations, recreation centers and cars...</p>
          </Link>
        </div>
      </div>
      <div className="request-nav-card">
        <div className="request-nav-image">
          <img src={PropertyIcon} alt="transcript icon" />
        </div>
        <div className="top-request-nav-content">
          <Link
            to={"/request-category/property"}
            onClick={handleOpenRequestNav}
          >
            <h1>Property Inspection</h1>
            <p>Acquire property in your home country while you’re abroad...</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestNavModal;