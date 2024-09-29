import React, { useEffect, useState } from "react";
import "./SubServiceCard.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import SubTranscriptIcon from "../../assets/sub-transcript.png";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
  useGetRequestCategoriesQuery,
  useGetRequestSubCategoryQuery,
} from "../../services/requestsCategory/requestApi";
import { subServiceData } from "../../data/subCategoryData";
import { Image, Transformation } from "cloudinary-react";
import { filteredServiceCategory } from "../../helpers/filterServiceCategories";
import { filterSubCategory } from "../../helpers/filterSubServices";

const SubServiceCard = ({ category }) => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();
  const {
    data: subData,
    isLoading: subLoading,
    isFetching: subFetching,
    error: subError,
    isLoading: subSuccess,
  } = useGetRequestSubCategoryQuery();

  const categoryData = {
    category: category,
  };
  const handleNavigate = (servicesubCategory) => {
    //User the serviceSub category to determin the navigation

    if (
      servicesubCategory === "car-booking" ||
      servicesubCategory === "grocery-bundles" ||
      servicesubCategory === "party-packs" ||
      servicesubCategory === "hampers" ||
      servicesubCategory === "hotel-booking"
    ) {
      navigate(`/services-sub-category/${servicesubCategory}`, {
        state: categoryData,
      });
    } else if (
      servicesubCategory === "our_packages" ||
      servicesubCategory === "gift_items" ||
      servicesubCategory === "cake_items" ||
      servicesubCategory === "custom_grocery"
    ) {
      navigate(`/surprise-sub-category/${servicesubCategory}`, {
        state: categoryData,
      });
    } else if (servicesubCategory === "grocery_subscription") {
      navigate(`/grocery-sub-category/${servicesubCategory}`, {
        state: categoryData,
      });
    } else {
      navigate(`/sub-category/${servicesubCategory}`, { state: categoryData });
    }
  };

  //Filtering Serice Categories
  const selectedServiceCategory = filteredServiceCategory(
    serviceCategories,
    category
  );

  // Filtering sub services
  const subServicesFiltered = filterSubCategory(subData, categoryId);

  useEffect(() => {
    if (selectedServiceCategory) {
      setCategoryId(selectedServiceCategory[0]?._id);
    }
  }, [
    isSuccess,
    category,
    subSuccess,
    subLoading,
    subLoading,
    subData,
    categoryId,
  ]);
  return (
    <div className="category-detail-main-container">
      {selectedServiceCategory &&
        selectedServiceCategory.map((mainServiceCategory, index) => (
          <div key={index}>
            <div className="category-header-wrapper">
              <Image
                className="card-image-wrapper"
                cloudName="petaverse"
                publicId={mainServiceCategory?.category_banner_url}
              >
                <Transformation crop="scale" />
              </Image>
              <h1 className="servie-category-header">
                {`${mainServiceCategory?.category_name} Requests`}
              </h1>
            </div>
            <div className="category-header-wrapper-para-wrapper">
              <p>{mainServiceCategory?.category_details}</p>
            </div>
          </div>
        ))}
      <div className="subservices-card-wrapper">
        {subServicesFiltered &&
          subServicesFiltered.map((subService, index) => {
            return (
              <div
                key={index}
                className="subservices-card"
                onClick={() => handleNavigate(subService.sub_service_slug)}
              >
                <div className="subservice-icon-wrapper">
                  <Image
                    className="subservices-icons"
                    alt="transcript icon"
                    cloudName="petaverse"
                    publicId={subService?.sub_service_icon}
                  >
                    <Transformation crop="scale" />
                  </Image>
                </div>
                <div className="card-tile-wrapper">
                  <h2>{subService.sub_service_title}</h2>
                  <p>{subService.sub_service_details}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubServiceCard;
