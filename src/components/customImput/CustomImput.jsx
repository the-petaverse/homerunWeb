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
          style={style}
          className={className ? className : "custom-main-text-input"}
          {...register(name, {
            required: required,
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
