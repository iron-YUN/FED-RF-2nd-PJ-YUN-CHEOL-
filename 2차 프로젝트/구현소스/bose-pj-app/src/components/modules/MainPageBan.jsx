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

  function banScrollEvt() {
    const mbBox = document.querySelectorAll(".mb-box");
    mbBox.forEach((box, i) => {
      const rect = box.getBoundingClientRect();
      const rectTop = rect.top;
      // 해당 li top 값 퍼센트로 환산
      const scrollTopPer = Math.floor((rectTop / window.innerHeight) * 100);
      const banVid = box.querySelector(".mb-video");

      // 스크롤 퍼센티지가 증가하면 비디오 크기도 증가
      if (scrollTopPer >= 0 && scrollTopPer <= 100) {
        // console.log("li top 위치",scrollTopPer);
        const scale = 1 - (scrollTopPer / 100) * 0.7;
        console.log("scale", scale);
        // 1에서 0.5까지 스케일 조정
        banVid.style.transform = `scale(${scale})`;
        banVid.controls = true; // 컨트롤 끄기
        // banVid.muted = true; // 소리내기
      } else if (scrollTopPer > 100) {
        banVid.style.transform = "scale(0.3)";
      } else {
        banVid.controls = true; // 컨트롤 켜기
        // banVid.muted = false; // 음소거하기
        banVid.style.transform = "scale(1)";
      }
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", banScrollEvt);
    return () => {
      window.removeEventListener("scroll", banScrollEvt);
    };
  }, []);

  /////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  // useEffect(() => {
  //   window.addEventListener("scroll", showIt);
  //   return () => {
  //     window.removeEventListener("scroll", showIt);
  //   };
  //   const scAct = document.querySelectorAll(".mb-img");
  //   function showIt() {
  //     scAct.forEach((ele) => addOn(ele));
  //    }//////////////////showIt//////////////////////
  //    const CRITERIA = (window.innerHeight / 3) * 2;
  //    function addOn(ele) {
  //     let bcrVal = myFn.getBCR(ele);
  //     if (bcrVal < CRITERIA) ele.classList.add("on");
  //     else ele.classList.remove("on");
  //   } //////////////// addOn ////////////////
  //   function showLetters() {
  //     //  2. 대상선정 : .stage-letters
  //     const stage = myFn.qs(".stage");
  //     // console.log('대상:',stage);
  //     // 3.글자데이터 변수 할당
  //     const myText = "신카이 마코토";
  //     // 4. 데이터 글자 한 글자씩 태그로 싸기
  //     // for of
  //     //html 태그변수
  //     let hcode = "";
  //     // 지연시간 계산을 위한 순번변수
  //     let seqNum = 0;
  //     for (let x of myText) {
  //       // console.log(x);
  //       if (x === " ") {
  //         ///스페이스 공백처리
  //         hcode += "&nbsp;&nbsp;";
  //       } //////if/////
  //       else {
  //         // 글자일 경우 span태그 랩핑처리
  //         hcode += `
  //           <span style="transition-delay : ${seqNum * 0.08}s"
  //           >${x}</span>`;
  //       } ////////else ////////
  //       // 중요!! 지연시간에 곱해질 순번증가하기!
  //       seqNum++;
  //     } ///////////////////// for of ///////////////////////////
  //     // 5.스테이지에 코드 출력하기
  //     stage.innerHTML = hcode;
  //     // 6. 일정시간 뒤 등장클래스 .on넣기
  //     setTimeout(() => {
  //       stage.classList.add("on");
  //     }, 1000);

  //     ////////// 글자 스크롤 이벤트 셋팅하기 //////
  //     // 이벤트대상 : windows
  //     myFn.addEvt(window, "scroll", moveTit);

  //     // 기준이 되는 포스터 박스 위치 구하기
  //     const posTop = [];

  //     scAct.forEach((ele, idx) => {
  //       posTop[idx] = myFn.getOT(ele);
  //     }); ///// forEach /////////

  //     // 화면절반크기 변수 (포스터 위치에서 뺄값!)
  //     const gap = window.innerHeight / 2;

  //     console.log("포스터위치:", posTop);

  //     function moveTit() {
  //       // 스크롤 위치값 구하기
  //       let scTop = window.scrollY;
  //       //  1. 맨위 원위치하기 : 첫번째 기준보다 작을때
  //       if (scTop < posTop[0] - gap) {
  //         stage.style.top = "0%";
  //         stage.style.left = "50%";
  //         stage.style.transition = "1s ease-in-out";
  //       }
  //       //  2. 첫번째 포스터 옆으로 이동
  //       if (scTop > posTop[0] - gap && scTop < posTop[0]) {
  //         stage.style.top = "50%";
  //         stage.style.left = "25%";
  //         stage.style.transition = "1s ease-in-out";
  //       }
  //       //  3. 두번째 포스터 옆으로 이동
  //       if (scTop > posTop[1] - gap && scTop < posTop[1]) {
  //         stage.style.top = "70%";
  //         stage.style.left = "65%";
  //         stage.style.transition = "1s ease-in-out";
  //       }
  //       //  4. 세번째 포스터 옆으로 이동
  //       if (scTop > posTop[2] - gap && scTop < posTop[2]) {
  //         stage.style.top = "50%";
  //         stage.style.left = "25%";
  //         stage.style.transition = "1s ease-in-out";
  //       }
  //     } //////////////moveTit/////////////////
  //   }
  // }, []);

  /////////////////////////////////////////////////////////
  ///////////////////////리턴구역//////////////////////////////////
  const mData = mainPageBan;
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
            // controls
            controls={showControls}
            loop
            autoPlay
            muted={muted}
            onDoubleClick={toggleMuted}
            onPlay={handleVolumeChange}
          />
           {/*section 비디오와 겹치는 앱솔루트박스 
          패팅탑 줘서 일정부분 내림*/}
          <section className="cat-info-box">
            {/* <div className="info-box"> */}
              <div className="mb-img">
                <img src={v.isrc} alt={v.tit} />
              </div>
              <div className="mb-text">
                <span>
                  나는 말이야 똑똑한 사람이야
                  집에가고싶어
                  집에보내줘
                  오늘 일찍자야지
                  방구나 먹어랏
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
