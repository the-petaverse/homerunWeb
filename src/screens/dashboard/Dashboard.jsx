import React, { useState } from "react";
import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import { SiNintendoswitch } from "react-icons/si";
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import DashboardTopCard from "../../components/dashboardTopCard/DashboardTopCard";

const paneMenuList = [
  {
    id: "1",
    title: "Dashboard",
    titleHeader: "",
    icon: <RiHome7Fill size={30} />,
  },
  {
    id: "2",
    title: "Errands",
    titleHeader: "",
    icon: <MdOutlineSendTimeExtension size={30} />,
  },
  {
    id: "3",
    title: "Manage my Request",
    titleHeader: "Product Management",
    icon: <MdOutlineSendTimeExtension size={30} />,
  },
  {
    id: "4",
    title: "Cart",
    titleHeader: "",
    icon: <FiShoppingCart size={30} />,
  },
  {
    id: "5",
    title: "Refer and Earn",
    titleHeader: "",
    icon: <MdOutlinePayments size={30} />,
  },
  {
    id: "6",
    title: "Support",
    titleHeader: "Support & Settings",
    icon: <MdOutlineSendTimeExtension size={30} />,
  },
  {
    id: "7",
    title: "My Account",
    titleHeader: "",
    icon: <FiShoppingCart size={30} />,
  },
  {
    id: "8",
    title: "Settings",
    titleHeader: "",
    icon: <MdOutlinePayments size={30} />,
  },
  {
    id: "9",
    title: "Logout",
    titleHeader: "",
    icon: <MdOutlinePayments size={30} />,
  },
];
const Dashboard = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [sidePaneSelected, setSidePaneSelected] = useState();
  const [showIconsOnly, setShowIconsOnly] = useState(false);

  const handleSelectLeftPaneMenu = (pandId) => {
    setSidePaneSelected(pandId);
  };
  const handleLogOut = () => {
    cookies.remove("auth_token");
    navigate("/login", { replace: true });
  };
  const handleShowOnlyIcons = () => {
    setShowIconsOnly((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <div className="dashboadr-main-container">
        <div
          className={
            showIconsOnly
              ? "dashboard-left-panel-wrapper-icons-only"
              : "dashboard-left-panel-wrapper"
          }
        >
          <div className="dashboard-left-pane-header">
            {!showIconsOnly && <p>MAIN MENU</p>}
            <div
              className={
                showIconsOnly
                  ? "dashboard-switch-holder-icons-only"
                  : "dashboard-switch-holder"
              }
              onClick={handleShowOnlyIcons}
            >
              <SiNintendoswitch
                size={25}
                color="#fff"
                className={showIconsOnly ? "switch-icon" : ""}
              />
            </div>
          </div>
          <div className="dashboard-left-pane-content">
            {paneMenuList &&
              paneMenuList.map((menuList, index) => {
                return (
                  <ul className="" key={index}>
                    <li
                      className={
                        sidePaneSelected === menuList.id
                          ? "dashboard-left-pane-list-active"
                          : "dashboard-left-pane-list"
                      }
                      onClick={() => {
                        handleSelectLeftPaneMenu(menuList.id);
                        menuList.title === "Logout" && handleLogOut();
                      }}
                    >
                      <span>{menuList.icon}</span>
                      {!showIconsOnly ? menuList.title : ""}
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
        <div
          className={
            showIconsOnly
              ? "dashboard-right-panel-wrapper-with-icons-only"
              : "dashboard-right-panel-wrapper"
          }
        >
          <div className="dashboard-right-top-panel-wrapper">
            <p>Good Morning Simisoluwa</p>
            <p>This month</p>
          </div>
          <div className="dashboard-right-bottom-panel-wrapper">
            <div className="dashboard-center-details-wrapper">
              <div className="dashboard-center-details-headers">
                <h3>Current Request</h3>
                <p>View all</p>
              </div>
              <DashboardTopCard />
            </div>
            <div className="dashboard-chart-details-wrapper">
              <h1>charts goes here</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
