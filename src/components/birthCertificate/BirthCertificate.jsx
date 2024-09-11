import React, { useState } from "react";
import "./BirthCertificate.css";
import { Controller, useForm } from "react-hook-form";
import CustomTextArea from "../customTextArea/CustomTextArea";
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
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import CustomBackButton from "../customBackButton/CustomBackButton";

const BirthCertificate = ({
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
  const handleChange = (dateChange) => {
    setValue("dateOfBirth", dateChange, {
      shouldDirty: true,
    });

    setDate(dateChange);
  };
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
        <form onSubmit={handleSubmit(onSubmitData)}>
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
                name="sex"
                required="Sex is required"
                placeholder="Sex"
                className="main-text-input"
                type="text"
                error={errors?.sex?.message}
                register={register}
                style={{ borderColor: errors.sex ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <div className="date-pickermain-text-input">
                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue={date}
                  render={() => (
                    <DatePicker
                      selected={date}
                      placeholderText="Select date"
                      onChange={handleChange}
                      className="date-piker-select"
                    />
                  )}
                />
              </div>
              <CustomSelect
                name="stateOfBirth"
                type="text"
                className="main-text-input"
                register={register}
                require="State is required"
                placeholder="State of birth"
                error={errors.stateOfBirth?.message}
                //   data={stateOfBirth}
                style={{ borderColor: errors.stateOfBirth ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="localGovt"
                required="local Govt name is required"
                placeholder="local Goverment"
                className="main-text-input"
                type="text"
                error={errors?.localGovt?.message}
                register={register}
                style={{ borderColor: errors.localGovt ? "red" : "black" }}
              />
              <CustomImput
                name="fatherFullName"
                required="Father's Full Name is required"
                placeholder="Father's Full Name"
                className="main-text-input"
                type="text"
                error={errors?.fatherFullName?.message}
                register={register}
                style={{ borderColor: errors.fatherFullName ? "red" : "black" }}
              />
            </div>
            <div className="single-input-wrapper">
              <CustomImput
                name="matherFullName"
                required="Mother's Full Name is required"
                placeholder="Mother's Full Name"
                className="main-text-single-input"
                type="text"
                error={errors?.matherFullName?.message}
                register={register}
                style={{ borderColor: errors.matherFullName ? "red" : "black" }}
              />
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
    </div>
  );
};

export default BirthCertificate;
