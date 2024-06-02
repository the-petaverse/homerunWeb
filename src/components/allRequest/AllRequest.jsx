import React from "react";
import BinIcon from "../../assets/bin.png";

const AllRequest = () => {
  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>All Request</h2>
      </div>
      <div className="request-wrapper">
        <h3 className="title-request">Request title</h3>
        <p className="details-request">
          Request details to go insiode here Request details to go insiode here
        </p>
        <p>Request status</p>
        <img src={BinIcon} alt="" className="bin-icon" />
      </div>
      <div className="request-wrapper">
        <h3 className="title-request">Request title</h3>
        <p className="details-request">
          Request details to go insiode here Request details to go insiode here
        </p>
        <p>Request status</p>
        <img src={BinIcon} alt="" className="bin-icon" />
      </div>
      <div className="request-wrapper">
        <h3 className="title-request">Request title</h3>
        <p className="details-request">
          Request details to go insiode here Request details to go insiode here
        </p>
        <p>Request status</p>
        <img src={BinIcon} alt="" className="bin-icon" />
      </div>
      <div className="request-wrapper">
        <h3 className="title-request">Request title</h3>
        <p className="details-request">
          Request details to go insiode here Request details to go insiode here
        </p>
        <p>Request status</p>
        <img src={BinIcon} alt="" className="bin-icon" />
      </div>
    </div>
  );
};

export default AllRequest;
