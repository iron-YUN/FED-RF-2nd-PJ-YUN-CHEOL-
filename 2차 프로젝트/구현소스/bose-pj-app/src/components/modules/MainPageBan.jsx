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

  function scrollPer(element) {
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;
    return scrollPercentage;
  }

  function banScrollEvt() {
    const mbBox = document.querySelectorAll(".mb-box");
    mbBox.forEach((box,i) => {
      const rect = box.getBoundingClientRect();
      const rectTop = rect.top;
      // 해당 li top 값 퍼센트로 환산
      const scrollTopPer = Math.floor((rectTop / window.innerHeight) * 100);
      const banVid = box.querySelector(".mb-video");
      
      // 스크롤 퍼센티지가 증가하면 비디오 크기도 증가
      if (scrollTopPer >= 0 && scrollTopPer <= 100) {
        // console.log("li top 위치",scrollTopPer);
        const scale = 1 - (scrollTopPer / 100) * 0.7; 
        console.log("scale",scale);
        // 1에서 0.5까지 스케일 조정
        banVid.style.transform = `scale(${scale})`;
        banVid.controls = true; // 컨트롤 끄기
        // banVid.muted = true; // 소리내기
      } else if (scrollTopPer > 100) {
        banVid.style.transform = "scale(0.3)";
      } 
      else  {
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
  ///////////////////////리턴구역//////////////////////////////////
  const mData = mainPageBan;
  return (
    <ul>
      {mData.map((v, i) => (
        <li className="mb-box" key={i}>
          <h2 className="mb-tit">{v.tit}</h2>
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
          <div className="mb-img">
            <img src={v.isrc} alt={v.tit} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MainPageBan;
