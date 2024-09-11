import React from "react";
import "./CarCard.css";
import CarImage from "/images/yellow-car.png";

const CarCard = ({ car }) => {
  return (
    <div className="car-main-container">
      <div className="car-card-image">
        <img src={car.image} alt="car" />
      </div>
      <div className="card-car-details">
        <h1>{car.title}</h1>
        <div className="view-details-wrapper">
          <h3>{`From ${car.price}`}</h3>
          <div>
            <p>View details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
