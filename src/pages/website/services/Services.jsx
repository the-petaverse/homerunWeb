import React, { useState } from "react";
import "./Services.css";
import Service from "../../../assets/service.png";
import TranscriptImage from "../../../assets/service-trans.png";
import GrocyImage from "../../../assets/service-grocy.png";
import SurpriseImage from "../../../assets/service-surprise.png";
import HotelImage from "../../../assets/service-hotel.png";
import PropertyImage from "../../../assets/service-property.png";
import MainSideBar from "../../../components/mainSideBar/MainSideBar";
// import Hq from "../../components/hq/Hq";

import { useGetRequestCategoriesQuery } from "../../../services/requestsCategory/requestApi";
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


  const serviceData = [
    {
      id: 1,
      title: "Transcript And Document Retrieval",
      description:
        "Need important documents from institutions back home? We obtain credentials and other necessary documents on your behalf, saving you time and hassle.",
      imageSrc: TranscriptImage,
      link: "/request-category/transcript",
    },
    {
      id: 2,
      title: "Grocery and Food Delivery",
      description:
        "Enjoy the convenience of having groceries and food items delivered to your door, both locally and internationally. Freshness and quality are guaranteed with every delivery.",
      imageSrc: GrocyImage,
      link: "/request-category/grocery",
    },
    {
      id: 3,
      title: "Surprise Packages",
      description:
        "Add a touch of joy to your day with our surprise packages. Whether it's a gift for a loved one or a treat for yourself, we deliver delightful surprises that brighten your day.",
      imageSrc: SurpriseImage,
      link: "/request-category/surprise",
    },
    {
      id: 4,
      title: "Hotel and Car Booking",
      description:
        "Secure hotel accommodations and recreation centers effortlessly. Whether for business or leisure, we ensure your stay is comfortable and enjoyable.",
      imageSrc: HotelImage,
      link: "/request-category/hotel",
    },
    {
      id: 5,
      title: "Property Inspection",
      description:
        "Seamlessly acquire property in your home country while you’re abroad. Our expert team will handle every detail, ensuring a smooth and stress-free process.",
      imageSrc: PropertyImage,
      link: "/request-category/property",
    },
  ];
  return (
    <>
      {/* <Navbar handleOpenSideBar={handleOpenSideBar} /> */}
      <div className="services-main-container">
        <div>
          <h1>What We Do</h1>
        </div>
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
              At Homerun, we offer a comprehensive range of services designed to
              make your life easier, whether you're abroad or at home. Discover
              the convenience and efficiency of having your errands handled by a
              team you can trust.
            </p>
          </div>
        </div>
        <div className="service-cards-wrapper">
          {serviceData.map((service) => (
            <div className="services-card" key={service.id}>
              <img
                src={service.imageSrc}
                alt={service.title}
                className="service-images"
              />
              <div className="card-right-holder">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <div className="service-btn">
                  <Link to={service.link}>Post this request</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
    </>
  );
};

export default Services;
