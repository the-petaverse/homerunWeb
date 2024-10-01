import React from "react";
import "./CarCard.css";
import CarImage from "/images/yellow-car.png";

const CarCard = ({
  card,
  navigateToOderScreen,
  handleShowDetailsModal,
  setCardSelected,
}) => {
  return (
    <div
      className="car-main-container"
      // onClick={() => navigateToOderScreen(card.slug)}
      onClick={() => {
        handleShowDetailsModal();
        setCardSelected(card);
      }}
    >
      <div className="car-card-image">
        <img src={card.image} alt="car" />
      </div>
      <div className="card-car-details">
        <h1>{card.title}</h1>
        <div className="view-details-wrapper">
          <h3>{`${card.price}`}</h3>
          <div className="detail-view-wrapper">
            <p>View details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
