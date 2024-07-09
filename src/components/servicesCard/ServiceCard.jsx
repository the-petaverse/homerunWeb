import React, { useEffect, useState } from "react";
import "./ServiceCard.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {
  useGetRequestCategoriesQuery,
  useGetRequestSubCategoryQuery,
} from "../../services/requestsCategory/requestApi";

const ServiceCard = ({ category }) => {
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

  if (isLoading) {
    console.log("isLoading");
  }

  if (subError) {
    console.log(data);
  }

  if (subLoading) {
    console.log("subLoading.....");
  }
  if (subFetching) {
    console.log("subFetching.....");
  }
  if (subSuccess) {
    console.log(subData);
  }

  const filterSubCategory = () => {
    if (categoryId) {
      let filteredSubCategory = subData?.subRequestsCategory?.filter(
        (subCategoryData) => subCategoryData.category_id === categoryId
      );
      setSubCategoryList(filteredSubCategory);
    }
  };

  const filterCategoryList = () => {
    if (isSuccess) {
      let filteredCategory = data?.requestsCategory?.filter(
        (categoryData) => categoryData.slug_name === category
      );

      setCategoryId(filteredCategory[0]._id);
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
        <h1>{category}</h1>
      </div>
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
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ServiceCard;
