import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import "./CategoriesDetailPage.css";
import ServiceCard from "../../components/servicesCard/ServiceCard";

const servicesList = [
  {
    id: "1",
    category: "documents",
    title: "passport-collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "2",
    category: "documents",
    title: "transcript-collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "3",
    category: "hospitality",
    title: "groceries",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "4",
    category: "hospitality",
    title: "groceries",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "5",
    category: "hospitality",
    title: "groceries",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "6",
    category: "documents",
    title: "certificates-collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
];
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
