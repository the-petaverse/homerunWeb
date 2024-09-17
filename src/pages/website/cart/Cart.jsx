import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-main-container">
      <div className="check-out-header-wrapper">
        <h1>Checkout (2)</h1>
        <p>Please review your items and proceed to request.</p>
        <div className="checkout-main-inner-container">
          <div className="checkout-left-content">
            {cart.cartItems &&
              cart.cartItems.map((cartItem, index) => {
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
                        <p>2</p>
                        <p>+</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="checkout-right-content">
            <h3>Payment Summary Continue Shopping</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
