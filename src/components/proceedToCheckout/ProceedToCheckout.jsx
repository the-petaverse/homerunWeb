import React from "react";
import "./ProceedToCheckout.css";
import CustomButton from "../customButton/CustomButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProceedToCheckout = ({ category, subcategory }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log(category, subcategory);

  const paramData = {
    category: category,
    subcategory: subcategory,
  };
  const handleProceedToCheckout = () => {
    navigate("/checkout", { state: paramData });
  };

  return (
    <div className="proceed-2-checkout-container">
      <p>
        Request for <span>2</span> items for <span>$250</span>
      </p>
      <CustomButton
        title="Proceed to checkout"
        btnStyles="proceed-checkout-btn"
        btnOnClick={handleProceedToCheckout}
      />
    </div>
  );
};

export default ProceedToCheckout;
