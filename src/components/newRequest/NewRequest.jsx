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
import CustomImageUpload from "../customImageUpload /CustomImageUpload";
import AvartaIcon from "/images/avatar-icon.png";
import { useCreateOfficialDocumentErrandMutation } from "../../services/officialDocument/officialDocumentApi";

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
  serviceData,
}) => {
  const [myState, setMyState] = useState([]);
  const [addUploadInput, setAddUploadInput] = useState(new Array(1).fill(""));
  const [citiesList, setCitiesList] = useState([]);
  // const [serviceData, setServiceData] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(1);
  const { subcategory } = useParams();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const receivedCookies = cookies.get("auth_token");
  // const {
  //   data: subData,
  //   isLoading,
  //   isFetching,
  //   isSuccess,
  //   error,
  // } = useGetRequestSubCategoryQuery();
  // const {
  //   data: userData,
  //   isLoading: useIsLoading,
  //   isFetching: userIsFetching,
  //   errors: userError,
  //   isSuccess: userIsSuccess,
  // } = useGetUserQuery();

  const [
    createOfficialDocumentErrand,
    {
      data: errandData,
      isLoading: errandLoading,
      error: errandError,
      isSuccess: errandSuccess,
    },
  ] = useCreateOfficialDocumentErrandMutation();
  // const {
  //   data: categoryData,
  //   isLoading: categoryIsLoading,
  //   isSuccess: categoryIsSuccess,
  //   isFetching: categoryIsFetching,
  //   error: categoryError,
  // } = useGetRequestCategoriesQuery();
  //const { subcategory } = useParams();

  if (errandError) {
    console.log(errandError);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ordered_service_id: subRequestId && subRequestId,
      ordered_service_title: subcategory,
    },
    mode: "all",
  });
  console.log(serviceData[0]?._id, "subcategory");
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

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const key in data) {
      console.log(key);
      if (key === "file") {
        formData.append("files", data[key][0]);
      } else if (key === "ordered_service_id") {
        formData.append(key, serviceData[0]?._id);
      } else if (key === "ordered_service_title") {
        formData.append(key, serviceData[0]?.sub_service_title);
      } else if (
        key === "firstName" ||
        key === "lastName" ||
        key === "errand_ordered_summary" ||
        key === "middleName" ||
        key === "terms_conditions"
      ) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, data[key]);
      }
    }
    console.log(formData);
    await createOfficialDocumentErrand(formData);
  };

  if (errandSuccess) {
    console.log(errandData);
    // cookies.set("paid_false", errandData?.message);
  }

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
  }, [
    watchCountry,
    watchState,
    // isSuccess,
    // categoryIsSuccess,
    errandSuccess,
    errandData?.message,
    requestId,
    subRequestId,
    serviceData,
  ]);
  return (
    <div className="new-request-from-main-container">
      <div className="new-request-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-container">
            <CustomTextArea
              register={register}
              name="errand_ordered_summary"
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />

            <div className="trans-form-section-wrapper">
              <CustomImput
                name="firstName"
                required="First name is required"
                placeholder="First name"
                type="text"
                error={errors?.firstName?.message}
                register={register}
                style={{ borderColor: errors.firstName ? "red" : "black" }}
              />
              <CustomImput
                name="lastName"
                required="Last name is required"
                placeholder="Last name"
                type="text"
                error={errors?.lastName?.message}
                register={register}
                style={{ borderColor: errors.lastName ? "red" : "black" }}
              />
              <CustomImput
                name="middleName"
                required="Middle name is required"
                placeholder="Middle name"
                type="text"
                error={errors?.middleName?.message}
                register={register}
                style={{ borderColor: errors.middleName ? "red" : "black" }}
              />
              {subcategory === "single-parent-certificate" && (
                <>
                  <CustomImput
                    name="profession"
                    required="Profession is required"
                    placeholder="Applicant’s Profession"
                    type="text"
                    error={errors?.profession?.message}
                    register={register}
                    style={{ borderColor: errors.profession ? "red" : "black" }}
                  />
                  <CustomSelect
                    name="maritalStatus"
                    type="text"
                    className="main-text-input"
                    register={register}
                    require="State is required"
                    placeholder="Marital Status"
                    error={errors.stateOfBirth?.message}
                    //   data={stateOfBirth}
                    style={{
                      borderColor: errors.stateOfBirth ? "red" : "black",
                    }}
                  />

                  <CustomImput
                    name="applicatnState"
                    required="State is required"
                    placeholder="State 0f Applicant’s Birth"
                    type="text"
                    error={errors?.applicatnState?.message}
                    register={register}
                    style={{
                      borderColor: errors.applicatnState ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="localGovt"
                    required="local Govt name is required"
                    placeholder="local Goverment"
                    type="text"
                    error={errors?.localGovt?.message}
                    register={register}
                    style={{
                      borderColor: errors.localGovt ? "red" : "black",
                    }}
                  />
                </>
              )}
              {(subcategory === "police-report" ||
                subcategory === "single-parent-certificate") && (
                <CustomSelect
                  name="meansOfIdentification"
                  type="text"
                  register={register}
                  require="Identification is required"
                  placeholder="Means of identification"
                  error={errors.meansOfIdentification?.message}
                  //   data={stateOfBirth}
                  style={{
                    borderColor: errors.meansOfIdentification ? "red" : "black",
                  }}
                />
              )}
              {subcategory === "birth-certificate" && (
                <>
                  <CustomImput
                    name="sex"
                    required="Sex is required"
                    placeholder="Sex"
                    type="text"
                    error={errors?.sex?.message}
                    register={register}
                    style={{ borderColor: errors.sex ? "red" : "black" }}
                  />
                  <CustomImput
                    name="stateOfBirth"
                    required="State name is required"
                    placeholder="State of birth"
                    type="text"
                    error={errors?.stateOfBirth?.message}
                    register={register}
                    style={{
                      borderColor: errors.stateOfBirth ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="matherFullName"
                    required="Mother's Full Name is required"
                    placeholder="Mother's Full Name"
                    type="text"
                    error={errors?.matherFullName?.message}
                    register={register}
                    style={{
                      borderColor: errors.matherFullName ? "red" : "black",
                    }}
                  />

                  <CustomImput
                    name="localGovt"
                    required="local Govt name is required"
                    placeholder="local Goverment"
                    type="text"
                    error={errors?.localGovt?.message}
                    register={register}
                    style={{
                      borderColor: errors.localGovt ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="fatherFullName"
                    required="Father's Full Name is required"
                    placeholder="Father's Full Name"
                    type="text"
                    error={errors?.fatherFullName?.message}
                    register={register}
                    style={{
                      borderColor: errors.fatherFullName ? "red" : "black",
                    }}
                  />
                </>
              )}
              {(subcategory === "transcript_collection" ||
                subcategory === "higher-education-certificate-collection") && (
                <>
                  <CustomImput
                    name="matricNumber"
                    required="Matric Number is required"
                    placeholder="Matric Number"
                    type="text"
                    error={errors?.matricNumber?.message}
                    register={register}
                    style={{
                      borderColor: errors.matricNumber ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="institution"
                    required="Institution is required"
                    placeholder="Institution name"
                    type="text"
                    error={errors?.institution?.message}
                    register={register}
                    style={{
                      borderColor: errors.institution ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="yearOfGraduation"
                    required="Year of Graduation is required"
                    placeholder="Year of Graduation"
                    type="text"
                    error={errors?.yearOfGraduation?.message}
                    register={register}
                    style={{
                      borderColor: errors.yearOfGraduation ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="graduatedDegree"
                    required="Graduated Degree is required"
                    placeholder="Graduated Degree/Course of Study"
                    type="text"
                    error={errors?.graduatedDegree?.message}
                    register={register}
                    style={{
                      borderColor: errors.graduatedDegree ? "red" : "black",
                    }}
                  />
                  <CustomImput
                    name="yearOfEntry"
                    required="Year of Entry is required"
                    placeholder="Year of Entry"
                    type="text"
                    error={errors?.yearOfEntry?.message}
                    register={register}
                    style={{
                      borderColor: errors.yearOfEntry ? "red" : "black",
                    }}
                  />
                </>
              )}
            </div>
            {(subcategory === "transcript_collection" ||
              subcategory === "higher-education-certificate-collection") && (
              <>
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
              </>
            )}
            {subcategory === "passport_collection" && (
              <div className="form-section-wrapper">
                <CustomDoubleRadioButton
                  label="Do you have someone processing it for you?"
                  name="obtainedNotificationOfResult"
                  style={{ borderColor: errors.firstName ? "red" : "black" }}
                  register={register}
                  error={errors.obtainedNotificationOfResult?.message}
                />
              </div>
            )}

            {subcategory === "sworn-affidavits" && (
              <>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you have any supporting documents?"
                    name="doYouHaveAnySupportingDocumentation"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you need witnesses for this affidavit?"
                    name="needWitnessForAffidavits"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Are the witnesses available to sign the affidavit? "
                    name="areWitnessAvailabelToSign"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you need the affidavit to be notarized?"
                    name="doYouNeedNotarize"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    optionOne="I do"
                    optionTwo="I don't"
                    ckeckBoxesOptionTwoStyle="check-boxes-optionTwo"
                    boxesWrapperStyle="check-boxes-wrapper"
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
              </>
            )}
          </div>
          {(subcategory === "police-report" ||
            subcategory === "sworn-afidavit" ||
            subcategory === "single-parent-certificate") && (
            <div className="upload-section-wrapper">
              <CustomUpload />

              <div className="form-upload-section">
                <CustomImput
                  name="documentTitle"
                  required="Graduated Degree is required"
                  placeholder="Input Document Title"
                  type="text"
                  error={errors?.documentTitle?.message}
                  register={register}
                  style={{
                    borderColor: errors.documentTitle ? "red" : "black",
                  }}
                />
                <CustomInputUpload register={register} />
              </div>
            </div>
          )}

          {subcategory === "single-parent-certificate" && (
            <div className="upload-section-wrapper">
              <div className="image-uploader-header">
                <h4>Upload Applicant’s Passport Photograph Add</h4>
              </div>
              <div className="image-upload-section">
                <div className="image-avatar-wrapper">
                  <img src={AvartaIcon} alt="avarta" />
                </div>
                <div className="image-uploader-wrapper">
                  <CustomImput
                    name="documentTitle"
                    required="Graduated Degree is required"
                    placeholder="Input Document Title"
                    type="text"
                    error={errors?.documentTitle?.message}
                    register={register}
                    style={{
                      borderColor: errors.documentTitle ? "red" : "black",
                    }}
                  />
                  <CustomImageUpload />
                </div>
              </div>
            </div>
          )}
          <div className="requirement-wrapper">
            <Requirement serviceData={serviceData} />
            <ErrandProcesses serviceData={serviceData} />
          </div>
          <div className="terms-note-wrapper">
            <div className="all-new-notes-wrapper">
              <CustomNote serviceData={serviceData} />
            </div>
            <div className="all-term-section">
              <TermsAndConditionCheckBox
                name="terms_conditions"
                register={register}
              />
              <CustomButton
                title="Make Request"
                btnStyles="doc-button-wrapper"
                btnDisabled={!isValid && "true"}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="register-main-container"></div>
    </div>
  );
};

export default NewRequest;
