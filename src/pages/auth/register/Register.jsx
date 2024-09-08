import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbar from "../../../components/Navbar/Navbar";
import LoginImage from "../../assets/login.png";
import ProfileImage from "../../assets/profile.png";
import LogoMark from "../../assets/logomark.png";
import HomerunIcon from "../../assets/homerun-icon.png";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../services/auth/authApi";
import backButton from "../../assets/form-back.png";
import "./Register.css";
import MainSideBar from "../../../components/mainSideBar/MainSideBar";
import Cookies from "universal-cookie";
import OtpComponent from "../../../components/otpComponent/OtpComponent";
import CustomSelect from "../../../components/customSelect/CustomSelect";
import CustomImput from "../../../components/customImput/CustomImput";

const countries = [
  { id: "1", title: "Nigeria" },
  { id: "2", title: "USA" },
  { id: "3", title: "Kenya" },
];
const states = [
  { id: "1", countryid: "1", title: "Lagos" },
  { id: "2", countryid: "1", title: "Ondo" },
  { id: "3", countryid: "2", title: "Texas" },
  { id: "4", countryid: "2", title: "Califonia" },
];
const cities = [
  { id: "1", stateId: "1", title: "Ikeja" },
  { id: "2", stateId: "1", title: "Mushin" },
  { id: "3", stateId: "2", title: "Akure" },
  { id: "4", stateId: "2", title: "Owo" },
];

const Register = () => {
  const cookies = new Cookies();
  const registeredCookies = cookies.get("resgitered");
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
          // disabled={!isValid || isLoading}
          type="submit"
          className="register-main-form-btn"
        />
      );
    }
    {
      return (
        <button
          // disabled={!isValid}
          type="submit"
          className="register-main-form-btn"
          onClick={handleCompleteForm}
        >
          Continue
        </button>
      );
    }
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
              className="homerun-icon"
            />
            <h1>Welcome To Homerun</h1>
            {error?.data?.message ? (
              <p className="register-error">{error?.data?.message}</p>
            ) : (
              <p>Please take a few moment to register. </p>
            )}
            {error?.error && (
              <p className="register-error">Some went wrong....</p>
            )}
            {error?.error?.message && (
              <p className="register-error">Some went wrong....</p>
            )}
            {isLoading && (
              <p className="register-error">
                We are sending your data, please wait.....
              </p>
            )}
            {formStep === 1 && (
              <div className="back-button-wrapper" onClick={handleFormGoBack}>
                <img
                  src={backButton}
                  alt="back-button"
                  className="back-button"
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
                    className="main-text-input"
                    type="text"
                    error={errors?.firstName?.message}
                    register={register}
                    style={{ borderColor: errors.firstName ? "red" : "blue" }}
                  />
                  <CustomImput
                    name="lastName"
                    required="Last name is required"
                    placeholder="Last name"
                    className="main-text-input"
                    type="text"
                    error={errors?.lastName?.message}
                    register={register}
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                  />
                  <CustomImput
                    name="email"
                    required="Email is required"
                    placeholder="Email"
                    className="main-text-input"
                    type="email"
                    error={errors?.email?.message}
                    register={register}
                    style={{ borderColor: errors.email ? "red" : "blue" }}
                  />
                  <label className="phone-input-wrapper">
                    <Controller
                      name="phone_number"
                      control={control}
                      // rules={{
                      //   validate: (value) => isValidPhoneNumber(value),
                      // }}
                      render={({ field: { ref, ...field } }) => {
                        return (
                          <>
                            <PhoneInput
                              {...field}
                              isValid={false}
                              // value={value}
                              // onchange={onchange}
                              inputProps={{
                                ref,
                                required: true,
                              }}
                              buttonStyle={{
                                width: "15%",
                                borderTopLeftRadius: 12,
                                borderBottomLeftRadius: 12,
                                backgroundColor: "#fff",
                                paddingLeft: 15,
                              }}
                              inputStyle={{
                                // backgroundColor: "gray",
                                height: 55,
                                width: "100%",
                                // marginTop: ,
                                borderRadius: 12,
                                paddingLeft: 80,
                                fontFamily: "Josefin Slab",
                                fontSize: 18,
                              }}
                              inputClass="register-main-text-input"
                              country={"us"}
                              // value={this.state.phone}
                              // onChange={(phone) => this.setState({ phone })}
                            />
                            {errors.phone_number && (
                              <p className="input-error-message">
                                {errors.phone_number.message}
                              </p>
                            )}
                          </>
                        );
                      }}
                    />
                  </label>
                </>
              )}
              {formStep === 1 && (
                <>
                  <CustomSelect
                    name="country"
                    type="text"
                    className="register-main-text-input"
                    register={register}
                    require="Country is required"
                    placeholder="Country name"
                    error={errors.country?.message}
                    data={countries}
                  />
                  <CustomSelect
                    name="state"
                    type="text"
                    className="register-main-text-input"
                    register={register}
                    require="State is required"
                    placeholder="State name"
                    error={errors.state?.message}
                    data={states}
                  />
                  <CustomSelect
                    name="city"
                    type="text"
                    className="register-main-text-input"
                    register={register}
                    require="City is required"
                    placeholder="City name"
                    error={errors.city?.message}
                    data={cities}
                  />
                  <CustomImput
                    name="password"
                    required="Password is required"
                    placeholder="Password"
                    className="main-text-input"
                    error={errors?.password?.message}
                    type="password"
                    register={register}
                    style={{ borderColor: errors.password ? "red" : "blue" }}
                  />

                  <CustomImput
                    name="confirm_password"
                    required="Confirm Password is required"
                    placeholder="Confirm Password"
                    className="main-text-input"
                    error={errors?.confirm_password?.message}
                    type="password"
                    register={register}
                    style={{
                      borderColor: errors.confirm_password ? "red" : "blue",
                    }}
                  />
                </>
              )}
              {renderButton()}
            </form>
            <p className="already-last-text">
              You already have an account? <span ><Link to="/login" className="login-link">Login</Link></span> to Homerun
            </p>
          </div>
        )}

        {formSubmitted && <OtpComponent />}
      </div>
    </div>
  );
};

export default Register;
