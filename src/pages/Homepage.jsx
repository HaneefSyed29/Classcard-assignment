import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "./components/Card";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-[#f2f4f6] h-screen w-screen">
        <Sidebar />
        <Card />
      </div>
    </div>
  );
};

export default Homepage;
