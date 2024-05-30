import React, { useState } from "react";
import "./Dashboard.css";
import { useForm } from "react-hook-form";
import Avatar from "../../assets/avarta.png";
import MenuIcon from "../../assets/menu.png";
import LoginImage from "../../assets/feedback.png";
import BinIcon from "../../assets/bin.png";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";

const Dashboard = () => {
  const [openModal, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const [showDashboard, setShowDashboard] = useState(1);
  const handleShowDashboard = (number) => {
    setShowDashboard(number);
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <div className="left-side-container">
        <div className="name-email-holder">
          <img src={Avatar} alt="" className="avarta-wrapper" />
          <h3 className="user-name">Michael Oladele</h3>
          <h3>micheaol80@gmail.com</h3>
        </div>
        <div className="right-menu-list-wrapper">
          <ul className="right-main-list">
            <button
              className="inner-menu-list"
              onClick={() => handleShowDashboard(1)}
            >
              <li>All request</li>
            </button>
            <button
              className="inner-menu-list"
              onClick={() => handleShowDashboard(2)}
            >
              <li>New Request</li>
            </button>
            <button
              className="inner-menu-list"
              onClick={() => handleShowDashboard(3)}
            >
              <li>Messages</li>
            </button>
            <button
              className="inner-menu-list"
              onClick={() => handleShowDashboard(4)}
            >
              <li>Password</li>
            </button>
            <Link
              to="/login"
              className="inner-menu-list"
              onClick={handleLogout}
            >
              <li>Log out</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="right-side-container">
        <div className="right-side-header">
          <h2>User's Dashboard</h2>
          <img src={MenuIcon} alt="" className="icon-image" />
        </div>
        <div className="request-main-containerr">
          <div>
            {showDashboard === 1 && (
              <>
                <div className="slate-header-wrapper">
                  <h2>All Request</h2>
                </div>
                <div className="request-wrapper">
                  <h3 className="title-request">Request title</h3>
                  <p className="details-request">
                    Request details to go insiode here Request details to go
                    insiode here
                  </p>
                  <p>Request status</p>
                  <img src={BinIcon} alt="" className="bin-icon" />
                </div>
                <div className="request-wrapper">
                  <h3 className="title-request">Request title</h3>
                  <p className="details-request">
                    Request details to go insiode here Request details to go
                    insiode here
                  </p>
                  <p>Request status</p>
                  <img src={BinIcon} alt="" className="bin-icon" />
                </div>
                <div className="request-wrapper">
                  <h3 className="title-request">Request title</h3>
                  <p className="details-request">
                    Request details to go insiode here Request details to go
                    insiode here
                  </p>
                  <p>Request status</p>
                  <img src={BinIcon} alt="" className="bin-icon" />
                </div>
                <div className="request-wrapper">
                  <h3 className="title-request">Request title</h3>
                  <p className="details-request">
                    Request details to go insiode here Request details to go
                    insiode here
                  </p>
                  <p>Request status</p>
                  <img src={BinIcon} alt="" className="bin-icon" />
                </div>
              </>
            )}
          </div>
          <div>
            {showDashboard === 2 && (
              <>
                <div className="slate-header-wrapper">
                  <h2>New Request</h2>
                </div>
                <div className="register-main-container">
                  <div className="register-iamge-wrapper">
                    <img src={LoginImage} alt="" className="register-image" />
                  </div>
                  <div className="register-inner-form-wrapper">
                    <p>We will be glad to have you onboard</p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="register-form-wrapper"
                    >
                      <label>
                        <input
                          type="text"
                          onClick={() => setModalOpen(true)}
                          className="register-main-text-input"
                          placeholder="First name"
                          {...register("firstName")}
                        />
                      </label>
                      <label>
                        <input
                          type="text"
                          className="register-main-text-input"
                          placeholder="Last name"
                          {...register("lastName")}
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
                          placeholder="Phone number"
                          {...register("phoneNumber")}
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
                        <input
                          type="password"
                          className="register-main-text-input"
                          placeholder="Enter your password"
                          {...register("password")}
                        />
                      </label>
                      <input type="submit" className="register-main-form-btn" />
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
          <div>
            {showDashboard === 3 && (
              <>
                <div className="slate-header-wrapper">
                  <h2>Notifications</h2>
                </div>
                <div className="request-wrapper">
                  <h3 className="title-request">Request title</h3>
                  <p className="details-request">
                    Request details to go insiode here Request details to go
                    insiode here
                  </p>
                  <p>Request status</p>
                  <img src={BinIcon} alt="" className="bin-icon" />
                </div>
              </>
            )}
          </div>
          <div>
            {showDashboard === 4 && (
              <>
                <div className="slate-header-wrapper">
                  <h2>Reset Password</h2>
                </div>
                <div className="login-main-container">
                  <div className="login-iamge-wrapper">
                    <img src={LoginImage} alt="" className="login-image" />
                  </div>
                  <div className="inner-form-wrapper">
                    <h3>Hey, </h3>
                    <p>Please enter your details to continue</p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="form-wrapper"
                    >
                      <label>
                        Email:
                        <input
                          type="text"
                          placeholder="example@example.com"
                          className="main-text-input"
                          {...register("email")}
                        />
                      </label>
                      <label>
                        Old Password:
                        <input
                          type="password"
                          className="main-text-input"
                          {...register("password")}
                        />
                      </label>
                      <label>
                        New Password:
                        <input
                          type="password"
                          className="main-text-input"
                          {...register("password")}
                        />
                      </label>
                      <input
                        type="submit"
                        className="main-form-btn"
                        onClick={() => setShowDashboard(5)}
                      />
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
          <div>
            {showDashboard === 5 && (
              <>
                <div className="slate-header-wrapper">
                  <h2>Verification code</h2>
                </div>
                <div className="login-main-container">
                  <div className="login-iamge-wrapper">
                    <img src={LoginImage} alt="" className="login-image" />
                  </div>
                  <div className="inner-form-wrapper">
                    <h3>Hey, </h3>
                    <p>Please enter your code received to continue</p>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="form-wrapper"
                    >
                      <label>
                        Verification code:
                        <input
                          type="text"
                          maxLength={6}
                          className="main-text-input"
                          {...register("verification")}
                        />
                      </label>
                      <input type="submit" className="main-form-btn" />
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal open={openModal} closeModal={handleCloseModal} />
    </div>
  );
};

export default Dashboard;
