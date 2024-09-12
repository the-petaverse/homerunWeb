import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
// import BackIcon from "/images/back-arrow.png";
import NewRequest from "../newRequest/NewRequest";
import "./OrderWithTopBanner.css";
// import {
//   useGetRequestSubCategoryQuery,
//   // useGetRequestCategoriesQuery,
// } from "../../../services/requestsCategory/requestApi";
// import CustomNote from "../components/customNote/CustomNote";
// import CustomEstimation from "../../../components/customEstimation/CustomEstimation";
// import ClientTestimonials from "../../../components/clientTestimonials/ClientTestimonials";
// import BirthCertificate from "../../../components/birthCertificate/BirthCertificate";
// import PassportPoliceReport from "../../../components/passportPoliceReport/PassportPoliceReport";
// import SingleParentCertificate from "../../../components/singleParentCertificate/SingleParentCertificate";
// import PropertErrand from "../../../components/propertErrand/PropertErrand";
// import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import { subServiceData } from "../../data/subCategoryData";
import { filterSubCategory } from "../../util/filterSubCategories";
// import { customScrollSidebar } from "../../util/stickyFunction";
import CustomBackButton from "../customBackButton/CustomBackButton";
import CustomNote from "../customNote/CustomNote";
import CustomEstimation from "../customEstimation/CustomEstimation";
import carImage from "/images/big-car.png";
import ClientTestimonials from "../clientTestimonials/ClientTestimonials";
import CarRequest from "../carRequest/CarRequest";

const OrderWithTopBanner = () => {
  const [serviceData, setServiceData] = useState([]);
  const [requestId, setRequestId] = useState();
  const [subRequestId, setSubRequestId] = useState();
  const [formStage, setFormStage] = useState(0);
  const { subcategory } = useParams();
  // const {
  //   data: subData,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   error,
  // } = useGetRequestSubCategoryQuery();

  // const filterServcies = () => {
  //   if (isSuccess) {
  //     let filteredService = subData?.subRequestsCategory.filter(
  //       (subservice) => subservice?.sub_category_slug === subcategory
  //     );
  //     setRequestId(filteredService[0]?.category_id);
  //     setSubRequestId(filteredService[0]?._id);
  //     setServiceData(filteredService);
  //   }
  // };
  const subServices = filterSubCategory(subServiceData, subcategory);

  //Implementation to make sidebar sticky
  const customScrollSidebar = async () => {
    let sidebar = await document.getElementsByClassName("sidebar")[0];
    let sidebar_content = await document.getElementsByClassName(
      "TopBannerRigh"
    )[0];

    window.onscroll = async () => {
      let scrollTop = await window.scrollY;
      let viewportHeight = await window.innerHeight;
      let contentHeight = await sidebar_content.getBoundingClientRect().height;
      let sidebarTop =
        (await sidebar.getBoundingClientRect().top) + window.pageYOffset;

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
    // filterServcies();
    customScrollSidebar();
  }, []);
  return (
    <>
      {/* <Navbar /> */}
      <div className="service-with-top-main-container">
        <div className="top-holder">
          <div className="top-banner-main-back-button-wrapper">
            <CustomBackButton title="Back" />
          </div>
          <div className="banner-slate-header-wrapper">
            <div className="car-image-wrapper">
              <img src={carImage} alt="car" />
            </div>
            <div className="service-top-banner-details">
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
        </div>
        <div className="bottom-holder">
          <div className="with-top-banner-left-container">
            <div className="main-service-detail-page-container">
              <div className="detail-form-main-container">
                <CarRequest
                  formStage={formStage}
                  setFormStage={setFormStage}
                  subcategory={subcategory}
                  requestId={requestId}
                  subRequestId={subRequestId}
                />
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="TopBannerRigh">
              <div className="with-top-banner-top-note-wrapper">
                <CustomNote />
                <h3>All funds paid arenonrefundable.</h3>
              </div>
              <div className="estimatio-wrapper">
                <CustomEstimation />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OrderWithTopBanner;
