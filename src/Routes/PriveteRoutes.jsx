import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "../components/views/AppFooter";
import Header from "../components/views/Header";
import CardPortal from "../components/views/JobCard/CardPortal";

const PrivateRoute = () => {
  // Allow all visitors (authenticated users and guests) to browse freely
  return (
    <>
      <Header />
      <Outlet />
      <AppFooter />
      <CardPortal />
    </>
  );
};

export default PrivateRoute;