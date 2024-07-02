import React, { useState } from "react";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AboutImg from "../../assets/about.png";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
const About = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };
  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  return (
    <div>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="about-header-wrapper">
        <div className="about-details-wrapper">
          <h2 className="about-header">
            Our goal is to redifined errand for africans in diaspora
          </h2>

          <p>
            Homerun is a web and mobile application developed to serve the needs
            of diasporians and busy local clients who need tasks completed
            efficiently and sustainably.
          </p>
          <div className="about-btn-container">
            <button className="about-btn">Let's talk</button>
          </div>
        </div>
        <div className="about-image-wrapper">
          {/* <img src={AboutImg} alt="" className="about-img" /> */}
        </div>
      </div>
      <div className="statistic-wrapper">
        <div className="statistic-content-wrapper">
          <p>
            Homerun is a web and mobile application developed to serve the needs
            of diasporians and busy local clients who need tasks completed
            efficiently and sustainably.
          </p>
        </div>
        <div className="statistic-boxes-wrapper">
          <div className="stat-inner-box-container">
            <div className="stat-box">
              <h3>300k</h3>
              <p>busy local clients</p>
            </div>
            <div className="stat-box">
              <h3>300k</h3>
              <p>busy local clients</p>
            </div>
          </div>
          <div className="stat-inner-box-container">
            <div className="stat-box">
              <h3>300k</h3>
              <p>busy local clients</p>
            </div>
            <div className="stat-box">
              <h3>300k</h3>
              <p>busy local clients</p>
            </div>
          </div>
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
            Service delivery executed efficiently and sustainably, giving you
            peace of mind both home and abroad.
          </p>
        </div>
        <div className="vission-wrapper">
          <h3>Our Vision</h3>
          <p>
            Service delivery executed efficiently and sustainably, giving you
            peace of mind both home and abroad.
          </p>
        </div>
      </div>
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />

      <Footer />
    </div>
  );
};

export default About;
