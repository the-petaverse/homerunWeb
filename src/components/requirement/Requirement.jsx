import React, { useEffect, useState } from "react";
import "./Requirement.css";

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
          <h2>Requirements</h2>
          <img src="/images/chevron-forw.png" alt="" />
        </div>
        <p>Please see a list of what is required from you</p>
      </div>
      {showRequirement && (
        <div className="requirement-content">
          <ul>
            {serviceData &&
              serviceData[0]?.sub_service_requirement.map((require, index) => (
                <li key={index}>{require}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Requirement;
