import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// css 불러오기
import "./css/main_page_top.scss";
// 로고 불러오기
import { logoSrc } from "../data/img_src";
// 동영상 불러오기
import { topVideo } from "../data/main_page_banner";
// 서브메뉴 불러오기
import { menu, subMenu } from "../data/gnb";
// 색상 불러오기
import { banColor } from "../data/color_data";
import { bCon } from "./bCon";

import $ from "jquery";

export default function MainPageTop() {
  const myCon = useContext(bCon);
  // console.log(subMenu);
  // console.log(banColor);
  const [muted, setMuted] = useState(true);
  const mainVideoRef = useRef(null);
  const smallVideoRef = useRef(null);

  

  // 랜덤수로 상단 동영상 불러오기
  const rdIdx = Math.floor(Math.random() * topVideo.length);
  const selectedVideo = topVideo[rdIdx];
  // console.log(rdIdx);

  // 동영상마다 컬러색 선택해서 서브메뉴에 입히기
  const vcolor =
    rdIdx == 0
      ? banColor.moonstone_blue
      : rdIdx == 1
      ? banColor.pure_white
      : rdIdx == 2
      ? banColor.white_smoke
      : rdIdx == 3
      ? banColor.head
      : banColor.ear;

  // 초기 설정에서 볼륨을 조정, 동기화 설정.
  useEffect(() => {
    const mainVideo = mainVideoRef.current;
    const smallVideo = smallVideoRef.current;

    // 큰비디오 의 상태에 따라 작은비디오 상태변경
    if (mainVideo && smallVideo) {
      const syncVideos = () => {
        smallVideo.currentTime = mainVideo.currentTime;
        if (mainVideo.paused && !smallVideo.paused) {
          smallVideo.pause();
        } else if (!mainVideo.paused && smallVideo.paused) {
          smallVideo.play().catch((error) => {
            console.error("Error attempting to play the small video:", error);
          });
        }
      }; //////////if/////////////

      //   소리설정
      mainVideo.volume = muted ? 0 : 0.3;
      //   smallVideo.volume = muted ? 0 : 0.3;

      //////////////////////////////////////////////////////
      const handlePlayPause = () => {
        syncVideos();
      };
      const handleTimeUpdate = () => {
        syncVideos();
      };
      mainVideo.addEventListener("play", handlePlayPause);
      mainVideo.addEventListener("pause", handlePlayPause);
      mainVideo.addEventListener("seeked", handleTimeUpdate);
      mainVideo.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        mainVideo.removeEventListener("play", handlePlayPause);
        mainVideo.removeEventListener("pause", handlePlayPause);
        mainVideo.removeEventListener("seeked", handleTimeUpdate);
        mainVideo.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }

  }, [muted]);

  ///////////// stit 오버시 색 고정
  // useEffect(()=>{
  //   // const titBx = document.querySelectorAll(".tit1");
  //   const titColor = document.querySelectorAll(".tit1");
  //   const stitColor = document.querySelectorAll(".tit2 p");
  //   console.log("나는 stit",stitColor);
  //   const mouseOverFn = (e) => {
  //     // let tg = e.target.parentElement;
  //     // tg.style.color = vcolor;
  //     // tg.style.filter = "none";
  //     // tg.style.mixBlendMode = "normal";

  //     console.log("나 색깔바껴~~~");
  //   };

  //   titColor.forEach((e) => {
  //     e.addEventListener("mouseover", mouseOverFn);
  //   });
  //   stitColor.forEach((e) => {
  //     e.addEventListener("mouseover", mouseOverFn);
  //   });
  // },[vcolor]);


  return (
    <div className="main-page-top">
      <div className="top-video">
        <div className="big-wrap-box">
          <div className="big-box">
            <video
              ref={mainVideoRef}
              src={selectedVideo}
              loop
              // controls
              autoPlay
              muted={muted}
              className="big-video"
            ></video>
          </div>
        </div>
        <div className="small-wrap-box">
          <div className="small-box">
            {/* 가두는 스티키 박스 */}
            <video
              ref={smallVideoRef}
              src={selectedVideo}
              loop
              muted={muted}
              className="small-video"
            ></video>
            <div className="logo-box none-sel nonedrag">
              <img src={logoSrc.svg1} alt="logo " />
            </div>
          </div>
        </div>
      </div>
      {/* 서브메뉴 불러오기 */}
      <div className="go-tit-box">
        <div className="go-tit">
          {subMenu.map((v, i) => (
            <div className="tit-box" key={i}
            //  동영상마다 고정된 색상 하고싶으면 주석풀기
             style={{color:vcolor}}
             >
              <h2 className="tit1">{v.txt}</h2>
              <div className="tit2">
              <Link to={v.link}>
                <p className="stit1" style={{color:vcolor}}
                >SHOP</p>
              </Link>
                <p className="stit2"
                onClick={()=>{
                  let tt = $(".mb-box").first().offset().top;
                  console.log("위치:",tt);
                  $("html,body")
                  .animate({scrollTop:tt+"px"},1000);

                  myCon.setPos(tt);
                }}
                >VIEW</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} //////////// MainPageTop /////////////
