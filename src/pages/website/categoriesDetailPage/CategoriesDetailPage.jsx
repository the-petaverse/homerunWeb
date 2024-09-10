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
  console.log({ category });

  return (
    <div>
      {/* <Navbar /> */}
      {category === "property" && <SubServiceCard category={category} />}
      {category === "transcript" && <SubServiceCard category={category} />}
      {category === "surprise" && <SubServiceCard category={category} />}
      {category === "grocery" && <SubServiceCard category={category} />}
      {category === "hotel" && <SubServiceCard category={category} />}
      {/* {category === "grocery" && <SurpriseSubServices category={category} />} */}
      {/* <Footer /> */}
    </div>
  );
};

export default CategoriesDetailPage;