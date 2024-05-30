import React from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutImg from "../../assets/about.png";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-header-wrapper">
        <div className="about-details-wrapper">
          <h2 className="about-header">About Us</h2>
          <p>
            homerun is beyond errand service platform that helps the diaspora
            (Africans living abroad) and very busy locally-based clients who
            need to get some errand tasks done without affecting their daily
            schedule.
          </p>
          <p>
            homerun is beyond errand service platform that helps the diaspora
            (Africans living abroad) and very busy locally-based clients who
            need to get some errand tasks done without affecting their daily
            schedule.
          </p>
        </div>
        <div>
          <img src={AboutImg} alt="" className="about-img" />
        </div>
      </div>
      <div className="our-team-container">
        <h2 className="our-team-title">Our Team</h2>
        <div className="team-card-wrapper">
          <div className="first-role-team-card">
            <img src={AboutImg} alt="" className="team-img" />
            <h4 className="team-name">Michael Oladele</h4>
            <h3 className="team-title">Tech Lead</h3>
          </div>
          <div className="first-role-team-card">
            <img src={AboutImg} alt="" className="team-img" />
            <h4 className="team-name">Michael Oladele</h4>
            <h3 className="team-title">Tech Lead</h3>
          </div>
          <div className="first-role-team-card">
            <img src={AboutImg} alt="" className="team-img" />
            <h4 className="team-name">Michael Oladele</h4>
            <h3 className="team-title">Tech Lead</h3>
          </div>
        </div>
      </div>
      <div className="mission-vision-container">
        <div className="mission-wrapper">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo,
            tenetur explicabo amet quibusdam necessitatibus voluptatem
            consectetur. Numquam molestias sunt optio aut atque nihil sed,
            exercitationem neque cumque et officia.
          </p>
        </div>
        <div className="vission-wrapper">
          <h3>Our Vision</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo,
            tenetur explicabo amet quibusdam necessitatibus voluptatem
            consectetur. Numquam molestias sunt optio aut atque nihil sed,
            exercitationem neque cumque et officia.
          </p>
        </div>
      </div>
      {/* <div className="core-values-container">
        <div className="core-card-wrapper">
          <div className="core-card">
            <img src={AboutImg} alt="" className="team-img" />
            <h4 className="team-name">Michael Oladele</h4>
          </div>
          <div className="core-card">
            <img src={AboutImg} alt="" className="team-img" />
            <h4 className="team-name">Michael Oladele</h4>
          </div>
          <div className="core-card">
            <img src={AboutImg} alt="" className="team-img" />
            <h4 className="team-name">Michael Oladele</h4>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
