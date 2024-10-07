import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import { SiNintendoswitch } from "react-icons/si";
import { MdOutlineSendTimeExtension } from "react-icons/md";
import { RiHome7Fill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlinePayments } from "react-icons/md";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardTopCard from "../../components/dashboardTopCard/DashboardTopCard";
import QuickActionCard from "../../components/quickActionCard/QuickActionCard";
import { serviceCategory } from "../../data/categoryData";
import RewardCard from "../../components/rewardCard/RewardCard";
import DashbaordRequestCard from "../../components/dahsboardRequestCard/DashbaordRequestCard";
import DashboardInnerRequestNav from "../../components/dashboardInnerRequestNav/DashboardInnerRequestNav";
import ReferEarn from "../../components/referEarn/ReferEarn";
import { useGetUserQuery } from "../../services/auth/authApi";
import { periodOfTheDay } from "../../helpers/getPeriodOfTheDay";
import PaymentComponent from "../../components/paymentComponent/PaymentComponent";
import {
  useCreatePaymentMutation,
  useVerifyPaymentQuery,
} from "../../services/payment/paystack";
import { useSelector } from "react-redux";

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
    title: "Manage Request",
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

const myRequestInnerNavData = [
  { id: "1", title: "Active", counter: "1" },
  { id: "2", title: "Completed", counter: "13" },
  { id: "3", title: "Cancelled", counter: "2" },
];
const Dashboard = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const location = useLocation();
  const { userOrder } = useSelector((state) => state.userOrder);
  const [orderCreated, setOrderCreated] = useState(true);
  const [innerNavMenuClicked, setInerMenuClicked] = useState("Active");
  const [sidePaneSelected, setSidePaneSelected] = useState("1");
  const [sidePaneTitleSelected, setSidePaneTitleSelected] = useState();
  const [showIconsOnly, setShowIconsOnly] = useState(false);
  const { data: UserData, isLoading, isSuccess, error } = useGetUserQuery();

  // const reference = query.get("reference");

  const [
    createPayment,
    {
      data: paymentData,
      isLoading: paymenyLoading,
      isSuccess: paymentSuccess,
      error: paymentError,
      isFetching,
    },
  ] = useCreatePaymentMutation();

  if (userOrder !== undefined) {
    console.log(userOrder);
  }
  if (isSuccess) {
    console.log(UserData, "Dashboard");
  }

  if (paymentSuccess) {
    console.log(paymentData);
  }
  if (paymentError) {
    console.log(paymentError);
  }

  const handlePaymentCreations = async () => {
    const data = {
      email: "micheaol80@gmail.com",
    };
    const result = await createPayment(data);
    console.log(result);
    window.location.href = result.data.authorization_url;
  };
  const greetings = periodOfTheDay();

  const handleInnerNavBarClicked = (inneNavLabel) => {
    setInerMenuClicked(inneNavLabel);
  };
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

  useEffect(() => {
    if (isFetching) {
      console.log("paymenyLoading .......");
    }
  }, [paymenyLoading, isFetching, userOrder]);

  // console.log(reference);
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
          {userOrder === undefined && (
            <>
              {sidePaneSelected === "1" && (
                <>
                  <div className="dashboard-right-top-panel-wrapper">
                    <p>
                      {greetings} {UserData && UserData?.user?.first_name}
                    </p>
                    <div>
                      <p>This month</p>
                    </div>
                  </div>
                  <div className="dashboard-right-bottom-panel-wrapper">
                    <div className="dashbaord-top-card-holder-wrapper">
                      <div className="dashboard-center-details-wrapper">
                        <div className="dashboard-center-details-headers">
                          <h3>Current Request</h3>
                          <div>
                            <p>View all</p>
                          </div>
                        </div>
                        <DashboardTopCard showIconsOnly={showIconsOnly} />
                      </div>
                      <div className="dashboard-quick-action-section">
                        <p>Quick Actions</p>
                        <div className="dashboard-quick-action-card-wrapper">
                          {serviceCategory &&
                            serviceCategory.map((serviceData, index) => (
                              <QuickActionCard
                                serviceData={serviceData}
                                index={index}
                              />
                            ))}
                        </div>
                      </div>
                      <div className="dashboard-quick-action-section">
                        <p>Recent Activities</p>
                      </div>
                    </div>
                    <div className="dashboard-chart-details-wrapper">
                      <RewardCard UserData={UserData} />
                      <DashbaordRequestCard />
                    </div>
                  </div>
                </>
              )}
              {sidePaneSelected === "3" && (
                <>
                  <div>
                    <div>
                      <DashboardInnerRequestNav
                        handleInnerNavBarClicked={handleInnerNavBarClicked}
                        myRequestInnerNavData={myRequestInnerNavData}
                        innerNavMenuClicked={innerNavMenuClicked}
                      />
                    </div>
                    <div className="dashboard-request-main-status-wrapper">
                      <p>{innerNavMenuClicked} Request(s)</p>
                      <div>
                        <DashboardTopCard
                          innerNavMenuClicked={innerNavMenuClicked}
                          showIconsOnly={showIconsOnly}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {sidePaneSelected === "5" && (
                <>
                  <div className="refer-earn-main-wrapper">
                    <h1>Refer & Earn</h1>
                    <ReferEarn />
                  </div>
                </>
              )}
            </>
          )}
          {userOrder !== undefined && (
            <PaymentComponent handlePaymentCreations={handlePaymentCreations} />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
