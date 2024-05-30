import React from "react";
import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutImg from "../../assets/about.png";

const Services = () => {
  return (
    <div>
      <Navbar />
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
        <h2>Our services</h2>
        <div className="service-card-holder">
          <div className="inner-card-wrapper">
            <div>
              <img src={AboutImg} alt="" className="service-card-image" />
            </div>
            <div>
              <h3>Service Title</h3>
              <p>Service Summary</p>
            </div>
          </div>
          <div className="inner-card-wrapper">
            <div>
              <img src={AboutImg} alt="" className="service-card-image" />
            </div>
            <div>
              <h3>Service Title</h3>
              <p>Service Summary</p>
            </div>
          </div>
          <div className="inner-card-wrapper">
            <div>
              <img src={AboutImg} alt="" className="service-card-image" />
            </div>
            <div>
              <h3>Service Title</h3>
              <p>Service Summary</p>
            </div>
          </div>
          <div className="inner-card-wrapper">
            <div>
              <img src={AboutImg} alt="" className="service-card-image" />
            </div>
            <div>
              <h3>Service Title</h3>
              <p>Service Summary</p>
            </div>
          </div>
          <div className="inner-card-wrapper">
            <div>
              <img src={AboutImg} alt="" className="service-card-image" />
            </div>
            <div>
              <h3>Service Title</h3>
              <p>Service Summary</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
