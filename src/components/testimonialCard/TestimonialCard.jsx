import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCard.css";
const TestimonialCard = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    <div className="testimonial-card-container">
      <Slider {...settings}>
        <div className="testimonial-card">
          <p>
            “I was skeptical at first, but Homerun exceeded my expectations.
            From getting my documents sorted to having groceries delivered to my
            door, they handle everything with such professionalism. Highly
            recommend!”
          </p>
          <p>John Smith, Cape Town.</p>
        </div>
        <div className="testimonial-card">
          <p>
            “I was skeptical at first, but Homerun exceeded my expectations.
            From getting my documents sorted to having groceries delivered to my
            door, they handle everything with such professionalism. Highly
            recommend!”
          </p>
          <p>John Smith, Cape Town.</p>
        </div>
        {/* <div className="testimonial-card">
          <p>
            “I was skeptical at first, but Homerun exceeded my expectations.
            From getting my documents sorted to having groceries delivered to my
            door, they handle everything with such professionalism. Highly
            recommend!”
          </p>
          <p>John Smith, Cape Town.</p>
        </div>
        <div className="testimonial-card">
          <p>
            “I was skeptical at first, but Homerun exceeded my expectations.
            From getting my documents sorted to having groceries delivered to my
            door, they handle everything with such professionalism. Highly
            recommend!”
          </p>
          <p>John Smith, Cape Town.</p>
        </div> */}
      </Slider>
    </div>
  );
};

export default TestimonialCard;
