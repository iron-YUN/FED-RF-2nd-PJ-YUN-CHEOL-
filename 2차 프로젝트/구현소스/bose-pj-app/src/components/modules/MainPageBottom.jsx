import React, { useState, useEffect } from "react";

// 이미지 동영상 데이터불러오기
import { mainPageBan2 } from "../data/main_page_banner";
import $ from "jquery";
// css 불러오기
import "./css/main_page_bottom.scss";

function MainPageBottom() {

  ////////////////////////////////////////////////////////////
  // 스크롤이벤트 함수 : 윈도우 스크롤시 해당 이벤트 발생
  function banScrollEvt(e) {
    let scrollLock = false;
    let body = document.body;
    // 박스 수집
    const mbBox = document.querySelector(".mb-box");
      // 박스탑
      const rectTop = mbBox.getBoundingClientRect().top;
      const rectTopPer = Math.floor((rectTop / window.innerHeight) * 100);

      // 박스바텀값
      const rectBot = mbBox.getBoundingClientRect().bottom;
      const rectBotPer = Math.floor((rectBot / window.innerHeight) * 100);
      // 제목 변수할당
      const tit = mbBox.querySelector(".mb-tit");
      // 베너비디오 들 변수할당
      const banVid = mbBox.querySelector(".back-img");
      // 정보박스 들 변수할당
      const infoBox = mbBox.querySelector(".cat-info-box");
      // 글자 수집
      const spanT = mbBox.querySelectorAll(".span-text");
      // 스크롤 증감설정구역1 : 내용 나오기 설정
      // 설정 : 탑값 50% 이하일때 제목 나옴
      if (rectTopPer >= -50 && rectTopPer <= 100) {
        console.log("달려", rectTopPer);

        if (rectTopPer <= 50) {
          // 50 이하시 나타남
          infoBox.classList.add("on2");
          tit.classList.add("on1");
        } else {
          // 50 초과시 지움
          infoBox.classList.remove("on2");
          tit.classList.remove("on1");
        }

        if (rectTopPer <= 30) {
          spanT[0].classList.add("on1");
        } else {
          spanT[0].classList.remove("on1");
        }

        if (rectTopPer <= 13) {
          spanT[0].classList.add("on2");
          spanT[1].classList.add("on1");
        } else {
          spanT[0].classList.remove("on2");
          spanT[1].classList.remove("on1");
        }

        if (rectTopPer <= 0) {
          spanT[1].classList.add("on2");
          spanT[2].classList.add("on1");
        } else {
          spanT[1].classList.remove("on2");
          spanT[2].classList.remove("on1");
        }

        if (rectTopPer <= -21) {
          spanT[2].classList.add("on2");
          spanT[3].classList.add("on1");
        } else {
          spanT[2].classList.remove("on2");
          spanT[3].classList.remove("on1");
        }

        if (rectTopPer <= -48) {
          spanT[3].classList.add("on2");
          spanT[4].classList.add("on1");
        } else {
          spanT[3].classList.remove("on2");
          spanT[4].classList.remove("on1");
        }
      }
      //////////////////// if 0 ~ 100 구간/////////////////////////////

      // 스크롤 증감설정 구역2 :  비디오 크기 증감
      if (rectTopPer >= 0 && rectTopPer <= 100) {
        const scale = 1 - (rectTopPer / 100) * 0.9;
        // 1에서 0.5까지 스케일 조정
        banVid.style.transform = `scale(${scale})`;
      } ////////////////////////
      else if (rectTopPer > 100) {
        banVid.style.transform = "scale(0.3)";
      } /////////////////////////
      else {
        banVid.style.transform = "scale(1)";
      } /////////////////////////

      // 스크롤 막기 설정
      if (rectTop === 0) {
        scrollLock = false;
      } /////////////////

    // 스크롤 막기 적용
    if (scrollLock) {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    }
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
      // window.removeEventListener("wheel", preventScroll);
      // window.removeEventListener("touchmove", preventScroll);
    };
  }, []);
  ////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////
  const mData = mainPageBan2[0]; // 버리지말아주쇼

  ////////////////////////////////////////////////////////////
  return (
    <ul>
        <li className="mb-box" >
          <div className="wrap">
            {/* 믹스블랜드 타이틀 :앱솔루트 */}
            <h2 className="mb-tit">{mData.tit}</h2>
            {/* 배경이되는 박스 */}
            <img src={mData.isrc1} alt={mData.tit} className="back-img"/>
            {/*section 비디오와 겹치는 앱솔루트박스
            패팅탑 줘서 일정부분 내림*/}
            <section className="cat-info-box">
              {/* <div className="info-box"> */}
              <div className="box1">
                <img src={mData.isrc2} alt={mData.tit} />
              </div>
              <div className="box2">
                <span className="span-text text1">탐쌤 안녕하세요~!!</span>
                <span className="span-text text2">저는 윤철맨이에요~!~!</span>
                <span className="span-text text3">만나서 반갑습니다❤</span>
                <span className="span-text text4">신기하죠? ㅋㅋㅋㅋㅋㅋ</span>
                <span className="span-text text5">
                  집에보내주세요 힘들어요 ㅠㅠ
                </span>
              </div>
              {/* </div> */}
            </section>
          </div>
        </li>

    </ul>
  );
}

export default MainPageBottom;
