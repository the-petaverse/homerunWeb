import React from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/feedback.png";
const ResetPassword = ({ setShowDashboard }) => {
  //   const [showDashboard, setShowDashboard] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onPassSubmit = (data) => {
    setShowDashboard(5);
    console.log("PassData: ", data);
  };

  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>Reset Password</h2>
      </div>
      <div className="login-main-container">
        <div className="login-iamge-wrapper">
          <img src={LoginImage} alt="" className="login-image" />
        </div>
        <div className="inner-form-wrapper">
          <form onSubmit={handleSubmit(onPassSubmit)} className="form-wrapper">
            <label>
              Email:
              <input
                type="text"
                placeholder="example@example.com"
                className="main-text-input"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="input-error-message">{errors.email.message}</p>
              )}
            </label>
            <label>
              Old Password:
              <input
                type="password"
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
              New Password:
              <input
                type="password"
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
              className="main-form-btn"
              disabled={!isValid}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
