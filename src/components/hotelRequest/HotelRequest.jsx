import React, { useEffect, useRef, useState } from "react";
import SuccessImage from "../../assets/green.png";
import { useForm } from "react-hook-form";
import { PaystackButton } from "react-paystack";
import backButton from "../../assets/form-back.png";
import "./HotelRequest.css";
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
import carCheck from "/images/car-check.png";
import HotelAmenities from "../hotelAmenities/HotelAmenities";
import SelectRooms from "../selectRooms/SelectRooms";

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

const HotelRequest = ({
  setFormStage,
  formStage,
  subcategory,
  requestId,
  subRequestId,
  serviceData,
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
        <form action="">
          <div className="inputs-container">
            <div className="amenities-wrapper">
              <HotelAmenities />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="fullName"
                required="Full name is required"
                placeholder="Full name"
                // className="main-text-input"
                type="text"
                error={errors?.fullName?.message}
                register={register}
                style={{ borderColor: errors.fullName ? "red" : "black" }}
              />
              <CustomImput
                name="phoneNumber"
                required="Phone Number is required"
                placeholder="Phone Number"
                // className="main-text-input"
                type="text"
                error={errors?.phoneNumber?.message}
                register={register}
                style={{ borderColor: errors.phoneNumber ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="fullName"
                required="Full name is required"
                placeholder="Full name"
                // className="main-text-input"
                type="text"
                error={errors?.fullName?.message}
                register={register}
                style={{ borderColor: errors.fullName ? "red" : "black" }}
              />
              <div className="hotel-extra-content-wrapper">
                <div className="hotel-holder-details-wrapper">
                  <p>Child Booster Seat - ($50)</p>
                </div>
                <div className="hotel-content-adjuster-wrapper">
                  <div>
                    <p>-</p>
                  </div>
                  <div>
                    <p>0</p>
                  </div>
                  <div>
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section-wrapper align-select-input">
              <CustomSelect
                name="roomType"
                type="text"
                className="main-text-input increase-width"
                register={register}
                require="Room type is required"
                placeholder="room type"
                error={errors.roomType?.message}
                // data={institutions}
                style={{ borderColor: errors.roomType ? "red" : "black" }}
              />
              <CustomImput
                name="numberOfRooms"
                required="Number of rooms is required"
                placeholder="Number of rooms"
                // className="main-text-input"
                type="text"
                error={errors?.numberOfRooms?.message}
                register={register}
                style={{ borderColor: errors.numberOfRooms ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper align-select-input">
              <CustomSelect
                name="checkInDate"
                type="text"
                className="main-text-input increase-width"
                register={register}
                require="Check In is required"
                placeholder="check in date"
                error={errors.checkInDate?.message}
                // data={institutions}
                style={{ borderColor: errors.checkInDate ? "red" : "black" }}
              />
              <CustomSelect
                name="checkOutDate"
                type="text"
                className="main-text-input increase-width"
                register={register}
                require="Check out date is required"
                placeholder="check out date"
                style={{ borderColor: errors.checkOutDate ? "red" : "black" }}
                error={errors.checkOutDate?.message}
                // data={yearofGraduation}
              />
            </div>
            <div className="form-section-wrapper"></div>
          </div>

          <div className="requirement-wrapper">
            <Requirement serviceData={serviceData} />
            <ErrandProcesses serviceData={serviceData} />
          </div>
          <div className="terms-note-wrapper">
            <div className="notes-wrapper">
              <CustomNote serviceData={serviceData} />
            </div>
            <div className="term-section">
              <TermsAndConditionCheckBox
                name="terms&conditions"
                register={register}
              />
              <CustomButton title="Make Request" btnStyles="button-wrapper" />
            </div>
          </div>
        </form>
      </div>
      <div className="register-main-container"></div>
    </div>
  );
};

export default HotelRequest;
