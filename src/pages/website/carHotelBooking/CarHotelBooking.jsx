import React from "react";
import "./CarHotelBooking.css";
import CarCard from "../../../components/carCard/CarCard";
import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import { subServiceData } from "../../../data/subCategoryData";
import { filterSubCategory } from "../../../util/filterSubCategories";
import { useParams } from "react-router-dom";
import { carData } from "../../../data/carData";

const CarHotelBooking = () => {
  const { subcategory } = useParams();
  const subServices = filterSubCategory(subServiceData, subcategory);

  return (
    <div className="car-hotel-main-container">
      <div className="car-back-button-container">
        <div className="car-back-button-wrapper">
          <CustomBackButton title="Back" />
        </div>
        <div className="car-slate-header-wrapper">
          <h2>{subServices && subServices[0]?.name}</h2>
          {/* <p>Please fill in the following details to make your request. </p> */}
        </div>
      </div>
      <div className="car-card-outer-wrapper">
        {carData &&
          carData.map((car, index) => {
            return <CarCard key={index} car={car} />;
          })}
      </div>
    </div>
  );
};

export default CarHotelBooking;
