import React, { useEffect, useRef, useState } from "react";
import SuccessImage from "../../assets/green.png";
import { useForm } from "react-hook-form";
import { PaystackButton } from "react-paystack";
import backButton from "../../assets/form-back.png";
import "./NewRequest.css";
import { useNavigate } from "react-router-dom";
import {
  useGetRequestSubCategoryQuery,
  useGetRequestCategoriesQuery,
} from "../../services/requestsCategory/requestApi";
import { useCreateErrandMutation } from "../../services/errands/errandsApi";
import Cookies from "universal-cookie";
import { useGetUserQuery } from "../../services/auth/authApi";

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
  subcategory,
  subCategoryName,
  categoryName,
}) => {
  const {
    data: subData,
    isLoading,
    isFetching,
    isSuccess,
    error,
  } = useGetRequestSubCategoryQuery();
  const {
    data: userData,
    isLoading: useIsLoading,
    isFetching: userIsFetching,
    errors: userError,
    isSuccess: userIsSuccess,
  } = useGetUserQuery();

  const [
    createErrand,
    {
      data: errandData,
      isLoading: errandLoading,
      error: errandError,
      isSuccess: errandSuccess,
    },
  ] = useCreateErrandMutation();
  const {
    data: categoryData,
    isLoading: categoryIsLoading,
    isSuccess: categoryIsSuccess,
    isFetching: categoryIsFetching,
    error: categoryError,
  } = useGetRequestCategoriesQuery();
  const [myState, setMyState] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const [subRequestList, setSubRequestList] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(1);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");
  const paymentPending = cookies.get("paid_false");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  // if (userIsSuccess) {
  //   console.log(userData.user);
  // }
  const watchCountry = watch("country");
  const watchState = watch("state_name");
  const watchRequest = watch("request_name");

  const openCloseAccordion = (data) => {
    setOpenAccordion(parseInt(data));
  };
  // Payment implementation
  const componentProps = {
    email: userData?.user?.email,
    amount: 100,
    metadata: {
      name: userData.user.first_name,
      phone: userData.user.phone_number,
    },
    publicKey: "pk_test_727e5faf342cc97164c860a5e08e7920dcae6c78",
    text: "Pay Now",
    onSuccess: (data) => {
      if (data.status === "success") {
        console.log(data);
        cookies.remove("paid_false");
        navigate("/dashboard", { replace: true });
      }
    },
    // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const onSubmit = (data) => {
    setFormStage((cur) => cur + 1);
    // Implement API call here
    createErrand(data);
    // console.log(data);
  };
  const handleCompleteForm = () => {
    setFormStage((cur) => cur + 1);
  };
  const handleFormGoBack = () => {
    setFormStage((cur) => cur - 1);
  };

  if (errandError) {
    console.log(errandError);
  }

  if (errandSuccess) {
    cookies.set("paid_false", errandData?.message);
  }
  const renderButton = () => {
    if (formStage > 1) {
      return undefined;
    } else if (formStage === 1) {
      return (
        <label className="final-submit-btn-wrapper">
          <input
            type="Submit"
            className="final-button-wrapper final-submit-btn"
            // onClick={handleCompleteForm}
            disabled={!isValid && !receivedCookies}
          >
            {/* Next Step */}
          </input>
        </label>
      );
    } else {
      return (
        <button
          disabled={!isValid || !receivedCookies}
          className="register-main-form-btn"
          onClick={handleCompleteForm}
        >
          Next Step
        </button>
      );
    }
  };

  const handleSubRequests = () => {
    const filteredSubRequest = subData?.subRequestsCategory.filter(
      (subData) => subData.category_id === watchRequest
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

  const filterServcies = () => {
    if (isSuccess) {
      let filteredService = subData?.subRequestsCategory.filter(
        (subservice) => subservice.sub_category_slug === subcategory
      );
      setServiceData(filteredService);
    }
  };

  useEffect(() => {
    handleState();
    handleCities();
    handleSubRequests();
    filterServcies();
  }, [
    watchCountry,
    watchState,
    watchRequest,
    isSuccess,
    categoryIsSuccess,
    errandSuccess,
    errandData?.message,
  ]);
  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>New Request</h2>
      </div>
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <div>
            {serviceData &&
              serviceData.map((accordData, index) => {
                return (
                  <div key={index}>
                    <div
                      className="accordion-main-container"
                      onClick={() => openCloseAccordion(1)}
                    >
                      <div className="accordion-title">
                        <h4>Note</h4>
                        <h4 onClick={() => openCloseAccordion(1)}>
                          {openAccordion !== parseInt(1) ? "+" : "-"}
                        </h4>
                      </div>

                      {openAccordion === parseInt(1) && (
                        <div className="accordion-content">
                          <p>{accordData.sub_request_note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            {serviceData &&
              serviceData.map((accordData, index) => {
                return (
                  <div key={index}>
                    <div
                      className="accordion-main-container"
                      onClick={() => openCloseAccordion(2)}
                    >
                      <div className="accordion-title">
                        <h4>Requirements</h4>
                        <h4 onClick={() => openCloseAccordion(2)}>
                          {openAccordion !== parseInt(2) ? "+" : "-"}
                        </h4>
                      </div>
                      {openAccordion === parseInt(2) && (
                        <div className="accordion-content">
                          <p>{accordData.request_requirements}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            {serviceData &&
              serviceData.map((accordData, index) => {
                return (
                  <div key={index}>
                    <div
                      className="accordion-main-container"
                      onClick={() => openCloseAccordion(3)}
                    >
                      <div className="accordion-title">
                        <h4>Process</h4>
                        <h4 onClick={() => openCloseAccordion(3)}>
                          {openAccordion !== parseInt(3) ? "+" : "-"}
                        </h4>
                      </div>
                      {openAccordion === parseInt(3) && (
                        <div className="accordion-content">
                          <p>{accordData.request_process}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            {serviceData &&
              serviceData.map((accordData, index) => {
                return (
                  <div key={index}>
                    <div
                      className="accordion-main-container"
                      onClick={() => openCloseAccordion(4)}
                    >
                      <div className="accordion-title">
                        <h4>Cost break down</h4>
                        <h4 onClick={() => openCloseAccordion(4)}>
                          {openAccordion !== parseInt(4) ? "+" : "-"}
                        </h4>
                      </div>
                      {openAccordion === parseInt(4) && (
                        <div className="accordion-content">
                          <p>{accordData.cost_break_down}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            {serviceData &&
              serviceData.map((accordData, index) => {
                return (
                  <div key={index}>
                    <div
                      className="accordion-main-container"
                      onClick={() => openCloseAccordion(5)}
                    >
                      <div className="accordion-title">
                        <h4>Payment milestone</h4>
                        <h4 onClick={() => openCloseAccordion(5)}>
                          {openAccordion !== parseInt(5) ? "+" : "-"}
                        </h4>
                      </div>
                      {openAccordion === parseInt(5) && (
                        <div className="accordion-content">
                          <p>{accordData.payment_milestone}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="register-inner-form-wrapper new-request-form-side">
          {formStage < 1 && (
            <p className={!receivedCookies ? "not-login-style" : ""}>
              {!receivedCookies
                ? "Please login or register to continue"
                : "We will be glad to have you onboard"}
            </p>
          )}
          {formStage === 1 && (
            <div className="back-button-wrapper" onClick={handleFormGoBack}>
              <img src={backButton} alt="back-button" className="back-button" />
            </div>
          )}
          {errandError?.error && (
            <p className={!receivedCookies ? "not-login-style" : ""}>
              Error sending the data, please try again
            </p>
          )}
          {errandError?.error?.message && (
            <p className={!receivedCookies ? "not-login-style" : ""}>
              {errandError?.error?.message}
            </p>
          )}
          {!paymentPending && (
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
                      {...register("request_name", {
                        required: "Title is required",
                      })}
                    >
                      <option value="0">Select Request</option>
                      {categoryData?.requestsCategory &&
                      categoryData?.requestsCategory !== undefined
                        ? categoryData?.requestsCategory.map(
                            (requestData, index) => {
                              return (
                                <option value={requestData?._id} key={index}>
                                  {requestData?.category_name}
                                </option>
                              );
                            }
                          )
                        : "No request selected"}
                    </select>
                    {errors.request_nane && (
                      <p className="input-error-message">
                        {errors.request_nane.message}
                      </p>
                    )}
                  </label>
                  <label>
                    <select
                      type="text"
                      className="register-main-text-input"
                      placeholder="Sub Request"
                      {...register("sub_request_name", {
                        required: "Sub Request is required",
                      })}
                    >
                      <option value="0">Select Sub-request</option>
                      {subRequestList && subRequestList !== undefined
                        ? subRequestList.map((subReqData, index) => {
                            return (
                              <option
                                value={subReqData.sub_category_title}
                                key={index}
                              >
                                {subReqData.sub_category_title}
                              </option>
                            );
                          })
                        : "No request selected"}
                    </select>
                    {errors.sub_request_name && (
                      <p className="input-error-message">
                        {errors.sub_request_name.message}
                      </p>
                    )}
                  </label>

                  <label>
                    <input
                      type="text"
                      className="register-main-text-input"
                      placeholder="Please enter more information as possible here"
                      {...register("more_info", {
                        required: "Request details are required",
                      })}
                    />
                    {errors.more_info && (
                      <p className="input-error-message">
                        {errors.more_info.message}
                      </p>
                    )}
                  </label>
                  <label>
                    <input
                      type="text"
                      className="register-main-text-input"
                      placeholder="Contact Person"
                      {...register("contact_person", {
                        required: "Contact name is required",
                      })}
                    />
                    {errors.contact_person && (
                      <p className="input-error-message">
                        {errors.contact_person.message}
                      </p>
                    )}
                  </label>
                  <label>
                    <input
                      type="number"
                      className="register-main-text-input"
                      placeholder="Contact Telephone Number"
                      {...register("contact_telephone_number", {
                        required: "Contact number is required",
                      })}
                    />
                    {errors.contact_telephone_number && (
                      <p className="input-error-message">
                        {errors.contact_telephone_number.message}
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
                      {...register("state_name", {
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
                    {errors.state_name && (
                      <p className="input-error-message">
                        {errors.state_name.message}
                      </p>
                    )}
                    <select
                      type="text"
                      className="register-main-text-input"
                      placeholder="City Name"
                      {...register("city_name", {
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
                    {errors.city_name && (
                      <p className="input-error-message">
                        {errors.city_name.message}
                      </p>
                    )}
                    <section className="checkboxes-container">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          {...register("terms_conditions", {
                            required: "Please accept the terms & Condition",
                          })}
                          // onClick={() => setModalOpen(true)}
                        />
                        I agree to Terms & Conditions
                        {errors.terms_conditions && (
                          <p className="input-error-message">
                            {errors.terms_conditions.message}
                          </p>
                        )}
                      </label>
                    </section>
                  </label>
                </>
              )}
              {renderButton()}
            </form>
          )}
          {paymentPending && (
            <div>
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
                className="register-main-form-btn payment-btn"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
