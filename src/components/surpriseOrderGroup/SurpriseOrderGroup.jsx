import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
// import BackIcon from "/images/back-arrow.png";

import "./SurpriseOrderGroup.css";

import CarRequest from "../carRequest/CarRequest";
import { customScrollSidebar } from "../../util/stickyFunction";
import AnniversaryRequest from "../anniversaryRequest/AnniversaryRequest";
import { useSelector } from "react-redux";
import OrderItemRequest from "../orderItemRequest/OrderItemRequest";

const SurpriseOrderGroup = ({
  serviceName,
  serviceSubCategory,
  serviceCategory,
  serviceData,
}) => {
  const cart = useSelector((state) => state.cart);
  // const [serviceData, setServiceData] = useState([]);
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

  // console.log(serviceName, serviceSubCategory, serviceCategory, "Yepe");

  //Implementation to make sidebar sticky
  console.log(serviceSubCategory, serviceCategory, "again");

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
                {serviceName === "surprise-packages" && (
                  <AnniversaryRequest
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {serviceName === "gift-items" && (
                  <OrderItemRequest
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {serviceName === "cake-items" && (
                  <OrderItemRequest
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {serviceSubCategory === "hamper-items" && (
                  <OrderItemRequest
                    formStage={formStage}
                    setFormStage={setFormStage}
                    subcategory={subcategory}
                    requestId={requestId}
                    subRequestId={subRequestId}
                  />
                )}
                {serviceSubCategory === "party-packs" && (
                  <OrderItemRequest
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

export default SurpriseOrderGroup;
