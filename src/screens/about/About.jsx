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
          <h2 className="about-header">About Us</h2>
          <br />
          <p>
            Homerun is a mobile application developed to serve the needs of
            diasporians and busy local clients who need tasks completed
            efficiently and sustainably. homerun mobile application is the
            reliable, and efficient partner that bridge the gap between home and
            abroad, to many Nigerians resident abroad and to busy professionals
            resident in Nigeria.
          </p>
          <br />
          <p>
            Data recently released by the Immigration Department indicates that
            passport issuance increased by 38% in 2021 mostly as a result of
            more Nigerians seeking to relocate from the country. With the
            prevalence of migration, now commonly termed ‘japa’ comes the need
            for abroad based Nigerians to have a trusted partner through whom
            they can get tasks done back home.
          </p>
          <br />
          <p>
            Our services range from property verification and inspection before
            and after purchase, obtaining transcripts and official documents to
            grocery shopping, postal services, house sitting, bill payments, and
            other personal tasks that clients cannot manage due to their busy
            schedules or geographical distance.
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
