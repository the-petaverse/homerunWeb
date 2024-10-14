import React from "react";
import "./GrocerySubscriptionCard.css";
import CustomButton from "../customButton/CustomButton";

const GrocerySubscriptionCard = () => {
  return (
    <div className="grocerySubscriptionCardContainer">
      <div className="grocery-subscription-inner-header-wrapper">
        <p>Perfect for individuals or small families</p>
        <h1>Basic Essentials Package</h1>
        <h3>$50/week</h3>
      </div>
      <div className="grocery-subscription-list-details-wrapper">
        <ul>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
        </ul>
      </div>
      <div className="grocery-subscription-special-offerlist-details-wrapper">
        <h2>Special Offer</h2>
        <ul>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
          <li>
            <img src="/images/tick.png" alt="tick" /> Weekly delivery of 10-15
            essential grocery items
          </li>
        </ul>
      </div>
      <CustomButton title="Subscribe" btnStyles="grocery-subscript-btn" />
    </div>
  );
};

export default GrocerySubscriptionCard;
