import React, { useEffect, useState } from "react";
import "./OtpComponent.css";
import { Navigate, useNavigate } from "react-router-dom";
import BackIcon from "/images/back-arrow.png";
import WavyCheckIcon from "../../assets/wavy-check.png";
import HomerunIcon from "../../assets/homerun-icon.png";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { useVerifyUserMutation } from "../../services/auth/authApi";
import CustomBackButton from "../customBackButton/CustomBackButton";
import CustomButton from "../customButton/CustomButton";

const OtpComponent = ({ setOtpSent }) => {
  const cookies = new Cookies();
  const [otpDigits, setOtpDigits] = useState(new Array(6).fill(""));
  const [userVerifiedOtp, setUserverifiedOtp] = useState("");
  const [verifyUser, { data: verifyData, isSuccess, error, isLoading }] =
    useVerifyUserMutation();
  const registeredCookies = cookies.get("resgitered");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setOtpSent(true);
    // verifyUser(data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const submitOtpToTheServer = (e) => {
    e.preventDefault();
    console.log(otpDigits);
  };
  const handleChange = (elemt, ind) => {
    elemt.preventDefault();

    if (isNaN(elemt.target.value)) return false;

    setOtpDigits([
      ...otpDigits.map((data, indx) =>
        indx === ind ? elemt.target.value : data
      ),
    ]);

    if (elemt.target.value && elemt.target.nextSibling) {
      elemt.target.nextSibling.focus();
    }
    if (!elemt.target.value && elemt.target.previousSibling) {
      elemt.target.previousSibling.focus();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      cookies.remove("resgitered");
      // navigate("/login", { replace: true });
    }
  }, [isSuccess, registeredCookies]);
  return (
    <>
      <div className="otp-main-inner-form-wrapper">
        <img src={HomerunIcon} alt="homerun icon" className="homerun-icon" />
        <div>
          <CustomBackButton title="Back" />
        </div>
        <div className="sent-otp-sent-wrapper">
          <h3>OTP Sent To Mail</h3>
          <img
            src={WavyCheckIcon}
            alt="check button"
            className="check-mark-btn"
          />
        </div>
        <p className="token-message">
          Please input OTP sent to Wasiu@gmail.com
        </p>
        <form className="">
          <div className="otp-main-wrapper">
            {otpDigits.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleChange(e, index)}
                  style={{
                    borderColor: errors.verification_code ? "red" : "blue",
                  }}
                  className="otp-text-input"
                  // {...register("verification_code", {
                  //   required: "Please enter your verification code",
                  // })}
                />
              );
            })}
          </div>
          <div className="timer-main-container">
            <div className="timer-inner-wrapper">
              <div className="timer-wrapper">
                <p>2</p>
              </div>
              <div className="timer-column-wrapper">
                <span>:</span>
              </div>
              <div className="timer-wrapper">
                <p>30</p>
              </div>
            </div>
            <div>
              <p>Resend OTP</p>
            </div>
          </div>
          <CustomButton
            title="Continue"
            btnOnClick={submitOtpToTheServer}
            btnStyles={!isValid ? "main-form-btn-disabled" : "main-form-btn"}
            // disabled={!isValid}
          />
        </form>
      </div>
    </>
  );
};

export default OtpComponent;
