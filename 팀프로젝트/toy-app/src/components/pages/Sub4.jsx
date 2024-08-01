// 서브페이지4 //

import { useEffect } from "react";
import "../../css/sub4.scss";
import S4gbox from "../modules/S4gbox";
import sub4_mousePo from "../func/sub4/sub4_mousePo";
import sub4_poster from "../func/sub4/sub4_poster";
import S4character from "../modules/S4character";
import S4synopsis from "../modules/S4synopsis";

export default function Sub4() {
  useEffect(() => {
    sub4_mousePo();
    sub4_poster();
  });

  // 코드 리턴구역 ////
  return (
    <section className="wrap">
      {/* 메뉴 영역  */}
      {/* <header id="top-area" className=""></header> */}
      <div className="ts"></div>
      {/* 상단 영역  */}
      <div id="top">
        <div className="screen">
          {/* 유튜브 아이프레임  */}
          <iframe
            id="ifr"
            src="https://www.youtube.com/embed/u8GQibRXVHg"
            allow="autoplay"
          ></iframe>
        </div>
      </div>

      {/* 메인 영역  */}
      <div id="main">
        <div className="main-title">
          <img
            src={process.env.PUBLIC_URL + `/images/img4/toystory4_logo.jpg`}
            alt="토이스토리 로고"
          />
        </div>
        {/* 재귀함수 호출  */}
        <S4gbox />
        {/* 시놉시스 구역  */}
        <S4synopsis />
        {/* 포스터 영역  */}
        <div className="main-poster">
          <h2 className="main-title">POSTER</h2>
          <ul className="poster poster-common">
            <li>
              <img src={process.env.PUBLIC_URL + `/images/img4/ts4_circle.png`} alt="포스터" />
              <span className="sub-text1">mouse here!</span>
            </li>
          </ul>
          <ul className="poster2 poster-common">
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/img4/toystory4_poster.jpg`}
                alt="포스터"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/img4/toystory4_poster2.jpg`}
                alt="포스터"
              />
            </li>
            <li>
              <img
                src={process.env.PUBLIC_URL + `/images/img4/toystory4_poster3.jpg`}
                alt="포스터"
              />
            </li>
          </ul>
        </div>
        {/* 캐릭터 소개 영역  */}
        <div className="main-character">
          {/* <div className="cha-box"></div> */}
          <S4character />
        </div>

        {/* 하단 영역  */}
        <div className="footer">
          <div className="pointer"></div>
          <div className="footer-icon">
            <a href="#">
              <img src={process.env.PUBLIC_URL + `/images/img4/alien1.png`} alt="알린이미지" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} /////// Sub4 /////
