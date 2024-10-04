import React from "react";
import "./CustomInputUpload.css";

const CustomInputUpload = ({
  handleDeleteFileUploader,
  name,
  register,
  required,
  ...rest
}) => {
  return (
    <div className="input-upload-container">
      <label for="file-input">
        <img src="/images/upload.png" />
        Click to upload (jpg, pdf, png)
      </label>

      <input
        type="file"
        multiple
        id="file-input"
        // name={name}
        {...register("file")}
        {...rest}
      />
      <img
        src="/images/x-circle.png"
        alt=""
        onClick={handleDeleteFileUploader}
      />
    </div>
  );
};

export default CustomInputUpload;
