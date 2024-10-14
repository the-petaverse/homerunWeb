import React from "react";
import "./CustomPhoneInput.css";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";

const CustomPhoneInput = ({
  control,
  style,
  register,
  inputWatcch,
  placeholder,
  ...rest
}) => {
  return (
    <div>
      <PhoneInputWithCountry
        placeholder={placeholder}
        international
        countryCallingCodeEditable={false}
        defaultCountry="NG"
        name="phone_number"
        control={control}
        rules={{ required: true }}
        style={style}
        // isValidPhoneNumber={console.log(isValidPhoneNumber())}
        // className="main-text-input"
      />
      <p className="register-phone-number-error-style">
        {isValidPhoneNumber(inputWatcch ? inputWatcch : "")
          ? undefined
          : "Invalid phone number"}
      </p>
    </div>
  );
};

export default CustomPhoneInput;
