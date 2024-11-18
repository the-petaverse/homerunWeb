import React, { useEffect, useState } from "react";

import "./Navbar.css";
import logo from "../../assets/logomark.png";
import MenuIcon from "../../assets/menu.png";
import { Link, useLocation } from "react-router-dom";
import Cookies from "universal-cookie";
import RequestNavModal from "../requestNavModal/RequestNavModal";
import MainSideBar from "../mainSideBar/MainSideBar";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import UserAvarta from "../userAvarta/UserAvarta";
import { useSelector } from "react-redux";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";

const Navbar = () => {
  const location = useLocation();
  const [openRequestNav, setOpenRequestNav] = useState(false);
  const [onDashboard, setOnDashboard] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const auth = useSelector((state) => state.auth);

  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();

  const handleOpenSideBar = () => {
    setOpenSideBar((prev) => !prev);
  };
  const handleOpenRequestNav = () => {
    setOpenRequestNav((prev) => !prev);
  };

  useEffect(() => {}, [openRequestNav, openSideBar, onDashboard]);

  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="" className="image-wrapper" />
        </Link>
        <section className="menu-list-sec-wrapper">
          <ul className="menu-list-wrapper  ">
            <Link to="/about" className="nav-links">
              <li className="">About Us</li>
            </Link>
            <Link to="/our-services" className="nav-links ">
              <li>Services</li>
            </Link>
            <Link to="/contact" className="nav-links">
              <li>Contact Us</li>
            </Link>
          </ul>

          {!auth.user && (
            <ul className="list-wrapper">
              <div
                // to=""
                className="nav-links post-request-wrapper"
                onClick={handleOpenRequestNav}
              >
                <li className="post-request-wrapper-li">Post a Request</li>
              </div>

              <Link to="/login" className="nav-links">
                <li className="login-wrapper">Login</li>
              </Link>
            </ul>
          )}

          {/* Menu to show when the user is authenticated */}
          {auth.user !== null && (
            <ul className="list-wrapper ml-5">
              <div
                // to=""
                className="nav-links post-request-wrapper"
                onClick={handleOpenRequestNav}
              >
                <li className="post-request-wrapper-li">Post errand</li>
              </div>
              {/* <li className="use-profile-icons icon-withcart-notification">
                <span>7</span>
                <FiShoppingCart size={25} />
              </li> */}
              <li className="use-profile-icons">
                <FaRegBell size={25} />
              </li>
              <UserAvarta />
            </ul>
          )}
        </section>
        <img
          src={MenuIcon}
          alt=""
          className="icon-image-nav"
          onClick={handleOpenSideBar}
        />
      </div>
      {openRequestNav && (
        <RequestNavModal
          serviceCategories={serviceCategories}
          handleOpenRequestNav={handleOpenRequestNav}
        />
      )}
      {openSideBar && (
        <MainSideBar
          handleOpenSideBar={handleOpenSideBar}
          serviceCategories={serviceCategories}
        />
      )}
    </>
  );
};

export default Navbar;
