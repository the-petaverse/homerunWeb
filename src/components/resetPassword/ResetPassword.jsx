import React from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/login.png";
import BackIcon from "../../assets/back-arrow.png";
const ResetPassword = ({ setShowDashboard, setPassworsResetSuccess }) => {
  //   const [showDashboard, setShowDashboard] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onPassSubmit = (data) => {
    setPassworsResetSuccess(true);
    // setUserverifiedOtp("2");
    // setShowDashboard(5);
    console.log("PassData: ", data);
  };

  return (
    <>
      <div className="inner-form-wrapper">
        <div>
          <div className="back-arrow-wrapper">
            <img src={BackIcon} alt="back button" />
            <span>Back</span>
          </div>
        </div>
        <div>
          <h1>Change Password</h1>
          <p>Please enter and confirm new password</p>
        </div>
        <form onSubmit={handleSubmit(onPassSubmit)} className="form-wrapper">
          <label>
            <input
              type="password"
              placeholder="Password"
              className="main-text-input"
              {...register("password", {
                required: "Password can't be empty",
              })}
            />
            {errors.password && (
              <p className="input-error-message">{errors.password.message}</p>
            )}
          </label>
          <label>
            <input
              type="password"
              placeholder="Confirm password"
              className="main-text-input"
              {...register("newPassword", {
                required: "New Password can't be empty",
              })}
            />
            {errors.newPassword && (
              <p className="input-error-message">
                {errors.newPassword.message}
              </p>
            )}
          </label>
          <input
            type="submit"
            className={!isValid ? "main-form-btn-disabled" : "main-form-btn"}
            disabled={!isValid}
          />
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
