import React, { useEffect, useState } from "react";
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
import { FaEnvelopeOpenText } from "react-icons/fa";
import CustomPhoneInput from "../customPhoneInput/CustomPhoneInput";
import { isValidPhoneNumber } from "react-phone-number-input";

const PropertErrand = ({
  setFormStage,
  formStage,
  subcategory,
  requestId,
  subRequestId,
  serviceData,
}) => {
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [fileUplodComponent, setFileUplodComponent] = useState([
    { fileName: "" },
  ]);

  console.log(subcategory);
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      sub_request_name: subcategory,
    },
    mode: "all",
  });
  console.log(isValid);
  const watchPhoneNumber = watch("phone_number");
  const onSubmitData = (data) => {
    console.log(data);
  };

  const handleIncreaseFileUploader = () => {
    setFileUplodComponent([...fileUplodComponent, { fileName: "" }]);
  };

  const handleDeleteFileUploader = (fileUploaderIndex) => {
    const deletedFileUploader = [...fileUplodComponent];
    deletedFileUploader.splice(fileUploaderIndex, 1);
    setFileUplodComponent(deletedFileUploader);
  };
  console.log(serviceData);
  useEffect(() => {}, [serviceData, requestId, subRequestId, isValid]);

  return (
    <div className="property-new-request-from-main-container">
      <div className="property-new-request-form-container">
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="property-inputs-container">
            <CustomTextArea
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />

            <div className="property-form-section-wrapper">
              <CustomImput
                name="YourName"
                required="Name is required"
                placeholder="Your name"
                // className="main-text-input"
                type="text"
                error={errors?.YourName?.message}
                register={register}
                iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                style={{ borderColor: errors.YourName ? "red" : "black" }}
              />

              <CustomPhoneInput
                name="phone_number"
                inputWatcch={watchPhoneNumber}
                control={control}
                style={{
                  borderColor: errors.phone_number ? "red" : "black",
                }}
                register={register}
              />
            </div>
            <div className="property-form-section-wrapper">
              <CustomImput
                name="propertyType"
                required="Property type is required"
                placeholder="Property Type"
                iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                // className="main-text-input"
                type="text"
                error={errors?.propertyType?.message}
                register={register}
                style={{ borderColor: errors.propertyType ? "red" : "black" }}
              />
              <CustomImput
                name="propertyLocation"
                required="Property Location is required"
                placeholder="Property Location"
                iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                // className="main-text-input"
                type="text"
                error={errors?.propertyLocation?.message}
                register={register}
                style={{
                  borderColor: errors.propertyLocation ? "red" : "black",
                }}
              />
            </div>
            <div className="text-area-below">
              <CustomTextArea
                textAreaStyle="textarea"
                placeHolder="Enter your errand description here"
              />
            </div>
          </div>

          {(subcategory === "property-document-processing" ||
            subcategory === "post-purchase-development") && (
            <div className="upload-section-wrapper">
              <CustomUpload
                handleIncreaseFileUploader={handleIncreaseFileUploader}
              />

              <div className="form-upload-section">
                {fileUplodComponent &&
                  fileUplodComponent.map((fileUploader, index) => (
                    <>
                      <CustomImput
                        name={`documentTitle-${index}`}
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
                      <CustomInputUpload
                        handleDeleteFileUploader={handleDeleteFileUploader}
                      />
                    </>
                  ))}
              </div>
            </div>
          )}

          <div className="requirement-wrapper">
            <Requirement serviceData={serviceData} />
            <ErrandProcesses serviceData={serviceData} />
          </div>
          <div className="terms-note-wrapper">
            <div className="property-notes-wrapper">
              <CustomNote serviceData={serviceData} />
            </div>
            <div className="property-term-section">
              <TermsAndConditionCheckBox
                register={register}
                name="terms&conditions"
              />
              <CustomButton
                title="Make Request"
                btnStyles="property-button-wrapper"
                btnDisabled={!isValid && "true"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertErrand;
