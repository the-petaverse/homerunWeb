import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCard.css";

const testimonialData = [
  {
    id: "1",
    name: "John Smith, Cape Town.",
    descrip:
      " I was skeptical at first, but Homerun exceeded my expectations. From getting my documents sorted to having groceries delivered to my door, they handle everything with such professionalism. Highly recommend!",
  },
  {
    id: "2",
    name: "John Smith, Cape Town.",
    descrip:
      " I was skeptical at first, but Homerun exceeded my expectations. From getting my documents sorted to having groceries delivered to my door, they handle everything with such professionalism. Highly recommend!",
  },
];
const TestimonialCard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1.095,
          slidesToScroll: 1.095,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-card-container">
      <Slider {...settings}>
        {testimonialData &&
          testimonialData.map((testimony, index) => {
            return (
              <div className="testimonial-card" key={index}>
                <p>{testimony.descrip}</p>
                <p>{testimony.name}</p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default TestimonialCard;
