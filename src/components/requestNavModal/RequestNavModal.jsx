import React from "react";
import "./RequestNavModal.css";
import TransIcon from "../../assets/trans-icon.png";
import GrocyIcon from "../../assets/grocy-icon.png";
import SurpriseIcon from "../../assets/surprise-icon.png";
import HotelIcon from "../../assets/hotel-icon.png";
import PropertyIcon from "../../assets/property-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";

const RequestNavModal = ({ handleOpenRequestNav }) => {
  const navigate = useNavigate();
  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();
  console.log(serviceCategories);
  const handleServiceClick = (serviceName) => {
    if (
      serviceName === "surprise_gifts" ||
      serviceName === "grocery_food" ||
      serviceName === "hotel_car_booking"
    ) {
      navigate(`/`);
    } else {
      navigate(`/request-category/${serviceName}`);
    }
  };
  return (
    <div className="request-nav-modal-container">
      {serviceCategories &&
        serviceCategories?.serviceCategory.map((serviceCate, index) => (
          <div className="request-nav-card" key={index}>
            <div className="request-nav-image">
              <img src={TransIcon} alt="transcript icon" />
            </div>
            <div
              className="top-request-nav-content"
              onClick={() => {
                handleServiceClick(serviceCate.slug_name);
                handleOpenRequestNav();
              }}
            >
              {/* <Link
                to={`/request-category/${serviceCate.slug_name}`}
                onClick={handleOpenRequestNav}
              > */}
              <h1 className="font-bold">{serviceCate.category_name}</h1>
              <p>
                {serviceCate.category_details.length > 50
                  ? `${serviceCate.category_details.substring(0, 50)}...`
                  : serviceCate.category_details}
              </p>
              {/* </Link> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RequestNavModal;
