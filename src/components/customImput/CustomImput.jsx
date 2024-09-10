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
      <div className="input-main-container">
        <input
          name={name}
          id={id}
          error={error}
          type={type}
          placeholder={placeholder}
          style={style}
          className="main-text-input"
          // className={}
          {...register(name, {
            required: required,
          })}
          {...rest}
        />
        {error && <p className="input-error-message">{error}</p>}
      </div>
    </>
  );
};

export default CustomImput;
