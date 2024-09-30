import React, { useState } from "react";
import "./BirthCertificate.css";
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
import { useParams } from "react-router-dom";

const BirthCertificate = ({
  setFormStage,
  formStage,
  // subcategory,
  requestId,
  subRequestId,
  serviceSubCategory,
  serviceCategory,
  serviceData,
}) => {
  const [date, setDate] = React.useState();
  const { subcategory } = useParams();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      request_name: serviceCategory,
      sub_request_name: subcategory,
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
      <div className="new-request-form-container">
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="birth-inputs-container">
            <CustomTextArea
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />
            <div className="birth-form-section-wrapper">
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
            <div className="birth-form-section-wrapper">
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
                name="sex"
                required="Sex is required"
                placeholder="Sex"
                // className="main-text-input"
                type="text"
                error={errors?.sex?.message}
                register={register}
                style={{ borderColor: errors.sex ? "red" : "black" }}
              />
            </div>
            <div className="birth-form-section-wrapper">
              <CustomImput
                name="stateOfBirth"
                required="State name is required"
                placeholder="State of birth"
                // className="main-text-input"
                type="text"
                error={errors?.stateOfBirth?.message}
                register={register}
                style={{ borderColor: errors.stateOfBirth ? "red" : "black" }}
              />
              <CustomImput
                name="matherFullName"
                required="Mother's Full Name is required"
                placeholder="Mother's Full Name"
                // className="main-text-single-input"
                type="text"
                error={errors?.matherFullName?.message}
                register={register}
                style={{ borderColor: errors.matherFullName ? "red" : "black" }}
              />
            </div>
            <div className="birth-form-section-wrapper">
              <CustomImput
                name="localGovt"
                required="local Govt name is required"
                placeholder="local Goverment"
                // className="main-text-input"
                type="text"
                error={errors?.localGovt?.message}
                register={register}
                style={{ borderColor: errors.localGovt ? "red" : "black" }}
              />
              <CustomImput
                name="fatherFullName"
                required="Father's Full Name is required"
                placeholder="Father's Full Name"
                // className="main-text-input"
                type="text"
                error={errors?.fatherFullName?.message}
                register={register}
                style={{ borderColor: errors.fatherFullName ? "red" : "black" }}
              />
            </div>
            <div className="birth-form-section-wrapper">
              <Controller
                name="dateOfBirth"
                control={control}
                defaultValue={date}
                render={() => (
                  <DatePicker
                    selected={date}
                    placeholderText="Date Of Birth"
                    onChange={handleChange}
                    className="birth-date-piker-select"
                  />
                )}
              />
            </div>
          </div>

          <div className="requirement-wrapper">
            <Requirement serviceData={serviceData} />
            <ErrandProcesses serviceData={serviceData} />
          </div>
          <div className="terms-note-wrapper">
            <div className="birth-notes-wrapper">
              <CustomNote serviceData={serviceData} />
            </div>
            <div className="birth-term-section">
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

export default BirthCertificate;
