import React, { useEffect } from "react";
import { useCreatePaymentMutation } from "../../services/payment/stripe";
import Cookies from "universal-cookie";

const PayButton = ({ userData, params }) => {
  const cookies = new Cookies();
  const paymentPending = cookies.get("paid_false");

  const [
    createPayment,
    { data: paymentData, isLoading: paymentLoading, isSuccess },
  ] = useCreatePaymentMutation();
  const handlePayment = () => {
    createPayment({ sub_category: params });
  };

  useEffect(() => {
    if (isSuccess) {
      cookies.remove("paid_false");
      window.location.href = paymentData.url;
    }
  }, [isSuccess, paymentPending]);
  return (
    <>
      <button onClick={handlePayment}>Make payment</button>
    </>
  );
};

export default PayButton;
