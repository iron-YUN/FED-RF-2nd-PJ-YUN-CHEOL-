import React, { useState, useRef, useEffect } from "react";

// 메인페이지 컴포넌트 ///
import "../../css/main_area.scss";
import MainPageTop from "../modules/MainPageTop";
import MainPageRd from "../modules/MainPageRd";
import MainPageBottom from "../modules/MainPageBottom";
import MainPageMiddle from "../modules/MainPageMiddle";
import SnsArea from "../modules/SnsArea";
import SwiperSns from "../plugin/SwiperSns";

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
          {/* 랜덤 제품 영역 */}
          <MainPageRd />
          {/* 배너 3개있는 중간영역 */}
          <MainPageMiddle />
        </div>
        <div className="main-ban-area">
          {/* 동영상 영역 */}
          <MainPageBottom />
        </div>
        <div className="sns-area">
          <SwiperSns />
        </div>
      </section>
    </>
  );
} ////////////// TopArea /////////////
