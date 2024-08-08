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

const ServiceCard = ({ cardImage }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="serviceCard-main-wrapper">
          <img src={TransImage} className="card-image-wrapper" />
        </div>
        <div className="serviceCard-main-wrapper">
          <img src={GrocyImage} className="card-image-wrapper" />
        </div>
        <div className="serviceCard-main-wrapper">
          <img src={SurpriseImage} className="card-image-wrapper" />
        </div>
        <div className="serviceCard-main-wrapper">
          <img src={HotelImage} className="card-image-wrapper" />
        </div>
        <div className="serviceCard-main-wrapper">
          <img src={PropertyImage} className="card-image-wrapper" />
        </div>
      </Slider>
    </>
  );
};

export default ServiceCard;
