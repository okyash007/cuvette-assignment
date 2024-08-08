import React from "react";
import Layout from "./layout/Layout";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex w-full">
      <Layout />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
