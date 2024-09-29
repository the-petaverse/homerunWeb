import React, { useState } from "react";
import "./ErrandProcesses.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const ErrandProcesses = () => {
  const [shoeErrandProcess, setShowErrandProcess] = useState(false);

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
          {shoeErrandProcess ? (
            <FaChevronDown size={25} />
          ) : (
            <FaChevronRight size={25} />
          )}
        </div>
        <p>Please see the entire errand journey</p>
      </div>
      {shoeErrandProcess && (
        <div className="errand-process-content-wrapper">
          <div>
            <h3>What We Do: </h3>
            <p>
              We contact the institution to verify your details and initiate the
              transcript retrieval process. Time Required: 3-7 business days
              (varies based on the institution’s processing time). Cost: Varies
              by institution; typically between $20 - $100 (institutional fees).
            </p>
          </div>
          <div>
            <h3>Transcript Retrieval: </h3>
            <p>
              Once processed, we retrieve the transcript from the institution.
              Time Required: 1-3 business days after processing. Cost: Service
              fee ranging from $30 - $50 (in addition to institutional fees).
            </p>
          </div>
          <div>
            <h3>Delivery: </h3>
            <p>
              We deliver the transcript to your preferred location (via mail or
              email). Time Required: 3-7 business days for physical delivery;
              Instant for email delivery. Cost: Delivery charges vary based on
              location; typically between $10 - $30.
            </p>
          </div>
          <div>
            <h3>Completion: </h3>
            <p>
              What You Get: A copy of your transcript delivered securely to your
              address or inbox. Total Time: Approximately 10-20 business days
              from initial request to delivery. Total Cost: Typically between
              $60 - $180 (depending on institution and delivery method).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrandProcesses;
