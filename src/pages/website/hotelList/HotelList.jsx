import React from "react";
import "./HotelList.css";
import HotelCard from "../../../components/hotelCard/HotelCard";
import { hotelData } from "../../../data/hotelData";

const HotelList = () => {
  return (
    <div className="hotel-list-container">
      <div className="hotelListHeader"></div>
      <div className="hotelCardParentContainer">
        {hotelData &&
          hotelData.map((hotel, index) => {
            return <HotelCard hotel={hotel} key={index} />;
          })}
      </div>
    </div>
  );
};

export default HotelList;
