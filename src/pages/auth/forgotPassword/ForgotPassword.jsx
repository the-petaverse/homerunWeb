import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../../assets/login.png";
import "./ForgotPassword.css";
import LogoMark from "../../../assets/logomark.png";

import BackIcon from "/images/back-arrow.png";
import OtpComponent from "../../../components/otpComponent/OtpComponent";
import ResetPassword from "../../../components/resetPassword/ResetPassword";
import { Link } from "react-router-dom";
import CustomSuccessPage from "../../../components/customSuccessPage/CustomSuccessPage";
import CustomImput from "../../../components/customImput/CustomImput";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForgotUserPasswordMutation } from "../../../services/auth/authApi";
import { addCurrentUser } from "../../../services/slices/userSlice";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const ForgotPassword = () => {
  const cookies = new Cookies();
  const { currentUser } = useSelector((state) => state.currentUser);

  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const [otpSent, setOtpSent] = useState(false);
  const [passworsResetSuccess, setPassworsResetSuccess] = useState(false);
  const [passworsResetComplete, setPassworsResetComplete] = useState(false);
  const requestedMailSent = cookies.get("request-service");
  const [forgotUserPassword, { data, isError, isSuccess, error }] =
    useForgotUserPasswordMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const watchEmail = watch("email");

  const onPassSubmit = async (data) => {
    await forgotUserPassword(data);
  };

  useEffect(() => {
    if (isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(data?.message, {
          position: "top-right",
        });
      }
      setEmailSent(true);
      cookies.set("request-service", data.data);
      dispatch(addCurrentUser(watchEmail));
    }
    if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(error?.data?.message, {
          position: "top-right",
        });
      }
    }
    if (requestedMailSent) {
      console.log(requestedMailSent, "Forgot");
    }
  }, [isSuccess, isError, error]);

  return (
    <div>
      <div className="authentication-header">
        <Link to="/">
          <img src={LogoMark} alt="homerun icon" className="homerun-icon" />
        </Link>
      </div>
      <div className="forgot-main-container">
        <div className="forgot-iamge-wrapper">
          <img src={LoginImage} alt="" className="forgot-image" />
        </div>
        {/* {!passworsResetSuccess && (
          <> */}
        {requestedMailSent === undefined && (
          <>
            {!emailSent && (
              <div className="inner-form-wrapper">
                <div className="back-arrow-wrapper">
                  <img src={BackIcon} alt="" />
                  <span>Back</span>
                </div>
                <div className="forgot-passwrd-reset-header">
                  <h1>Reset Password</h1>
                  <p>Please enter your email address</p>
                </div>
                <form
                  onSubmit={handleSubmit(onPassSubmit)}
                  className="form-wrapper"
                >
                  <CustomImput
                    name="email"
                    required="Email is required"
                    placeholder="Email"
                    type="email"
                    error={errors?.email?.message}
                    register={register}
                    style={{ borderColor: errors.email ? "red" : "blue" }}
                    iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  />

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
          </>
        )}
        {currentUser !== "" && !passworsResetSuccess && (
          <OtpComponent setPassworsResetSuccess={setPassworsResetSuccess} />
        )}
        {requestedMailSent && !passworsResetComplete && (
          <ResetPassword setPassworsResetComplete={setPassworsResetComplete} />
        )}
        {/* </>
        )} */}
        {passworsResetComplete && <CustomSuccessPage />}
      </div>
    </div>
  );
};

export default ForgotPassword;
