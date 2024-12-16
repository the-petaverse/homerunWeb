import React, { useEffect, useState } from "react";
import CustomButton from "../customButton/CustomButton";
import { useReferAndWin } from "../../customHooks/useReferAndWin";

const PaymentComponent = ({
  handlePaymentCreations,
  buttonClick,
  buyingServiceTitle,
  buyingServiceCost,
}) => {
  const { data } = useReferAndWin();
  let discounterAmount;
  useEffect(() => {}, [buttonClick, buyingServiceTitle, buyingServiceCost]);

  console.log(data?.referrerSystem?.rewardAmount, "Payment");
  return (
    <div className="bg-full sm: h-[100dvh] pt-5">
      <div className="w-[65%] bg-white mr-auto ml-auto h-[85%] sm:mt-0 lg:mt-10 rounded-2xl p-5 text-center flex flex-col justify-between">
        <div className="border-b-[0.1em] pb-6">
          <h1 className="text-black text-xl font-semibold">
            Payment Fee For Errand
          </h1>
          <div className="flex justify-between align-middle border sm:w-[100%] lg:w-[38%] mr-auto ml-auto mt-3 py-2 rounded-xl px-3">
            <p className="text-sm">Referer reward</p>
            <p>N{data ? data?.referrerSystem?.rewardAmount : 0}</p>
          </div>
          <div className="mt-3 mx-16">
            <p className="text-lg">
              Please pay the sum of{" "}
              <span className="font-bold">{`N ${
                buyingServiceCost - data?.referrerSystem?.rewardAmount
                  ? buyingServiceCost - data?.referrerSystem?.rewardAmount
                  : 0
              }`}</span>
              {` to carry out ${buyingServiceTitle} request`}
            </p>
          </div>
        </div>
        <div className="sm:w[100%] lg:w-[60%] flex lg:mr-auto lg:ml-auto justify-between py-10 px-8 bg-slate-100 rounded-xl align-middle">
          <p className="font-semibold text-2xl">Paystack</p>
          <img src="/images/paystack2.png" className="w-21 h-12" />
        </div>
        <div className="border-b-[0.1em]"></div>
        <div className="w-[50%] mr-auto ml-auto mt-10 self-end">
          {/* <CustomButton title="Cancel" /> */}
          <CustomButton
            title={buttonClick ? "Loading..." : "Pay Now"}
            btnOnClick={handlePaymentCreations}
            btnDisabled={buttonClick && true}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
