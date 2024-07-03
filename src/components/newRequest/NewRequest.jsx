import React, { useEffect, useRef, useState } from "react";
import SuccessImage from "../../assets/green.png";
import { useForm } from "react-hook-form";
import { PaystackButton } from "react-paystack";
import "./NewRequest.css";
import { useNavigate, useHistory } from "react-router-dom";

const accordionData = [
  {
    id: "1",
    title: "Requirements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet velit sequi similique consequuntur voluptatum quas cumnisi expedita perferendis debitis. Enim voluptas quaerat consequuntur reiciendis perspiciatis repellendus excepturi quidem voluptatem.",
  },
  {
    id: "2",
    title: "NOTE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet velit sequi similique consequuntur voluptatum quas cumnisi expedita perferendis debitis. Enim voluptas quaerat consequuntur reiciendis perspiciatis repellendus excepturi quidem voluptatem.",
  },
  {
    id: "3",
    title: "Processes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet velit sequi similique consequuntur voluptatum quas cumnisi expedita perferendis debitis. Enim voluptas quaerat consequuntur reiciendis perspiciatis repellendus excepturi quidem voluptatem.",
  },
  {
    id: "4",
    title: "Cost Break down (Estimates)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet velit sequi similique consequuntur voluptatum quas cumnisi expedita perferendis debitis. Enim voluptas quaerat consequuntur reiciendis perspiciatis repellendus excepturi quidem voluptatem.",
  },
  {
    id: "5",
    title: "Payment milestones",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Eveniet velit sequi similique consequuntur voluptatum quas cumnisi expedita perferendis debitis. Enim voluptas quaerat consequuntur reiciendis perspiciatis repellendus excepturi quidem voluptatem.",
  },
];

const requestList = [
  { id: "1", category: "Property" },
  { id: "2", category: "Documents" },
  { id: "3", category: "Hospitalities" },
  { id: "4", category: "Groceries Shopping" },
  { id: "5", category: "Elderly care" },
  { id: "6", category: "Postal Service" },
  { id: "7", category: "Custom Errands" },
];
const subRequestData = [
  { id: "1", categoryId: "1", title: "verification and inspection" },
  { id: "2", categoryId: "1", title: "Post-purchase renovation" },
  { id: "3", categoryId: "2", title: "Transcripts" },
  { id: "4", categoryId: "2", title: "official documents" },
  { id: "5", categoryId: "3", title: "official documents" },
  { id: "6", categoryId: "4", title: "official documents" },
  { id: "7", categoryId: "4", title: "official documents" },
];

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

const NewRequest = ({
  setFormStage,
  formStage,
  setShowDashboard,
  setModalOpen,
}) => {
  const [myState, setMyState] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const [subRequestList, setSubRequestList] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(1);
  const navigate = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const watchCountry = watch("country");
  const watchState = watch("stateName");
  const watchRequest = watch("request_title");

  const openCloseAccordion = (data) => {
    setOpenAccordion(parseInt(data));
  };
  // Payment implementation
  const componentProps = {
    email: "test@example.com",
    amount: 100,
    metadata: {
      name: "Michael",
      phone: "12563255555",
    },
    publicKey: "pk_test_727e5faf342cc97164c860a5e08e7920dcae6c78",
    text: "Pay Now",
    onSuccess: (data) => {
      if (data.status === "success") {
        navigate.replace("/dashboard");
      }
    },
    // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const onSubmit = (data) => {
    setFormStage((cur) => cur + 1);
    // Implement API call here
    console.log(data);
  };
  const handleCompleteForm = () => {
    setFormStage((cur) => cur + 1);
  };

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

  const handleSubRequests = () => {
    const filteredSubRequest = subRequestData.filter(
      (subData) => subData.categoryId === watchRequest
    );
    setSubRequestList(filteredSubRequest);
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
    handleSubRequests();
  }, [watchCountry, watchState, watchRequest]);

  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>New Request</h2>
      </div>
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          {accordionData &&
            accordionData.map((accordData, index) => {
              return (
                <>
                  <div className="accordion-main-container">
                    <div className="accordion-title">
                      <h4>{accordData.title}</h4>
                      <h4 onClick={() => openCloseAccordion(accordData.id)}>
                        +
                      </h4>
                    </div>
                    {openAccordion === parseInt(accordData.id) && (
                      <div className="accordion-content">
                        <p>{accordData.description}</p>
                      </div>
                    )}
                  </div>
                </>
              );
            })}
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
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="Request Title"
                    {...register("request_title", {
                      required: "Title is required",
                    })}
                  >
                    <option value="0">Select Request</option>
                    {requestList && requestList !== undefined
                      ? requestList.map((requestData, index) => {
                          return (
                            <option value={requestData.id} key={index}>
                              {requestData.category}
                            </option>
                          );
                        })
                      : "No request selected"}
                  </select>
                  {errors.request_title && (
                    <p className="input-error-message">
                      {errors.request_title.message}
                    </p>
                  )}
                </label>
                <label>
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="Sub Request"
                    {...register("sub_request", {
                      required: "Sub Request is required",
                    })}
                  >
                    <option value="0">Select Sub-request</option>
                    {subRequestList && subRequestList !== undefined
                      ? subRequestList.map((subReqData, index) => {
                          return (
                            <option value={subReqData.id} key={index}>
                              {subReqData.title}
                            </option>
                          );
                        })
                      : "No request selected"}
                  </select>
                  {errors.request_title && (
                    <p className="input-error-message">
                      {errors.sub_request.message}
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
                  <select
                    type="text"
                    className="register-main-text-input"
                    placeholder="State Name"
                    {...register("stateName", {
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
                        // onClick={() => setModalOpen(true)}
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
