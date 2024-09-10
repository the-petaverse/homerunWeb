import React from "react";
import { useForm } from "react-hook-form";
import "./CustomImput.css";

const CustomImput = ({
  type,
  placeholder,
  className,
  label,
  style,
  icon,
  icon2,
  name,
  required,
  register,
  error,
  id,
  ...rest
}) => {
  const {
    formState: { isValid },
  } = useForm({ mode: "all" });

  return (
    <>
      <div className="input-main-container">
        {icon}
        <div className="input-container">
          <legend  className="input-legend">
            {label}
          </legend>

          <input
            name={name}
            id={id}
            error={error}
            type={type}
            // placeholder={placeholder}
            style={style}
            className="form-input-group"
            {...register(name, {
              required: required,
            })}
            {...rest}
          />
        </div>

        {icon2}
      </div>

      {error && <p className="input-error-message">{error}</p>}
    </>
  );
};

export default CustomImput;
