import React from "react";
import "./CarCard.css";
import CarImage from "/images/yellow-car.png";

const CarCard = ({ card, navigateToOderScreen }) => {
  return (
    <div className="car-main-container" onClick={() => navigateToOderScreen()}>
      <div className="car-card-image">
        <img src={card.image} alt="car" />
      </div>
      <div className="card-car-details">
        <h1>{card.title}</h1>
        <div className="view-details-wrapper">
          <h3>{`From ${card.price}`}</h3>
          <div>
            <p>View details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
