import React, { useEffect, useState } from "react";
import LoginImage from "../../assets/feedback.png";
import SuccessImage from "../../assets/green.png";
import { useForm } from "react-hook-form";
import { PaystackButton } from "react-paystack";

const countries = [
  { id: "1", title: "Nigeria" },
  { id: "2", title: "Ghana" },
  { id: "3", title: "Kenya" },
];
const myState = [
  { id: "1", title: "Lagos" },
  { id: "2", title: "Ondo" },
  { id: "3", title: "Ekiti" },
];
const city = [
  { id: "1", title: "Akure" },
  { id: "2", title: "Owo" },
  { id: "3", title: "Ibadan" },
];

const NewRequest = ({
  setFormStage,
  formStage,
  setShowDashboard,
  setModalOpen,
}) => {
  const [country, setCountry] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const componentProps = {
    email: "test@example.com",
    amount: 100,
    metadata: {
      name: "Michael",
      phone: "12563255555",
    },
    publicKey: "pk_test_727e5faf342cc97164c860a5e08e7920dcae6c78",
    text: "Pay Now",
    onSuccess: () => setShowDashboard(1),
    // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  const onSubmit = (data) => {
    setFormStage((cur) => cur + 1);
    console.log("Data: ", data);
  };
  const handleCompleteForm = () => {
    setFormStage((cur) => cur + 1);
  };
  // console.log(formStage);
  const renderButton = () => {
    if (formStage > 1) {
      return undefined;
    } else if (formStage === 1) {
      return (
        <label className="final-submit-btn-wrapper">
          <button
            // type="Submit"
            className="final-button-wrapper final-submit-btn"
            onClick={handleCompleteForm}
            disabled={!isValid}
          >
            Next Step
          </button>
        </label>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          className="register-main-form-btn"
          onClick={handleCompleteForm}
        >
          Next Step
        </button>
      );
    }
  };

  // const handleCountry = () => {
  //
  // };

  useEffect(() => {
    setCountry(countries);
  }, []);

  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>New Request</h2>
      </div>
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>
        <div className="register-inner-form-wrapper new-request-form-side">
          {formStage < 1 && <p>We will be glad to have you onboard</p>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form-wrapper new-request-form-wrapper"
          >
            {formStage >= 0 && (
              <div
                style={{
                  display: formStage === 0 ? "block" : "none",
                }}
              >
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Request Title (Passport Collection)"
                    {...register("request_title", {
                      required: "Title is required",
                    })}
                  />
                  {errors.request_title && (
                    <p className="input-error-message">
                      {errors.request_title.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Please enter more information as possible here"
                    {...register("request_details", {
                      required: "Request details are required",
                    })}
                  />
                  {errors.request_details && (
                    <p className="input-error-message">
                      {errors.request_details.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Contact Person"
                    {...register("contact_name", {
                      required: "Contact name is required",
                    })}
                  />
                  {errors.contact_name && (
                    <p className="input-error-message">
                      {errors.contact_name.message}
                    </p>
                  )}
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Contact Telephone Number"
                    {...register("contact_number", {
                      required: "Contact number is required",
                    })}
                  />
                  {errors.contact_number && (
                    <p className="input-error-message">
                      {errors.contact_number.message}
                    </p>
                  )}
                </label>
              </div>
            )}
            {formStage === 1 && (
              <>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Contact Address"
                    {...register("contact_address", {
                      required: "Contact address is required",
                    })}
                  />
                  {errors.contact_address && (
                    <p className="input-error-message">
                      {errors.contact_address.message}
                    </p>
                  )}
                </label>
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
                    {country && country !== undefined ? (
                      country.map((countryData, index) => {
                        return (
                          <option value={countryData.id} key={index}>
                            {countryData.title}
                          </option>
                        );
                      })
                    ) : (
                      <option>Select country</option>
                    )}
                  </select>
                  {errors.country && (
                    <p className="input-error-message">
                      {errors.country.message}
                    </p>
                  )}
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="State Name"
                    {...register("stateName", {
                      required: "State name is required",
                    })}
                  >
                    {myState && myState !== undefined ? (
                      myState.map((stateData, index) => {
                        return (
                          <option value={stateData.id} key={index}>
                            {stateData.title}
                          </option>
                        );
                      })
                    ) : (
                      <option>Select state</option>
                    )}
                  </select>
                  {errors.stateName && (
                    <p className="input-error-message">
                      {errors.stateName.message}
                    </p>
                  )}
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="City Name"
                    {...register("cityName", {
                      required: "City name is required",
                    })}
                  >
                    {city && city !== undefined ? (
                      city.map((cityData, index) => {
                        return (
                          <option value={cityData.id} key={index}>
                            {cityData.title}
                          </option>
                        );
                      })
                    ) : (
                      <option>Select state</option>
                    )}
                  </select>
                  {errors.cityName && (
                    <p className="input-error-message">
                      {errors.cityName.message}
                    </p>
                  )}
                  <section className="checkboxes-container">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        {...register("terms", {
                          required: "Please accept the terms & Condition",
                        })}
                        onClick={() => setModalOpen(true)}
                      />
                      I agree to Terms & Conditions
                      {errors.terms && (
                        <p className="input-error-message">
                          {errors.terms.message}
                        </p>
                      )}
                    </label>
                  </section>
                </label>
              </>
            )}
            {formStage === 2 && (
              <>
                <div className="checkboxes-container">
                  <div className="main-success-image-container">
                    <img src={SuccessImage} className="success-image" />
                    <h3>Request has been created successfully</h3>
                    <p>
                      It is a pleasure taking your request. Your request is
                      currently been attended to. Thank you for trusting us.
                    </p>
                  </div>
                </div>
                <PaystackButton
                  {...componentProps}
                  className="register-main-form-btn"
                />
              </>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
