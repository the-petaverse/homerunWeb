import React from "react";
import { useForm } from "react-hook-form";
import LoginImage from "../../assets/feedback.png";
const ResetPassword = ({ setShowDashboard }) => {
  //   const [showDashboard, setShowDashboard] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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
          <h3>Hey, </h3>
          <p>Please enter your details to continue</p>
          <form onSubmit={handleSubmit(onPassSubmit)} className="form-wrapper">
            <label>
              Email:
              <input
                type="text"
                placeholder="example@example.com"
                className="main-text-input"
                {...register("email")}
              />
            </label>
            <label>
              Old Password:
              <input
                type="password"
                className="main-text-input"
                {...register("password")}
              />
            </label>
            <label>
              New Password:
              <input
                type="password"
                className="main-text-input"
                {...register("password")}
              />
            </label>
            <input
              type="submit"
              className="main-form-btn"
              // onClick={() => setShowDashboard(5)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
