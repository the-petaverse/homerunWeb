import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./screens/homePage/Home";
import MainSideBar from "./components/mainSideBar/MainSideBar";

const App = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };
  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  return (
    <div>
      <Navbar handleOpenSideBar={handleOpenSideBar} openSideBar={openSideBar} />
      <Home />
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
      <Footer />
    </div>
  );
};

export default App;
