import React, { useEffect, useState } from "react";
import "./Requirement.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const Requirement = ({ serviceData }) => {
  const [showRequirement, setShowRequirement] = useState(false);

  const handleOpenRequirement = () => {
    setShowRequirement((prev) => !prev);
  };
  useEffect(() => {}, [serviceData]);
  return (
    <div className="requirement-container">
      <div className="requirement-main-header-wrapper">
        <div className="requirement-header" onClick={handleOpenRequirement}>
          <h2 className="font-bold text-2xl">Requirements</h2>
          {showRequirement ? (
            <FaChevronDown size={25} />
          ) : (
            <FaChevronRight size={25} />
          )}
        </div>
        <p className="text-lg">
          Please see a list of what is required from you
        </p>
      </div>
      {showRequirement && (
        <div className="requirement-content">
          <ul>
            {serviceData &&
              serviceData[0]?.sub_service_requirement.map((require, index) => (
                <li key={index} className="list-disc">
                  {require}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Requirement;
