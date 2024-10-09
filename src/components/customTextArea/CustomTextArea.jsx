import React from "react";
import "./CustomTextArea.css";

const CustomTextArea = ({
  title,
  textAreaStyle,
  placeHolder,
  name,
  register,
  required,
  validate,
  ...rest
}) => {
  return (
    <div className="custom-text-area-wrapper">
      <p>
        <label>{title ? title : ""}</label>
      </p>
      <textarea
        name={name}
        rows={4}
        cols={92}
        className={textAreaStyle}
        placeholder={placeHolder}
        {...register(name, {
          required: required,
          validate: validate ? validate : "",
        })}
        {...rest}
      />
    </div>
  );
};

export default CustomTextArea;
