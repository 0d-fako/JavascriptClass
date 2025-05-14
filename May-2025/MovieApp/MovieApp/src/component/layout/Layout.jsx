import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import style from "./layout.module.css";
import Movies from "../movies/Movies";

const Layout = () => {
  return (
    <div className={style.layOutWrapper}>
      <Header />
      <div className={style.mainContent}>
        <div className={style.sideBarLayout}>
          <SideBar />
        </div>
        <div className={style.contentArea}>
          <Movies />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
