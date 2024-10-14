import React from "react";
import { IoArrowBack } from "react-icons/io5";
import "./CustomBackButton.css";
import { useNavigate } from "react-router-dom";

const CustomBackButton = ({ title, backBtnClick }) => {
  const navigate = useNavigate();
  return (
    <div
      className="back-arrow-wrapper"
      onClick={() => {
        backBtnClick ? backBtnClick() : navigate(-1);
      }}
    >
      <IoArrowBack size={25} />
      <button>
        <span>{title}</span>
      </button>
    </div>
  );
};

export default CustomBackButton;
