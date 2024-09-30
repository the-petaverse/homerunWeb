import React, { useState } from "react";
import "./SingleParentCertificate.css";
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
import AvartaIcon from "/images/avatar-icon.png";
import "react-datepicker/dist/react-datepicker.css";
import CustomImageUpload from "../customImageUpload /CustomImageUpload";
const SingleParentCertificate = ({
  setFormStage,
  formStage,
  subcategory,
  requestId,
  subRequestId,
  serviceData,
}) => {
  const [date, setDate] = useState();

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
      <div className="new-request-form-container">
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="inputs-container">
            <CustomTextArea
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />
            <div className="single-parent-form-section-wrapper">
              <CustomImput
                name="fullName"
                required="full Name is required"
                placeholder="Applicant’s Full name"
                // className="main-text-input"
                type="text"
                error={errors?.fullName?.message}
                register={register}
                style={{ borderColor: errors.fullName ? "red" : "black" }}
              />
              <CustomImput
                name="profession"
                required="Profession is required"
                placeholder="Applicant’s Profession"
                // className="main-text-input"
                type="text"
                error={errors?.profession?.message}
                register={register}
                style={{ borderColor: errors.profession ? "red" : "black" }}
              />
            </div>
            <div className="single-parent-form-section-wrapper">
              <CustomSelect
                name="maritalStatus"
                type="text"
                className="main-text-input"
                register={register}
                require="State is required"
                placeholder="Marital Status"
                error={errors.stateOfBirth?.message}
                //   data={stateOfBirth}
                style={{ borderColor: errors.stateOfBirth ? "red" : "black" }}
              />
              <div className="date-pickermain-text-input">
                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue={date}
                  render={() => (
                    <DatePicker
                      selected={date}
                      placeholderText="Date Of Birth"
                      onChange={handleChange}
                      className="parent-date-piker-select"
                    />
                  )}
                />
              </div>
            </div>
            <div className="upload-child-main-wrapper">
              <CustomUpload
                title="Enter name(s) Child/Children"
                titleStyle="upload-child-style"
              />
              <div className="upload-child-inner">
                <CustomImput
                  name="documentTitle"
                  required="Graduated Degree is required"
                  placeholder="Child 1 Fullname"
                  // className="child-main-text-input"
                  type="text"
                  error={errors?.documentTitle?.message}
                  register={register}
                  style={{
                    borderColor: errors.documentTitle ? "red" : "black",
                  }}
                />
                <CustomImput
                  name="documentTitle"
                  required="Graduated Degree is required"
                  placeholder="Child 2 Fullname"
                  // className="child-main-text-input"
                  type="text"
                  error={errors?.documentTitle?.message}
                  register={register}
                  style={{
                    borderColor: errors.documentTitle ? "red" : "black",
                  }}
                />
              </div>
            </div>
            <div className="single-parent-form-section-wrapper">
              <CustomImput
                name="applicatnState"
                required="State is required"
                placeholder="State 0f Applicant’s Birth"
                // className="main-text-input"
                type="text"
                error={errors?.applicatnState?.message}
                register={register}
                style={{
                  borderColor: errors.applicatnState ? "red" : "black",
                }}
              />
              <CustomImput
                name="localGovt"
                required="localGovt is required"
                placeholder="Local Government "
                // className="main-text-input"
                type="text"
                error={errors?.localGovt?.message}
                register={register}
                style={{
                  borderColor: errors.localGovt ? "red" : "black",
                }}
              />
            </div>
            <div className="parent-single-input-wrapper">
              <CustomSelect
                name="maritalStatus"
                type="text"
                className="main-text-input"
                register={register}
                require="State is required"
                placeholder="Means of Identification"
                error={errors.stateOfBirth?.message}
                //   data={stateOfBirth}
                style={{ borderColor: errors.stateOfBirth ? "red" : "black" }}
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
                  className="main-text-input"
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
          <div className="requirement-wrapper">
            <Requirement serviceData={serviceData} />
            <ErrandProcesses serviceData={serviceData} />
          </div>
          <div className="terms-note-wrapper">
            <div className="parent-notes-wrapper">
              <CustomNote serviceData={serviceData} />
            </div>
            <div className="parent-term-section">
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

export default SingleParentCertificate;
