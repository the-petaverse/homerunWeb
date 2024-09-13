import React from "react";
import "./HotelCard.css";

const HotelCard = ({ hotel, navigateToOderScreen }) => {
  return (
    <div
      className="hotelCardContainer"
      onClick={() => navigateToOderScreen(hotel.slug)}
    >
      <div className="hotelCardImageWrapper">
        <img src={hotel.hotelImage} alt="hotel" className="hotelCardImage" />
      </div>
      <div className="hotel-detail-wrapper">
        <div className="hotel-main-header">
          <h2>{hotel.title}</h2>
        </div>
        <div className="petsLocationWrapper">
          <div className="hotelLoactionWrapper">
            <img src={hotel.locationIcon} alt="location" />
            <p>{hotel.location}</p>
          </div>
          <div className="hotelPetsWrapper">
            <img src={hotel.petsIcon} alt="location" />
            <p>{hotel.pets}</p>
          </div>
        </div>
        <div className="hotelBookNowWrapper">
          <div className="hotelPriceHolder">
            <p className="hotelPriceWrapper">{hotel.price}</p>
            <p className="hotelPrice">Per night</p>
          </div>
          <div className="bookNowbtnWrapper">
            <button>Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
