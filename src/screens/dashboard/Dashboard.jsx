import React, { useState } from "react";
import "./Dashboard.css";
import { useForm } from "react-hook-form";
import Avatar from "../../assets/avarta.png";
import MenuIcon from "../../assets/menu.png";
import BinIcon from "../../assets/bin.png";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";

import ResetPassword from "../../components/resetPassword/ResetPassword";
import NewRequest from "../../components/newRequest/NewRequest";
import AllRequest from "../../components/allRequest/AllRequest";
import VerificationCode from "../../components/verificationCode/VerificationCode";

const Dashboard = () => {
  const [openModal, setModalOpen] = useState(false);
  const [formStage, setFormStage] = useState(0);
  const [showDashboard, setShowDashboard] = useState(1);

  const navigate = useNavigate();

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
              onClick={() => {
                handleShowDashboard(2);
                setFormStage(0);
              }}
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
          <div>{showDashboard === 1 && <AllRequest />}</div>
          <div>
            {showDashboard === 2 && (
              <NewRequest
                formStage={formStage}
                setFormStage={setFormStage}
                setShowDashboard={setShowDashboard}
                setModalOpen={setModalOpen}
              />
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
              <ResetPassword setShowDashboard={setShowDashboard} />
            )}
          </div>
          {/* Verification section */}
          <div>{showDashboard === 5 && <VerificationCode />}</div>
        </div>
      </div>
      <Modal open={openModal} closeModal={handleCloseModal} />
    </div>
  );
};

export default Dashboard;
