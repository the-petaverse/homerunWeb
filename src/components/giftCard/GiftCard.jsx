import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GiftCard.css";
import { addToCart } from "../../services/slices/cartSlice";

const GiftCard = ({ product, index }) => {
  const cart = useSelector((state) => state.cart);

  console.log(cart.cartItems);
  const dispatch = useDispatch();
  const checkboxRef = useRef(null);

  const handleAddToCard = (product) => {
    if (checkboxRef.current.checked) {
      dispatch(addToCart(product));
    }
  };

  return (
    <div
      className="product-list-card"
      key={index}
      for={product.name}
      // onClick={() => handleAddToCard(product)}
    >
      <input
        key={index}
        type="checkbox"
        // checked={item.id === product.id ? true : false}
        value={product.name}
        ref={checkboxRef}
        onClick={() => handleAddToCard(product)}
      />

      <img src="/images/vase.png" alt={product.name} />
      <div className="list-content-wrapper">
        <div className="gift-card-header">
          <h4>{product.name}</h4>
          <p>{product.details}</p>
        </div>
        <div className="list-price-wrapper">
          <span className="span-price-contain">$1.17</span>
          <div className="item-counter-wrapper">
            {cart.cartItems &&
              cart.cartItems.map((cartItem, index) => {
                return (
                  <>
                    {cartItem && cartItem.id === product.id && (
                      <>
                        <button
                          className="span-add-icon"
                          onClick={() => handleAddToCard(product)}
                        >
                          -
                        </button>
                        <p>{cartItem.cartQuantity}</p>
                      </>
                    )}
                  </>
                );
              })}
            <button
              className="span-add-icon"
              onClick={() => handleAddToCard(product)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
