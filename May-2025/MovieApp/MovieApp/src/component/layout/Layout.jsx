import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
