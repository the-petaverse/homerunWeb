import React from "react";
import "./ServiceCard.css";
import TransImage from "../../assets/trans.png";
import GrocyImage from "../../assets/grocy.png";
import SurpriseImage from "../../assets/surprise.png";
import HotelImage from "../../assets/hotel.png";
import PropertyImage from "../../assets/property.png";

const ServiceCard = ({ cardImage }) => {
  return (
    <>
      <div className="serviceCard-main-wrapper">
        <img src={TransImage} className="card-image-wrapper" />
      </div>
      <div className="serviceCard-main-wrapper">
        <img src={GrocyImage} className="card-image-wrapper" />
      </div>
      <div className="serviceCard-main-wrapper">
        <img src={SurpriseImage} className="card-image-wrapper" />
      </div>
      <div className="serviceCard-main-wrapper">
        <img src={HotelImage} className="card-image-wrapper" />
      </div>
      <div className="serviceCard-main-wrapper">
        <img src={PropertyImage} className="card-image-wrapper" />
      </div>
    </>
  );
};

export default ServiceCard;
