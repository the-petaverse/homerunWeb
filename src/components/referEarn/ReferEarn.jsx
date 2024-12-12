import React, { useEffect, useState } from "react";
import "./ReferEarn.css";
import { BsCopy } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";

import { useGetUserReferrerCodeQuery } from "../../services/referrerSystem/referrerSystem";
import { useAuthContext } from "../../customHooks/useAuthContext";
import { inviteData } from "../../data/referAndWin";
import { useReferAndWin } from "../../customHooks/useReferAndWin";

const ReferEarn = () => {
  const [refererCode, setRefereCode] = useState("");
  const { isSuccess, data } = useReferAndWin();
  const [copiedValue, setCopiedValue] = useState();
  const conReceived = useAuthContext();

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(refererCode);
    const copiedText = await navigator.clipboard.readText();
    if (copiedText) {
      setCopiedValue(copiedText);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setRefereCode(data?.referrerSystem?.referrer_code);
    }
  }, [isSuccess, copiedValue]);
  return (
    <div className="dashboard-refer-earn-main-container">
      <div className="dashboard-refer-left-pane">
        <div className="earn-refer-code-wrapper">
          <div className="ear-refer-input-holder">
            <input
              type="text"
              className="earn-refer-input"
              value={refererCode}
              readOnly={true}
            />
            {copiedValue ? (
              <FiCheckSquare
                size={30}
                color="green"
                className="refer-earninput-icon"
              />
            ) : (
              <BsCopy
                size={30}
                className="refer-earninput-icon"
                onClick={handleCopyCode}
              />
            )}
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
