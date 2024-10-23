import React, { useEffect, useState } from "react";
import UserDashboard from "../userDasboard/UserDashboard";

const DashBoard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(isAdmin);
  useEffect(() => {}, [isAdmin]);
  return (
    <>
      {isAdmin && (
        <>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </>
      )}
      {!isAdmin && <UserDashboard />}
    </>
  );
};

export default DashBoard;
