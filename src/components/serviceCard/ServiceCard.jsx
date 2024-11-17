import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";
import { Image, Transformation } from "cloudinary-react";
import ComigSoonOverlay from "../ComigSoonOverlay";

const ServiceCard = () => {
  const [comingSoon, setComintSoon] = useState(true);
  const navigate = useNavigate();

  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();

  const handleServiceClick = (serviceName) => {
    if (
      serviceName === "surprise_gifts" ||
      serviceName === "grocery_food" ||
      serviceName === "hotel_car_booking"
    ) {
      navigate(`/`);
    } else {
      navigate(`/request-category/${serviceName}`);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1.55,
          slidesToScroll: 1.5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          infinite: true,
          slidesToShow: 1.05,
          slidesToScroll: 1.095,
          initialSlide: 2,
        },
      },
    ],
  };

  useEffect(() => {}, [comingSoon]);
  return (
    <>
      <Slider {...settings}>
        {serviceCategories &&
          serviceCategories?.serviceCategory?.map((service) => (
            <div
              className="serviceCard-main-wrapper relative"
              key={service.id}
              onClick={() => {
                handleServiceClick(service.slug_name);
              }}
            >
              <Image
                className="service-card-image-wrapper"
                cloudName="petaverse"
                publicId={service.category_image_url}
              >
                <Transformation crop="scale" width="260" />
              </Image>
              <div className="service-card-image-header">
                <p>{service.category_name}</p>
              </div>
              {(service.slug_name === "surprise_gifts" ||
                service.slug_name === "grocery_food" ||
                service.slug_name === "hotel_car_booking") && (
                <ComigSoonOverlay />
              )}
            </div>
          ))}
      </Slider>
    </>
  );
};

export default ServiceCard;
