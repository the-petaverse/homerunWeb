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
                <div style={{ marginLeft: "10px" }}>
                  <h3>Homerun Headquarters</h3>
                  <p>10, Engineer Abiola Olowu street, ibeju lekki</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
