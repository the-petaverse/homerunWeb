import React from "react";
import "./CartItemsCard.css";

const CartItemsCard = ({ cartItem, index, handleAddToCard }) => {
  // console.log(cartItem);
  return (
    <div className="checkout-card-item-wrapper" key={index}>
      <div>
        <div className="checkout-card-item-image-wrapper">
          <img src={cartItem.image} alt={cartItem.name} />
          <div className="inner-checkout-price-holder">
            <div>
              <h3>{cartItem.name}</h3>
              <p>{cartItem.details}</p>
            </div>
            <div>
              <p>price</p>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-remove-btn-wrapper">
        <p>Remove</p>
        <div className="checkout-add-remove-wrapper">
          <p>-</p>
          <p>{cartItem.cartQuantity}</p>
          <p onClick={() => handleAddToCard(cartItem)}>+</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
