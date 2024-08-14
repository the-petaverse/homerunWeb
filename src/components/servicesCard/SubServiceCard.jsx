import React, { useEffect, useState } from "react";
import "./SubServiceCard.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import SubTranscriptIcon from "../../assets/sub-transcript.png";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
  useGetRequestCategoriesQuery,
  useGetRequestSubCategoryQuery,
} from "../../services/requestsCategory/requestApi";

const subServiceData = [
  {
    id: "1",
    name: "Transcript",
    icons: "/images/sub-transcript.png",
  },
  {
    id: "1",
    name: "Transcript",
    icons: "/images/sub-transcript.png",
  },
  {
    id: "1",
    name: "Transcript",
    icons: "/images/sub-transcript.png",
  },
  {
    id: "1",
    name: "Transcript",
    icons: "/images/sub-transcript.png",
  },
];
const SubServiceCard = ({ category }) => {
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
    if (categoryId) {
      let filteredSubCategory = subData?.subRequestsCategory?.filter(
        (subCategoryData) => subCategoryData?.category_id === categoryId
      );
      setSubCategoryList(filteredSubCategory);
    }
  };

  const filterCategoryList = () => {
    if (isSuccess) {
      let filteredCategory = data?.requestsCategory?.filter(
        (categoryData) => categoryData.slug_name === category
      );

      setCategoryId(filteredCategory[0]?._id);
    }
  };

  useEffect(() => {
    filterCategoryList();
    filterSubCategory();
    // console.log(subData);
  }, [isSuccess, categoryId, subSuccess, subLoading, subLoading, subData]);
  return (
    <div className="category-detail-main-container">
      <div className="category-header-wrapper">
        {/* <h1>{category}</h1> */}
        <h1>Transcript, Certificates & Official Documents Requests</h1>
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
        {subServiceData &&
          subServiceData.map((subService, index) => {
            return (
              <div className="subservices-card">
                <img
                  src={subService.icons}
                  alt="transcript icon"
                  className="subservices-icons"
                />
                <h2>{subService.name}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SubServiceCard;
