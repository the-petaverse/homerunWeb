import React, { useState } from "react";
import "./ReferEarn.css";
import { BsCopy } from "react-icons/bs";

const inviteData = [
  {
    id: "1",
    title: "Invite Your Friends",
    icon: "/images/earn-1.png",
    details:
      "Copy your referral code or share your referral link with friends and family.",
  },
  {
    id: "2",
    title: " Regularly Shop and Run Errands on Homerun",
    icon: "/images/earn-2.png",
    details:
      "Use Homerun app regularly for shopping and bookings and document retrieval  to earn points.",
  },
  {
    id: "3",
    title: "You Make Savings",
    icon: "/images/earn-3.png",
    details:
      "You and your friend earn points. Also for every transaction, you also earn money.",
  },
];
const ReferEarn = () => {
  const [refererCode, setRefereCode] = useState("Somecodes here");
  return (
    <div className="dashboard-refer-earn-main-container">
      <div className="dashboard-refer-left-pane">
        <div className="earn-refer-code-wrapper">
          <div className="ear-refer-input-holder">
            <input type="text" className="earn-refer-input" value="Hello" />
            <BsCopy
              size={30}
              className="refer-earninput-icon"
              onClick={navigator.clipboard.writeText(refererCode)}
            />
          </div>
          <button className="refer-earn-btn">Share</button>
        </div>
        <div>
          <p className="earn-process-header">How It Works</p>
          {inviteData &&
            inviteData.map((earnData, index) => (
              <div className="dashboard-earn-steps-card-wrapper" key={index}>
                <div>
                  <img src={earnData.icon} alt="earn-icon" />
                </div>
                <div className="earn-details-wrapper">
                  <p className="earn-details-title">{earnData.title}</p>
                  <p className="earn-details-body">{earnData.details}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="dashboard-refer-right-pane">
        <img src="/images/earn-4.png" alt="earn icon" />
      </div>
    </div>
  );
};

export default ReferEarn;
