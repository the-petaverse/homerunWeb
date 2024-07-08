import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet } from "react-router-dom";
import "./Login.css";
import LoginImage from "../../assets/feedback.png";
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
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        <div className="inner-form-wrapper">
          <h3>Hey, </h3>
          <h3>We are glad to see back</h3>
          <p>Please login with your details to continue</p>
          {error && <p className="login-error-style">{error.data.error}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <label>
              Email:
              <input
                type="email"
                placeholder="example@example.com"
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
              Password:
              <input
                type="password"
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
            <input
              type="submit"
              className="main-form-btn"
              disabled={!isValid || isLoading}
            />
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
