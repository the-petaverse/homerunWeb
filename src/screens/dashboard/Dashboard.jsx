import React, { useEffect, useState } from "react";
import UserDashboard from "../userDasboard/UserDashboard";

const DashBoard = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(isAdmin);
  useEffect(() => {}, [isAdmin]);
  return (
    <>
      <UserDashboard />
    </>
  );
};

export default DashBoard;
