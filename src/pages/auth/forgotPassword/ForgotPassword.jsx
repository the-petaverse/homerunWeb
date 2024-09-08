import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/login.png";
import "./ForgotPassword.css";
import LogoMark from "../../assets/logomark.png";

import BackIcon from "../../assets/back-arrow.png";
import OtpComponent from "../../../components/otpComponent/OtpComponent";
import ResetPassword from "../../../components/resetPassword/ResetPassword";
import { Link } from "react-router-dom";
import CustomSuccessPage from "../../../components/customSuccessPage/CustomSuccessPage";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [passworsResetSuccess, setPassworsResetSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onPassSubmit = (data) => {
    setEmailSent(true);
    console.log("PassData: ", data);
  };
  useEffect(() => {
    console.log(otpSent);
  }, [otpSent]);

  return (
    <div>
      <div className="authentication-header">
        <Link to="/">
          <img src={LogoMark} alt="homerun icon" className="homerun-icon" />
        </Link>
      </div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        {!passworsResetSuccess && (
          <>
            {!otpSent && (
              <>
                {!emailSent && (
                  <div className="inner-form-wrapper">
                    <div className="back-arrow-wrapper">
                      <img src={BackIcon} alt="" />
                      <span>Back</span>
                    </div>
                    <div>
                      <h1>Reset Password</h1>
                      <p>Please enter your email address</p>
                    </div>
                    <form
                      onSubmit={handleSubmit(onPassSubmit)}
                      className="form-wrapper"
                    >
                      <label>
                        {/* Email: */}
                        <input
                          type="text"
                          placeholder="Email"
                          className="main-text-input"
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                        {errors.email && (
                          <p className="input-error-message">
                            {errors.email.message}
                          </p>
                        )}
                      </label>

                      <input
                        type="submit"
                        value="Send OTP"
                        className={
                          !isValid ? "main-form-btn-disabled" : "main-form-btn"
                        }
                        disabled={!isValid}
                      />
                    </form>
                  </div>
                )}
                {emailSent && <OtpComponent setOtpSent={setOtpSent} />}
              </>
            )}
            {otpSent && (
              <ResetPassword
                setPassworsResetSuccess={setPassworsResetSuccess}
              />
            )}
          </>
        )}
        {passworsResetSuccess && <CustomSuccessPage />}
      </div>
    </div>
  );
};

export default ForgotPassword;
