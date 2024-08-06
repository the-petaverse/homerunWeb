import React, { useRef, useState } from "react";
import "./ClientTestimonials.css";
import Logo from "../../assets/homerun-logo.png";
import TestimonialCard from "../testimonialCard/TestimonialCard";

import { Link } from "react-router-dom";

const ClientTestimonials = () => {
  return (
    <div className="testimonial-main-container">
      <div className="header-container">
        <div className="testimonial-header-wrapper">
          <h1>People Love #</h1>
          <img src={Logo} alt="logo" className="terstimonial-logo" />
        </div>
        <div>
          <p>
            At Homerun, our customer satisfaction is our ultimate measure of
            success. Here's what some of our users have to say about their
            experience with us:
          </p>
        </div>
      </div>
      <div className="slider-container">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default ClientTestimonials;
