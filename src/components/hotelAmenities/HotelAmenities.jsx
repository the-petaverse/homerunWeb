import React, { useState } from "react";
import "./HotelAmenities.css";
import ArrowForward from "/images/chevron-forw.png";
import ArrowDown from "/images/arrow-down.png";

const HotelAmenities = () => {
  const [showModal, setShowModal] = useState(false);

  const showHideModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="amenities-main-container">
      <p className="amenities-header">What You Will Get</p>
      <div className="amenities-accodion-holder">
        <div className="inner-amenities-header-wrapper" onClick={showHideModal}>
          <h3 className="inner-amenities-header">Amenities</h3>
          <img src={showModal ? ArrowDown : ArrowForward} alt="chevron-arrow" />
        </div>
        {showModal && (
          <div className="amenities-accordion-wrapper">
            <div className="amenities-detail-header-wrapper">
              <div className="amenities-detail-header">
                <img src={ArrowForward} alt="icon" />
                <p>Cozy Bedrooms</p>
              </div>
              <div className="amenities-detail-header">
                <img src={ArrowForward} alt="icon" />
                <p>Cozy Bedrooms</p>
              </div>
              <div className="amenities-detail-header">
                <img src={ArrowForward} alt="icon" />
                <p>Cozy Bedrooms</p>
              </div>
              <div className="amenities-detail-header">
                <img src={ArrowForward} alt="icon" />
                <p>Cozy Bedrooms</p>
              </div>
            </div>
            <div className="hotel-amenities-detail-body-wrapper">
              <div className="detail-content-wrapper">
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
              </div>
              <div className="detail-content-wrapper">
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
                <p>Features 1 goes in here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelAmenities;
