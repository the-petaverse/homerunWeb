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
import HotelBanner from "/images/hotel-banner.png";
import { customScrollSidebar } from "../../util/stickyFunction";
import { hotelData } from "../../data/hotelData";
import HotelRequest from "../hotelRequest/HotelRequest";

const OrderWithTopBanner = ({
  serviceName,
  serviceSubCategory,
  serviceCategory,
}) => {
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

  // console.log(serviceName, serviceSubCategory, serviceCategory);

  //Implementation to make sidebar sticky

  useEffect(() => {
    // filterServcies();
    customScrollSidebar();
  }, []);
  return (
    <>
      {/* <Navbar /> */}

      <div className="service-with-top-main-container">
        <div className="bottom-holder">
          <div className="with-top-banner-left-container">
            <div className="main-service-detail-page-container">
              <div className="detail-form-main-container">
                {serviceSubCategory === "car_booking" && (
                  <CarRequest
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {serviceSubCategory === "hotel_booking" && (
                  <HotelRequest
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
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OrderWithTopBanner;
