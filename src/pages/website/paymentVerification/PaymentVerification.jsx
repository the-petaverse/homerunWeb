import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyPaymentQuery } from "../../../services/payment/paystack";
import CustomButton from "../../../components/customButton/CustomButton";

const PaymentVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const reference = searchParams.get("reference");
  const { data, isLoading, isSuccess, error, isFetching } =
    useVerifyPaymentQuery(reference, {
      skip: !reference,
    });
  const handleBackToDashboard = () => {
    navigate("/dashboard", { replace: true });
  };
  useEffect(() => {
    if (!reference) {
      navigate("/dashboard", { replace: true });
    }
    if (isSuccess) {
      console.log(data);
    }
  }, [reference, isLoading, error, isSuccess, isFetching]);
  return (
    <div className="pt-[100] bg-white h-[70dvh] flex flex-col px-28 text-center">
      <h1 className="mt-10">Payment Verification</h1>
      <div>
        <p className="text-black mt-5">Payment verified successfully!</p>
      </div>
      <div className="lg:w-[30%] max-sm:w-[100%] mr-auto ml-auto mt-20">
        <CustomButton
          title="Back to Dashboard"
          btnOnClick={handleBackToDashboard}
        />
      </div>
    </div>
  );
};

export default PaymentVerification;
