import React, { useState, useRef, useEffect } from "react";

// 메인페이지 컴포넌트 ///
import "../../css/main_area.scss";
import MainPageBan from "../modules/MainPageBan";
import Trending from "../modules/Trending";

export default function Main() {
  const [muted, setMuted] = useState(true);
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const handleVolumeChange = (event) => {
    event.target.volume = muted ? 0 : 0.3;
    // 음소거 상태면 볼륨 0으로, 그렇지 않으면 50%로 설정
  };

  return (
    <>
      <div className="top-video">
        <a href="###">
          <video
            src="./videos/speak/speaker_main.mp4"
            controls
            loop
            autoPlay
            muted={muted}
            onDoubleClick={toggleMuted}
            onPlay={handleVolumeChange}
          ></video>
        </a>
      </div>
      <div className="items-area">
        <Trending />
      </div>
      <div className="main-ban-area">
        <MainPageBan />
      </div>
      <div className="sns-area"></div>
    </>
  );
} ////////////// TopArea /////////////
