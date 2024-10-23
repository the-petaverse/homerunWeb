import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/login.png";
import BackIcon from "/images/back-arrow.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TbPasswordUser } from "react-icons/tb";
import CustomImput from "../customImput/CustomImput";
import { useResetUserPasswordMutation } from "../../services/auth/authApi";
import { toast } from "react-toastify";
import { updateCurrentUser } from "../../services/slices/userSlice";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import {
  clearAccessToken,
  clearPasswordResetToken,
} from "../../services/slices/authSlice";
import { useNavigate } from "react-router-dom";
const ResetPassword = ({
  setShowDashboard,
  setPassworsResetSuccess,
  setPassworsResetComplete,
  setFormSteps,
}) => {
  //   const [showDashboard, setShowDashboard] = useState(1);
  const [revealPassword, setRevealPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toastId = React.useRef(null);
  const [
    resetUserPassword,
    { data: resetPasswordData, isLoading, isSuccess, error },
  ] = useResetUserPasswordMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const handleShowPassword = () => {
    setRevealPassword((prev) => !prev);
  };

  const watchPassword = watch("password");
  const onPassSubmit = async (data) => {
    // setPassworsResetSuccess(true);
    // setUserverifiedOtp("2");
    // setShowDashboard(5);
    await resetUserPassword(data);
  };
  console.log("object is saved");

  useEffect(() => {
    if (isSuccess) {
      dispatch(clearPasswordResetToken());
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(resetPasswordData?.message, {
          position: "top-right",
        });
      }
      navigate("/login", { replace: true });
    }
    if (error) {
      console.log(error);
    }
  }, [error, isSuccess]);

  return (
    <>
      <div className="inner-form-wrapper">
        <div>
          <div className="back-arrow-wrapper">
            <img src={BackIcon} alt="back button" />
            <span>Back</span>
          </div>
        </div>
        <div>
          <h1>Change Password</h1>
          <p>Please enter and confirm new password</p>
        </div>
        <form onSubmit={handleSubmit(onPassSubmit)} className="form-wrapper">
          <CustomImput
            name="password"
            required="Password is required"
            placeholder="Password"
            type={revealPassword ? "text" : "password"}
            error={errors?.password?.message}
            register={register}
            style={{ borderColor: errors.password ? "red" : "blue" }}
            iconLeft={<TbPasswordUser color="gray" size={20} />}
            pattern={/^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/}
            iconRight={
              revealPassword ? (
                <FiEye color="gray" size={20} />
              ) : (
                <FiEyeOff color="gray" size={20} />
              )
            }
            inconClick={handleShowPassword}
          />
          <CustomImput
            name="confirm_password"
            required="Confirm Password is required"
            placeholder="Confirm Password"
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            // className="main-text-input"
            error={errors?.confirm_password?.message}
            type={revealPassword ? "text" : "password"}
            register={register}
            style={{
              borderColor: errors.confirm_password ? "red" : "blue",
            }}
            iconLeft={<TbPasswordUser color="gray" size={20} />}
            iconRight={
              revealPassword ? (
                <FiEye color="gray" size={20} />
              ) : (
                <FiEyeOff color="gray" size={20} />
              )
            }
            inconClick={handleShowPassword}
            validate={(value) =>
              value === watchPassword || "Passwords do not match"
            }
          />

          <input
            type="submit"
            className={!isValid ? "main-form-btn-disabled" : "main-form-btn"}
            disabled={!isValid}
          />
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
