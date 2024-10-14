import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BackIcon from "../../assets/back-arrow.png";
import WavyCheckIcon from "../../assets/wavy-check.png";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { useVerifyUserMutation } from "../../services/auth/authApi";

const OtpComponent = ({ setOtpSent }) => {
  const cookies = new Cookies();
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

  useEffect(() => {
    if (isSuccess) {
      cookies.remove("resgitered");
      navigate("/login", { replace: true });
    }
  }, [isSuccess, registeredCookies]);
  return (
    <>
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
            className={!isValid ? "main-form-btn-disabled" : "main-form-btn"}
            disabled={!isValid}
          />
        </form>
      </div>
    </>
  );
};

export default OtpComponent;
