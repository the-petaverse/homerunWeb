import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import MainSideBar from "../../../components/mainSideBar/MainSideBar";
import "./CategoriesDetailPage.css";
import SubServiceCard from "../../../components/servicesCard/SubServiceCard";
import SurpriseSubServices from "../../../components/surpriseSubServices/SurpriseSubServices";

const categoryData = [{ id: "1", title: "property" }];
const CategoriesDetailPage = () => {
  const { category } = useParams();

  return (
    <div className="sub-category-wrapper">
      <SubServiceCard category={category} />
    </div>
  );
};

export default CategoriesDetailPage;
