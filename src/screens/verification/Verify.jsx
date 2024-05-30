import React from "react";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";

const Verify = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        <div className="inner-form-wrapper">
          <h3>Hey, </h3>
          <h3>You are alomst done</h3>
          <p>Please enter the code received to continue</p>
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <label>
              Verification:
              <input
                type="text"
                maxLength={6}
                className="main-text-input"
                {...register("email")}
              />
            </label>
            <input
              type="submit"
              className="main-form-btn"
              //   onClick={handleLogin}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
