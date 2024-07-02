import React, { useState } from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutImg from "../../assets/about.png";
import EverythinYouNeed from "../../components/everything/EverythinYouNeed";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import { Link } from "react-router-dom";

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
  {
    id: "5",
    category: "hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "6",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "7",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "8",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "9",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "10",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "11",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "12",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
];
const Services = () => {
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

      <EverythinYouNeed />
      <div className="main-service-card-container">
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
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
    </div>
  );
};

export default Services;
