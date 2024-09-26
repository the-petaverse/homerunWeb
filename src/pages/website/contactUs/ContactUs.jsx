import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";
import MainSideBar from "../../../components/mainSideBar/MainSideBar";
import ContactHeader from "../../../components/contactHeader/ContactHeader";
import FaqCard from "../../../components/faqCard/FaqCard";
import CustomImput from "../../../components/customImput/CustomImput";
import { IoPersonOutline } from "react-icons/io5";
import { BiMessageAltDots } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import CustomPhoneInput from "../../../components/customPhoneInput/CustomPhoneInput";
import { isValidPhoneNumber } from "react-phone-number-input";

const ContactUs = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [toggleInnerNavigation, setToggleInnerNavigation] = useState(2);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const watchPhoneNumber = watch("phone_number");
  // console.log(isValidPhoneNumber(watchPhoneNumber));
  if (watchPhoneNumber) {
    console.log(isValidPhoneNumber(watchPhoneNumber));
  }
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
    <div className="contact-overall-container">
      {/* <Navbar handleOpenSideBar={handleOpenSideBar} /> */}
      <div className="contact-main-container">
        <ContactHeader />
        <div className="contact-main-wrapper">
          <div className="contact-main-outer-wrapper">
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
                    <CustomImput
                      name="messageTitle"
                      required="Message title is required"
                      placeholder="Message Title"
                      // icon={<FaWhatsapp size={40} />}
                      error={errors?.messageTitle?.message}
                      type="text"
                      iconLeft={<BiMessageAltDots color="gray" size={22} />}
                      register={register}
                      style={{
                        borderColor: errors.messageTitle ? "red" : "blue",
                      }}
                    />
                    <CustomImput
                      name="fullName"
                      required="Full name is required"
                      placeholder="Full name"
                      // icon={<FaWhatsapp size={40} />}
                      error={errors?.fullName?.message}
                      type="text"
                      register={register}
                      style={{
                        borderColor: errors.fullName ? "red" : "blue",
                      }}
                      iconLeft={<IoPersonOutline color="gray" size={22} />}
                    />
                    <CustomImput
                      name="location"
                      required="Location is required"
                      placeholder="Enter your full location"
                      error={errors?.location?.message}
                      type="text"
                      register={register}
                      style={{
                        borderColor: errors.location ? "red" : "blue",
                      }}
                      iconLeft={<FiMapPin color="gray" size={22} />}
                    />
                    <CustomImput
                      name="email"
                      required="Email is required"
                      placeholder="Enter your email address"
                      error={errors?.email?.message}
                      type="email"
                      register={register}
                      style={{
                        borderColor: errors.email ? "red" : "blue",
                      }}
                      iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                    />
                    <CustomPhoneInput
                      control={control}
                      style={{
                        borderColor: errors.watchPhoneNumber ? "red" : "blue",
                      }}
                      register={register}
                    />
                    <p>
                      {isValidPhoneNumber(
                        watchPhoneNumber ? watchPhoneNumber : ""
                      )
                        ? undefined
                        : "Invalid phone number"}
                    </p>
                    <label className="lable-wrapper">
                      <textarea
                        type="text"
                        className="contact-main-text-input textarea-container"
                        placeholder="Enter your message here"
                        {...register("details")}
                        style={{
                          borderColor: errors.phone_number ? "red" : "blue",
                        }}
                      />
                    </label>
                    <input
                      type="submit"
                      disabled={
                        !isValidPhoneNumber(
                          watchPhoneNumber ? watchPhoneNumber : ""
                        )
                      }
                      value="Send Message"
                      className={
                        !isValidPhoneNumber(
                          watchPhoneNumber ? watchPhoneNumber : ""
                        )
                          ? "contact-main-form-btn-disabled "
                          : "contact-main-form-btn"
                      }
                      // onClick={handleVerifyRedirect}
                    />
                  </form>
                </div>
              )}
              <div className="hq-wrapper">
                {/* <img src={LocationIcon} alt="location" className="hq-locaion" /> */}
                {/* <svg
                width="42"
                height="48"
                viewBox="0 0 42 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6667 23.7667V35.6667C18.6667 36.2855 18.9125 36.879 19.3501 37.3166C19.7877 37.7542 20.3812 38 21 38C21.6188 38 22.2123 37.7542 22.6499 37.3166C23.0875 36.879 23.3333 36.2855 23.3333 35.6667V23.7667C26.1661 23.1884 28.6833 21.579 30.3968 19.2503C32.1103 16.9216 32.8982 14.0397 32.6076 11.1631C32.317 8.28659 30.9687 5.62041 28.824 3.6815C26.6794 1.74259 23.8912 0.669067 21 0.669067C18.1088 0.669067 15.3206 1.74259 13.176 3.6815C11.0313 5.62041 9.683 8.28659 9.39241 11.1631C9.10182 14.0397 9.88967 16.9216 11.6032 19.2503C13.3167 21.579 15.8339 23.1884 18.6667 23.7667ZM21 5.33335C22.3845 5.33335 23.7378 5.7439 24.889 6.51307C26.0401 7.28224 26.9373 8.37549 27.4672 9.65457C27.997 10.9337 28.1356 12.3411 27.8655 13.699C27.5954 15.0569 26.9287 16.3041 25.9497 17.2831C24.9708 18.2621 23.7235 18.9288 22.3656 19.1989C21.0078 19.4689 19.6003 19.3303 18.3212 18.8005C17.0421 18.2707 15.9489 17.3735 15.1797 16.2223C14.4105 15.0712 14 13.7178 14 12.3334C14 10.4768 14.7375 8.69636 16.0503 7.38361C17.363 6.07085 19.1435 5.33335 21 5.33335ZM30.8233 29.6467C30.5169 29.5823 30.2008 29.579 29.8931 29.6368C29.5854 29.6946 29.2921 29.8125 29.0299 29.9836C28.7677 30.1548 28.5418 30.3759 28.3651 30.6344C28.1884 30.8929 28.0643 31.1836 28 31.49C27.9357 31.7964 27.9323 32.1125 27.9901 32.4202C28.0479 32.728 28.1658 33.0213 28.3369 33.2835C28.5081 33.5456 28.7292 33.7715 28.9877 33.9482C29.2462 34.1249 29.5369 34.249 29.8433 34.3134C35.14 35.3634 37.3333 37.2534 37.3333 38C37.3333 39.3534 31.6167 42.6667 21 42.6667C10.3833 42.6667 4.66667 39.3534 4.66667 38C4.66667 37.2534 6.86 35.3633 12.1567 34.22C12.4631 34.1557 12.7538 34.0316 13.0123 33.8549C13.2708 33.6782 13.4919 33.4523 13.6631 33.1901C13.8342 32.9279 13.9521 32.6346 14.0099 32.3269C14.0677 32.0192 14.0643 31.7031 14 31.3967C13.9357 31.0903 13.8116 30.7995 13.6349 30.5411C13.4582 30.2826 13.2323 30.0615 12.9701 29.8903C12.7079 29.7191 12.4146 29.6013 12.1069 29.5435C11.7992 29.4856 11.4831 29.489 11.1767 29.5534C4.08333 31.1867 0 34.2434 0 38C0 44.1367 10.57 47.3334 21 47.3334C31.43 47.3334 42 44.1367 42 38C42 34.2434 37.9167 31.1867 30.8233 29.6467Z"
                  fill="#27332D"
                />
              </svg> */}

                <div style={{ marginLeft: "10px" }}>
                  <h3>Homerun Headquarters</h3>
                  <p>10, Engineer Abiola Olowu street, ibeju lekki</p>
                </div>
              </div>
              {/* <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507455.8277511089!2d3.509923553537845!3d6.458326490572662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3e6ae28999%3A0xd607b937cfdbdfcc!2sOlowu%20St%2C%20Lagos%20Island%2C%20Lagos%20102273%2C%20Lagos!5e0!3m2!1sen!2sng!4v1725650349361!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0, width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
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
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
