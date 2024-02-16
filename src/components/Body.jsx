import React from "react";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>body</div>
    </div>
  );
};

export default Body;
