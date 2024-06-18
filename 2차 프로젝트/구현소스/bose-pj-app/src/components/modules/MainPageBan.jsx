import React, { useState, useEffect } from "react";

// 이미지 동영상 데이터불러오기
import { mainPageBan } from "../data/main_page_banner";
import $ from "jquery";
// css 불러오기
import "./css/main_page_ban.scss";

function MainPageBan() {
  const [showControls, setShowControls] = useState(false);
  const [muted, setMuted] = useState(true);
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const handleVolumeChange = (event) => {
    event.target.volume = muted ? 0 : 0.3;
    // 음소거 상태면 볼륨 0으로, 그렇지 않으면 30%로 설정
  }; /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  // function scrollPer(element) {
  //   const scrollTop = element.scrollTop;
  //   const scrollHeight = element.scrollHeight;
  //   const clientHeight = element.clientHeight;

  //   const scrollableHeight = scrollHeight - clientHeight;
  //   const scrollPercentage = (scrollTop / scrollableHeight) * 100;
  //   return scrollPercentage;
  // }

  // 스크롤이벤트 함수 : 윈도우 스크롤시 해당 이벤트 발생
  function banScrollEvt(e) {
    let scrollLock = false;
    let body = document.body;
    // 박스 수집
    const mbBox = document.querySelectorAll(".mb-box");
    mbBox.forEach((box, i) => {
      // 박스탑
      const rectTop = box.getBoundingClientRect().top;
      const rectTopPer = Math.floor((rectTop / window.innerHeight) * 100);
      console.log(i,"번주자 달려",rectTopPer);
      // 박스바텀값
      const rectBot = box.getBoundingClientRect().bottom;
      const rectBotPer = Math.floor((rectTop / window.innerHeight) * 100);
      // 제목 변수할당
      const tit = box.querySelector(".mb-tit");
      // 베너비디오 들 변수할당
      const banVid = box.querySelector(".mb-video");
      // 정보박스 들 변수할당
      const infoBox = box.querySelector(".cat-info-box");

      // 스크롤 증감설정구역1 : 내용 나오기 설정
      // 설정 : 탑값 50% 이하일때 제목 나옴
      if (rectTopPer <= 50) {
        tit.classList.add("on1");
        // 탑값 20% 미만일때 설명막스나옴
        if (rectTop <= 30) {
          setShowControls(true); // 컨트롤 켜기
          // banVid.controls = true; // 컨트롤 켜기
          // banVid.controls = false; // 컨트롤 끄기
          // banVid.muted = true; // 음소거설정
          // banVid.muted = false; // 음소거설정
          infoBox.classList.add("on2");
        } /// if //
        else {
          setShowControls(false);
          infoBox.classList.remove("on2");
        } /// else //
      } ///////////// if ///////////
      else {
        tit.classList.remove("on1");
      } /////////// else //////////

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
      scrollLock = true;
    }
    }); ////////////// forEach //////////////////

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
    window.addEventListener("scroll", banScrollEvt);
    return () => {
      window.removeEventListener("scroll", banScrollEvt);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll); // Clean up on unmount
    };
  }, []);
  ////////////////////////////////////////////////////////////
  const mData = mainPageBan; // 버리지말아주쇼

  ////////////////////////////////////////////////////////////
  return (
    <ul>
      {mData.map((v, i) => (
        <li className="mb-box" key={i}>
          {/* 믹스블랜드 타이틀 :앱솔루트 */}
          <h2 className="mb-tit">{v.tit}</h2>
          {/* 배경이되는 박스 */}
          <video
            className="mb-video"
            src={v.vsrc}
            controls={showControls}
            // controls
            loop
            autoPlay
            muted={muted}
            // onDoubleClick={toggleMuted}
            // onPlay={handleVolumeChange}
          />
          {/*section 비디오와 겹치는 앱솔루트박스 
          패팅탑 줘서 일정부분 내림*/}
          <section className="cat-info-box">
            {/* <div className="info-box"> */}
            <div className="box1">
              <img src={v.isrc} alt={v.tit} />
            </div>
            <div className="box2">
              <span>
                나는 말이야 똑똑한 사람이야 집에가고싶어 집에보내줘 오늘
                일찍자야지 방구나 먹어랏
              </span>
            </div>
            {/* </div> */}
          </section>
        </li>
      ))}
    </ul>
  );
}

export default MainPageBan;
