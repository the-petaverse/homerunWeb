import React from "react";
import "./SurprisesSubServices.css";
import SurpriseSubServices from "../../../components/surpriseSubServices/SurpriseSubServices";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomStore from "../../../components/customStore/CustomStore";
import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import { filterSubCategory } from "../../../util/filterSubCategories";
import { subServiceData } from "../../../data/subCategoryData";

const SurprisesSubServices = () => {
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  let serviceCatory;

  if (location.state) {
    const { category } = location.state;
    serviceCatory = category;
  }
  const serviceDetails = {
    subCategory: subcategory,
    category: serviceCatory,
  };

  //Filter subcategory to get the name of the category
  const subServices = filterSubCategory(subServiceData, subcategory);
  // console.log(categoryName);

  const navigateToOderScreen = (serviceName) => {
    navigate(`/sub-category/${serviceName}`, { state: serviceDetails });
  };

  return (
    <div>
      <div className="surprise-back-button-container">
        <div className="surprise-back-button-wrapper">
          <CustomBackButton title="Back" />
        </div>
        <div className="surprise-slate-header-wrapper">
          <h2>{subServices && subServices[0]?.name}</h2>
          {/* <p>Please fill in the following details to make your request. </p> */}
        </div>
      </div>
      <div>
        {subcategory === "our_packages" && (
          <SurpriseSubServices navigateToOderScreen={navigateToOderScreen} />
        )}
        {(subcategory === "gift_items" ||
          subcategory === "cake_items" ||
          subcategory === "custom_grocery") && <CustomStore />}
      </div>
    </div>
  );
};

export default SurprisesSubServices;
