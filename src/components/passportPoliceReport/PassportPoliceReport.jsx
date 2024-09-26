import React, { useState } from "react";
import "./PassportPoliceReport.css";
import { Controller, useForm } from "react-hook-form";
import CustomTextArea from "../customTextArea/CustomTextArea";
import CustomImput from "../customImput/CustomImput";
import CustomSelect from "../customSelect/CustomSelect";

import Requirement from "../requirement/Requirement";
import ErrandProcesses from "../errandProcesses/ErrandProcesses";
import CustomNote from "../customNote/CustomNote";
import TermsAndConditionCheckBox from "../termsAndConditionCheckBox/TermsAndConditionCheckBox";
import CustomButton from "../customButton/CustomButton";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CustomBackButton from "../customBackButton/CustomBackButton";
import CustomDoubleRadioButton from "../customCheckBox/CustomDoubleRadioButton";
import CustomUpload from "../customUpload/CustomUpload";
import CustomInputUpload from "../customInputUpload/CustomInputUpload";

const PassportPoliceReport = ({
  setFormStage,
  formStage,
  subcategory,
  requestId,
  subRequestId,
}) => {
  const [date, setDate] = React.useState(new Date(Date.now()));
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      request_name: requestId,
      sub_request_name: subRequestId,
    },
    mode: "all",
  });
  const onSubmitData = (data) => {
    console.log(data);
  };

  return (
    <div className="new-request-from-main-container">
      <div className="new-request-form-container">
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="inputs-container">
            <CustomTextArea
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />
            <div className="sworn-form-section-wrapper">
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
            </div>
            {subcategory === "sworn-afidavit" && (
              <div className="single-input-wrapper">
                <CustomImput
                  name="middleName"
                  required="Middle Name is required"
                  placeholder="Middle Name"
                  // className="main-text-single-input"
                  type="text"
                  error={errors?.middleName?.message}
                  register={register}
                  style={{
                    borderColor: errors.middleName ? "red" : "black",
                  }}
                />
              </div>
            )}
            {subcategory !== "sworn-afidavit" && (
              <div className="sworn-form-section-wrapper">
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
                <CustomSelect
                  name="meansOfIdentification"
                  type="text"
                  className="main-text-input"
                  register={register}
                  require="Identification is required"
                  placeholder="Means of identification"
                  error={errors.meansOfIdentification?.message}
                  //   data={stateOfBirth}
                  style={{
                    borderColor: errors.meansOfIdentification ? "red" : "black",
                  }}
                />
              </div>
            )}
            {subcategory == "passport_collection" && (
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
            {subcategory === "sworn-afidavit" && (
              <>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you have any supporting documents?"
                    name="obtainedNotificationOfResult"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you need witnesses for this affidavit?"
                    name="obtainedNotificationOfResult"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you need witnesses for this affidavit?"
                    name="obtainedNotificationOfResult"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Are the witnesses available to sign the affidavit? "
                    name="obtainedNotificationOfResult"
                    style={{ borderColor: errors.firstName ? "red" : "black" }}
                    register={register}
                    error={errors.obtainedNotificationOfResult?.message}
                  />
                </div>
                <div className="form-section-wrapper">
                  <CustomDoubleRadioButton
                    label="Do you need the affidavit to be notarized?"
                    name="obtainedNotificationOfResult"
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
          {subcategory === "police-report" && (
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
          )}
          {subcategory === "sworn-afidavit" && (
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
          )}
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
                register={register}
                name="terms&conditions"
              />
              <CustomButton title="Make Request" btnStyles="button-wrapper" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PassportPoliceReport;
