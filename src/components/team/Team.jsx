import React, { useEffect, useState } from "react";
import "./Team.css";
import MikeImage from "../../assets/mike.png";
import PlusIcon from "../../assets/plus.png";

const teamList = [
  {
    id: "1",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: "../../assets/mike.png",
  },
  {
    id: "2",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: "../../assets/mike.png",
  },
  {
    id: "3",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: "../../assets/mike.png",
  },
  {
    id: "4",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: "../../assets/mike.png",
  },
];

const Team = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [iconId, setIconId] = useState("0");

  const handleShowSocialIcons = (id) => {
    setIconId(id);
    setShowSocialIcons((prev) => !prev);
  };

  useEffect(() => {}, [showSocialIcons, iconId]);

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
        {teamList &&
          teamList.map((teamMemeber, index) => {
            return (
              <div className="team-card-inner-wrapper" key={index}>
                <div className="team-image-wrapper">
                  <img src={MikeImage} alt="team" className="team-image" />
                  <div className="plus-icon-wrapper">
                    {iconId === teamMemeber.id && showSocialIcons && (
                      <>
                        <img src={PlusIcon} alt="click" className="plus-icon" />
                        <img src={PlusIcon} alt="click" className="plus-icon" />
                      </>
                    )}

                    <img
                      src={PlusIcon}
                      alt="click"
                      className="plus-icon center-icon"
                      onClick={() => handleShowSocialIcons(teamMemeber.id)}
                    />
                    {iconId === teamMemeber.id && showSocialIcons && (
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
            );
          })}
      </div>
    </div>
  );
};

export default Team;
