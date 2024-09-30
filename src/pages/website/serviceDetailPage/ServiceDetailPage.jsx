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
  }
  console.log(subData);
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
  // console.log(serviceData);

  useEffect(() => {
    filterRequestedServcie();
    if (screenSize.width >= 1024) {
      customScrollSidebar();
    }
  }, [isSuccess, screenSize.width]);
  return (
    <div>
      {/* <Navbar /> */}
      {/* {serviceCategory &&
        (serviceCategory === "hotel" ||
          serviceCategory === "surprise" ||
          serviceCategory === "grocery") && (
          <ServiceHeader
            serviceCategory={serviceCategory}
            serviceSubCategory={serviceSubCategory}
            serviceName={subcategory}
          />
        )} */}
      <div>
        <div className="service-detail-main-container">
          {/* {serviceCategory &&
            (serviceCategory === "official_document" ||
              serviceCategory === "property_errand") && ( */}
          <div className="service-left-container">
            <div className="main-back-button-container">
              <div className="main-back-button-wrapper">
                <CustomBackButton title="Back" />
              </div>
              <div className="new-request-slate-header-wrapper">
                <h2 className="new-request-main-header">
                  {serviceData && serviceData[0]?.sub_service_title}
                </h2>
                <p>
                  Please fill in the following details to make your request.
                </p>
              </div>
            </div>
            <div className="main-service-detail-page-container">
              {serviceData &&
                serviceData.map((data, index) => {
                  return (
                    <div key={index} className="service-detail-header">
                      <h1>{data?.sub_category_title}</h1>
                    </div>
                  );
                })}
              <div className="detail-form-main-container">
                {(subcategory === "transcript_collection" ||
                  subcategory ===
                    "higher-education-certificate-collection") && (
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
                {serviceCategory && serviceCategory === "surprise" && (
                  <SurpriseOrderGroup
                    serviceName={subcategory}
                    serviceSubCategory={serviceSubCategory}
                    serviceCategory={serviceCategory}
                  />
                )}
                {serviceCategory && serviceCategory === "grocery" && (
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
              </div>
            </div>
          </div>
          {/* )} */}
          <div
            className={
              screenSize.width < 1024 ? "sidebar-with-small-screen" : "sidebar"
            }
          >
            <div
              className={
                screenSize.width < 1024
                  ? "service-right-container-with-small-screen"
                  : "service-right-container"
              }
            >
              <div className="top-note-wrapper">
                <CustomNote serviceData={serviceData} />
                <h3>All funds paid arenonrefundable.</h3>
              </div>
              <div className="estimatio-wrapper">
                <CustomEstimation serviceData={serviceData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
