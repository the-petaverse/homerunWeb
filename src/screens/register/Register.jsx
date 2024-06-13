import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LoginImage from "../../assets/feedback.png";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import MainSideBar from "../../components/mainSideBar/MainSideBar";

const countries = [
  { id: "1", title: "Nigeria" },
  { id: "2", title: "USA" },
  { id: "3", title: "Kenya" },
];
const staties = [
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
  const navigate = useNavigate();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [country, setCountry] = useState([]);
  const [myState, setMyState] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const watchCountry = watch("country");
  const watchState = watch("stateName");

  const onSubmit = (data) => {
    console.log(data);
    navigate("/verify", { replace: true });
  };
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };

  const handleCompleteForm = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <input
          disabled={!isValid}
          type="submit"
          className="register-main-form-btn"
        />
      );
    }
    {
      return (
        <button
          disabled={!isValid}
          type="submit"
          className="register-main-form-btn"
          onClick={handleCompleteForm}
        >
          Next Step
        </button>
      );
    }
  };

  const handleState = () => {
    const filteredStates = staties.filter(
      (statesData) => statesData.countryid === watchCountry
    );
    setMyState(filteredStates);
  };
  const handleCities = () => {
    const filteredCities = cities.filter(
      (citiesData) => citiesData.stateId === watchState
    );
    setCitiesList(filteredCities);
  };

  useEffect(() => {
    handleState();
    handleCities();
  }, [watchCountry, watchState]);
  return (
    <div>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>
        <div className="register-inner-form-wrapper">
          <p>We will be glad to have you onboard</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form-wrapper"
          >
            {formStep === 0 && (
              <>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    style={{ borderColor: errors.firstName ? "red" : "blue" }}
                    placeholder="First name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="input-error-message">
                      {errors.firstName.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    style={{ borderColor: errors.lastName ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Last name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="input-error-message">
                      {errors.lastName.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="email"
                    style={{ borderColor: errors.email ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Email(example@example.com)"
                    {...register("email", {
                      required: "Valid email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="input-error-message">
                      {errors.email.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    style={{ borderColor: errors.phoneNumber ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Phone number"
                    {...register("phoneNumber", {
                      required: "Valid phone number is required",
                    })}
                  />
                  {errors.phoneNumber && (
                    <p className="input-error-message">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </label>
              </>
            )}
            {formStep === 1 && (
              <>
                <label>
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="Country Name"
                    {...register("country", {
                      required: "Country name is required",
                    })}
                  >
                    <option value="0">Select country</option>
                    {countries && countries !== undefined
                      ? countries.map((countryData, index) => {
                          return (
                            <option value={countryData.id} key={index}>
                              {countryData.title}
                            </option>
                          );
                        })
                      : "No country selected"}
                  </select>
                  {errors.country && (
                    <p className="input-error-message">
                      {errors.country.message}
                    </p>
                  )}
                </label>
                <label>
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="State Name"
                    {...register("homeSate", {
                      required: "State name is required",
                    })}
                  >
                    <option value="0">Select State</option>
                    {myState && myState !== undefined
                      ? myState.map((stateData, index) => {
                          return (
                            <option value={stateData.id} key={index}>
                              {stateData.title}
                            </option>
                          );
                        })
                      : "No state selected"}
                  </select>
                  {errors.homeSate && (
                    <p className="input-error-message">
                      {errors.homeSate.message}
                    </p>
                  )}
                </label>
                <label>
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="City Name"
                    {...register("homeCity", {
                      required: "City name is required",
                    })}
                  >
                    <option value="0">Select City</option>
                    {citiesList && citiesList !== undefined
                      ? citiesList.map((cityData, index) => {
                          return (
                            <option value={cityData.id} key={index}>
                              {cityData.title}
                            </option>
                          );
                        })
                      : "No city selected"}
                  </select>
                  {errors.homeCity && (
                    <p className="input-error-message">
                      {errors.homeCity.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="password"
                    style={{ borderColor: errors.password ? "red" : "blue" }}
                    className="register-main-text-input"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="input-error-message">
                      {errors.password.message}
                    </p>
                  )}
                </label>
              </>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
    </div>
  );
};

export default Register;
