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

      // 박스바텀값
      const rectBot = box.getBoundingClientRect().bottom;
      const rectBotPer = Math.floor((rectBot / window.innerHeight) * 100);
      // console.log(i,"번주자 달려",rectBotPer);
      // 제목 변수할당
      const tit = box.querySelector(".mb-tit");
      // 베너비디오 들 변수할당
      const banVid = box.querySelector(".mb-video");
      // 정보박스 들 변수할당
      const infoBox = box.querySelector(".cat-info-box");
      // 글자 수집
      const spanT = box.querySelectorAll(".span-text");
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
      // setShowControls(true); // 컨트롤 켜기
      // banVid.controls = true; // 컨트롤 켜기
      // banVid.controls = false; // 컨트롤 끄기
      // banVid.muted = true; // 음소거설정
      // banVid.muted = false; // 음소거설정

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
    // 스크롤시 나타남 이벤트
    window.addEventListener("scroll", banScrollEvt);
    return () => {
      // 클린업 리스트
      window.removeEventListener("scroll", banScrollEvt);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);
  ////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////
  const mData = mainPageBan; // 버리지말아주쇼

  ////////////////////////////////////////////////////////////
  return (
    <ul>
      {mData.map((v, i) => (
        <li className="mb-box" key={i}>
          <div className="wrap">
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
      ))}
    </ul>
  );
}

export default MainPageBan;
