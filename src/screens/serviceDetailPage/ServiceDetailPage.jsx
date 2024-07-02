import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const servicesList = [
  {
    id: "1",
    category: "Documents",
    title: "Passport Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "2",
    category: "Documents",
    title: "Transcript Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "3",
    category: "Hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "4",
    category: "Hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "5",
    category: "Hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "6",
    category: "Documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
];
const ServiceDetailPage = () => {
  const [serviceData, setServiceData] = useState([]);
  const { id } = useParams();

  const filterServcies = () => {
    let filteredService = servicesList.filter((service) => service.id === id);
    setServiceData(filteredService);
  };

  useEffect(() => {
    filterServcies();
  }, []);

  return (
    <div>
      <Navbar />

      {serviceData.map((data, index) => {
        return (
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <button>Create Request</button>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
