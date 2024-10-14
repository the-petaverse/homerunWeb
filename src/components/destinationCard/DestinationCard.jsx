import React from "react";
import "./DestinationCard.css";

const destinationData = [
  { id: "1", title: "Omutu Resort", imageUrl: "/images/destination.png" },
  { id: "1", title: "The Good Place", imageUrl: "/images/destination.png" },
  { id: "1", title: "National Parl Kogi", imageUrl: "/images/destination.png" },
];
const DestinationCard = () => {
  return (
    <div>
      <div className="destination-header-wrapper">
        <h4>Select From Our Top Destinations</h4>
        <div className="add-destination-btn">
          <h5>Share preferred destination</h5>
        </div>
      </div>

      <div className="destination-card-main-container">
        {destinationData &&
          destinationData.map((destnation, index) => {
            return (
              <label for={destnation.title}>
                <div
                  className="destination-card-container"
                  key={index}
                  id={destnation.title}
                >
                  <input
                    type="radio"
                    id="html"
                    name="destination"
                    value={destnation.title}
                    className="radio-btn"
                  />
                  <img src={destnation.imageUrl} alt="destination" />
                  <h2>{destnation.title}</h2>
                </div>
              </label>
            );
          })}
      </div>
    </div>
  );
};

export default DestinationCard;
