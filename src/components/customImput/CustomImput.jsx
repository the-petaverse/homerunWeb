import React from "react";
import { useForm } from "react-hook-form";
import "./CustomImput.css";
import { FaWhatsapp } from "react-icons/fa";

const CustomImput = ({
  type,
  placeholder,
  className,
  style,
  name,
  required,
  register,
  iconLeft,
  iconRight,
  inconClick,
  validate,
  pattern,
  onPaste,
  error,
  id,
  ...rest
}) => {
  const {
    formState: { isValid },
  } = useForm({ mode: "all" });

  return (
    <div>
      <div className="input-main-container">
        {iconLeft && <div className="custom-input-icon">{iconLeft}</div>}
        <input
          name={name}
          id={id}
          error={error}
          type={type}
          placeholder={placeholder}
          onPaste={onPaste}
          style={style}
          className={className ? className : "custom-main-text-input"}
          {...register(name, {
            required: required,
            validate: validate ? validate : "",
            pattern: {
              value: pattern ? pattern : "",
              message:
                "Your password MUST have at least(1 Capital, 1 special character, 1 Number, and 1 small character!!) and can not be less than 8",
            },
          })}
          {...rest}
        />
        {iconRight && (
          <div className="custom-right-input-icon" onClick={inconClick}>
            {iconRight}
          </div>
        )}
      </div>
      {error && <p className="input-error-message">{error}</p>}
    </div>
  );
};

export default CustomImput;
