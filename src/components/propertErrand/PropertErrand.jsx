import React, { useEffect, useState } from "react";
import "./PropertErrand.css";
import { Controller, useForm } from "react-hook-form";
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
import { useCreatePropertyErrandMutation } from "../../services/propertyErrands/propertyErrand";
import { useDispatch, useSelector } from "react-redux";
import { addUserOrder } from "../../services/slices/userOrder";
import CustomTextArea from "../customTextArea/CustomTextArea";
import { useCreateOfficialDocumentErrandMutation } from "../../services/officialDocument/officialDocumentApi";

const PropertErrand = (props) => {
  const {
    setFormStage,
    formStage,
    subcategory,
    requestId,
    subRequestId,
    serviceData,
  } = props;

  const userOrder = useSelector((state) => state.userOrder);
  const dispatch = useDispatch();
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [fileUplodComponent, setFileUplodComponent] = useState([
    { fileName: "" },
  ]);
  const [
    createOfficialDocumentErrand,
    { data, isSuccess, error, isLoading, isError },
  ] = useCreateOfficialDocumentErrandMutation();

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ordered_service_title: subcategory,
      ordered_service_id: subRequestId && subRequestId,
      firstName: "",
      lastName: "",
      // If first name is available it will be added
      // otherwise it will be added from the logged in user
    },
    mode: "all",
  });
  console.log(subRequestId);
  const watchPhoneNumber = watch("phone_number");
  const watchedFields = watch(); // Watch all form fields
  const onSubmitData = async (data) => {
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
    console.log(data);
    await createOfficialDocumentErrand(formData);
  };

  const handleIncreaseFileUploader = () => {
    setFileUplodComponent([...fileUplodComponent, { fileName: "" }]);
  };

  if (isSuccess) {
    // setOrderCreated(true);
    dispatch(addUserOrder(data));
    console.log(data);
  }

  if (error) {
    console.log(error);
  }
  const handleDeleteFileUploader = (fileUploaderIndex) => {
    const deletedFileUploader = [...fileUplodComponent];
    deletedFileUploader.splice(fileUploaderIndex, 1);
    setFileUplodComponent(deletedFileUploader);
  };

  useEffect(() => {
    // reset(watchedFields);
  }, [serviceData, requestId, subRequestId, isValid, reset]);

  return (
    <div className="property-new-request-from-main-container">
      <div className="property-new-request-form-container">
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="property-inputs-container">
            <CustomTextArea
              register={register}
              name="errand_ordered_summary"
              title="Errand Description"
              textAreaStyle="textarea"
              placeHolder="Enter your errand description here"
            />
            {(subcategory === "property-post-purchase" ||
              subcategory === "property-mangement") && (
              <div className="property-form-section-wrapper">
                <CustomImput
                  name="yourName"
                  required="Your name is required"
                  placeholder="Your name"
                  iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  type="text"
                  error={errors?.proprty_location?.message}
                  register={register}
                  style={{
                    borderColor: errors.proprty_location ? "red" : "black",
                  }}
                />
                <CustomPhoneInput
                  name="seller_phone_number"
                  inputWatcch={watchPhoneNumber}
                  control={control}
                  style={{
                    borderColor: errors.phone_number ? "red" : "black",
                  }}
                  register={register}
                />
              </div>
            )}
            {(subcategory === "pre-purchase-verification" ||
              subcategory === "property-document-processing") && (
              <div className="property-form-section-wrapper">
                <CustomImput
                  name="seller_name"
                  required="Seller name is required"
                  placeholder="Seller name"
                  // className="main-text-input"
                  type="text"
                  error={errors?.seller_name?.message}
                  register={register}
                  iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  style={{ borderColor: errors.seller_name ? "red" : "black" }}
                />

                <CustomPhoneInput
                  name="seller_phone_number"
                  inputWatcch={watchPhoneNumber}
                  control={control}
                  style={{
                    borderColor: errors.phone_number ? "red" : "black",
                  }}
                  register={register}
                />
              </div>
            )}

            <div className="property-form-section-wrapper">
              {(subcategory === "pre-purchase-verification" ||
                subcategory === "property-document-processing") && (
                <CustomImput
                  name="seller_email"
                  required="Seller email is required"
                  placeholder="Seller email"
                  // className="main-text-input"
                  type="text"
                  error={errors?.seller_email?.message}
                  register={register}
                  iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  style={{ borderColor: errors.seller_email ? "red" : "black" }}
                />
              )}
              {(subcategory === "pre-purchase-verification" ||
                subcategory === "property-document-processing" ||
                subcategory === "property-post-purchase" ||
                subcategory === "property-mangement") && (
                <CustomImput
                  name="proprty_location"
                  required="Property Location is required"
                  placeholder="Property Location"
                  iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  // className="main-text-input"
                  type="text"
                  error={errors?.proprty_location?.message}
                  register={register}
                  style={{
                    borderColor: errors.proprty_location ? "red" : "black",
                  }}
                />
              )}
              {(subcategory === "property-post-purchase" ||
                subcategory === "property-mangement") && (
                <CustomImput
                  name="proprty_type"
                  required="Property type is required"
                  placeholder="Property Type"
                  iconLeft={<FaEnvelopeOpenText color="gray" size={20} />}
                  // className="main-text-input"
                  type="text"
                  error={errors?.proprty_type?.message}
                  register={register}
                  style={{ borderColor: errors.proprty_type ? "red" : "black" }}
                />
              )}
            </div>
            <div className="text-area-below">
              <CustomTextArea
                register={register}
                name="errand_more_details"
                textAreaStyle="textarea"
                placeHolder="Enter your errand description here"
              />
            </div>
          </div>

          {(subcategory === "property-document-processing" ||
            subcategory === "property-post-purchase") && (
            <div className="upload-section-wrapper">
              <CustomUpload
                handleIncreaseFileUploader={handleIncreaseFileUploader}
              />
              <div className="form-upload-section">
                {fileUplodComponent &&
                  fileUplodComponent.map((fileUploader, index) => (
                    <>
                      {/* <CustomImput
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
                      /> */}
                      <CustomInputUpload
                        // name="proportyDocument"
                        register={register}
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
                name="terms_conditions"
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
