import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/login.png";
import "./ForgotPassword.css";
import BackIcon from "../../assets/back-arrow.png";
import OtpComponent from "../../components/otpComponent/OtpComponent";
import ResetPassword from "../../components/resetPassword/ResetPassword";

const ForgotPassword = () => {
  const [userVerifiedOtp, setUserverifiedOtp] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onPassSubmit = (data) => {
    setUserverifiedOtp("1");
    // setShowDashboard(5);
    console.log("PassData: ", data);
  };
  return (
    <div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        {userVerifiedOtp === "" && (
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
                Email:
                <input
                  type="text"
                  placeholder="example@example.com"
                  className="main-text-input"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="input-error-message">{errors.email.message}</p>
                )}
              </label>

              <input
                type="submit"
                value="Send OTP"
                className="main-form-btn"
                disabled={!isValid}
              />
            </form>
          </div>
        )}
        <OtpComponent
          userVerifiedOtp={userVerifiedOtp}
          setUserverifiedOtp={setUserverifiedOtp}
        />
        <ResetPassword
          userVerifiedOtp={userVerifiedOtp}
          setUserverifiedOtp={setUserverifiedOtp}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
