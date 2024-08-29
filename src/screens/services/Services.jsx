import React, { useState } from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Service from "../../assets/service.png";
import TranscriptImage from "../../assets/service-trans.png";
import GrocyImage from "../../assets/service-grocy.png";
import SurpriseImage from "../../assets/service-surprise.png";
import HotelImage from "../../assets/service-hotel.png";
import PropertyImage from "../../assets/service-property.png";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import Hq from "../../components/hq/Hq";

import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";
import { Link } from "react-router-dom";

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
    <>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="services-main-container">
        <div>
          <h1>What We Do</h1>
        </div>
        <div className="serices-header-wrapper">
          <div className="header-image-wrapper">
            <img src={Service} alt="service-image" className="service-image" />
          </div>
          <div className="service-image-container">
            <p>
              At Homerun, we offer a comprehensive range of services designed to
              make your life easier, whether you're abroad or at home. Discover
              the convenience and efficiency of having your errands handled by a
              team you can trust.
            </p>
          </div>
        </div>
        <div className="service-cards-wrapper">
          <div className="services-card">
            <img
              src={TranscriptImage}
              alt="transcript"
              className="service-images"
            />
            <div className="card-right-holder">
              <h1>Transcript And Document Retrieval</h1>
              <p>
                Need important documents from institutions back home? We obtain
                credeimport Hq from; ntials and other necessary documents on
                your behalf, saving you time and hassle.
              </p>
              <div className="service-btn">
                <Link to={"/request-category/transcript"}>
                  Post this request
                </Link>
              </div>
            </div>
          </div>
          <div className="services-card">
            <img src={GrocyImage} alt="transcript" className="service-images" />
            <div className="card-right-holder">
              <h1>Grocery and Food Delivery</h1>
              <p>
                Enjoy the convenience of having groceries and food items
                delivered to your door, both locally and internationally.
                Freshness and quality are guaranteed with every delivery.
              </p>
              <div className="service-btn">
                <Link to={"/request-category/grocery"}>Post this request</Link>
              </div>
            </div>
          </div>
          <div className="services-card">
            <img
              src={SurpriseImage}
              alt="transcript"
              className="service-images"
            />
            <div className="card-right-holder">
              <h1>Surprise Packages</h1>
              <p>
                Add a touch of joy to your day with our surprise packages.
                Whether it's a gift for a loved one or a treat for yourself, we
                deliver delightful surprises that brighten your day.
              </p>
              <div className="service-btn">
                <Link to={"/request-category/surprise"}>Post this request</Link>
              </div>
            </div>
          </div>
          <div className="services-card">
            <img src={HotelImage} alt="transcript" className="service-images" />
            <div className="card-right-holder">
              <h1>Hotel and Car Booking</h1>
              <p>
                Secure hotel accommodations and recreation centers effortlessly.
                Whether for business or leisure, we ensure your stay is
                comfortable and enjoyable.
              </p>
              <div className="service-btn">
                <Link to={"/request-category/hotel"}>Post this request</Link>
              </div>
            </div>
          </div>
          <div className="services-card">
            <img
              src={PropertyImage}
              alt="transcript"
              className="service-images"
            />
            <div className="card-right-holder">
              <h1>Property Inspection</h1>
              <p>
                Seamlessly acquire property in your home country while you’re
                abroad. Our expert team will handle every detail, ensuring a
                smooth and stress-free process.
              </p>
              <div className="service-btn">
                <Link to={"/request-category/property"}>Post this request</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
    </>
  );
};

export default Services;
