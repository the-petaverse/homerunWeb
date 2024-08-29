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

const ServiceCard = ({ cardImage }) => {
  const handleServiceClick = (heading) => {
    console.log(heading);
  };
  var settings = {
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
        <div className="serviceCard-main-wrapper">
          <Link
            to={"/request-category/transcript"}
            // onClick={() => handleServiceClick("transcript")}
          >
            <img src={TransImage} className="card-image-wrapper" />
          </Link>
        </div>
        <div className="serviceCard-main-wrapper">
          <Link to={"/request-category/grocery"}>
            <img src={GrocyImage} className="card-image-wrapper" />
          </Link>
        </div>
        <div className="serviceCard-main-wrapper">
          <Link to={"/request-category/surprise"}>
            <img src={SurpriseImage} className="card-image-wrapper" />
          </Link>
        </div>
        <div className="serviceCard-main-wrapper">
          <Link to={"/request-category/hotel"}>
            <img src={HotelImage} className="card-image-wrapper" />
          </Link>
        </div>
        <div className="serviceCard-main-wrapper">
          <Link to={"/request-category/property"}>
            <img src={PropertyImage} className="card-image-wrapper" />
          </Link>
        </div>
      </Slider>
    </>
  );
};

export default ServiceCard;
