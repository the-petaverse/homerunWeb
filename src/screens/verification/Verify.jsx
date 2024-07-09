import React, { useEffect } from "react";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "../../services/auth/authApi";

const Verify = () => {
  const [verifyUser, { data: verifyData, isSuccess, error }] =
    useVerifyUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data) => {
    verifyUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      // console.log(verifyData);
      navigate("/login", { replace: true });
    }
  }, [isSuccess]);

  return (
    <div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        <div className="inner-form-wrapper">
          <h3>Hey, </h3>
          <h3>You are alomst done</h3>
          {error ? (
            <p>{error?.data?.error}</p>
          ) : (
            <p>Please enter the code received to continue</p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="form-wrapper">
            <label>
              Verification:
              <input
                type="text"
                maxLength={6}
                style={{
                  borderColor: errors.verification_code ? "red" : "blue",
                }}
                className="main-text-input"
                {...register("verification_code", {
                  required: "Please enter your verification code",
                })}
              />
              {errors.verification_code && (
                <p className="input-error-message">
                  {errors.verification_code.message}
                </p>
              )}
            </label>
            <input
              type="submit"
              className="main-form-btn"
              disabled={!isValid}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
