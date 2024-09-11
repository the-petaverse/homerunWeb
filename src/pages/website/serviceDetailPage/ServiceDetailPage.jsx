import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    filterServcies();
  }, [isSuccess]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="service-detail-main-container">
        <div className="service-left-container">
          <div className="back-arrow-wrapper">
            <img src={BackIcon} alt="back button" />
            <span>Back</span>
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
            </div>
          </div>
        </div>
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
      {/* <Footer /> */}
    </>
  );
};

export default ServiceDetailPage;
