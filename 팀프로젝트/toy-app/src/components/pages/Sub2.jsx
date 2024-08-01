import { useEffect, useRef, useState } from "react";
import { scrolled, setPos } from "../func/sub2/smoothScroll23";

// 내함수 불러오기
import mFn from "../func/my_function";
// 배경이미지 불러오기
import { bgData } from "../func/sub2/bg_src";
// 캐릭터 뿌려주기o
import showChar from "../func//sub2/sub2_char";
// 월드 뿌려주기
import showWorld from "../func//sub2/sub2_world";
// 어워즈 & 크레딧 뿌려주기
import showAwardsCredits from "../func//sub2/sub2_aw_cre";
import "../../css/sub2.scss";
// 트레일러 스와이프
import S2tail from "../modules/S2tail";
import S2gnb from "../modules/S2gnb";

import $ from "jquery";

import { wheelFn, setContBoxWheelEvent, setPgNum } from "../func/sub2/sub2_slide";
// process.env.PUBLIC_URL +
// SwiperCore.use([Mousewheel]);

export default function Sub2() {
  useEffect(() => {
    showChar();
    showWorld();
    showAwardsCredits();

    const inBox = mFn.qsa(".ibx");
    for (let i = 0; i < inBox.length; i++) {
      if (i === 0) {
        // 순번 0에 해당하는 경우
        inBox[i].style.backgroundColor = "none"; // 배경색
      } else if (i === 5 || i === 6) {
        // 순번 5와 6에 해당하는 경우
        inBox[i].style.backgroundColor = "rgb(0 0 0 / 20%)"; // 배경색
      } else if (i === 1) {
        // 순번 5와 6에 해당하는 경우
        inBox[i].style.backgroundColor = "rgb(0 0 0 / 40%)"; // 배경색
      } else if (i === 7) {
        // 순번 5와 6에 해당하는 경우
        inBox[i].style.backgroundColor = "#ffffffa0";
      } else {
        // 그 외의 경우
        inBox[i].style.backgroundColor = "rgb(0 0 0 / 60%)"; // 배경색
      }
    }

    const toyLogoA = mFn.qsa(".logo a");
    const poster = mFn.qs(".logo a:last-child");
    const toyLogoA2 = mFn.qsa(".sum-text a");
    const SUMMARY1 = mFn.qs(".sum-text a:first-child");
    const SUMMARY2 = mFn.qs(".sum-text a:last-child");

    function showPoster() {
      toyLogoA.forEach((element) => {
        element.addEventListener("click", () => {
          poster.classList.toggle("show");
        });
      });
      toyLogoA2.forEach((element) => {
        element.addEventListener("click", () => {
          SUMMARY1.classList.toggle("show");
          SUMMARY2.classList.toggle("show");
        });
      });
    }
    showPoster();
    // 모달 관련 변수 선언
    const modal = mFn.qs("#modal1");
    const modalImg = mFn.qsa("#modalImg")[0];

    window.onload = function () {
      const modal = document.getElementById("modal1");
      modal.style.display = "none";
    };
    // 각 이미지 클릭 시 모달 팝업창 열기
    const gridImgs = mFn.qsa(".grid-img img");
    gridImgs.forEach((img, index) => {
      mFn.addEvt(img, "click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
      });
    });

    // 이미지를 클릭하면 모달이 닫히도록 설정
    mFn.addEvt(modalImg, "click", () => {
      modal.style.display = "none";
    });

    // 모달 닫기 버튼 이벤트 처리
    const closeBtn = mFn.qs(".close");
    mFn.addEvt(closeBtn, "click", () => {
      modal.style.display = "none";
    });

    // 모달 영역 외부 클릭 시 모달 닫기
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    $("html,body").delay(1000).animate({scrollTop: "0"},0);
    setPos(0);
    setPgNum(0);

    // 휠이벤트가 발생하면 wheelFn을 호출해라
    window.addEventListener("wheel", wheelFn, { passive: false });

    // const contBox = mFn.qsa(".wh-slide");
    const contBox = document.querySelectorAll(".content-box");
    // console.log(contBox);

    contBox.forEach((ele) => {
      ele.addEventListener("wheel", setContBoxWheelEvent);
    });

    // 1. 부드러운 스크롤 호출
    // document
    //   .querySelectorAll(".content-box")[0]
    //   .addEventListener("wheel", scrolled);

    // document
    //   .querySelectorAll(".content-box")[1]
    //   .addEventListener("wheel", scrolled);

    // 2. 소멸자
    return () => {
      window.removeEventListener("wheel", wheelFn);
    };
  }, []);

  // 코드 리턴구역 ////
  return (
    <div id="sub2">
      <div id="side-area">
        <nav className="gnb">
          <S2gnb />
        </nav>
      </div>
      <div
        id="logo-area"
        // style={{ background: process.env.PUBLIC_URL + bgData.logo }}
      >
        <div className="logo-area ibx section">
          <div className="logo">
            <a href="###">
              <img
                src={process.env.PUBLIC_URL + "/images/img2/page_logo.png"}
                alt="페이지로고"
              />
            </a>
            <a href="###">
              <img
                src={process.env.PUBLIC_URL + "/images/img2/02_ts.jpg"}
                alt="포스터"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        id="summary-area"
        style={{ background: process.env.PUBLIC_URL + bgData.summary }}
      >
        <div className="summary-area ibx section">
          <div className="sum-text">
            <a href="###" className="summary-click">
              <h1 className="main-title">SUMMARY</h1>
            </a>
            <a href="###">
              <p className="sub-text1">
                Buzz, Woody, and their friends are back as Andy heads off to
                Cowboy Camp, leaving his toys to their own devices. Things shift
                into high gear when an obsessive toy collector name Al
                McWhiggin, owner of Al's Toy Barn, kidnaps Woody. At Al's
                apartment, Woody discovers that he is a highly valued
                collectible from a 1950s TV show called "Woody's Roundup." He
                meets the other prized toys from the show: Jessie the Cowgirl,
                Bullseye the Horse, and Stinky Pete the Prospector. Andy's toys
                mount a daring rescue mission, Buzz Lightyear meets his match,
                and Woody has to decide where he and his heart truly belong.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div
        id="trailers-area"
        style={{ background: process.env.PUBLIC_URL + bgData.trailers }}
      >
        <div className="trailers-area ibx section">
          <h1 className="main-title main-tit2">TRAILERS</h1>
          <div className="content-box2">
            <div id="slide" className="trailers-box">
              <S2tail />
            </div>
          </div>
        </div>
      </div>

      <div
        id="character-design-area"
        style={{ background: process.env.PUBLIC_URL + bgData.character }}
      >
        <div className="character-design-area ibx section">
          <section className="cont-box flex-column">
            <h1 className="main-title main-tit2">CHARACTER DESIGN</h1>
            <div className="flex-row">
              <div className="menu menu1"></div>
              <div className="main-cont"></div>
            </div>
          </section>
        </div>
      </div>

      <div
        id="world-design-area"
        style={{ background: process.env.PUBLIC_URL + bgData.world }}
      >
        <div className="world-design-area ibx section">
          <section className="cont-box flex-column">
            <h1 className="main-title main-tit2">WORLD DESIGN</h1>
            <div className="flex-row">
              <div className="menu menu2"></div>
              <div className="main-cont"></div>
            </div>
          </section>
        </div>
      </div>

      <div
        id="awards-area"
        style={{ background: process.env.PUBLIC_URL + bgData.awards }}
      >
        <div className="awards-area ibx section">
          <div className="content-box">
            <h1 className="main-title main-tit2">AWARDS</h1>
            <div className="sub-text2 awards-text"></div>
          </div>
        </div>
      </div>

      <div
        id="credits-area"
        style={{ background: process.env.PUBLIC_URL + bgData.credits }}
      >
        <div className="credits-area ibx section">
          <div className="content-box">
            <h1 className="main-title main-tit2">CREDITS</h1>
            <div className="sub-text2 credits-text"></div>
          </div>
        </div>
      </div>
      <div id="modal1" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="modalImg" />
      </div>
    </div>
  );
} /////// Sub2 /////
