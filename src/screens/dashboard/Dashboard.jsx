import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import Avatar from "../../assets/avarta.png";
import MenuIcon from "../../assets/menu.png";
import BinIcon from "../../assets/bin.png";
import { useNavigate, Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";

import ResetPassword from "../../components/resetPassword/ResetPassword";
import NewRequest from "../../components/newRequest/NewRequest";
import AllRequest from "../../components/allRequest/AllRequest";
import VerificationCode from "../../components/verificationCode/VerificationCode";
import SideBar from "../../components/sideBar/SideBar";

import {
  useGetUserQuery,
  useGetUsersQuery,
  useLoginUserMutation,
} from "../../services/auth/authApi";
import Cookies from "universal-cookie";

const Dashboard = () => {
  const cookies = new Cookies();
  // const [{ data: loginData }] = useLoginUserMutation();
  const { data: userData, isLoading, isFetching, errors } = useGetUserQuery();

  if (errors) {
    console.log(errors);
  }

  // const { first_name, last_name, email } = userData?.user;

  // let getCookies = cookies.get("auth_token");
  // const {
  //   data: userData,
  //   error,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  // } = useGetUsersQuery();

  // if (isSuccess) {
  //   console.log(userData, "Dashboard");
  // }
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [openModal, setModalOpen] = useState(false);
  const [formStage, setFormStage] = useState(0);
  const [showDashboard, setShowDashboard] = useState(1);
  const [openSideBar, setOpenSideBar] = useState(false);

  const navigate = useNavigate();

  const handleShowDashboard = (number) => {
    setShowDashboard(number);
  };

  const handleLogout = () => {
    cookies.remove("auth_token");
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  // useEffect(() => {
  //   if (cookies === undefined) {
  //     setIsLoggedIn(!isLoggedIn);
  //   }
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  return (
    <div className="dashboard-container">
      <div className="left-side-container">
        <div className="name-email-holder">
          <img src={Avatar} alt="" className="avarta-wrapper" />
          {userData && (
            <h3 className="user-name">
              {userData.user.first_name} {userData.user.last_name}
            </h3>
          )}
          {userData && <h3>{userData.user.email}</h3>}
        </div>
        <div className="right-menu-list-wrapper">
          <ul className="right-main-list">
            <button
              className="inner-menu-list"
              onClick={() => handleShowDashboard(1)}
            >
              <li>All request</li>
            </button>
            <Link
              to="/requests-list"
              className="inner-menu-list"
              // onClick={() => {
              //   handleShowDashboard(2);
              //   setFormStage(0);
              // }}
            >
              <li>New Request</li>
            </Link>
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
          <img
            src={MenuIcon}
            alt=""
            className="icon-image"
            onClick={handleOpenSideBar}
          />
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
      <SideBar
        setShowDashboard={setShowDashboard}
        handleShowDashboard={handleShowDashboard}
        handleLogout={handleLogout}
        setFormStage={setFormStage}
        openSideBar={openSideBar}
        handleCloseSideBar={handleCloseSideBar}
      />
      <Modal open={openModal} closeModal={handleCloseModal} />
    </div>
  );
};

export default Dashboard;
