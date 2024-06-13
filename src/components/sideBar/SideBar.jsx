import React, { useState } from "react";
import Avatar from "../../assets/avarta.png";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import CloseIcon from "../../assets/close.png";
const SideBar = ({
  handleCloseSideBar,
  openSideBar,
  handleShowDashboard,
  handleLogout,
  setFormStage,
}) => {
  if (!openSideBar) return null;

  return (
    <div className="side-bar-container">
      <div class="inner-side-bar">
        <div className="close-icon-container">
          <img
            src={CloseIcon}
            alt=""
            className="side-bar-close-icon-wrapper"
            onClick={handleCloseSideBar}
          />
        </div>
        <div className="name-email-holder">
          <img src={Avatar} alt="" className="side-bar-avarta-wrapper" />
          <h3 className="side-user-name">Michael Oladele</h3>
          <h3 className="side-user-name">micheaol80@gmail.com</h3>
        </div>
        <div className="side-bar-menu-list-wrapper">
          <ul className="side-bar-right-main-list">
            <button
              className="inner-menu-list"
              onClick={() => {
                handleShowDashboard(1);
                handleCloseSideBar();
              }}
            >
              <li>All request</li>
            </button>
            <button
              className="inner-menu-list"
              onClick={() => {
                handleShowDashboard(2);
                setFormStage(0);
                handleCloseSideBar();
              }}
            >
              <li>New Request</li>
            </button>
            <button
              className="inner-menu-list"
              onClick={() => {
                handleShowDashboard(3);
                handleCloseSideBar();
              }}
            >
              <li>Messages</li>
            </button>
            <button
              className="inner-menu-list"
              onClick={() => {
                handleShowDashboard(4);
                handleCloseSideBar();
              }}
            >
              <li>Password</li>
            </button>
            <Link
              to="/login"
              className="inner-menu-list"
              onClick={() => {
                handleLogout();
                handleCloseSideBar();
              }}
            >
              <li>Log out</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
