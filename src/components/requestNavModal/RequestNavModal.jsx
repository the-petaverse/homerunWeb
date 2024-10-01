import React from "react";
import "./RequestNavModal.css";
import TransIcon from "../../assets/trans-icon.png";
import GrocyIcon from "../../assets/grocy-icon.png";
import SurpriseIcon from "../../assets/surprise-icon.png";
import HotelIcon from "../../assets/hotel-icon.png";
import PropertyIcon from "../../assets/property-icon.png";
import { Link } from "react-router-dom";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";

const RequestNavModal = ({ handleOpenRequestNav }) => {
  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();

  return (
    <div className="request-nav-modal-container">
      {serviceCategories &&
        serviceCategories?.serviceCategory.map((serviceCate, index) => (
          <div className="request-nav-card" key={index}>
            <div className="request-nav-image">
              <img src={TransIcon} alt="transcript icon" />
            </div>
            <div className="top-request-nav-content">
              <Link
                to={`/request-category/${serviceCate.slug_name}`}
                onClick={handleOpenRequestNav}
              >
                <h1 className="font-bold">{serviceCate.category_name}</h1>
                <p>Obtain credentials and other necessary documents on...</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RequestNavModal;
