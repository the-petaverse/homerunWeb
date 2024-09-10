import React from "react";
import "./CustomNote.css";
import { InfoCircle } from "iconsax-react";

const CustomNote = () => {
  return (
    <div className="note-main-container">
      <h4 className="note-heading">
        <InfoCircle color="#EB5130" size={20} />
        PLEASE NOTE
      </h4>
      <p>
        Homerun does not work or have any affiliation with any institution.
        <br />
        Processing times and costs may vary based on the institution and
        location. We’ll provide a detailed cost breakdown and timeline once your
        request is verified.
        <br />
        <br />
        <br />
        <span>All funds paid are nonrefundable.</span>
      </p>
    </div>
  );
};

export default CustomNote;
