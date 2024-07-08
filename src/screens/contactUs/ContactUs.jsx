import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./ContactUs.css";
import MainSideBar from "../../components/mainSideBar/MainSideBar";

const ContactUs = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
    <div>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>
        <div className="register-inner-form-wrapper">
          <p>Drop us a message and we'll revert</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form-wrapper"
          >
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="Full name"
                {...register("fullName")}
              />
            </label>
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="Phone number"
                {...register("phoneNumber")}
              />
            </label>
            <label>
              <input
                type="email"
                className="register-main-text-input"
                placeholder="Email(example@example.com)"
                {...register("email")}
              />
            </label>
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="Location (Lagos, Nigeria, etc.)"
                {...register("location")}
              />
            </label>
            <label>
              <textarea
                type="text"
                className="register-main-text-input textarea-container"
                placeholder="Details here"
                {...register("details")}
              />
            </label>
            <input
              type="submit"
              className="register-main-form-btn"
              onClick={handleVerifyRedirect}
            />
          </form>
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

export default ContactUs;
