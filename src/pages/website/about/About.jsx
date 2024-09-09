import React, { useState } from "react";
import "./About.css";
import AboutUsImage from "../../../assets/about-us.png";
import Team from "../../../components/team/Team";
import MissionVision from "../../../components/missionVision/MissionVision";
const About = () => {
  // const [openSideBar, setOpenSideBar] = useState(false);

  // const handleOpenSideBar = () => {
  //   setOpenSideBar(true);
  // };
  // const handleCloseSideBar = () => {
  //   setOpenSideBar(false);
  // };
  return (
    <div className="about-wrapper">
      <div className="about-us-container">
        <div className="about-header-wrapper">
          <div className="about-details-wrapper">
            <h1>Who We Are</h1>
            <div className="about-details-wrapper">
              <img
                src={AboutUsImage}
                alt="who we are"
                className="who-we-are-image"
              />
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
                  We’re not just about convenience; we’re about making a
                  positive impact. Homerun is dedicated to promoting
                  sustainability and reducing our carbon footprint. We offer
                  eco-friendly task options and provide feedback on how your
                  choices contribute to a healthier planet and a stronger global
                  economy. Every task completed through Homerun is a step
                  towards a better future.
                </p>
              </div>
            </div>
          </div>
        </div>

    
      </div>
      <section>
        <Team />
      </section>
      <MissionVision />
      {/* <Hq /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default About;
