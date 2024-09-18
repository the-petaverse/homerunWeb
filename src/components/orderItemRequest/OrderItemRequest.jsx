import React, { useState } from "react";
import "./OrderItemRequest.css";
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

const OrderItemRequest = ({
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
                name="email"
                required="Email is required"
                placeholder="Email"
                className="main-text-input"
                type="text"
                error={errors?.email?.message}
                register={register}
                style={{ borderColor: errors.email ? "red" : "black" }}
              />
              <CustomImput
                name="recipientName"
                required="Recipient’s name is required"
                placeholder="Recipient’s name"
                className="main-text-input"
                type="text"
                error={errors?.recipientName?.message}
                register={register}
                style={{ borderColor: errors.recipientName ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="phoneNumber"
                required="Phone number is required"
                placeholder="Phone number"
                className="main-text-input"
                type="text"
                error={errors?.phoneNumber?.message}
                register={register}
                style={{ borderColor: errors.phoneNumber ? "red" : "black" }}
              />
              <CustomImput
                name="deliveryDate"
                required="Delivery Date is required"
                placeholder="Delivery Date"
                className="main-text-input"
                type="text"
                error={errors?.deliveryDate?.message}
                register={register}
                style={{ borderColor: errors.deliveryDate ? "red" : "black" }}
              />
            </div>
            <div className="form-section-wrapper">
              <CustomImput
                name="deliveryTime"
                required="Delivery time is required"
                placeholder="Select Time"
                className="main-text-input"
                type="text"
                error={errors?.deliveryTime?.message}
                register={register}
                style={{ borderColor: errors.deliveryTime ? "red" : "black" }}
              />
              <CustomImput
                name="location"
                required="Location is required"
                placeholder="Location"
                className="main-text-input"
                type="text"
                error={errors?.location?.message}
                register={register}
                style={{ borderColor: errors.location ? "red" : "black" }}
              />
            </div>
            <CustomTextArea
              textAreaStyle="textarea"
              placeHolder="Recipient’s delivery address"
            />
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

export default OrderItemRequest;
