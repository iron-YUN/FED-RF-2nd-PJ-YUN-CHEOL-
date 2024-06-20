import React, { useState, useRef, useEffect } from "react";

// 메인페이지 컴포넌트 ///
import "../../css/main_area.scss";
import MainPageTop from "../modules/MainPageTop";
import Trending from "../modules/Trending";
import MainPageBan from "../modules/MainPageBan";
import MainPageMiddle from "../modules/MainPageMiddle";

export default function Main() {
     // 바디색 바꾸기
     function backColorFn() {
      const rbox = document.querySelector(".items-area");
        const rectB = rbox.getBoundingClientRect().bottom;
        const rectBPer = Math.floor((rectB / window.innerHeight) * 100);
        // console.log("바디색!!!",rectBPer);
        const body =  document.querySelector("#main-page");
        // 스크롤 퍼센티지가 증가하면 비디오 크기도 증가
        if(rectBPer>50){
          body.style.backgroundColor = "#fff";
        }///////////////////////
        else if (rectBPer >= 0 && rectBPer <= 70) {
          body.style.backgroundColor = "#282828";
        } ////////////////////////
    }/////////////backColorFn///////////////////
    useEffect(() => {
      window.addEventListener("scroll", backColorFn);
      return () => {
        window.removeEventListener("scroll", backColorFn);
      };
    }, []);
  return (
    <>
      <section id="main-page">
        <div id="main-page-top">
          <MainPageTop/>
        </div>
        <div className="items-area">
          <Trending />
          <MainPageMiddle />
        </div>
        <div className="main-ban-area">
          <MainPageBan />
        </div>
        <div className="sns-area"></div>
      </section>
    </>
  );
} ////////////// TopArea /////////////
