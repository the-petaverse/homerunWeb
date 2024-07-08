import React from "react";

const CustomSelect = () => {
  return (
    <label>
      <select
        type="text"
        className="register-main-text-input"
        placeholder="Country Name"
        {...register("country", {
          required: "Country name is required",
        })}
      >
        <option value="0">Select country</option>
        {countries && countries !== undefined
          ? countries.map((countryData, index) => {
              return (
                <option value={countryData.id} key={index}>
                  {countryData.title}
                </option>
              );
            })
          : "No country selected"}
      </select>
    </label>
  );
};

export default CustomSelect;
