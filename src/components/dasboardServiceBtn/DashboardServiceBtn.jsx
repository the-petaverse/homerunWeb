import React from "react";

const DashboardServiceBtn = ({ title, btnOnClick }) => {
  return (
    <button
      onClick={btnOnClick}
      className="py-3 bg-[gray] w-[100%] rounded-xl text-gray-50 text-lg hover:bg-[#262262]"
    >
      {title}
    </button>
  );
};

export default DashboardServiceBtn;
