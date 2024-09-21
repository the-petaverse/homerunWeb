import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

import LoginImage from "../../../assets/login.png";
import LogoMark from "../../../assets/logomark.png";
import HomerunIcon from "../../../assets/homerun-icon.png";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../../services/auth/authApi";
import backButton from "../../../assets/form-back.png";
import "./Register.css";
import Cookies from "universal-cookie";
import OtpComponent from "../../../components/otpComponent/OtpComponent";
import CustomSelect from "../../../components/customSelect/CustomSelect";
import CustomImput from "../../../components/customImput/CustomImput";
import CustomBackButton from "../../../components/customBackButton/CustomBackButton";
import { IoPersonOutline } from "react-icons/io5";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { FiEye, FiEyeOff } from "react-icons/fi";
import CustomPhoneInput from "../../../components/customPhoneInput/CustomPhoneInput";
import { TbWorldPin, TbBuildingEstate } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import { cities, countries, states } from "../../../data/location";

const Register = () => {
  const cookies = new Cookies();
  const registeredCookies = cookies.get("resgitered");
  const [revealPassword, setRevealPassword] = useState(false);

  const [registerUser, { data: registerData, isSuccess, error, isLoading }] =
    useRegisterUserMutation();
  const navigate = useNavigate();

  const [formStep, setFormStep] = useState(0);
  const [formSubmitted, setFormSumitted] = useState(false);
  const [country, setCountry] = useState([]);
  const [myState, setMyState] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const watchCountry = watch("country");
  const watchState = watch("state");
  const watchPassword = watch("password");
  const confirmPassword = watch("confirm_password");

  const onSubmit = async (data) => {
    setFormSumitted(true);
    console.log(data);
    // await registerUser(data);
  };

  if (isSuccess) {
    cookies.set("resgitered", registerData.message);
  }
  const handleSelectedState = () => {
    const stateFiltered = states.filter(
      (statedata) => statedata.countryid === watchCountry
    );
    setMyState(stateFiltered);
  };
  const handleSelectedCities = () => {
    const citiesFiltered = cities.filter(
      (citydata) => citydata.stateId === watchState
    );
    setCitiesList(citiesFiltered);
  };

  const handleCompleteForm = () => {
    setFormStep((cur) => cur + 1);
  };
  const handleFormGoBack = () => {
    setFormStep((cur) => cur - 1);
  };

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <input
          disabled={!isValid || isLoading}
          type="submit"
          className={
            !isValid
              ? "register-main-form-btn-disabled"
              : "register-main-form-btn"
          }
        />
      );
    }
    {
      return (
        <button
          disabled={!isValid}
          type="submit"
          className={
            !isValid
              ? "register-main-form-btn-disabled"
              : "register-main-form-btn"
          }
          onClick={handleCompleteForm}
        >
          Continue
        </button>
      );
    }
  };
  const handleShowPassword = () => {
    setRevealPassword((prev) => !prev);
  };
  useEffect(() => {
    if (registeredCookies) {
      navigate("/verify", { replace: true });
    }
    handleSelectedCities();
    handleSelectedState();
  }, [registeredCookies, watchCountry, watchState, isSuccess]);
  return (
    <div>
      <div className="authentication-header">
        <Link to="/">
          <img src={LogoMark} alt="homerun icon" className="homerun-icon" />
        </Link>
      </div>
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>

        {!formSubmitted && (
          <div className="register-inner-form-wrapper">
            <img
              src={HomerunIcon}
              alt="homerun icon"
              className="homerun-icon-inform"
            />
            {formStep < 1 && (
              <div className="register-notice-message">
                <h1>Welcome To Homerun</h1>
                <p>Please take a few moment to register. </p>
              </div>
            )}
            {formStep === 1 && (
              <div className="back-button-wrapper">
                <CustomBackButton
                  title="Back"
                  backBtnClick={handleFormGoBack}
                />
              </div>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="register-form-wrapper"
            >
              {formStep === 0 && (
                <>
                  <CustomImput
                    name="firstName"
                    required="First name is required"
                    placeholder="First name"
                    // className="main-text-input"
                    type="text"
                    error={errors?.firstName?.message}
                    register={register}
                    style={{ borderColor: errors.firstName ? "red" : "blue" }}
                    iconLeft={<IoPersonOutline color="gray" size={20} />}
                  />
                  <CustomImput
                    name="lastName"
                    required="Last name is required"
                    placeholder="Last name"
                    // className="main-text-input"
                    type="text"
                    error={errors?.lastName?.message}
                    register={register}
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    iconLeft={<IoPersonOutline color="gray" size={20} />}
                  />
                  <CustomImput
                    name="email"
                    required="Email is required"
                    placeholder="Email"
                    // className="main-text-input"
                    type="email"
                    error={errors?.email?.message}
                    register={register}
                    style={{ borderColor: errors.email ? "red" : "blue" }}
                    iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  />
                  <CustomPhoneInput
                    control={control}
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    register={register}
                  />
                </>
              )}
              {formStep === 1 && (
                <>
                  <CustomSelect
                    name="country"
                    type="text"
                    className="main-text-input"
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    register={register}
                    require="Country is required"
                    placeholder="Country name"
                    error={errors.country?.message}
                    data={countries}
                    iconLeft={<TbWorldPin color="gray" size={20} />}
                  />
                  <CustomSelect
                    name="state"
                    type="text"
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    className="main-text-input"
                    register={register}
                    require="State is required"
                    placeholder="State name"
                    error={errors.state?.message}
                    data={states}
                    iconLeft={<TbBuildingEstate color="gray" size={20} />}
                  />
                  <CustomSelect
                    name="city"
                    type="text"
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    className="main-text-input"
                    register={register}
                    require="City is required"
                    placeholder="City name"
                    error={errors.city?.message}
                    data={cities}
                    iconLeft={<FaCity color="gray" size={20} />}
                  />
                  <CustomImput
                    name="password"
                    required="Password is required"
                    placeholder="Password"
                    // className="main-text-input"
                    error={errors?.password?.message}
                    type={revealPassword ? "text" : "password"}
                    register={register}
                    style={{ borderColor: errors.password ? "red" : "blue" }}
                    iconLeft={<TbPasswordUser color="gray" size={20} />}
                    iconRight={
                      revealPassword ? (
                        <FiEye color="gray" size={20} />
                      ) : (
                        <FiEyeOff color="gray" size={20} />
                      )
                    }
                    inconClick={handleShowPassword}
                  />

                  <CustomImput
                    name="confirm_password"
                    required="Confirm Password is required"
                    placeholder="Confirm Password"
                    // className="main-text-input"
                    error={errors?.confirm_password?.message}
                    type={revealPassword ? "text" : "password"}
                    register={register}
                    style={{
                      borderColor: errors.confirm_password ? "red" : "blue",
                    }}
                    iconLeft={<TbPasswordUser color="gray" size={20} />}
                    iconRight={
                      revealPassword ? (
                        <FiEye color="gray" size={20} />
                      ) : (
                        <FiEyeOff color="gray" size={20} />
                      )
                    }
                    inconClick={handleShowPassword}
                  />
                </>
              )}
              {renderButton()}
            </form>
            <div className="last-text-wrapper">
              <p className="already-last-text">
                You already have an account?
                <span>
                  <Link to="/login" className="login-link">
                    Login
                  </Link>
                </span>
                to Homerun
              </p>
            </div>
          </div>
        )}

        {formSubmitted && <OtpComponent />}
      </div>
    </div>
  );
};

export default Register;
