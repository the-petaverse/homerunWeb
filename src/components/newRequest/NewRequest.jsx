import React, { useEffect, useRef, useState } from "react";
import SuccessImage from "../../assets/green.png";
import { useForm } from "react-hook-form";
import { PaystackButton } from "react-paystack";
import backButton from "../../assets/form-back.png";
import "./NewRequest.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetRequestSubCategoryQuery,
  useGetRequestCategoriesQuery,
} from "../../services/requestsCategory/requestApi";
import { useCreateErrandMutation } from "../../services/errands/errandsApi";
import Cookies from "universal-cookie";
import { useGetUserQuery } from "../../services/auth/authApi";
import PayButton from "../payButton/PayButton";
import CustomBackButton from "../customBackButton/CustomBackButton";
import CustomImput from "../customImput/CustomImput";
import CustomSelect from "../customSelect/CustomSelect";
import CustomDoubleRadioButton from "../customCheckBox/CustomDoubleRadioButton";
import CustomUpload from "../customUpload/CustomUpload";
import CustomInputUpload from "../customInputUpload/CustomInputUpload";
import Requirement from "../requirement/Requirement";
import ErrandProcesses from "../errandProcesses/ErrandProcesses";
import CustomNote from "../customNote/CustomNote";
import TermsAndConditionCheckBox from "../termsAndConditionCheckBox/TermsAndConditionCheckBox";
import CustomButton from "../customButton/CustomButton";
import CustomTextArea from "../customTextArea/CustomTextArea";

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
const institutions = [
  { id: "1", title: "OAU" },
  { id: "2", title: "UNIBEN" },
  { id: "3", title: "LASPOTECH" },
  { id: "4", title: "UNILAG" },
  { id: "5", title: "ABU" },
];
const yearofGraduation = [
  { id: "1", title: "2020" },
  { id: "2", title: "2022" },
  { id: "3", title: "2019" },
  { id: "4", title: "1985" },
  { id: "5", title: "2004" },
];
const NewRequest = ({
  setFormStage,
  formStage,
  subcategory,
  requestId,
  subRequestId,
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
  //const { subcategory } = useParams();
  const [myState, setMyState] = useState([]);
  const [addUploadInput, setAddUploadInput] = useState(new Array(1).fill(""));
  const [citiesList, setCitiesList] = useState([]);
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
    defaultValues: {
      request_name: requestId,
      sub_request_name: subRequestId,
    },
    mode: "all",
  });

  // const increaseUploadInput = () => {
  //   setAddUploadInput((addUpload) => [...addUpload, addUploadInput]);
  // };

  // const removeUploadInput = (id) => {
  //   console.log(id);
  //   const index = addUploadInput.indexOf(id);
  //   if (index > -1) {
  //     addUploadInput.splice(index, 1);
  //   }
  // };

  const watchCountry = watch("country");
  const watchState = watch("state_name");

  const openCloseAccordion = (data) => {
    setOpenAccordion(parseInt(data));
  };

  const onSubmit = (data) => {
    setFormStage((cur) => cur + 1);
    // Implement API call here
    data.request_name = requestId;
    data.sub_request_name = subRequestId;
    createErrand(data);
    // console.log(data);
  };
  const handleCompleteForm = () => {
    setFormStage((cur) => cur + 1);
  };
  const handleFormGoBack = () => {
    setFormStage((cur) => cur - 1);
  };

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

  // const handleSubRequests = () => {
  //   const filteredSubRequest = subData?.subRequestsCategory.filter(
  //     (subData) => subData.sub_category_slug === subcategory
  //   );
  //   setSubRequestList(filteredSubRequest);
  // };
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
    // handleSubRequests();
    filterServcies();
  }, [
    watchCountry,
    watchState,
    isSuccess,
    categoryIsSuccess,
    errandSuccess,
    errandData?.message,
    paymentPending,
    requestId,
    subRequestId,
  ]);
  return (
    <div className="new-request-from-main-container">
      <div className="back-button-wrapper">
        <CustomBackButton title="Back" />
      </div>
      <div className="slate-header-wrapper">
        <h2>{subcategory}</h2>
        <p>Please fill in the following details to make your request. </p>
      </div>
      <div className="new-request-form-container">
        <form action="">
          <div className="inputs-container">
            <CustomTextArea
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />
            <div className="form-section-wrapper">
              <CustomImput
                name="firstName"
                required="First name is required"
                placeholder="First name"
                className="main-text-input"
                type="text"
                error={errors?.firstName?.message}
                register={register}
                style={{ borderColor: errors.firstName ? "red" : "black" }}
              />
              <CustomImput
                name="lastName"
                required="Last name is required"
                placeholder="Last name"
                className="main-text-input"
                type="text"
                error={errors?.lastName?.message}
                register={register}
                style={{ borderColor: errors.lastName ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="middleName"
                required="Middle name is required"
                placeholder="Middle name"
                className="main-text-input"
                type="text"
                error={errors?.middleName?.message}
                register={register}
                style={{ borderColor: errors.middleName ? "red" : "black" }}
              />
              <CustomImput
                name="email"
                required="Email is required"
                placeholder="Matric Number"
                className="main-text-input"
                type="text"
                error={errors?.email?.message}
                register={register}
                style={{ borderColor: errors.email ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper align-select-input">
              <CustomSelect
                name="institution"
                type="text"
                className="main-text-input increase-width"
                register={register}
                require="Institution is required"
                placeholder="Institution name"
                error={errors.institution?.message}
                data={institutions}
                style={{ borderColor: errors.email ? "red" : "black" }}
              />
              <CustomSelect
                name="yearOfGraduation"
                type="text"
                className="main-text-input increase-width"
                register={register}
                require="Year of Graduation is required"
                placeholder="Year of graduation"
                style={{ borderColor: errors.email ? "red" : "black" }}
                error={errors.yearOfGraduation?.message}
                data={yearofGraduation}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="graduatedDegree"
                required="Graduated Degree is required"
                placeholder="Graduated Degree/Course of Study"
                className="main-text-input"
                type="text"
                error={errors?.graduatedDegree?.message}
                register={register}
                style={{
                  borderColor: errors.graduatedDegree ? "red" : "black",
                }}
              />
              <CustomSelect
                name="yearOfEntry"
                type="text"
                className="main-text-input increase-width"
                register={register}
                require="Year of Entry is required"
                placeholder="Year of graduation"
                style={{ borderColor: errors.yearOfEntry ? "red" : "black" }}
                error={errors.yearOfEntry?.message}
                data={yearofGraduation}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomDoubleRadioButton
                name="firstCollection"
                label="Is this your FIRST time collecting the transcript?"
                style={{ borderColor: errors.firstName ? "red" : "black" }}
                register={register}
                error={errors.firstCollection?.message}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomDoubleRadioButton
                label="Have you previously obtained a Notification of Result/Certificate?"
                name="obtainedNotificationOfResult"
                style={{ borderColor: errors.firstName ? "red" : "black" }}
                register={register}
                error={errors.obtainedNotificationOfResult?.message}
              />
            </div>
            <div className="final-section-wrapper">
              <CustomSelect
                name="yearOfEntry"
                type="text"
                className="main-text-input"
                register={register}
                require="Year of Entry is required"
                placeholder="Year of graduation"
                style={{ borderColor: errors.yearOfEntry ? "red" : "black" }}
                error={errors.yearOfEntry?.message}
                data={yearofGraduation}
              />
            </div>
          </div>
          <div className="upload-section-wrapper">
            <CustomUpload />

            <div className="form-upload-section">
              <CustomImput
                name="documentTitle"
                required="Graduated Degree is required"
                placeholder="Input Document Title"
                className="main-text-input"
                type="text"
                error={errors?.documentTitle?.message}
                register={register}
                style={{
                  borderColor: errors.documentTitle ? "red" : "black",
                }}
              />
              <CustomInputUpload />
            </div>
          </div>
          <div className="requirement-wrapper">
            <Requirement />
            <ErrandProcesses />
          </div>
          <div className="terms-note-wrapper">
            <div className="notes-wrapper">
              <CustomNote />
            </div>
            <div className="term-section">
              <TermsAndConditionCheckBox />
              <CustomButton title="Make Request" btnStyles="button-wrapper" />
            </div>
          </div>
        </form>
      </div>
      <div className="register-main-container">
        {/* <div className="register-iamge-wrapper">
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
        </div> */}
        {/* <div className="register-inner-form-wrapper new-request-form-side">
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
                > */}
        {/* <label>
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
                  </label> */}

        {/* <label>
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
          {categoryIsLoading && (
            <div>
              <h3>A moment, we are sending your request.....</h3>
            </div>
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
              <PayButton userData={userData} params={subcategory} />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default NewRequest;
