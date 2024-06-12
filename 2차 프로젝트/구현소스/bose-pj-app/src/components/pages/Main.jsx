import React, { useState, useRef, useEffect } from "react";

// 메인페이지 컴포넌트 ///
import "../../css/main_area.scss";
import MainPageTop from "../modules/MainPageTop";
import Trending from "../modules/Trending";
import MainPageBan from "../modules/MainPageBan";

export default function Main() {
  return (
    <>
      <section id="main-page">
        <div id="main-page-top">
          <MainPageTop/>
        </div>
        <div className="items-area">
          <Trending />
        </div>
        <div className="main-ban-area">
          <MainPageBan />
        </div>
        <div className="sns-area"></div>
      </section>
    </>
  );
} ////////////// TopArea /////////////
