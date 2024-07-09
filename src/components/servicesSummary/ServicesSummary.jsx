import React from "react";
import AboutImg from "../../assets/about.png";
import { Link } from "react-router-dom";
import EverythinYouNeed from "../everything/EverythinYouNeed";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";

const servicesList = [
  {
    id: "1",
    category: "documents",
    title: "Passport Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "2",
    category: "documents",
    title: "Transcript Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "3",
    category: "hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "4",
    category: "hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
];

const ServicesSummary = () => {
  const { data, isLoading, isFetching, error, isSuccess } =
    useGetRequestCategoriesQuery();

  console.log(data?.requestsCategory);
  return (
    <div>
      <div className="main-service-card-container">
        <div className="services-summary-wrapper">
          <h2>Our services</h2>
        </div>
        <div className="service-card-holder">
          {data?.requestsCategory &&
            data?.requestsCategory.map((serviceData, index) => {
              return (
                <Link
                  to={"/request-category/" + serviceData.category}
                  className="inner-card-wrapper"
                  key={index}
                >
                  <div>
                    <div>
                      <img
                        src={AboutImg}
                        alt=""
                        className="service-card-image"
                      />
                    </div>
                    <div className="category-detail-wrapper">
                      <h3>{serviceData.category_name}</h3>
                      <p>{serviceData.category_details}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div className="view-all-button-wrapper">
        <Link to="/requests-list" className="view-all-btn">
          <h1>view all services</h1>
        </Link>
      </div>
      <EverythinYouNeed />
    </div>
  );
};

export default ServicesSummary;
