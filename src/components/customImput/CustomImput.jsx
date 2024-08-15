import React from "react";
import { useForm } from "react-hook-form";
import "./CustomImput.css";

const CustomImput = ({
  type,
  placeholder,
  className,
  style,
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
      <label htmlFor={name}></label>
      <input
        name={name}
        id={id}
        error={error}
        type={type}
        placeholder={placeholder}
        style={style}
        className={className}
        {...register(name, {
          required: required,
        })}
        {...rest}
      />
      {error && <p className="input-error-message">{error}</p>}
    </>
  );
};

export default CustomImput;
