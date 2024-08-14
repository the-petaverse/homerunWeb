import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import "./CategoriesDetailPage.css";
import SubServiceCard from "../../components/servicesCard/SubServiceCard";

const CategoriesDetailPage = () => {
  const { category } = useParams();

  return (
    <div>
      <Navbar />
      <SubServiceCard category={category} />
      <Footer />
    </div>
  );
};

export default CategoriesDetailPage;
