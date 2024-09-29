import React from "react";
import "./CarHotelBooking.css";
import CarCard from "../../../components/carCard/CarCard";
import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import { subServiceData } from "../../../data/subCategoryData";
import { filterSubCategory } from "../../../util/filterSubCategories";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { carData } from "../../../data/carData";
import { groceryBundleData } from "../../../data/groceryBundle";
import { partyPacksData } from "../../../data/partyPacks";
import { hampersPackgeData } from "../../../data/hampers";
import { hotelData } from "../../../data/hotelData";
import HotelCard from "../../../components/hotelCard/HotelCard";

const CarHotelBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subcategory } = useParams();
  let subServices = filterSubCategory(subServiceData, subcategory);
  let cardData;

  //Logic to detrmine screen to naviagte
  if (subcategory === "car-booking") {
    cardData = carData;
  } else if (subcategory === "grocery-bundles") {
    cardData = groceryBundleData;
  } else if (subcategory === "party-packs") {
    cardData = partyPacksData;
  } else if (subcategory === "hotel-booking") {
    cardData = hotelData;
  } else {
    cardData = hampersPackgeData;
  }
  let serviceCatory;

  if (location.state) {
    const { category } = location.state;
    serviceCatory = category;
  }
  const serviceDetails = {
    subCategory: subcategory,
    category: serviceCatory,
  };
  // const categoryData = {
  //   category: category,
  // };
  // Logic to navigate to order screen
  const navigateToOderScreen = (serviceName) => {
    navigate(`/sub-category/${serviceName}`, { state: serviceDetails });
  };
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
        {cardData &&
          cardData.map((card, index) => {
            return (
              <>
                {subcategory === "hotel-booking" && (
                  <HotelCard
                    hotel={card}
                    key={index}
                    navigateToOderScreen={navigateToOderScreen}
                  />
                )}
                {(subcategory === "car-booking" ||
                  subcategory === "grocery-bundles" ||
                  subcategory === "party-packs" ||
                  subcategory === "hampers") && (
                  <CarCard
                    key={index}
                    card={card}
                    navigateToOderScreen={navigateToOderScreen}
                  />
                )}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CarHotelBooking;
