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
    <div className="pt-[100] bg-white  flex flex-col max-sm:px-8 lg:px-28 text-center pb-10 ">
      <h1 className="mt-10 text-3xl font-bold">
        Payment transaction completed!
      </h1>
      <div className="lg:w-[10%] mr-auto ml-auto my-6">
        <img
          src="/images/success.png"
          alt="succes image"
          className="w-[100%]"
        />
      </div>
      <div className="max-sm:w-[100%]">
        <p className="text-xl">Your Request has been submittd successfully.</p>
        <p className="text-xl">
          A member of our team will contact you shortly to carry out your errand
        </p>
        <p className="text-xl">
          Once again, thank you for trusting us with your errand
        </p>
      </div>
      <div className="lg:w-[30%] sm:w-[40%] max-sm:w-[100%] mr-auto ml-auto mt-12">
        <CustomButton
          title="Back to Dashboard"
          btnOnClick={handleBackToDashboard}
        />
      </div>
    </div>
  );
};

export default PaymentVerification;
