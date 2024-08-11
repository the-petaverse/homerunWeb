import React, { useEffect, useState } from "react";
import LoginImage from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "../../services/auth/authApi";
import BackIcon from "../../assets/back-arrow.png";
import SuccessImage from "../../assets/success.png";
import WavyCheckIcon from "../../assets/wavy-check.png";
import "./Verify.css";
import Cookies from "universal-cookie";

const Verify = () => {
  const cookies = new Cookies();
  const registeredCookies = cookies.get("resgitered");
  const [notRegistered, setNotRegistered] = useState(false);
  const [checkOtpSuccess, setCheckOtpSuccess] = useState(true);
  const [verifyUser, { data: verifyData, isSuccess, error, isLoading }] =
    useVerifyUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    verifyUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      cookies.remove("resgitered");
      navigate("/login", { replace: true });
    }
  }, [isSuccess, registeredCookies]);

  return (
    <div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        {!checkOtpSuccess && (
          <div className="inner-form-wrapper">
            <div>
              <div className="back-arrow-wrapper">
                <img src={BackIcon} alt="back button" />
                <span>Back</span>
              </div>
            </div>
            <div className="sent-otp-sent-wrapper">
              <h3>OTP Sent To Mail</h3>
              <img
                src={WavyCheckIcon}
                alt="check button"
                className="check-mark-btn"
              />
            </div>
            {error?.data?.error ? (
              <p className="token-error-message">{error?.data?.error}</p>
            ) : (
              <p>Please input OTP sent to Wasiu@gmail.com</p>
            )}
            {error?.data?.message && (
              <p className="token-error-message">{error?.data?.message}</p>
            )}
            {isLoading && (
              <p className="token-error-message">
                Sending your verification code.....
              </p>
            )}
            {isSuccess && (
              <p className="token-error-message">Successfully verified</p>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
              <label>
                <input
                  type="text"
                  maxLength={8}
                  style={{
                    borderColor: errors.verification_code ? "red" : "blue",
                  }}
                  className="main-text-input"
                  {...register("verification_code", {
                    required: "Please enter your verification code",
                  })}
                />
                {errors.verification_code && (
                  <p className="input-error-message">
                    {errors.verification_code.message}
                  </p>
                )}
              </label>
              <div className="timer-main-container">
                <div className="timer-inner-wrapper">
                  <div className="timer-wrapper">
                    <p>2</p>
                  </div>
                  <div className="timer-wrapper">
                    <p>30</p>
                  </div>
                </div>
                <div>
                  <p>Resend OTP</p>
                </div>
              </div>
              <input
                type="submit"
                value="Continue"
                className="main-form-btn"
                disabled={!isValid}
              />
            </form>
          </div>
        )}
        {checkOtpSuccess && (
          <div className="success-screen-main-wrapper">
            <div className="success-inner-container">
              <p>Password change</p>
              <h2>Successful</h2>
              <img
                src={SuccessImage}
                alt="Success Image"
                className="success-image"
              />

              <button className="success-btn">Proceed to Dashboard</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
