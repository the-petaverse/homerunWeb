import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleVerifyRedirect = () => {
    navigate("/verify", { replace: true });
  };
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Navbar />
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>
        <div className="register-inner-form-wrapper">
          <p>We will be glad to have you onboard</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form-wrapper"
          >
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="First name"
                {...register("firstName")}
              />
            </label>
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="Last name"
                {...register("lastName")}
              />
            </label>
            <label>
              <input
                type="email"
                className="register-main-text-input"
                placeholder="Email(example@example.com)"
                {...register("email")}
              />
            </label>
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="Phone number"
                {...register("phoneNumber")}
              />
            </label>
            <label>
              <input
                type="text"
                className="register-main-text-input"
                placeholder="Location (Lagos, Nigeria, etc.)"
                {...register("location")}
              />
            </label>
            <label>
              <input
                type="password"
                className="register-main-text-input"
                placeholder="Enter your password"
                {...register("password")}
              />
            </label>
            <input
              type="submit"
              className="register-main-form-btn"
              onClick={handleVerifyRedirect}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
