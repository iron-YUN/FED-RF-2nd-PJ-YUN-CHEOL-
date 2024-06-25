import React, { useState, useRef, useEffect } from "react";

// 메인페이지 컴포넌트 ///
import MainPageTop from "../modules/MainPageTop";
import MainPageRd from "../modules/MainPageRd";
import MainPageMiddle from "../modules/MainPageMiddle";
import MainPageBottom from "../modules/MainPageBottom";
import WhyBuyFromBose from "../modules/WhyBuyFromBose";
import SwiperSns from "../plugin/SwiperSns";

// 메인 css
import "../../css/main_area.scss";

export default function Main() {
  // 바디색 바꾸기
  function backColorFn() {
    const rbox = document.querySelector(".main-ban-area");
    const rectB = rbox.getBoundingClientRect().top;
    const rectBPer = Math.floor((rectB / window.innerHeight) * 100);
    const body = document.querySelector("#main-page");
    // console.log(rectBPer);
    // 스크롤 퍼센티지가 증가하면 비디오 크기도 증가
    if (rectBPer > -250 && rectBPer < 100) {
      if (rectBPer < 50 && rectBPer > -240) {
        body.style.backgroundColor = "#282828";
      } ///////////////////////
      else {
        body.style.backgroundColor = "#fff";
      } ////////////////////////
    }
  } /////////////backColorFn///////////////////
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
          {/* 메인페이지 상단 랜덤동영상 모듈 */}
          <MainPageTop />
        </div>
        <div className="items-area">
          {/* 랜덤 제품 모듈 */}
          <MainPageRd />
          {/* 배너 3개있는 모듈 */}
          <MainPageMiddle />
        </div>
        <div className="main-ban-area">
          {/* 장인정신 모듈 */}
          <MainPageBottom />
        </div>
        <div className="why-bose-area">
          {/* 왜 보스인가 모듈 */}
          <WhyBuyFromBose />
        </div>
        <div className="sns-area">
          {/* sns 모듈 */}
          <SwiperSns />
        </div>
      </section>
    </>
  );
} ////////////// TopArea /////////////
