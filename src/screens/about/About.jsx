import React, { useState } from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutUsImage from "../../assets/about-us.png";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import Team from "../../components/team/Team";
import MissionVision from "../../components/missionVision/MissionVision";
const About = () => {
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
      <div className="about-us-container">
        <div className="about-header-wrapper">
          <div className="about-details-wrapper">
            <h1>Who We Are</h1>
            <div className="about-details-wrapper">
              <img src={AboutUsImage} alt="" />
            </div>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="about-top-detail">
            <p>
              We are revolutionary web and mobile application dedicated to
              redefining errands for Africans in the diaspora and busy local
              clients.
            </p>
          </div>
          <div className="about-bottom-detail">
            <h3> Our Commitment to Sustainability</h3>
            <p>
              We’re not just about convenience; we’re about making a positive
              impact. Homerun is dedicated to promoting sustainability and
              reducing our carbon footprint. We offer eco-friendly task options
              and provide feedback on how your choices contribute to a healthier
              planet and a stronger global economy. Every task completed through
              Homerun is a step towards a better future.
            </p>
          </div>
        </div>
        <MainSideBar
          handleOpenSideBar={handleOpenSideBar}
          handleCloseSideBar={handleCloseSideBar}
          openSideBar={openSideBar}
        />
      </div>
      <Team />
      <MissionVision />
      <Footer />
    </>
  );
};

export default About;
