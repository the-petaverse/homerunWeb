import React, { useEffect, useState } from "react";
import "./ServiceCard.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const servicesList = [
  {
    id: "1",
    category: "documents",
    title: "passport-collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "2",
    category: "documents",
    title: "transcript-collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "3",
    category: "hospitality",
    title: "groceries",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "4",
    category: "hospitality",
    title: "groceries",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "5",
    category: "hospitality",
    title: "groceries",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "6",
    category: "documents",
    title: "certificates-collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
];
const ServiceCard = ({ category }) => {
  const [categoryList, setCategoryList] = useState([]);

  const filterCategoryList = () => {
    let filteredCategory = servicesList.filter(
      (categoryData) => categoryData.category === category
    );

    setCategoryList(filteredCategory);
  };

  useEffect(() => {
    filterCategoryList();
  }, []);
  return (
    <div className="category-detail-main-container">
      <div className="category-header-wrapper">
        <h1>{category}</h1>
      </div>
      <div className="cat-card-parent-wrapper">
        {categoryList &&
          categoryList.map((ctegoryData, index) => {
            return (
              <Link to={"/sub-category/" + ctegoryData.title} key={index}>
                <div className="main-category-card-container">
                  <img src={Logo} alt="category" className="category-image" />
                  <div className="category-card-wrapper">
                    <h4>{ctegoryData.title}</h4>
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
