import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet, Link } from "react-router-dom";
import "./Login.css";
import LoginImage from "../../assets/login.png";
import LogoMark from "../../assets/logomark.png";
import HomerunIcon from "../../assets/homerun-icon.png";
import Navbar from "../../components/Navbar/Navbar";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import Cookies from "universal-cookie";

import { useLoginUserMutation } from "../../services/auth/authApi";

const Login = () => {
  const cookies = new Cookies();
  const [loginUser, { data: loginData, isLoading, isSuccess, error }] =
    useLoginUserMutation();

  const receivedCookies = cookies.get("auth_token");
  const [openSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    await loginUser(data);
  };

  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  if (isSuccess) {
    cookies.set("auth_token", loginData.data);
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
          <p>Please enter your email and password.</p>
          {error && <p className="login-error-style">{error.data.error}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <label htmlFor="">
              <input
                type="email"
                placeholder="Email"
                className="main-text-input"
                style={{ borderColor: errors.email ? "red" : "blue" }}
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="input-error-message">{errors.email.message}</p>
              )}
            </label>

            <label>
              <input
                type="password"
                placeholder="Password"
                style={{ borderColor: errors.password ? "red" : "blue" }}
                className="main-text-input"
                {...register("password", {
                  required: "password is required",
                })}
              />
              {errors.password && (
                <p className="input-error-message">{errors.password.message}</p>
              )}
            </label>
            <div className="keep-loggin-wrapper">
              <p>Keep me logged in</p>
              <p>Reset Password</p>
            </div>
            <input
              type="submit"
              className={!isValid ? "main-form-btn-disabled" : "main-form-btn"}
              disabled={!isValid || isLoading}
            />
            <p className="already-sign-in">
              You don’t have an account? Sign up to Homerun
            </p>
          </form>
        </div>
      </div>
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
    </div>
  );
};

export default Login;
