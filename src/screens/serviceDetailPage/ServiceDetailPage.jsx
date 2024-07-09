import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./ServiceDetailPage.css";
import NewRequest from "../../components/newRequest/NewRequest";
import { useGetRequestSubCategoryQuery } from "../../services/requestsCategory/requestApi";

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
    title: "groceries-collections",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "5",
    category: "hospitality",
    title: "groceries-buying",
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
const ServiceDetailPage = () => {
  const [serviceData, setServiceData] = useState([]);
  const [formStage, setFormStage] = useState(0);
  const { subcategory } = useParams();
  const {
    data: subData,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useGetRequestSubCategoryQuery();

  const filterServcies = () => {
    if (isSuccess) {
      let filteredService = subData?.subRequestsCategory.filter(
        (subservice) => subservice.sub_category_slug === subcategory
      );
      setServiceData(filteredService);
    }
  };

  useEffect(() => {
    filterServcies();
  }, [isSuccess]);

  return (
    <div>
      <Navbar />
      <div className="main-service-detail-page-container">
        {serviceData &&
          serviceData.map((data, index) => {
            return (
              <div key={index} className="service-detail-header">
                <h1>{data.sub_category_title}</h1>
              </div>
            );
          })}
        <div className="detail-form-main-container">
          <NewRequest
            formStage={formStage}
            setFormStage={setFormStage}
            subcategory={subcategory}
            // setShowDashboard={setShowDashboard}
            // setModalOpen={setModalOpen}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
