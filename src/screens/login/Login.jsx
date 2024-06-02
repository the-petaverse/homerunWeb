import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet } from "react-router-dom";
import "./Login.css";
import LoginImage from "../../assets/feedback.png";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div>
      <Navbar />
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        <div className="inner-form-wrapper">
          <h3>Hey, </h3>
          <h3>We are glad to see back</h3>
          <p>Please login with your details to continue</p>
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <label>
              Email:
              <input
                type="text"
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
            <input type="submit" className="main-form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
