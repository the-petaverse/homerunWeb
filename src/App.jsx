import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./screens/homePage/Home";
import MainSideBar from "./components/mainSideBar/MainSideBar";
import Hq from "./components/hq/Hq";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
