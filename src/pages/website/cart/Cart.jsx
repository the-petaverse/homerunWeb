import React, { useRef } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import CartItemsCard from "../../../components/cartItemsCard/CartItemsCard";
import CustomButton from "../../../components/customButton/CustomButton";
import { addToCart } from "../../../services/slices/cartSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let serviceData = {};

  if (location.state) {
    const { category, subcategory } = location?.state;
    serviceData = {
      subCategory: subcategory,
      category: category,
    };
  }
  const handleAddToCard = (product) => {
    dispatch(addToCart(product));
  };

  const navigateToOderScreen = () => {
    const { subCategory } = serviceData;
    navigate(`/sub-category/${subCategory}`, { state: serviceData });
  };

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
                  <CartItemsCard
                    cartItem={cartItem}
                    index={index}
                    handleAddToCard={handleAddToCard}
                  />
                );
              })}
          </div>
          <div className="checkout-right-content">
            <h3>Payment Summary</h3>
            <ul>
              <li>
                Handling fee <span>$28.00</span>
              </li>
              <li>
                Service fee <span>$28.00</span>
              </li>
              <li>
                Total <span>$28.00</span>
              </li>
            </ul>
            <div>
              <CustomButton
                title="Checkout ($188.00)"
                btnStyles="checkout-btn"
                btnOnClick={navigateToOderScreen}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
