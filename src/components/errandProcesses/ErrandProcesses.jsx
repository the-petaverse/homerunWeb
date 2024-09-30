import React, { useEffect, useState } from "react";
import "./ErrandProcesses.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const ErrandProcesses = ({ serviceData }) => {
  const [showErrandProcess, setShowErrandProcess] = useState(false);

  useEffect(() => {}, [serviceData]);
  const handleShowErrandProcess = () => {
    setShowErrandProcess((prev) => !prev);
  };
  return (
    <div className="errand-process-container">
      <div className="errand-process-main-header-wrapper">
        <div
          className="errand-process-header"
          onClick={handleShowErrandProcess}
        >
          <h2>Errand Processes</h2>
          {showErrandProcess ? (
            <FaChevronDown size={25} />
          ) : (
            <FaChevronRight size={25} />
          )}
        </div>
        <p>Please see the entire errand journey</p>
      </div>
      {showErrandProcess && (
        <div className="errand-process-content-wrapper">
          {serviceData &&
            serviceData[0]?.sub_service_process.map((errandProcess, index) => (
              <div>
                <h3>{errandProcess.title && `${errandProcess.title}:`} </h3>
                <p>{errandProcess.details}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ErrandProcesses;
