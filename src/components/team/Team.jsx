import React from "react";
import "./Team.css";
import MikeImage from "../../assets/mike.png";
import TwitterIcon from "../../assets/twitter.png";
import FacebookIcon from "../../assets/facebook.png";
import InstaIcon from "../../assets/insta.png";
import LinkedinIcon from "../../assets/linkedin.png";

const teamList = [
  {
    id: "1",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: MikeImage,
    socialLinks: [
      {
        icon: TwitterIcon,
        url: "https://twitter.com/michael",
        platform: "twitter",
      },
      {
        icon: FacebookIcon,
        url: "https://facebook.com/michael",
        platform: "facebook",
      },
      {
        icon: InstaIcon,
        url: "https://instagram.com/michael",
        platform: "instagram",
      },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/michael",
        platform: "linkedin",
      },
    ],
  },
  {
    id: "2",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: MikeImage,
    socialLinks: [
      {
        icon: TwitterIcon,
        url: "https://twitter.com/michael",
        platform: "twitter",
      },
      {
        icon: FacebookIcon,
        url: "https://facebook.com/michael",
        platform: "facebook",
      },
      {
        icon: InstaIcon,
        url: "https://instagram.com/michael",
        platform: "instagram",
      },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/michael",
        platform: "linkedin",
      },
    ],
  },
  {
    id: "3",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: MikeImage,
    socialLinks: [
      {
        icon: TwitterIcon,
        url: "https://twitter.com/michael",
        platform: "twitter",
      },
      {
        icon: FacebookIcon,
        url: "https://facebook.com/michael",
        platform: "facebook",
      },
      {
        icon: InstaIcon,
        url: "https://instagram.com/michael",
        platform: "instagram",
      },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/michael",
        platform: "linkedin",
      },
    ],
  },
  {
    id: "4",
    name: "Michael Oladele",
    title: "Tech Lead / Co-founder",
    image: MikeImage,
    socialLinks: [
      {
        icon: TwitterIcon,
        url: "https://twitter.com/michael",
        platform: "twitter",
      },
      {
        icon: FacebookIcon,
        url: "https://facebook.com/michael",
        platform: "facebook",
      },
      {
        icon: InstaIcon,
        url: "https://instagram.com/michael",
        platform: "instagram",
      },
      {
        icon: LinkedinIcon,
        url: "https://linkedin.com/in/michael",
        platform: "linkedin",
      },
    ],
  },
];

const Team = () => {
  return (
    <div className="team-main-container">
      <div className="team-header-wrapper">
        <h1 className="font-bold text-2xl">Our Team</h1>
        <p>
          Our team at Homerun is a diverse group of dedicated professionals with
          expertise in technology, logistics, and customer service, all working
          collaboratively to meet the unique needs of our users while driving
          innovation and sustainability.
        </p>
      </div>
      <div className="team-card-main-wrapper">
        {teamList.map((teamMember) => (
          <div className="team-card-inner-wrapper" key={teamMember.id}>
            <div className="team-image-wrapper">
              <img src={teamMember.image} alt="team" className="team-image" />
              <div className="social-icons">
                {teamMember.socialLinks.map((link, index) => (
                  <a
                    href={link.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={`social-icon ${link.platform}-icon`}>
                      <img src={link.icon} alt={`${link.platform} icon`} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="title-wrapper">
              <h3 className="font-bold">{teamMember.name}</h3>
              <p>{teamMember.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
