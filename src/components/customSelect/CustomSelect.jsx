import React from "react";
import "./CustomSelect.css";

const CustomSelect = ({
  type,
  className,
  placeholder,
  register,
  name,
  required,
  errors,
  style,
  watch,
  data,
}) => {
  return (
    <div className="custom-select-container">
      <select
        type={type}
        error={errors}
        style={style}
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
    </div>
  );
};

export default CustomSelect;
