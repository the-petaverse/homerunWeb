import React, { useEffect, useState } from "react";
import "./Team.css";
import MikeImage from "../../assets/mike.png";
import PlusIcon from "../../assets/plus.png";
const Team = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [iconId, setIconId] = useState(0);

  const handleShowSocialIcons = () => {
    setShowSocialIcons((prev) => !prev);
  };
  useEffect(() => {}, [showSocialIcons]);

  return (
    <div className="team-main-container">
      <div className="team-header-wrapper">
        <h1>Our Team</h1>
        <p>
          Our team at Homerun is a diverse group of dedicated professionals with
          expertise in technology, logistics, and customer service, all working
          collaboratively to meet the unique needs of our users while driving
          innovation and sustainability.
        </p>
      </div>
      <div className="team-card-main-wrapper">
        <div className="team-card-inner-wrapper">
          <div className="team-image-wrapper">
            <img src={MikeImage} alt="team" className="team-image" />
            <div className="plus-icon-wrapper">
              {showSocialIcons && (
                <>
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                </>
              )}
              <img
                src={PlusIcon}
                alt="click"
                className="plus-icon center-icon"
                onClick={() => handleShowSocialIcons(1)}
              />
              {showSocialIcons && (
                <>
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                </>
              )}
            </div>
          </div>
          <div className="title-wrapper">
            <h3>Michael Oladele</h3>
            <p>Tech Lead / Co-founder</p>
          </div>
        </div>
        <div className="team-card-inner-wrapper">
          <div className="team-image-wrapper">
            <img src={MikeImage} alt="team" className="team-image" />
            <div className="plus-icon-wrapper">
              {showSocialIcons && (
                <>
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                </>
              )}
              <img
                src={PlusIcon}
                alt="click"
                className="plus-icon center-icon"
                onClick={() => handleShowSocialIcons(2)}
              />
              {showSocialIcons && (
                <>
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                  <img src={PlusIcon} alt="click" className="plus-icon" />
                </>
              )}
            </div>
          </div>
          <div className="title-wrapper">
            <h3>Michael Oladele</h3>
            <p>Tech Lead / Co-founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
