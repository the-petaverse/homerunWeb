import React from "react";

const CustomSelect = ({
  type,
  className,
  placeholder,
  register,
  name,
  required,
  errors,
  watch,
  data,
}) => {
  return (
    <label>
      <select
        type={type}
        error={errors}
        // className="register-main-text-input"
        className={className}
        placeholder={placeholder}
        data={data}
        {...register(name, {
          required: required,
        })}
      >
        <option value="0">{`Select ${name}`}</option>
        {data && data !== undefined
          ? data.map((myData, index) => {
              return (
                <option value={myData.id} key={index}>
                  {myData.title}
                </option>
              );
            })
          : "No country selected"}
      </select>
    </label>
  );
};

export default CustomSelect;
