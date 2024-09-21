import React from "react";
import "./CustomPhoneInput.css";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const CustomPhoneInput = ({ control, style, register, ...rest }) => {
  return (
    <div>
      <PhoneInputWithCountry
        international
        countryCallingCodeEditable={false}
        defaultCountry="NG"
        name="phoneInputWithCountrySelect"
        control={control}
        rules={{ required: true }}
        style={style}

        // className="main-text-input"
      />
    </div>
  );
};

export default CustomPhoneInput;
