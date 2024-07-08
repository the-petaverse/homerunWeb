import React from "react";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";

const VerificationCode = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    setFormStage((cur) => cur + 1);
    console.log("Data: ", data);
  };

  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>Verification code</h2>
      </div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        <div className="inner-form-wrapper">
          <h3>Hey, </h3>
          <p>Please enter your code received to continue</p>
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <label>
              Verification code:
              <input
                type="text"
                maxLength={6}
                className="main-text-input"
                {...register("verification")}
              />
            </label>
            <input type="submit" className="main-form-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
