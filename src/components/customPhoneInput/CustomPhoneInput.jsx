import React from "react";
import "./CustomPhoneInput.css";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";

const CustomPhoneInput = ({ control, style, register, ...rest }) => {
  return (
    <div>
      <PhoneInputWithCountry
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
    </div>
  );
};

export default CustomPhoneInput;
