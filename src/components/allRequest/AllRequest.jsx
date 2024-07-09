import React, { useEffect, useState } from "react";

import "./AllRequest.css";

import { useGetUserErransQuery } from "../../services/errands/errandsApi";

const AllRequest = () => {
  const [allRequests, setAllRequests] = useState([]);
  const {
    data: userErrandData,
    isLoading: errandLoading,
    isSuccess: errandSuccess,
    error: errandError,
  } = useGetUserErransQuery();

  if (errandError) {
    console.log(errandError);
  }

  const deleteRequest = (id) => {
    console.log("fliter_id", id);
    let filterRequest = allRequests.filter(
      (deletedRequest) => deletedRequest.id !== id
    );
    setAllRequests(filterRequest);
    console.log(allRequests.length);
  };

  useEffect(() => {
    // getAllRequests();
  }, [errandSuccess]);
  return (
    <div>
      <div className="slate-header-wrapper">
        <h2>All Request</h2>
      </div>
      {userErrandData?.userErrand &&
        userErrandData.userErrand.map((allRequests, index) => {
          return (
            <div className="request-wrapper" key={index}>
              <h3 className="title-request">{allRequests?.sub_request_name}</h3>
              <p className="details-request">{allRequests?.more_info}</p>
              <p className="request-status">{allRequests?.errand_status}</p>
              {/* <img
                src={BinIcon}
                // alt=""
                className="bin-icon"
                onClick={() => {
                  deleteRequest(allRequests.id);
                }}
              /> */}
            </div>
          );
        })}
      {!userErrandData?.userErrand && (
        <div className="no-request-wrapper">
          <h1>You do not have any Request at the moment.</h1>
          <h1>Please create a new request</h1>
        </div>
      )}
    </div>
  );
};

export default AllRequest;
