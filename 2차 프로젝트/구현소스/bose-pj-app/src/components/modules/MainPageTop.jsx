import React, { useState, useRef, useEffect } from "react";

// 메인페이지 컴포넌트 ///
import "../../css/main_page_top.scss";

export default function MainPageTop() {
  const [muted, setMuted] = useState(true);
  const mainVideoRef = useRef(null);
  const smallVideoRef = useRef(null);

  const vsrc = "./videos/speak/speaker_main.mp4";

  // 초기 설정에서 볼륨을 조정, 동기화 설정.
  useEffect(() => {
    const mainVideo = mainVideoRef.current;
    const smallVideo = smallVideoRef.current;

    // 큰비디오 의 상태에 따라 작은비디오 상태변경 
    if (mainVideo && smallVideo) {
      const syncVideos = () => {
        smallVideo.currentTime = mainVideo.currentTime;
        if (mainVideo.paused) {
          smallVideo.pause();
        } //////if/////
        else {
          smallVideo.play();
        } //////else/////
      };//////////if/////////////

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

  return (
    <div className="main-page-top">
      <div className="top-video">
        <div className="big-box">
          <video
            ref={mainVideoRef}
            src={vsrc}
            loop
            // controls
            autoPlay
            muted={muted}
            className="big-video"
          ></video>
        </div>
        <div className="small-box">
            {/* 가두는 스티키 박스 */}
          <video
            ref={smallVideoRef}
            src={vsrc}
            loop
            muted={muted}
            className="small-video"
          ></video>
        </div>
        <div className="small2">
        </div>
      </div>
    </div>
  );
} ////////////// TopArea /////////////
