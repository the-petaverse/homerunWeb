import React, { useState } from "react";
import "./PropertErrand.css";
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
import { filterSubCategory } from "../../util/filterSubCategories";
import { subServiceData } from "../../data/subCategoryData";

const PropertErrand = ({
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

            <div className="form-section-wrapper">
              <CustomImput
                name="YourName"
                required="Name is required"
                placeholder="Your name"
                className="main-text-input"
                type="text"
                error={errors?.YourName?.message}
                register={register}
                style={{ borderColor: errors.YourName ? "red" : "black" }}
              />
              <CustomImput
                name="phoneNumber"
                required="Phone Number is required"
                placeholder="Phone number"
                className="main-text-input"
                type="text"
                error={errors?.phoneNumber?.message}
                register={register}
                style={{ borderColor: errors.phoneNumber ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="middleName"
                required="Middle name is required"
                placeholder="Property Type"
                className="main-text-input"
                type="text"
                error={errors?.middleName?.message}
                register={register}
                style={{ borderColor: errors.middleName ? "red" : "black" }}
              />
              <CustomImput
                name="middleName"
                required="Middle name is required"
                placeholder="Property Location"
                className="main-text-input"
                type="text"
                error={errors?.middleName?.message}
                register={register}
                style={{ borderColor: errors.middleName ? "red" : "black" }}
              />
            </div>
            <div className="text-area-below">
              <CustomTextArea
                textAreaStyle="textarea"
                placeHolder="Enter your errand description here"
              />
            </div>
          </div>

          {(subcategory === "property-document-follow-up" ||
            subcategory === "post-purchase-development") && (
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
              <TermsAndConditionCheckBox />
              <CustomButton title="Make Request" btnStyles="button-wrapper" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertErrand;
