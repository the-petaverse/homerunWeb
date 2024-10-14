import React, { useEffect, useState } from "react";
import "./OtpComponent.css";
import { Navigate, useNavigate } from "react-router-dom";
import BackIcon from "/images/back-arrow.png";
import WavyCheckIcon from "../../assets/wavy-check.png";
import HomerunIcon from "../../assets/homerun-icon.png";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import {
  useResetUserOtpMutation,
  useVerifyUserMutation,
} from "../../services/auth/authApi";
import CustomBackButton from "../customBackButton/CustomBackButton";
import CustomButton from "../customButton/CustomButton";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "../../services/slices/userSlice";

const OtpComponent = ({ email }) => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const cookies = new Cookies();
  const requestedMailSent = cookies.get("request-service");
  const dispatch = useDispatch();
  const toastId = React.useRef(null);
  const [otpDigits, setOtpDigits] = useState(new Array(8).fill(""));
  const [userVerifiedOtp, setUserverifiedOtp] = useState("");
  const [verifyUser, { data: verifyData, isSuccess, error, isLoading }] =
    useVerifyUserMutation();
  const [
    resetUserOtp,
    {
      data: otpResetData,
      isSuccess: otpResetIsSuccess,
      error: otpRequestError,
      isLoading: otpRequestIsLoading,
    },
  ] = useResetUserOtpMutation();
  const registeredCookies = cookies.get("resgitered");
  const navigate = useNavigate();

  if (error) {
    console.log(error);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  // Server request to reset OTP should
  const handleServerResetOtp = async () => {
    const data = {
      email: currentUser.userEmail,
    };
    await resetUserOtp(data);
  };

  const submitOtpToTheServer = async (e) => {
    e.preventDefault();
    const otp = otpDigits.join("");
    await verifyUser(otp);
    // console.log(res);
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
      cookies.remove("request-service");
      dispatch(updateCurrentUser());
      // (true);
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(verifyData?.message, {
          position: "top-right",
        });
      }
      if (requestedMailSent !== undefined) {
        navigate("/forgot-password", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    }

    if (error) {
      console.error(error);
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(error?.data?.message, {
          position: "top-right",
        });
      }
    }
    if (otpRequestError) {
      console.log(otpRequestError);
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(otpRequestError?.data?.message, {
          position: "top-right",
        });
      }
    }
    if (otpResetIsSuccess) {
      console.log(otpResetData);
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(otpResetData?.message, {
          position: "top-right",
        });
      }
    }
  }, [
    isSuccess,
    registeredCookies,
    otpRequestError,
    otpResetIsSuccess,
    requestedMailSent,
    error,
  ]);
  return (
    <>
      <div className="otp-main-inner-form-wrapper">
        <img src={HomerunIcon} alt="homerun icon" className="homerun-icon" />
        {/* <div>
          <CustomBackButton title="Back" />
        </div> */}
        <div className="sent-otp-sent-wrapper">
          <h3>OTP Sent To Mail</h3>
          <img
            src={WavyCheckIcon}
            alt="check button"
            className="check-mark-btn"
          />
        </div>
        <p className="token-message">
          {`Please input OTP sent to ${currentUser.userEmail}`}
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
              <p onClick={handleServerResetOtp}>Resend OTP</p>
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
