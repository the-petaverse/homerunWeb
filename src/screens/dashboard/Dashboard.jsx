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
import { useGetUserPropertyOrdersQuery } from "../../services/propertyErrands/propertyErrand";
import { useGetAUserErrandsQuery } from "../../services/officialDocument/officialDocumentApi";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import CustomServiceCard from "../../components/customServiceCard/CustomServiceCard";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";

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
  // {
  //   id: "4",
  //   title: "Cart",
  //   titleHeader: "",
  //   icon: <FiShoppingCart size={30} />,
  // },
  {
    id: "5",
    title: "Refer and Earn",
    titleHeader: "Refer & win",
    icon: <MdOutlinePayments size={30} />,
  },
  // {
  //   id: "6",
  //   title: "Support",
  //   titleHeader: "Support & Settings",
  //   icon: <MdOutlineSendTimeExtension size={30} />,
  // },
  // {
  //   id: "7",
  //   title: "My Account",
  //   titleHeader: "My account",
  //   icon: <FiShoppingCart size={30} />,
  // },
  // {
  //   id: "8",
  //   title: "Settings",
  //   titleHeader: "",
  //   icon: <MdOutlinePayments size={30} />,
  // },
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
  const [userSingleOrderToDisplay, setUserSingleOrderToDisplay] = useState();
  const [requesActiveCounter, setRequestActiveCounter] = useState();
  const [requesCompletedCounter, setRequestCompletedCounter] = useState();
  const [requesCancelledCounter, setRequestCancelledCounter] = useState();
  const [userAllOrdersToDisplay, setUserAllOrdersToDisplay] = useState();
  const [showIconsOnly, setShowIconsOnly] = useState(false);
  const [progressBarSteps, setProgressBarSteps] = useState();
  const [requestStages, setRequestStages] = useState();
  const {
    data: serviceCategories,
    isLoading: serviceCategoryLoading,
    isSuccess: serviceCategorySuccess,
    error: serviceCategoryError,
  } = useGetRequestCategoriesQuery();
  const { data: UserData, isLoading, isSuccess, error } = useGetUserQuery();
  const {
    data: userOrderData,
    isSuccess: userOrderSuccess,
    error: userOrderError,
  } = useGetAUserErrandsQuery();

  if (error) {
    console.log(error);
  }
  // const reference = query.get("reference");
  console.log(serviceCategories);
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
    console.log(userOrder.data);
  }
  if (isSuccess) {
    console.log(UserData, "Dashboard");
  }
  console.log(userSingleOrderToDisplay);
  if (paymentSuccess) {
    console.log(paymentData);
  }
  if (paymentError) {
    console.log(paymentError);
  }

  const handlePaymentCreations = async () => {
    const data = {
      ordered_service_id: userOrder.data?.ordered_service_id,
      ordered_service_title: userOrder.data?.ordered_service_title,
      request_id: userOrder.data?.request_id,
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

  const setProgressBarStatus = (data) => {
    if (data?.order_status === "On-going") {
      setProgressBarSteps(75);
      setRequestStages(3);
    } else if (data?.order_status === "Completed") {
      setProgressBarSteps(100);
      setRequestStages(4);
    } else {
      setProgressBarSteps(0);
      setRequestStages(1);
    }
    return progressBarSteps;
  };

  console.log(sidePaneSelected);
  useEffect(() => {
    if (userOrderSuccess) {
      setUserSingleOrderToDisplay([
        userOrderData.userOrders[userOrderData.userOrders.length - 1],
      ]);
      if (innerNavMenuClicked === "Active") {
        const filterUserOrder = userOrderData.userOrders.filter(
          (orderFiltered) => orderFiltered.order_status === "On-going"
        );
        setUserAllOrdersToDisplay(filterUserOrder);
      } else if (innerNavMenuClicked === "Completed") {
        const filterUserOrder = userOrderData.userOrders.filter(
          (orderFiltered) => orderFiltered.order_status === "Completed"
        );
        setUserAllOrdersToDisplay(filterUserOrder);
      } else {
        const filterUserOrder = userOrderData.userOrders.filter(
          (orderFiltered) => orderFiltered.order_status === "Pending"
        );

        setUserAllOrdersToDisplay(filterUserOrder);
      }
    }
    // filterServiceCount();
  }, [
    paymenyLoading,
    isFetching,
    userOrder,
    userOrderSuccess,
    innerNavMenuClicked,
    requestStages,
    progressBarSteps,
    requesActiveCounter,
    requesCompletedCounter,
    requesCancelledCounter,
  ]);

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
                        {userSingleOrderToDisplay &&
                          userSingleOrderToDisplay.map((userSingle) => (
                            <DashboardTopCard
                              showIconsOnly={showIconsOnly}
                              data={userSingle}
                              innerNavMenuClicked={innerNavMenuClicked}
                              progressBarSteps={progressBarSteps}
                              requestStages={requestStages}
                              setProgressBarStatus={setProgressBarStatus}
                            />
                          ))}
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
                      <DashbaordRequestCard
                        requesActiveCounter={requesActiveCounter}
                        requesCompletedCounter={requesCompletedCounter}
                        requesCancelledCounter={requesCancelledCounter}
                      />
                    </div>
                  </div>
                </>
              )}
              {sidePaneSelected === "2" && (
                <div className="grid gap-10 grid-cols-3 grid-rows-3 pt-10">
                  {serviceCategories &&
                    serviceCategories?.serviceCategory.map((service) => (
                      <CustomServiceCard service={service} />
                    ))}
                </div>
              )}
              {sidePaneSelected === "3" && (
                <>
                  <div>
                    <div>
                      <DashboardInnerRequestNav
                        handleInnerNavBarClicked={handleInnerNavBarClicked}
                        myRequestInnerNavData={myRequestInnerNavData}
                        innerNavMenuClicked={innerNavMenuClicked}
                        progressBarSteps={progressBarSteps}
                        requestStages={requestStages}
                      />
                    </div>
                    <div className="dashboard-request-main-status-wrapper">
                      <p>{innerNavMenuClicked} Request(s)</p>
                      {userAllOrdersToDisplay &&
                        userAllOrdersToDisplay.map((userAllOrders) => (
                          <div className="mt-10">
                            <DashboardTopCard
                              innerNavMenuClicked={innerNavMenuClicked}
                              showIconsOnly={showIconsOnly}
                              data={userAllOrders}
                              progressBarSteps={progressBarSteps}
                              requestStages={requestStages}
                              setProgressBarStatus={setProgressBarStatus}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </>
              )}
              {sidePaneSelected === "5" && (
                <>
                  <div className="refer-earn-main-wrapper">
                    <h1 className="font-bold text-2xl">Refer & Earn</h1>
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
