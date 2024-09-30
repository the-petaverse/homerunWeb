import React from "react";
import "./ServiceHeader.css";
import CustomBackButton from "../customBackButton/CustomBackButton";
import { filterSubCategory } from "../../util/filterSubCategories";
import { hotelData } from "../../data/hotelData";
import carImage from "/images/big-car.png";
import HotelBanner from "/images/hotel-banner.png";
import AnnivaBanner from "/images/anny-banner.png";

const ServiceHeader = ({
  serviceCategory,
  serviceSubCategory,
  serviceName,
}) => {
  const subServices = filterSubCategory(hotelData, serviceName);
  console.log(
    serviceCategory,
    serviceSubCategory,
    serviceName,
    "serviceCategory"
  );
  return (
    <div className="services-top-holder">
      <div className="services-top-banner-main-back-button-wrapper">
        <CustomBackButton title="Back" />
      </div>
      {(serviceSubCategory === "car_booking" ||
        serviceSubCategory === "hamper-items" ||
        serviceSubCategory === "party-packs" ||
        serviceSubCategory === "grocery_bundles") && (
        <div className="banner-slate-header-wrapper">
          <div className="car-image-wrapper">
            <img src={carImage} alt="car" />
          </div>
          <div className="services-top-banner-details">
            <h2>Product name</h2>
            <h3>Mini Car</h3>
            <h5>PRICE</h5>
            <h6>From $713.00</h6>
            <h4>CAR DETAILS</h4>
            <ul>
              <li>4 Seats</li>
              <li>3 Doors</li>
              <li>2 Small Suitcase</li>
              <li>Air Conditioning</li>
              <li>Petrol</li>
              <li>Manual & Automatic</li>
            </ul>
          </div>
        </div>
      )}
      {serviceSubCategory === "hotel_booking" && (
        <div className="hotel-blue-banner-slate-header-wrapper">
          <div className="hotel-group-header">
            <div>
              <img src={subServices[0]?.hotelLogo} alt="logo" />
            </div>
            <div>
              <div className="hotel-top-title-wrapper">
                <h2>{subServices[0]?.title}</h2>
              </div>
              <div className="hotel-location-group">
                <div className="hotel-location-group-inner-wrapper">
                  <img src={subServices[0].locationIcon} alt="location" />
                  <p>{subServices[0].location}</p>
                </div>
                <div className="hotel-location-group-inner-wrapper">
                  <img src={subServices[0].petsIcon} alt="location" />
                  <p>Beds</p>
                </div>
                <div className="hotel-location-group-inner-wrapper">
                  <img src={subServices[0].petsIcon} alt="location" />
                  <p>Baths</p>
                </div>
                <div className="hotel-location-group-inner-wrapper">
                  <img src={subServices[0].petsIcon} alt="location" />
                  <p>{subServices[0].location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-blue-image-wrapper">
            <img src={HotelBanner} alt="hotel" />
          </div>
        </div>
      )}
      {serviceSubCategory === "our_packages" && (
        <div className="hotel-blue-banner-slate-header-wrapper">
          <div className="hotel-group-header">
            <div>
              <div className="hotel-top-title-wrapper">
                <h2>{subServices[0]?.title}</h2>
              </div>
            </div>
          </div>
          <div className="hotel-blue-image-wrapper">
            <img src={AnnivaBanner} alt="hotel" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceHeader;
