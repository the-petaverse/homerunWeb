import React, { useEffect } from "react";
import "./DetailsModal.css";
import CustomButton from "../customButton/CustomButton";

const DetailsModal = ({
  handleShowDetailsModal,
  navigateToOderScreen,
  cardSelected,
}) => {
  console.log(cardSelected);

  useEffect(() => {}, [cardSelected]);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={handleShowDetailsModal}>X</button>
        </div>
        <div className="flex gap-5 align-middle min-[320px]:flex-col md:flex-col lg:flex-row">
          <div className="bundle-image-wrapper ml-5 ">
            <img src="/images/mega-bundle.png" alt="mega bundle" />
          </div>
          <div>
            <div className="content-details-wrapper">
              <h2 className="text-4xl font-bold bundle-title-header">
                The Mega Bundle
              </h2>
              <p className="text-3xl text-orange-400 font-bold details-price-tag">
                $713.00
              </p>
              <div className="">
                <p className="main-content-grocy-title">Grocery Content</p>
                <ul>
                  <li className="ml-7 list-disc list-detail-content">
                    Vegetable Oil (2.5 Liters)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Rice - Nigeria Brand (5kg)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    4 Tubers of Yams
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Scotch bonnet pepper/ Atarodo (30 Pieces)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Bell Pepper/ Tatashe (30 Pieces)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Palm Oil (2.5 Litres)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Garri (Paint Size)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Tomato (30 pieces)
                  </li>
                  <li className=" ml-7 list-disc list-detail-content">
                    Eggs (1 Crate)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btn-wrap">
          <CustomButton
            btnOnClick={() => navigateToOderScreen(cardSelected.slug)}
            title="Proceed to Oder Screen"
            btnStyles="detail-checkout-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
