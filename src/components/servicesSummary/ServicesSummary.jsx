import React from "react";
import AboutImg from "../../assets/about.png";
import { Link } from "react-router-dom";
import EverythinYouNeed from "../everything/EverythinYouNeed";

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
  return (
    <div>
      <div className="main-service-card-container">
        <div className="services-summary-wrapper">
          <h2>Our services</h2>
        </div>
        <div className="service-card-holder">
          {servicesList.map((serviceData, index) => {
            return (
              <Link
                to={"/request-category/" + serviceData.category}
                className="inner-card-wrapper"
              >
                <div key={index}>
                  <div>
                    <img src={AboutImg} alt="" className="service-card-image" />
                  </div>
                  <div>
                    <h3>{serviceData.title}</h3>
                    <p>{serviceData.description}</p>
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
