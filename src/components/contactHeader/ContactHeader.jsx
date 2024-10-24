import React from "react";
import "./ContactHeader.css";
import ContactImage from "../../assets/contact.png";

const ContactHeader = () => {
  return (
    <div className="contact-header-container">
      <div className="header-left-wrapper">
        <h1 className="phone:text-5xl text-7xl font-bold">Talk To Us</h1>

        <p>
          We’re here to help! Whether you have a question, need assistance, or
          want to learn more about our services, feel free to reach out to us.
          Our team is dedicated to providing you with the best possible
          experience.
        </p>
      </div>
      <div className="header-right-wrapper">
        <img
          src={ContactImage}
          alt="contact"
          className="contact-header-image"
        />
      </div>
    </div>
  );
};

export default ContactHeader;
