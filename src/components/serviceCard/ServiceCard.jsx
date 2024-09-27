import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServiceCard.css";
import TransImage from "../../assets/trans.png";
import GrocyImage from "../../assets/grocy.png";
import SurpriseImage from "../../assets/surprise.png";
import HotelImage from "../../assets/hotel.png";
import PropertyImage from "../../assets/property.png";
import { useNavigate } from "react-router-dom";
import { useGetRequestCategoriesQuery } from "../../services/requestsCategory/requestApi";
import { Image, Transformation } from "cloudinary-react";

const ServiceCard = () => {
  const navigate = useNavigate();
  const {
    data: serviceCategories,
    isLoading,
    isSuccess,
    error,
  } = useGetRequestCategoriesQuery();
  const services = [
    { id: 1, name: "transcript", image: TransImage },
    { id: 2, name: "grocery", image: GrocyImage },
    { id: 3, name: "surprise", image: SurpriseImage },
    { id: 4, name: "hotel", image: HotelImage },
    { id: 5, name: "property", image: PropertyImage },
  ];

  console.log(serviceCategories);
  const handleServiceClick = (serviceName) => {
    navigate(`/request-category/${serviceName}`);
    console.log(serviceName);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2.55,
          slidesToScroll: 2.5,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          infinite: true,
          slidesToShow: 1.35,
          slidesToScroll: 1.095,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {serviceCategories &&
          serviceCategories?.serviceCategory?.map((service) => (
            <div className="serviceCard-main-wrapper" key={service.id}>
              <Image
                className="card-image-wrapper"
                cloudName="petaverse"
                publicId={service.category_image_url}
              >
                <Transformation crop="scale" width="260" />
              </Image>
              <div className="service-card-image-header">
                <p>{service.category_name}</p>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
};

export default ServiceCard;
