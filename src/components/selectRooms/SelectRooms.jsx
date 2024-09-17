import React from "react";
import "./SelectRooms.css";

const SelectRooms = () => {
  return (
    <div className="select-room-container">
      <div className="select-room-title-wrapper">
        <p>Rooms</p>
      </div>
      <div className="select-room-add-btn-main-wrapper">
        <p>Please select room type</p>
        <div className="select-room-add-btn-wrapper">
          <p>+</p>
          <p>Add</p>
        </div>
      </div>
    </div>
  );
};

export default SelectRooms;
