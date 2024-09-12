import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import BackIcon from "../../../assets/back-arrow.png";
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

const ServiceDetailPage = () => {
  const [serviceData, setServiceData] = useState([]);
  const [requestId, setRequestId] = useState();
  const [subRequestId, setSubRequestId] = useState();
  const [formStage, setFormStage] = useState(0);
  const { subcategory } = useParams();
  const {
    data: subData,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useGetRequestSubCategoryQuery();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const filterServcies = () => {
    if (isSuccess) {
      let filteredService = subData?.subRequestsCategory.filter(
        (subservice) => subservice?.sub_category_slug === subcategory
      );
      setRequestId(filteredService[0]?.category_id);
      setSubRequestId(filteredService[0]?._id);
      setServiceData(filteredService);
    }
  };
  const subServices = filterSubCategory(subServiceData, subcategory);

  //Implementation to make sidebar sticky
  const customScrollSidebar = () => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let sidebar_content = document.getElementsByClassName(
      "service-right-container"
    )[0];

    window.onscroll = () => {
      let scrollTop = window.scrollY;
      let viewportHeight = window.innerHeight;
      let contentHeight = sidebar_content.getBoundingClientRect().height;
      let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

      if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
        sidebar_content.style.transform = `translateY(-${
          viewportHeight - viewportHeight + sidebarTop
        }px)`;
        sidebar_content.style.position = "fixed";
      } else {
        sidebar_content.style.transform = "";
        sidebar_content.style.position = "";
      }
    };
  };

  useEffect(() => {
    filterServcies();
    customScrollSidebar();
  }, [isSuccess]);
  return (
    <>
      {/* <Navbar /> */}
      <div className="service-detail-main-container">
        <div className="top-holder">
          <div className="main-back-button-container">
            <div className="main-back-button-wrapper">
              <CustomBackButton title="Back" />
            </div>
            <div className="slate-header-wrapper">
              <h2>{subServices && subServices[0]?.name}</h2>
              <p>Please fill in the following details to make your request. </p>
            </div>
          </div>
        </div>
        <div className="bottom-holder">
          <div className="service-left-container">
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
                {(subcategory === "transcript-processing" ||
                  subcategory === "higher-certificate-collection") && (
                  <NewRequest
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {subcategory === "birth-certificate-collection" && (
                  <BirthCertificate
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {(subcategory === "passport_collection" ||
                  subcategory === "police-report" ||
                  subcategory === "other_collection" ||
                  subcategory === "sworn-afidavit") && (
                  <PassportPoliceReport
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {subcategory === "single_parent_certificate" && (
                  <SingleParentCertificate
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {(subcategory === "property-management-services" ||
                  subcategory === "post-purchase-development" ||
                  subcategory === "property-document-follow-up" ||
                  subcategory === "pre-purchase-verification") && (
                  <PropertErrand
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="service-right-container">
              <div className="top-note-wrapper">
                <CustomNote />
                <h3>All funds paid arenonrefundable.</h3>
              </div>
              <div className="estimatio-wrapper">
                <CustomEstimation />
              </div>
              {/* <CustomEstimation /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ServiceDetailPage;
