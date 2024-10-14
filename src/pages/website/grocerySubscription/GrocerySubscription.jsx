import React from "react";
import "./GrocerySubscription.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { filterSubCategory } from "../../../util/filterSubCategories";
import { subServiceData } from "../../../data/subCategoryData";
import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import GrocerySubscriptionCard from "../../../components/grocerySubscriptionCard/GrocerySubscriptionCard";

const GrocerySubscription = () => {
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

  const navigateToOderScreen = (serviceName) => {
    navigate(`/sub-category/${serviceName}`, { state: serviceDetails });
  };

  //Filter subcategory to get the name of the category
  const subServices = filterSubCategory(subServiceData, subcategory);
  console.log(serviceDetails);
  return (
    <div className="grocery-subscript-container">
      <div className="grocery-subscription-header-wrapper">
        <div className="brocery-subscription-header">
          <CustomBackButton title="Back" />
          <h2>{subServices && subServices[0]?.name}</h2>
        </div>
        <div className="grocer-subscription-toggle-tab-wrapper">
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
      <div className="grocery-subScription-card-outer-wrapper">
        <GrocerySubscriptionCard />
        <GrocerySubscriptionCard />
        <GrocerySubscriptionCard />
      </div>
    </div>
  );
};

export default GrocerySubscription;
