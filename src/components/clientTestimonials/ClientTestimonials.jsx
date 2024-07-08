import React from "react";
import "./ClientTestimonials.css";
import AboutImg from "../../assets/about.png";

const ClientTestimonials = () => {
  return (
    <div className="client-test-container">
      <div className="testimonial-header">
        <h1>ClientTestimonials</h1>
        <p>These are what our satisfied clients are saying about homerun</p>
      </div>
      <div className="testimonia-card-wrapper">
        <div className="testimonial-card">
          <div className="testimonial-img-wrapper">
            <img src={AboutImg} alt="" className="testinonia-img" />
          </div>
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients.
          </p>
          <br />
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients.
          </p>
          <br />
          <p>Client's name</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-wrapper">
            <img src={AboutImg} alt="" className="testinonia-img" />
          </div>
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients.
          </p>
          <br />
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients.
          </p>
          <br />
          <p>Client's name</p>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-img-wrapper">
            <img src={AboutImg} alt="" className="testinonia-img" />
          </div>
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients.
          </p>
          <br />
          <p>
            Boost your product and service's credibility by adding testimonials
            from your clients.
          </p>
          <br />
          <p>Client's name</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
