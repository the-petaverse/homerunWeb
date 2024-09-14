import React, { useEffect, useState } from "react";
import "./SubServiceCard.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import SubTranscriptIcon from "../../assets/sub-transcript.png";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
  useGetRequestCategoriesQuery,
  useGetRequestSubCategoryQuery,
} from "../../services/requestsCategory/requestApi";
import { subServiceData } from "../../data/subCategoryData";
import { serviceCategory } from "../../data/categoryData";

const SubServiceCard = ({ category }) => {
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const { data, isLoading, isFetching, error, isSuccess } =
    useGetRequestCategoriesQuery();
  const {
    data: subData,
    isLoading: subLoading,
    isFetching: subFetching,
    error: subError,
    isLoading: subSuccess,
  } = useGetRequestSubCategoryQuery();

  const categoryData = {
    category: category,
  };
  const handleNavigate = (servicesubCategory) => {
    //User the serviceSub category to determin the navigation
    //1. Car list
    //2. Hampers
    //3. Party packs
    //4. Grocery bundles
    //All of the above goes to the same page
    if (
      servicesubCategory === "car_booking" ||
      servicesubCategory === "grocery_bundles" ||
      servicesubCategory === "party_packs" ||
      servicesubCategory === "hampers" ||
      servicesubCategory === "hotel_booking"
    ) {
      navigate(`/services-sub-category/${servicesubCategory}`, {
        state: categoryData,
      });
    } else {
      navigate(`/sub-category/${servicesubCategory}`, { state: categoryData });
    }
  };
  // if (isLoading) {
  //   console.log("isLoading");
  // }

  // if (subError) {
  //   console.log(data);
  // }

  // if (subLoading) {
  //   console.log("subLoading.....");
  // }
  // if (subFetching) {
  //   console.log("subFetching.....");
  // }
  // if (subSuccess) {
  //   console.log(subData);
  // }

  const filterSubCategory = () => {
    if (category) {
      let filteredSubCategory = subServiceData.filter(
        (subCategoryData) => subCategoryData?.category_id === category
      );

      setSubCategoryList(filteredSubCategory);
    }
  };
  // const filterCategoryList = () => {
  //   if (isSuccess) {
  //     let filteredCategory = serviceCategory?.filter(
  //       (categoryData) => categoryData.slug_name === category
  //     );

  //     console.log(serviceCategory);
  //     setCategoryId(filteredCategory.id);
  //   }
  // };

  useEffect(() => {
    // filterCategoryList();
    filterSubCategory();
    // console.log(subData);
  }, [isSuccess, category, subSuccess, subLoading, subLoading, subData]);
  return (
    <div className="category-detail-main-container">
      <div className="category-header-wrapper">
        {/* <h1>{category}</h1> */}
        <h1>Transcript, Certificates & Official Documents Requests</h1>
      </div>
      <div className="category-header-wrapper-para-wrapper">
        <p>
          Need important documents from institutions back home? We obtain
          credentials and other necessary documents on your behalf, saving you
          time and hassle.
        </p>
      </div>
      {/* {subLoading || subFetching ? (
        <div className="service-loader-holder">
          <h2>Please wait........</h2>
          <PropagateLoader color="#262262" size={30} />
        </div>
        
      ) : (

        <div className="cat-card-parent-wrapper">
          {subCategoryList &&
            subCategoryList?.map((ctegoryData, index) => {
              return (
                <Link
                  to={"/sub-category/" + ctegoryData?.sub_category_slug}
                  key={index}
                >
                  <div className="main-category-card-container">
                    <img src={Logo} alt="category" className="category-image" />
                    <div className="category-card-wrapper">
                      <h4>{ctegoryData?.sub_category_title}</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      )} */}

      <div className="subservices-card-wrapper">
        {subCategoryList &&
          subCategoryList.map((subService, index) => {
            return (
              <div
                key={index}
                className="subservices-card"
                onClick={() => handleNavigate(subService.slug)}
              >
                <div className="subservice-icon-wrapper">
                  <img
                    src={subService.icons}
                    alt="transcript icon"
                    className="subservices-icons"
                  />
                </div>
                <div className="card-tile-wrapper">
                  <h2>{subService.name}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubServiceCard;
