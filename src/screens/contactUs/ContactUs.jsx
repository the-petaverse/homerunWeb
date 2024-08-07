import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./ContactUs.css";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import ContactHeader from "../../components/contactHeader/ContactHeader";
import FaqCard from "../../components/faqCard/FaqCard";

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
            <button onClick={() => handleInnerNavigation(1)}>
              Get in Touch
            </button>
            <button onClick={() => handleInnerNavigation(2)}>
              Frequently Asked Questions
            </button>
          </div>
          <div className="contact-inner-main-container">
            {toggleInnerNavigation === 2 && (
              <div>
                <h2>Frequently Asked Questions</h2>
                <FaqCard />
              </div>
            )}
            {toggleInnerNavigation === 1 && (
              <div className="contact-inner-form-wrapper">
                <h2>Get in Touch</h2>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form-wrapper"
                >
                  <label>
                    <input
                      type="text"
                      className="contact-main-text-input"
                      placeholder="Full name"
                      {...register("fullName")}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      className="contact-main-text-input"
                      placeholder="Location (Lagos, Nigeria, etc.)"
                      {...register("location")}
                    />
                  </label>

                  <label className="group-label">
                    <label className="lable-wrapper">
                      <input
                        type="email"
                        className="contact-half-text-input"
                        placeholder="Email(example@example.com)"
                        {...register("email")}
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        className="contact-half-text-input"
                        placeholder="Phone number"
                        {...register("phoneNumber")}
                      />
                    </label>
                  </label>

                  <label>
                    <textarea
                      type="text"
                      className="contact-main-text-input textarea-container"
                      placeholder="Details here"
                      {...register("details")}
                    />
                  </label>
                  <input
                    type="submit"
                    className="contact-main-form-btn"
                    onClick={handleVerifyRedirect}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
      <Footer />
    </>
  );
};

export default ContactUs;
