import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../../../assets/service.png";
import TranscriptImage from "../../../assets/service-trans.png";
import GrocyImage from "../../../assets/service-grocy.png";
import SurpriseImage from "../../../assets/service-surprise.png";
import HotelImage from "../../../assets/service-hotel.png";
import PropertyImage from "../../../assets/service-property.png";
import MainSideBar from "../../../components/mainSideBar/MainSideBar";
import CustomButton from "../../../components/customButton/CustomButton";
// import Hq from "../../components/hq/Hq";

import { useGetRequestCategoriesQuery } from "../../../services/requestsCategory/requestApi";
import { Link, useNavigate } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import Preloader from "../../../components/preloader/Preloader";
import ComigSoonOverlay from "../../../components/ComigSoonOverlay";
import MainServiceCard from "../../../components/MainServiceCard";

const Services = () => {
  const navigate = useNavigate();
  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleClickBtn = (serviceLink) => {
    console.log("object");
  };
  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  const handleNavigate = (serviceName) => {
    if (
      serviceName === "grocery_food" ||
      serviceName === "hotel_car_booking" ||
      serviceName === "surprise_gifts"
    ) {
      navigate(`/our-services`);
    } else {
      navigate(`/request-category/${serviceName}`);
    }
  };

  useEffect(() => {}, [isSuccess]);

  return (
    <div className="services-overall-container">
      {isSuccess ? (
        <div className="services-main-container">
          <h1 className="text-5xl font-bold mb-3">What We Do</h1>
          <div className="serices-header-wrapper">
            <div className="header-image-wrapper">
              <img
                src={Service}
                alt="service-image"
                className="service-image"
              />
            </div>
            <div className="service-image-container">
              <p>
                At Homerun, we offer a comprehensive range of services designed
                to make your life easier, whether you're abroad or at home.
                Discover the convenience and efficiency of having your errands
                handled by a team you can trust.
              </p>
            </div>
          </div>
          <div className="service-cards-wrapper">
            {serviceCategories &&
              serviceCategories?.serviceCategory?.map((service) => (
                <MainServiceCard
                  service={service}
                  handleNavigate={handleNavigate}
                />
              ))}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Services;
