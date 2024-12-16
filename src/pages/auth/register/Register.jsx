import React, { useEffect, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../../services/slices/userSlice";
import { isValidPhoneNumber } from "react-phone-number-input";
import { setRegistrationToken } from "../../../services/slices/authSlice";

const Register = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const registeredCookies = cookies.get("resgitered");
  const [revealPassword, setRevealPassword] = useState(false);
  const toastId = React.useRef(null);

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
  const watchEmail = watch("email");
  const watchPhoneNumber = watch("phone_number");

  const onSubmit = async (data) => {
    // setFormSumitted(true);
    await registerUser(data);
  };

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
          value={isLoading ? "Loading..." : "Complete"}
          style={{ backgroundColor: isLoading ? "#686868" : "" }}
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
          disabled={
            !isValid ||
            !isValidPhoneNumber(watchPhoneNumber ? watchPhoneNumber : "")
          }
          type="submit"
          className={
            !isValid ||
            !isValidPhoneNumber(watchPhoneNumber ? watchPhoneNumber : "")
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
  const handleShowPassword = (name) => {
    setRevealPassword((prev) => !prev);
  };
  useEffect(() => {
    if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(error?.data?.error.message, {
          position: "top-right",
        });
      }
    }
    if (isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success(registerData?.message, {
          position: "top-right",
        });
      }
      dispatch(setRegistrationToken(registerData.data));
      dispatch(addCurrentUser(watchEmail));
      setFormSumitted(true);
      // cookies.set("resgitered", registerData.data);
    }
    if (registeredCookies !== undefined) {
      setFormSumitted(false);
    }
    handleSelectedCities();
    handleSelectedState();
  }, [
    registeredCookies,
    watchCountry,
    watchState,
    isSuccess,
    error,
    formSubmitted,
  ]);
  return (
    <div>
      <div className="authentication-header">
        <Link to="/">
          <img src={LogoMark} alt="homerun icon" className="homerun-icon" />
        </Link>
      </div>
      <ToastContainer />
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>

        {!formSubmitted && registeredCookies === undefined && (
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
                    name="first_name"
                    required="First name is required"
                    placeholder="First name"
                    // className="main-text-input"
                    type="text"
                    error={errors?.first_name?.message}
                    register={register}
                    style={{ borderColor: errors.first_name ? "red" : "blue" }}
                    iconLeft={<IoPersonOutline color="gray" size={20} />}
                  />
                  <CustomImput
                    name="last_name"
                    required="Last name is required"
                    placeholder="Last name"
                    // className="main-text-input"
                    type="text"
                    error={errors?.lastName?.message}
                    register={register}
                    style={{ borderColor: errors.last_name ? "red" : "blue" }}
                    iconLeft={<IoPersonOutline color="gray" size={20} />}
                  />
                  <CustomImput
                    name="email"
                    required="Email is required"
                    placeholder="Email"
                    type="email"
                    error={errors?.email?.message}
                    register={register}
                    style={{ borderColor: errors.email ? "red" : "blue" }}
                    iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  />
                  <CustomImput
                    name="referredBy"
                    placeholder="Referrer code (Leave empty if NONE)"
                    type="text"
                    error={errors?.refererCode?.message}
                    register={register}
                    style={{ borderColor: errors.refererCode ? "red" : "blue" }}
                    iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  />
                  <CustomPhoneInput
                    inputWatcch={watchPhoneNumber}
                    name="phone_number"
                    control={control}
                    style={{
                      borderColor: errors.phone_number ? "red" : "blue",
                    }}
                    register={register}
                  />
                </>
              )}
              {formStep >= 1 && (
                <>
                  <CustomSelect
                    name="resident_country"
                    type="text"
                    className="main-text-input"
                    style={{
                      borderColor: errors.resident_country ? "red" : "blue",
                    }}
                    register={register}
                    require="Country is required"
                    placeholder="Country name"
                    error={errors.resident_country?.message}
                    data={countries}
                    iconLeft={<TbWorldPin color="gray" size={20} />}
                  />
                  <CustomSelect
                    name="resident_state"
                    type="text"
                    style={{
                      borderColor: errors.resident_state ? "red" : "blue",
                    }}
                    // className="main-text-input"
                    register={register}
                    require="State is required"
                    placeholder="State name"
                    error={errors.resident_state?.message}
                    data={states}
                    iconLeft={<TbBuildingEstate color="gray" size={20} />}
                  />
                  <CustomSelect
                    name="resident_city"
                    type="text"
                    style={{
                      borderColor: errors.resident_city ? "red" : "blue",
                    }}
                    className="main-text-input"
                    register={register}
                    require="City is required"
                    placeholder="City name"
                    error={errors.resident_city?.message}
                    data={cities}
                    iconLeft={<FaCity color="gray" size={20} />}
                  />
                  <CustomImput
                    name="password"
                    required="Password is required"
                    placeholder="Password"
                    onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    error={errors?.password?.message}
                    type={revealPassword ? "text" : "password"}
                    register={register}
                    style={{ borderColor: errors.password ? "red" : "blue" }}
                    iconLeft={<TbPasswordUser color="gray" size={20} />}
                    pattern={/^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/}
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
                    onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
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
                    validate={(value) =>
                      value === watchPassword || "Passwords do not match"
                    }
                  />
                </>
              )}
              {/* <input type="submit" /> */}
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
        {(formSubmitted || registeredCookies) && (
          <OtpComponent email={watchEmail} />
        )}
      </div>
    </div>
  );
};

export default Register;
