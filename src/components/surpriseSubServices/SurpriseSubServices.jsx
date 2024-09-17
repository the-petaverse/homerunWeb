import React, { useState } from "react";
import "./SurpriseSubServices.css";
import CustomStore from "../customStore/CustomStore";
import { surprisePackages } from "../../data/surprisePackages";

const SurpriseSubServices = ({ navigateToOderScreen }) => {
  const [serviceSelected, setServiceSelected] = useState("Packages");

  const handleServiceSelection = (title) => {
    // console.log(id);
    setServiceSelected(title);
  };

  return (
    <div className="surprise-main-container">
      {serviceSelected === "Packages" && (
        <div className="surprise-detail-card-wrapper">
          {surprisePackages &&
            surprisePackages.map((inerData, index) => {
              return (
                <div
                  className="surprise-detail-card"
                  key={index}
                  onClick={() => navigateToOderScreen(inerData.slug)}
                >
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
      {/* {serviceSelected === "Gifts" && <CustomStore />} */}
    </div>
  );
};

export default SurpriseSubServices;
