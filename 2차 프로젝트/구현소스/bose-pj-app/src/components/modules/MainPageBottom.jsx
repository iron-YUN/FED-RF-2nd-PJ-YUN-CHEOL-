import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// 이미지 동영상 데이터불러오기
import { mainPageBan } from "../data/main_page_banner";
import $ from "jquery";
// css 불러오기
import "./css/main_page_bottom.scss";

function MainPageBottom() {
  ////////////////////////////////////////////////////////////
  // 스크롤이벤트 함수 : 윈도우 스크롤시 해당 이벤트 발생
  function banScrollEvt(e) {
    // 박스 수집
    const mbBox = document.querySelector(".mb-box");
    // 박스탑
    const rectTop = mbBox.getBoundingClientRect().top;
    const rectTopPer = Math.floor((rectTop / window.innerHeight) * 100);

    // 제목 변수할당
    const tit = mbBox.querySelector(".craft-tit1");
    const ctit = mbBox.querySelector(".craft-tit2");
    // 베너비디오 들 변수할당
    const backImg = mbBox.querySelector(".back-img");
    // 정보박스 들 변수할당
    const infoBox = mbBox.querySelector(".cat-info-box");
    // 이미지 수집
    const img = mbBox.querySelectorAll(".box1-img");
    // 글자 수집
    const spanT = mbBox.querySelectorAll(".p-text");
    // 스크롤 증감설정구역1 : 내용 나오기 설정
    // 설정 : 탑값 50% 이하일때 제목 나옴
    if (rectTopPer >= -200 && rectTopPer <= 100) {
      // console.log("달려", rectTopPer);

      if (rectTopPer <= 50) {
        tit.classList.add("on1");
      } else {
        tit.classList.remove("on1");
      }
      if (rectTopPer <= 20) {
        ctit.classList.add("on1");
        infoBox.classList.add("on2");
      } else {
        ctit.classList.remove("on1");
        infoBox.classList.remove("on2");
      }

      if (rectTopPer <= -20) {
        spanT[0].classList.add("on1");
        img[0].classList.add("on1");
      } else {
        spanT[0].classList.remove("on1");
        img[0].classList.remove("on1");
      }

      if (rectTopPer <= -60) {
        spanT[0].classList.add("on2");
        spanT[1].classList.add("on1");
        img[0].classList.remove("on1");
        img[1].classList.add("on1");
      } else {
        spanT[0].classList.remove("on2");
        spanT[1].classList.remove("on1");
        img[1].classList.remove("on1");
      }

      if (rectTopPer <= -100) {
        spanT[1].classList.add("on2");
        spanT[2].classList.add("on1");
        img[1].classList.remove("on1");
        img[2].classList.add("on1");
      } else {
        spanT[1].classList.remove("on2");
        spanT[2].classList.remove("on1");
        img[2].classList.remove("on1");
      }

      if (rectTopPer <= -140) {
        spanT[2].classList.add("on2");
        spanT[3].classList.add("on1");
        img[2].classList.remove("on1");
        img[3].classList.add("on1");
      } else {
        spanT[2].classList.remove("on2");
        spanT[3].classList.remove("on1");
        img[3].classList.remove("on1");
      }

      if (rectTopPer <= -180) {
        spanT[3].classList.add("on2");
        spanT[4].classList.add("on1");
        img[3].classList.remove("on1");
        img[4].classList.add("on1");
      } else {
        spanT[3].classList.remove("on2");
        spanT[4].classList.remove("on1");
        img[4].classList.remove("on1");
      }
    }
    //////////////////// if 0 ~ 100 구간/////////////////////////////

    // 스크롤 증감설정 구역2 :  비디오 크기 증감
    if (rectTopPer >= 0 && rectTopPer <= 100) {
      const scale = 1 - (rectTopPer / 100) * 0.9;
      // 1에서 0.5까지 스케일 조정
      backImg.style.transform = `scale(${scale})`;
    } ////////////////////////
    else if (rectTopPer > 100) {
      backImg.style.transform = "scale(0.3)";
    } /////////////////////////
    else {
      backImg.style.transform = "scale(1)";
    } /////////////////////////
  } //////////////// banScrollEvt 함수//////////////////////
  function preventScroll(e) {
    e.preventDefault();
  }

  useEffect(() => {
    // 스크롤시 나타남 이벤트
    window.addEventListener("scroll", banScrollEvt);
    return () => {
      // 클린업 리스트
      window.removeEventListener("scroll", banScrollEvt);
    };
  }, []);
  ////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////
  const mData = mainPageBan[0]; // 버리지말아주쇼
  const iData = mainPageBan[1]; // 버리지말아주쇼
  const tData = mainPageBan[2]; // 버리지말아주쇼
  const lData = mainPageBan[3]; // 버리지말아주쇼
  ////////////////////////////////////////////////////////////
  return (
    <div id="culture">
      <div className="mb-box">
        <div className="wrap">
          {/* 믹스블랜드 타이틀 :앱솔루트 */}
          <div className="mb-tit">
            <h1 className="craft-tit craft-tit1">{mData.tit}</h1>
            <h2 className="craft-tit craft-tit2">{mData.tit1}</h2>
          </div>
          {/* 배경이되는 박스 */}
          <div
            className="back-img"
            style={{ background: `${process.env.PUBLIC_URL + mData.isrc0}` }}
          >
            {/* <img src={mData.isrc2} alt={mData.tit} className="back-img2"/> */}
          </div>
          {/*section 배경과 겹치는 앱솔루트박스
            패팅탑 줘서 일정부분 내림*/}
          <section className="cat-info-box">
            <div className="box1">
              <ul className="p-flex-box1">
                {iData.map((v, i) => (
                  <li className="box1-img" key={i}>
                    <img src={process.env.PUBLIC_URL + v} alt="img" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="box2">
              <div className="p-flex-box2">
                <div className="p-text-box">
                  {tData.map((v, i) => (
                    <p key={i} className="p-text">
                      {v}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* 버튼박스 */}
          <div className="go-box">
            <a className="p-button" href={lData.link} target="_blank">
              <span>BECOME A MEMBER</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageBottom;
