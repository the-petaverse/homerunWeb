import React from "react";
import "./Testimonial.css";
import GooglePlay from "../../assets/google.png";
import AppleStore from "../../assets/apple.png";
import HappyUsers from "../../assets/happyusers.png";
import { HiPencilAlt } from "react-icons/hi";
import { BsFillPinAngleFill } from "react-icons/bs";
import { BiBookReader } from "react-icons/bi";
import { Link } from "react-router-dom";

const Testimonial = () => {
  const userSteps = [
    {
      id: 1,
      image: <HiPencilAlt size={40} color="#000" />,
      title: "Sign up for free",
      description: "Register and post any request of your choice.",
      link: "/register",
    },
    {
      id: 2,
      image: <BsFillPinAngleFill size={40} color="#000" />,
      title: "Post a Request",
      description: "Enter your request details, home or abroad.",
      link: "/request-category/grocery",
    },
    {
      id: 3,
      image: <BiBookReader size={40} color="#000" />,
      title: "We Will Run It For You",
      description: "Relax and we will run the errands for you.",
    },
  ];

  const storeLinks = [
    {
      id: 1,
      image: GooglePlay,
      alt: "Google Play Store",
      className: "google-icon",
    },
    {
      id: 2,
      image: AppleStore,
      alt: "Apple App Store",
      className: "iphone-icon",
      wrapperClass: "another-color-for-wrapper",
    },
  ];

  return (
    <div className="testimonia-main-container">
      <div className="happy-user-image-container">
        <img src={HappyUsers} alt="Happy Users" className="happy-user-image" />
      </div>
      <div className="users-rate-wrapper">
        <h3 className="font-bold text-2xl">500+ Happy users spread</h3>
        <h3 className="font-bold text-2xl">Across Africa continent</h3>
        <div>
          {userSteps.map((step) => (
            <div key={step.id} className="happy-detail-wrapper">
              <div>
                <Link to={step.link}>{step.image}</Link>
              </div>
              <div>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="playstore-icons-wrapper">
          {storeLinks.map((store) => (
            <Link
              key={store.id}
              className={`store-logo-wrapper ${store.wrapperClass || ""}`}
            >
              <img
                src={store.image}
                alt={store.alt}
                className={store.className}
              />
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
