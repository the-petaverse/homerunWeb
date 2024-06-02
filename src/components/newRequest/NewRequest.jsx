import React, { useState } from "react";
import LoginImage from "../../assets/feedback.png";
import SuccessImage from "../../assets/green.png";
import { useForm } from "react-hook-form";
import { PaystackButton } from "react-paystack";

const NewRequest = ({
  setFormStage,
  formStage,
  setShowDashboard,
  setModalOpen,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });
  const componentProps = {
    email: "test@example.com",
    amount: 100,
    metadata: {
      name: "Michael",
      phone: "12563255555",
    },
    publicKey: "pk_test_727e5faf342cc97164c860a5e08e7920dcae6c78",
    text: "Pay Now",
    onSuccess: () => setShowDashboard(1),
    // alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };
  const onSubmit = (data) => {
    setFormStage((cur) => cur + 1);
    console.log("Data: ", data);
  };
  const handleCompleteForm = () => {
    setFormStage((cur) => cur + 1);
  };
  console.log(formStage);
  const renderButton = () => {
    if (formStage > 1) {
      return undefined;
    } else if (formStage === 1) {
      return (
        <label className="final-submit-btn-wrapper">
          <button
            // type="Submit"
            className="final-button-wrapper final-submit-btn"
            onClick={handleCompleteForm}
          >
            Next Step
          </button>
        </label>
      );
    } else {
      return (
        <button className="register-main-form-btn" onClick={handleCompleteForm}>
          Next Step
        </button>
      );
    }
  };
  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>New Request</h2>
      </div>
      <div className="register-main-container">
        <div className="register-iamge-wrapper">
          <img src={LoginImage} alt="" className="register-image" />
        </div>
        <div className="register-inner-form-wrapper new-request-form-side">
          {formStage < 1 && <p>We will be glad to have you onboard</p>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form-wrapper new-request-form-wrapper"
          >
            {formStage >= 0 && (
              <div
                style={{
                  display: formStage === 0 ? "block" : "none",
                }}
              >
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Request Title (Passport Collection)"
                    {...register("request_title")}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Please enter more information as possible here"
                    {...register("request_details")}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Contact Person"
                    {...register("contact_name")}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Contact Telephone Number"
                    {...register("contact_number")}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Contact Address"
                    {...register("contact_address")}
                  />
                </label>
              </div>
            )}
            {formStage === 1 && (
              <>
                <label>
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="Country Name"
                    {...register("country")}
                  />
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="State Name"
                    {...register("stateName")}
                  />
                  <input
                    type="text"
                    className="register-main-text-input"
                    placeholder="City Name"
                    {...register("cityName")}
                  />
                  <section className="checkboxes-container">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        {...register("terms")}
                        onClick={() => setModalOpen(true)}
                      />
                      I agree to Terms & Conditions
                    </label>
                  </section>
                </label>
              </>
            )}
            {formStage === 2 && (
              <>
                <div className="checkboxes-container">
                  <div className="main-success-image-container">
                    <img src={SuccessImage} className="success-image" />
                    <h3>Request has been created successfully</h3>
                    <p>
                      It is a pleasure taking your request. Your request is
                      currently been attended to. Thank you for trusting us.
                    </p>
                  </div>
                </div>
                <PaystackButton
                  {...componentProps}
                  className="register-main-form-btn"
                />
              </>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
