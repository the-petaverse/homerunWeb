import React, { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import BackIcon from "/images/back-arrow.png";
import "./ServiceDetailPage.css";
import NewRequest from "../../../components/newRequest/NewRequest";
import {
  useGetRequestSubCategoryQuery,
  // useGetRequestCategoriesQuery,
} from "../../../services/requestsCategory/requestApi";
import CustomNote from "../../../components/customNote/CustomNote";
import CustomEstimation from "../../../components/customEstimation/CustomEstimation";
import ClientTestimonials from "../../../components/clientTestimonials/ClientTestimonials";
import BirthCertificate from "../../../components/birthCertificate/BirthCertificate";
import PassportPoliceReport from "../../../components/passportPoliceReport/PassportPoliceReport";
import SingleParentCertificate from "../../../components/singleParentCertificate/SingleParentCertificate";
import PropertErrand from "../../../components/propertErrand/PropertErrand";
import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import { subServiceData } from "../../../data/subCategoryData";
import { filterSubCategory } from "../../../util/filterSubCategories";
import { customScrollSidebar } from "../../../util/stickyFunction";
import OrderWithTopBanner from "../../../components/orderWithTopBanner/OrderWithTopBanner";
import carImage from "/images/big-car.png";
import ServiceHeader from "../../../components/serviceHeader/ServiceHeader";
import SurpriseOrderGroup from "../../../components/surpriseOrderGroup/SurpriseOrderGroup";
import GroceryOrderGroup from "../../../components/groceryOrderGroup/GroceryOrderGroup";
import useScreenSize from "../../../helpers/useScreenSize";

const ServiceDetailPage = () => {
  const screenSize = useScreenSize();
  const location = useLocation();
  const [serviceData, setServiceData] = useState([]);
  const [requestId, setRequestId] = useState();
  const [subRequestId, setSubRequestId] = useState();
  const [formStage, setFormStage] = useState(0);
  const { subcategory } = useParams();
  console.log(subcategory);
  const {
    data: subData,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useGetRequestSubCategoryQuery();

  //Data received from router Dom
  let serviceSubCategory;
  let serviceCategory;

  if (location.state) {
    const { category, subCategory } = location?.state;
    serviceSubCategory = subCategory;
    serviceCategory = category;
    console.log(serviceCategory);
  }

  const filterRequestedServcie = () => {
    if (isSuccess) {
      let filteredService = subData?.serviceSubCategory.filter(
        (requestedService) => requestedService?.sub_service_slug === subcategory
      );
      setRequestId(filteredService[0]?.main_category_id);
      setSubRequestId(filteredService[0]?._id);
      setServiceData(filteredService);
    }
  };
  // const subServices = filterSubCategory(subServiceData, subcategory);
  //Implementation to make sidebar sticky

  console.log(serviceSubCategory, "Show up");
  useEffect(() => {
    filterRequestedServcie();
    if (screenSize.width >= 1024) {
      customScrollSidebar();
    }
  }, [isSuccess, screenSize.width]);
  return (
    <div className="main-order-page-container">
      {(serviceSubCategory === "hamper-items" ||
        serviceSubCategory === "grocery_bundles" ||
        serviceSubCategory === "party-packs") && (
        <ServiceHeader
          serviceCategory={serviceCategory}
          serviceSubCategory={serviceSubCategory}
          serviceName={subcategory}
        />
      )}
      {(subcategory === "property-mangement" ||
        subcategory === "property-post-purchase" ||
        subcategory === "property-document-processing" ||
        subcategory === "pre-purchase-verification" ||
        subcategory === "cake-items" ||
        subcategory === "gift-items" ||
        subcategory === "transcript_collection" ||
        subcategory === "higher-education-certificate-collection" ||
        subcategory === "hotel-booking" ||
        subcategory === "car-booking" ||
        subcategory === "birth-certificate" ||
        subcategory === "passport_collection" ||
        subcategory === "police-report" ||
        subcategory === "other-certificate" ||
        subcategory === "sworn-affidavits" ||
        subcategory === "single-parent-certificate") && (
        <div>
          <CustomBackButton title="Back" />
          <div>
            <h2>{serviceData && serviceData[0]?.sub_service_title}</h2>
            <p>Please fill in the following details to make your request.</p>
          </div>
        </div>
      )}
      <div className="inner-cointainer-wrapping-left-right-section">
        <div className="left-main-container">
          {(subcategory === "property-mangement" ||
            subcategory === "property-post-purchase" ||
            subcategory === "property-document-processing" ||
            subcategory === "pre-purchase-verification") && (
            <PropertErrand
              formStage={formStage}
              setFormStage={setFormStage}
              subcategory={subcategory}
              requestId={requestId}
              subRequestId={subRequestId}
              serviceData={serviceData}
            />
          )}
          {(serviceCategory === "surprise_gifts" ||
            subcategory === "cake-items" ||
            serviceSubCategory === "hamper-items") && (
            <SurpriseOrderGroup
              serviceName={subcategory}
              serviceSubCategory={serviceSubCategory}
              serviceCategory={serviceCategory}
              serviceData={serviceData}
            />
          )}
          {(subcategory === "transcript_collection" ||
            subcategory === "higher-education-certificate-collection") && (
            <NewRequest
              formStage={formStage}
              setFormStage={setFormStage}
              subcategory={subcategory}
              requestId={requestId}
              subRequestId={subRequestId}
              serviceCategory={serviceCategory}
              serviceData={serviceData}
            />
          )}
          {serviceCategory && serviceCategory === "grocery_food" && (
            <GroceryOrderGroup
              serviceName={subcategory}
              serviceSubCategory={serviceSubCategory}
              serviceCategory={serviceCategory}
            />
          )}
          {subcategory &&
            (subcategory === "hotel-booking" ||
              subcategory === "car-booking") && (
              <OrderWithTopBanner
                serviceName={subcategory}
                serviceSubCategory={serviceSubCategory}
                serviceCategory={serviceCategory}
                serviceData={serviceData}
              />
            )}
          {subcategory === "birth-certificate" && (
            <BirthCertificate
              formStage={formStage}
              setFormStage={setFormStage}
              serviceSubCategory={serviceSubCategory}
              serviceCategory={serviceCategory}
              requestId={requestId}
              subRequestId={subRequestId}
              serviceData={serviceData}
            />
          )}
          {(subcategory === "passport_collection" ||
            subcategory === "police-report" ||
            subcategory === "other-certificate" ||
            subcategory === "sworn-affidavits") && (
            <PassportPoliceReport
              formStage={formStage}
              setFormStage={setFormStage}
              subcategory={subcategory}
              requestId={requestId}
              subRequestId={subRequestId}
              serviceData={serviceData}
            />
          )}
          {subcategory === "single-parent-certificate" && (
            <SingleParentCertificate
              formStage={formStage}
              setFormStage={setFormStage}
              subcategory={subcategory}
              requestId={requestId}
              subRequestId={subRequestId}
              serviceData={serviceData}
            />
          )}
        </div>
        <div className="sidebar-with-small-screen">
          <div className={"service-right-container-with-small-screen"}>
            {/* <div className="top-note-wrapper">
              <CustomNote serviceData={serviceData} />
              <h3>All funds paid arenonrefundable.</h3>
            </div> */}
            <div className="estimatio-wrapper">
              <CustomEstimation serviceData={serviceData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
