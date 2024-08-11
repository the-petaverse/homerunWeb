import React, { useEffect, useState } from "react";
import LoginImage from "../../assets/login.png";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "../../services/auth/authApi";
// import BackIcon from "../../assets/back-arrow.png";
import SuccessImage from "../../assets/success.png";
// import WavyCheckIcon from "../../assets/wavy-check.png";
import "./Verify.css";
import Cookies from "universal-cookie";
import OtpComponent from "../../components/otpComponent/OtpComponent";

const Verify = () => {
  const cookies = new Cookies();
  const registeredCookies = cookies.get("resgitered");
  const [notRegistered, setNotRegistered] = useState(false);
  const [checkOtpSuccess, setCheckOtpSuccess] = useState(false);
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
        {!checkOtpSuccess && <OtpComponent />}
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
