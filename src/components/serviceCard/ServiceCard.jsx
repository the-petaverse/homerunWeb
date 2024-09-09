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
import { Link } from "react-router-dom";

const ServiceCard = () => {
  const services = [
    { id: 1, name: "transcript", image: TransImage },
    { id: 2, name: "grocery", image: GrocyImage },
    { id: 3, name: "surprise", image: SurpriseImage },
    { id: 4, name: "hotel", image: HotelImage },
    { id: 5, name: "property", image: PropertyImage },
  ];

  const handleServiceClick = (serviceName) => {
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
          slidesToShow: 3.095,
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
          slidesToShow: 2.095,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          infinite: true,
          slidesToShow: 2.095,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {services.map((service) => (
          <div className="serviceCard-main-wrapper" key={service.id}>
            <Link to={`/request-category/${service.name}`}>
              <img
                src={service.image}
                className="card-image-wrapper"
                alt={service.name}
                onClick={() => handleServiceClick(service.name)}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ServiceCard;
