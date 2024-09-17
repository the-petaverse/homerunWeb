import React from "react";
import "./GiftCard.css";

const GiftCard = ({ product, index }) => {
  return (
    <div className="product-list-card" key={index}>
      <input type="checkbox" value={product.name} />
      <img src="/images/vase.png" alt={product.name} />
      <div className="list-content-wrapper">
        <div className="gift-card-header">
          <h4>{product.name}</h4>
          <p>{product.details}</p>
        </div>
        <div className="list-price-wrapper">
          <span>$1.17</span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
