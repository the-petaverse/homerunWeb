import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet, Link } from "react-router-dom";
import "./Login.css";
import LoginImage from "../../assets/login.png";
import LogoMark from "../../assets/logomark.png";
import HomerunIcon from "../../assets/homerun-icon.png";
import Cookies from "universal-cookie";

import { useLoginUserMutation } from "../../services/auth/authApi";
import CustomImput from "../../components/customImput/CustomImput";

const Login = () => {
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

  const onSubmit = async (data) => {
    console.log(data);
    // await loginUser(data);
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
            <CustomImput
              name="email"
              required="Email is required"
              placeholder="Email"
              className="main-text-input"
              type="email"
              error={errors?.email?.message}
              register={register}
              style={{ borderColor: errors.email ? "red" : "blue" }}
            />

            <CustomImput
              name="password"
              required="Password is required"
              placeholder="Password"
              className="main-text-input"
              error={errors?.password?.message}
              type="password"
              register={register}
              style={{ borderColor: errors.password ? "red" : "blue" }}
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
                <span ><Link to="/register" className="sign-up-span">Sign up</Link></span> to Homerun
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
