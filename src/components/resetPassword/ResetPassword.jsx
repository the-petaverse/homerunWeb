import React from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/login.png";
const ResetPassword = ({
  setShowDashboard,
  userVerifiedOtp,
  setUserverifiedOtp,
}) => {
  //   const [showDashboard, setShowDashboard] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onPassSubmit = (data) => {
    // setUserverifiedOtp("2");
    // setShowDashboard(5);
    console.log("PassData: ", data);
  };

  return (
    <>
      {userVerifiedOtp === "2" && (
        <div className="inner-form-wrapper">
          <form onSubmit={handleSubmit(onPassSubmit)} className="form-wrapper">
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
      )}
    </>
  );
};

export default ResetPassword;
