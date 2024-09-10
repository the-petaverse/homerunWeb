import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BackIcon from "../../../assets/back-arrow.png";
import "./ServiceDetailPage.css";
import NewRequest from "../../../components/newRequest/NewRequest";
import {
  useGetRequestSubCategoryQuery,
  // useGetRequestCategoriesQuery,
} from "../../../services/requestsCategory/requestApi";
import CustomNote from "../../../components/customNote/CustomNote";
import CustomEstimation from "../../../components/customEstimation/CustomEstimation";
import { ArrowLeft } from "iconsax-react";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [serviceData, setServiceData] = useState([]);
  const [requestId, setRequestId] = useState();
  const [subRequestId, setSubRequestId] = useState();
  const [formStage, setFormStage] = useState(0);
  const { subcategory } = useParams();

  const { state } = location;

  const category = state?.category;

  // console.log({ state });
  const {
    data: subData,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useGetRequestSubCategoryQuery();

  // console.log({ subcategory });

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

  const handleRouteBack = () => {
    console.log(123);
    navigate(-1);
  };

  console.log()
  return (
    <>
      {/* <Navbar /> */}
      <div className="service-detail-main-container">
        <div className="service-left-container">
          <button onClick={handleRouteBack} className="back-arrow-wrapper">
            <ArrowLeft color="#333" size={18} />
            <span>Back</span>
          </button>
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
              <NewRequest
                formStage={formStage}
                setFormStage={setFormStage}
                subcategory={subcategory}
                category={category}
                requestId={requestId}
                subRequestId={subRequestId}
              />
            </div>
          </div>
        </div>
        <div className="service-right-container">
          
          <CustomNote />
          <CustomEstimation />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ServiceDetailPage;
