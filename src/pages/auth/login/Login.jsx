import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet, Link } from "react-router-dom";
import "./Login.css";
import LoginImage from "../../../assets/login.png";
import LogoMark from "../../../assets/logomark.png";
import HomerunIcon from "../../../assets/homerun-icon.png";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { FiEyeOff, FiEye } from "react-icons/fi";
import Cookies from "universal-cookie";

import { useLoginUserMutation } from "../../../services/auth/authApi";
import CustomImput from "../../../components/customImput/CustomImput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [revealPassword, setRevealPassword] = useState(false);
  const toastId = React.useRef(null);
  const cookies = new Cookies();
  const [loginUser, { data: loginData, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  const receivedCookies = cookies.get("auth_token");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  // const notify = () => toast("Wow so easy!");

  const onSubmit = async (data) => {
    // console.log(data);
    await loginUser(data);
  };
  const handleShowPassword = () => {
    setRevealPassword((prev) => !prev);
  };
  if (isSuccess) {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success(loginData?.message, {
        position: "top-right",
      });
    }
    cookies.set("auth_token", loginData?.data);
  }
  if (error) {
    console.log(error.error);
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error(
        error ? error?.data?.message : error?.error,
        {
          position: "top-right",
        }
      );
    }
  }

  useEffect(() => {
    if (receivedCookies) {
      navigate("/dashboard", { replace: true });
    }
  }, [receivedCookies]);

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
        <div className="inner-form-wrapper">
          <img src={HomerunIcon} alt="" className="homerun-icon" />
          <h3>Welcome Back </h3>
          <p className="login-message">Please enter your email and password.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
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

            <CustomImput
              name="password"
              required="Password is required"
              placeholder="Password"
              error={errors?.password?.message}
              type={revealPassword ? "text" : "password"}
              register={register}
              style={{ borderColor: errors.password ? "red" : "blue" }}
              iconLeft={<TbPasswordUser color="gray" size={20} />}
              iconRight={
                revealPassword ? (
                  <FiEye color="gray" size={20} />
                ) : (
                  <FiEyeOff color="gray" size={20} />
                )
              }
              inconClick={handleShowPassword}
            />

            <div className="keep-loggin-wrapper">
              <p>Keep me logged in</p>
              <Link to="/forgot-password">
                <p className="reset-para">Reset Password</p>
              </Link>
            </div>
            <input
              type="submit"
              className={!isValid ? "main-form-btn-disabled" : "main-form-btn"}
              disabled={!isValid || isLoading}
            />
            <div className="already-sign-n-wrapper">
              <p className="already-sign-in">You don’t have an account?</p>
              <p>
                <span>
                  <Link to="/register" className="sign-up-span">
                    Sign up
                  </Link>
                </span>{" "}
                to Homerun
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
