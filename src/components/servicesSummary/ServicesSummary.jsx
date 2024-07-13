import React, { useState } from "react";
import AboutImg from "../../assets/about.png";
import { Link } from "react-router-dom";
import "./ServicesSummary.css";
import EverythinYouNeed from "../everything/EverythinYouNeed";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#262262",
};

const ServicesSummary = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const { data, isLoading, isFetching, error, isSuccess } =
    useGetRequestCategoriesQuery();

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <div className="main-service-card-container">
        <div className="services-summary-wrapper">
          <h2>Our services</h2>
        </div>

        {isLoading ||
          (isFetching && (
            <div className="service-loader-holder">
              <h2>Please wait........</h2>
              <PropagateLoader color="#262262" size={30} />
            </div>
          ))}
        <div className="service-card-holder">
          {data?.requestsCategory &&
            data?.requestsCategory.map((serviceData, index) => {
              return (
                <Link
                  to={"/request-category/" + serviceData.slug_name}
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
