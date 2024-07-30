import React, { useEffect } from "react";
import { useCreatePaymentMutation } from "../../services/payment/stripe";
import { redirectDocument } from "react-router-dom";

const PayButton = ({ userData, params }) => {
  const [
    createPayment,
    { data: paymentData, isLoading: paymentLoading, isSuccess },
  ] = useCreatePaymentMutation();
  const handlePayment = () => {
    console.log(params);
    createPayment({ sub_category: params });
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.href = paymentData.url;
    }
  }, [isSuccess]);
  console.log(params, "params");
  return (
    <>
      <button onClick={handlePayment}>Make payment</button>
    </>
  );
};

export default PayButton;
