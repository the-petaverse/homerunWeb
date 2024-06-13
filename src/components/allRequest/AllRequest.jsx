import React, { useEffect, useState } from "react";
import BinIcon from "../../assets/bin.png";
import "./AllRequest.css";

const allRequestData = [
  {
    id: "1",
    title: "Request title",
    details:
      "Request details to go insiode here Request details to go insiode here",
    image: <BinIcon />,
  },
  {
    id: "2",
    title: "Request title",
    details:
      "Request details to go insiode here Request details to go insiode here",
    image: <BinIcon />,
  },
  {
    id: "3",
    title: "Request title",
    details:
      "Request details to go insiode here Request details to go insiode here",
    image: <BinIcon />,
  },
  {
    id: "4",
    title: "Request title",
    details:
      "Request details to go insiode here Request details to go insiode here",
    image: <BinIcon />,
  },
  {
    id: "5",
    title: "Request title",
    details:
      "Request details to go insiode here Request details to go insiode here",
    image: <BinIcon />,
  },
];

const AllRequest = () => {
  const [allRequests, setAllRequests] = useState([]);

  const getAllRequests = () => {
    setAllRequests(allRequestData);
  };

  const deleteRequest = (id) => {
    console.log("fliter_id", id);
    let filterRequest = allRequests.filter(
      (deletedRequest) => deletedRequest.id !== id
    );
    setAllRequests(filterRequest);
    console.log(allRequests.length);
  };

  useEffect(() => {
    getAllRequests();
  }, []);
  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>All Request</h2>
      </div>
      {allRequests.map((allRequests, index) => {
        return (
          <div className="request-wrapper" key={allRequests.id}>
            <h3 className="title-request">{allRequests.title}</h3>
            <p className="details-request">{allRequests.details}</p>
            <p className="request-status">Request status</p>
            <img
              src={BinIcon}
              // alt=""
              className="bin-icon"
              onClick={() => {
                deleteRequest(allRequests.id);
              }}
            />
          </div>
        );
      })}
      {allRequests.length < 1 && (
        <div className="no-request-wrapper">
          <h1>You do not have any Request at the moment.</h1>
          <h1>Please create a new request</h1>
        </div>
      )}
    </div>
  );
};

export default AllRequest;
