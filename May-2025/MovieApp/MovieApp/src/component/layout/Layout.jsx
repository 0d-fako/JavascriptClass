import React from "react";
import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <div className={style.layOutWrapper}>
      <Header />
      <div className={style.sideBarLayout}>
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
