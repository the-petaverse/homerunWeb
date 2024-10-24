import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "../../../assets/service.png";
import TranscriptImage from "../../../assets/service-trans.png";
import GrocyImage from "../../../assets/service-grocy.png";
import SurpriseImage from "../../../assets/service-surprise.png";
import HotelImage from "../../../assets/service-hotel.png";
import PropertyImage from "../../../assets/service-property.png";
import MainSideBar from "../../../components/mainSideBar/MainSideBar";
import CustomButton from "../../../components/customButton/CustomButton";
// import Hq from "../../components/hq/Hq";

import { useGetRequestCategoriesQuery } from "../../../services/requestsCategory/requestApi";
import { Link, useNavigate } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";
import Preloader from "../../../components/preloader/Preloader";

const Services = () => {
  const navigate = useNavigate();
  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleClickBtn = (serviceLink) => {
    console.log("object");
  };
  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  const handleNavigate = (serviceName) => {
    if (
      serviceName === "grocery_food" ||
      serviceName === "hotel_car_booking" ||
      serviceName === "surprise_gifts"
    ) {
      return;
    } else {
      navigate(`/request-category/${serviceName}`);
    }
  };
  const serviceData = [
    {
      id: 1,
      title: "Transcript And Document Retrieval",
      slug: "transcript",
      description:
        "Need important documents from institutions back home? We obtain credentials and other necessary documents on your behalf, saving you time and hassle.",
      imageSrc: TranscriptImage,
      link: "/request-category/transcript",
    },
    {
      id: 2,
      title: "Grocery and Food Delivery",
      slug: "grocery",
      description:
        "Enjoy the convenience of having groceries and food items delivered to your door, both locally and internationally. Freshness and quality are guaranteed with every delivery.",
      imageSrc: GrocyImage,
      // link: "/request-category/grocery",
    },
    {
      id: 3,
      title: "Surprise Packages",
      slug: "surprise",
      description:
        "Add a touch of joy to your day with our surprise packages. Whether it's a gift for a loved one or a treat for yourself, we deliver delightful surprises that brighten your day.",
      imageSrc: SurpriseImage,
      // link: "/request-category/surprise",
    },
    {
      id: 4,
      title: "Hotel and Car Booking",
      slug: "surprise",
      description:
        "Secure hotel accommodations and recreation centers effortlessly. Whether for business or leisure, we ensure your stay is comfortable and enjoyable.",
      imageSrc: HotelImage,
      // link: "/request-category/hotel",
    },
    {
      id: 5,
      slug: "property",
      title: "Property Inspection",
      description:
        "Seamlessly acquire property in your home country while you’re abroad. Our expert team will handle every detail, ensuring a smooth and stress-free process.",
      imageSrc: PropertyImage,
      link: "/request-category/property",
    },
  ];

  useEffect(() => {}, [isSuccess]);
  return (
    <div className="services-overall-container">
      {isSuccess ? (
        <div className="services-main-container">
          <h1 className="text-5xl font-bold mb-3">What We Do</h1>
          <div className="serices-header-wrapper">
            <div className="header-image-wrapper">
              <img
                src={Service}
                alt="service-image"
                className="service-image"
              />
            </div>
            <div className="service-image-container">
              <p>
                At Homerun, we offer a comprehensive range of services designed
                to make your life easier, whether you're abroad or at home.
                Discover the convenience and efficiency of having your errands
                handled by a team you can trust.
              </p>
            </div>
          </div>
          <div className="service-cards-wrapper">
            {serviceCategories &&
              serviceCategories?.serviceCategory?.map((service) => (
                <div className="services-card" key={service.id}>
                  {/* <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="service-images"
                /> */}
                  <Image
                    className="service-images"
                    cloudName="petaverse"
                    publicId={service.category_image_url}
                  >
                    <Transformation crop="scale" width="320" />
                  </Image>
                  <div className="card-right-holder">
                    <h1>{service.category_name}</h1>
                    <p>{service.category_details}</p>
                    <div className="service-btn">
                      <button onClick={() => handleNavigate(service.slug_name)}>
                        Post this request
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default Services;
