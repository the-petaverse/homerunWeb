import React, { useState } from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutImg from "../../assets/about.png";
import EverythinYouNeed from "../../components/everything/EverythinYouNeed";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";

const Services = () => {
  const { data, isLoading, isFetching, error, isSuccess } =
    useGetRequestCategoriesQuery();

  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  return (
    <div>
      {/* <Navbar handleOpenSideBar={handleOpenSideBar} /> */}
      {/* <div className="services-main-container">
        <div className="header-title-wrapper">
          <h2>Why we are the preffered</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="service-image-container">
          <img src={AboutImg} alt="" className="service-image" />
        </div>
      </div> */}

      <div className="main-service-card-container">
        <div className="everything-header-wrapper">
          <h2>Select of the services to continue.</h2>
        </div>
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
                    <div>
                      <h3>{serviceData.category_name}</h3>
                      <p>{serviceData.category_details}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        {isLoading ||
          (isFetching && (
            <div className="service-loader-holder">
              <h2>Please wait........</h2>
              <PropagateLoader color="#262262" size={30} />
            </div>
          ))}
      </div>
      <EverythinYouNeed />
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
    </div>
  );
};

export default Services;
