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
  iconLeft,
  data,
}) => {
  return (
    <div className="custom-select-container">
      {iconLeft && <div className="custom-select-icon-left">{iconLeft}</div>}
      <select
        type={type}
        error={errors}
        style={style}
        className="custome-select-class-name"
        // className={className ? className : "custome-select-class-name"}
        placeholder={placeholder}
        data={data}
        {...register(name, {
          required: required,
        })}
      >
        <option value="0">{`Select ${placeholder}`}</option>
        {data && data !== undefined
          ? data.map((myData, index) => {
              return (
                <option value={myData.title} key={index}>
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
