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
  serviceCategory,
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
  const { subcategory } = useParams();
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
      request_name: serviceCategory,
      sub_request_name: subcategory,
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
    // setFormStage((cur) => cur + 1);
    // // Implement API call here
    // data.request_name = requestId;
    // data.sub_request_name = subRequestId;
    // createErrand(data);
    console.log(data);
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

  // const filterServcies = () => {
  //   if (isSuccess) {
  //     let filteredService = subData?.subRequestsCategory.filter(
  //       (subservice) => subservice.sub_category_slug === subcategory
  //     );
  //     setServiceData(filteredService);
  //   }
  // };

  useEffect(() => {
    handleState();
    handleCities();
    // handleSubRequests();
    // filterServcies();
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
      <div className="new-request-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-container">
            <CustomTextArea
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />

            <div className="trans-form-section-wrapper">
              <CustomImput
                name="firstName"
                required="First name is required"
                placeholder="First name"
                // className="main-text-input"
                type="text"
                error={errors?.firstName?.message}
                register={register}
                style={{ borderColor: errors.firstName ? "red" : "black" }}
              />
              <CustomImput
                name="lastName"
                required="Last name is required"
                placeholder="Last name"
                // className="main-text-input"
                type="text"
                error={errors?.lastName?.message}
                register={register}
                style={{ borderColor: errors.lastName ? "red" : "black" }}
              />
              <CustomImput
                name="middleName"
                required="Middle name is required"
                placeholder="Middle name"
                // className="main-text-input"
                type="text"
                error={errors?.middleName?.message}
                register={register}
                style={{ borderColor: errors.middleName ? "red" : "black" }}
              />
              <CustomImput
                name="email"
                required="Email is required"
                placeholder="Matric Number"
                // className="main-text-input"
                type="text"
                error={errors?.email?.message}
                register={register}
                style={{ borderColor: errors.email ? "red" : "black" }}
              />
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
              <CustomImput
                name="graduatedDegree"
                required="Graduated Degree is required"
                placeholder="Graduated Degree/Course of Study"
                // className="main-text-input"
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
              <TermsAndConditionCheckBox
                name="terms&conditions"
                register={register}
              />
              <input type="submit" className="button-wrapper" />
            </div>
          </div>
        </form>
      </div>
      <div className="register-main-container"></div>
    </div>
  );
};

export default NewRequest;
