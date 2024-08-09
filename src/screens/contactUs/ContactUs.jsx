import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import LocationIcon from "../../assets/hq.png";
import LocationMap from "../../assets/map.png";
import "./ContactUs.css";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import ContactHeader from "../../components/contactHeader/ContactHeader";
import FaqCard from "../../components/faqCard/FaqCard";
import Hq from "../../components/hq/Hq";

const ContactUs = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [toggleInnerNavigation, setToggleInnerNavigation] = useState(2);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleInnerNavigation = (id) => {
    setToggleInnerNavigation(id);
  };
  const handleVerifyRedirect = () => {
    navigate("/verify", { replace: true });
  };
  const onSubmit = (data) => console.log(data);
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  return (
    <>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="contact-main-container">
        <ContactHeader />
        <div className="contact-main-wrapper">
          <div className="inner-navigation-btn-wrapper">
            <button
              onClick={() => handleInnerNavigation(1)}
              className={
                toggleInnerNavigation === 1
                  ? "inner-nav-btn-active"
                  : "inner-nav-btn"
              }
            >
              Get in Touch
            </button>
            <button
              onClick={() => handleInnerNavigation(2)}
              className={
                toggleInnerNavigation === 2
                  ? "frequent-inner-nav-btn-active"
                  : "frequent-inner-nav-btn"
              }
            >
              Frequently Asked Questions
            </button>
          </div>
          <div className="contact-inner-main-container">
            {toggleInnerNavigation === 2 && (
              <div className="contact-inner-faq-wrapper">
                <h2>Frequently Asked Questions</h2>
                <FaqCard />
              </div>
            )}
            {toggleInnerNavigation === 1 && (
              <div className="contact-inner-form-wrapper">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form-wrapper"
                >
                  <h2>Get in Touch</h2>
                  <label className="lable-wrapper">
                    <span> Full name *</span>
                    <input
                      type="text"
                      className="contact-main-text-input"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                    />
                  </label>
                  <label className="lable-wrapper">
                    <span>Location *</span>
                    <input
                      type="text"
                      className="contact-main-text-input"
                      placeholder="Enter your location here"
                      {...register("location")}
                    />
                  </label>

                  <label className="lable-wrapper">
                    <span> Email *</span>
                    <input
                      type="email"
                      className="contact-half-text-input"
                      placeholder="Enter email address"
                      {...register("email")}
                    />
                  </label>
                  <label className="lable-wrapper">
                    <span> Phone number *</span>
                    <input
                      type="text"
                      className="contact-half-text-input"
                      placeholder="Phone number"
                      {...register("phoneNumber")}
                    />
                  </label>

                  <label className="lable-wrapper">
                    <textarea
                      type="text"
                      className="contact-main-text-input textarea-container"
                      placeholder="Enter your message here"
                      {...register("details")}
                    />
                  </label>
                  <input
                    type="submit"
                    value="Send Message"
                    className="contact-main-form-btn"
                    onClick={handleVerifyRedirect}
                  />
                </form>
              </div>
            )}
            <div className="hq-wrapper">
              <img src={LocationIcon} alt="location" className="hq-locaion" />
              <div>
                <h3>Homerun Headquarters</h3>
                <p>1234 Elm Street, Suite 567, Ikeja, Lagos, 100001. Nigeria</p>
              </div>
            </div>
            <div className="map-wrapper">
              <img src={LocationMap} alt="map" className="location-map" />
            </div>
          </div>
        </div>
      </div>
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
      {/* <Hq /> */}
      <Footer />
    </>
  );
};

export default ContactUs;
