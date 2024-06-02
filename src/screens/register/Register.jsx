import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/verify", { replace: true });
  };

  const handleCompleteForm = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <input
          disabled={!isValid}
          type="submit"
          className="register-main-form-btn"
        />
      );
    }
    {
      return (
        <button
          disabled={!isValid}
          type="submit"
          className="register-main-form-btn"
          onClick={handleCompleteForm}
        >
          Next Step
        </button>
      );
    }
  };
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
            {formStep === 0 && (
              <>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    style={{ borderColor: errors.firstName ? "red" : "blue" }}
                    placeholder="First name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="input-error-message">
                      {errors.firstName.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="input-error-message">
                      {errors.lastName.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="email"
                    style={{ borderColor: errors.email ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Email(example@example.com)"
                    {...register("email", {
                      required: "Valid email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="input-error-message">
                      {errors.email.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    style={{ borderColor: errors.phoneNumber ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Phone number"
                    {...register("phoneNumber", {
                      required: "Valid phone number is required",
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="input-error-message">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </label>
              </>
            )}
            {formStep === 1 && (
              <>
                <label>
                  <input
                    // Turned to dropdownmenu
                    type="text"
                    style={{ borderColor: errors.country ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Country (Nigeria, etc.)"
                    {...register("country", {
                      required: "Country is required",
                    })}
                  />
                  {errors.country && (
                    <p className="input-error-message">
                      {errors.country.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    // Turned to dropdownmenu
                    type="text"
                    style={{ borderColor: errors.homeSate ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="homeSate (Lagos, etc.)"
                    {...register("homeSate", { required: "State is required" })}
                  />
                  {errors.homeSate && (
                    <p className="input-error-message">
                      {errors.homeSate.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    // Turned to dropdownmenu
                    type="text"
                    style={{ borderColor: errors.homeCity ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="City (Nigeria, etc.)"
                    {...register("homeCity", { required: "City is required" })}
                  />
                  {errors.homeCity && (
                    <p className="input-error-message">
                      {errors.homeCity.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="password"
                    style={{ borderColor: errors.password ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="input-error-message">
                      {errors.password.message}
                    </p>
                  )}
                </label>
              </>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
