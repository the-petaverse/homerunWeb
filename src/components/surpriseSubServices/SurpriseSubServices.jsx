import React, { useState } from "react";
import "./SurpriseSubServices.css";
import CustomStore from "../customStore/CustomStore";

const innerNavData = [
  { id: "1", title: "Packages", image: "/images/diamond-gift-2.png" },
  { id: "2", title: "Gifts", image: "/images/gifts.png" },
  { id: "3", title: "Cakes", image: "/images/cakes.png" },
  { id: "4", title: "Hampers", image: "/images/hampers.png" },
  { id: "5", title: "Party Packs", image: "/images/party.png" },
];
const innerCardData = [
  {
    id: "1",
    title: "Anniversary Celebrations",
    details:
      "Celebrate your special milestones with packages that captures the essence of your love story",
    images: "/images/aniva.png",
  },
  {
    id: "2",
    title: "Birthday Surprises",
    details:
      "Make birthdays unforgettable with a surprise package tailored to your loved one’s unique tastes.",
    images: "/images/birthday.png",
  },
  {
    id: "3",
    title: "Holiday Themed Packages",
    details:
      "Spread holiday cheer with themed surprise packages that bring joy and excitement to any celebration.",
    images: "/images/holiday.png",
  },
  {
    id: "4",
    title: "Welcome Home Packages",
    details:
      "Give a warm welcome with a personalized package that makes coming home even more special.",
    images: "/images/welcome.png",
  },
  {
    id: "5",
    title: "Just Because (Random Acts of Kindness)",
    details:
      "Brighten someone’s day unexpectedly with a thoughtful surprise, just because.",
    images: "/images/random.png",
  },
];
const SurpriseSubServices = ({ category }) => {
  const [serviceSelected, setServiceSelected] = useState("Packages");

  const handleServiceSelection = (title) => {
    // console.log(id);
    setServiceSelected(title);
  };
  return (
    <div className="surprise-main-container">
      <div className="surprise-header-wrapper">
        <h1>Surprise Packages & Gifts</h1>
        <div></div>
      </div>
      <div className="surprise-inner-btn-wrapper">
        {innerNavData &&
          innerNavData.map((innerNav, index) => {
            return (
              <div
                className="surprise-inner-btn-card"
                key={index}
                onClick={() => handleServiceSelection(innerNav.title)}
              >
                <img src={innerNav.image} alt="" />
                <p>{innerNav.title}</p>
              </div>
            );
          })}
      </div>
      {serviceSelected === "Packages" && (
        <div className="surprise-detail-card-wrapper">
          {innerCardData &&
            innerCardData.map((inerData, index) => {
              return (
                <div className="surprise-detail-card" key={index}>
                  <div className="surprise-detail-image-wrapper">
                    <img
                      src={inerData.images}
                      alt="surprise"
                      className="surprise-detail-image"
                    />
                  </div>
                  <div className="surprise-detail-content">
                    <h3>{inerData.title}</h3>
                    <p>{inerData.details}</p>
                  </div>
                </div>
              );
            })}
          <div className="surprise-customized-detail-card">
            <div className="surprise-detail-image-wrapper">
              <img
                src="/images/diamond-gift-2.png"
                alt="surprise"
                //   className="surprise-detail-image"
              />
            </div>
            <div className="surprise-detail-content">
              <h3>Customized Surprise Requests</h3>
              <p>
                Create a one-of-a-kind surprise that’s as unique as the person
                you’re celebrating.
              </p>
            </div>
            <div className="customized-btn-wrapper">
              <button className="customized-btn">Make Request</button>
            </div>
          </div>
        </div>
      )}
      {serviceSelected === "Gifts" && <CustomStore />}
    </div>
  );
};

export default SurpriseSubServices;
