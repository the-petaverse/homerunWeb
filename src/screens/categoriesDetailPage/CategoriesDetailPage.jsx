import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import "./CategoriesDetailPage.css";
import ServiceCard from "../../components/servicesCard/ServiceCard";

const CategoriesDetailPage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const { category } = useParams();

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  return (
    <div>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <ServiceCard category={category} />
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
      <Footer />
    </div>
  );
};

export default CategoriesDetailPage;
