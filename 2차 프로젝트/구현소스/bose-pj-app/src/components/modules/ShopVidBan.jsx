import React, { useState, useEffect } from "react";
// 이미지 동영상 데이터불러오기
import { shopVidBan } from "../data/main_page_banner";
// css 불러오기
import "./css/shop_vid_ban.scss";

function ShopVidBan({catName}) {
  // const [showControls, setShowControls] = useState(false);
  const [muted, setMuted] = useState(true);
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const handleVolumeChange = (event) => {
    event.target.volume = muted ? 0 : 0.3;
    // 음소거 상태면 볼륨 0으로, 그렇지 않으면 30%로 설정
  }; /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

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
      // 베너비디오 변수할당
      const banVid = box.querySelector(".mb-video");

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
    }); ////////////// forEach //////////////////


  } //////////////// banScrollEvt 함수//////////////////////

  useEffect(() => {
    // 스크롤시 나타남 이벤트
    window.addEventListener("scroll", banScrollEvt);
    return () => {
      // 클린업 리스트
      window.removeEventListener("scroll", banScrollEvt);
    };
  }, []);
  ////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////
  const mData = shopVidBan[catName]; // 버리지말아주쇼
  console.log("나는 비디오 데이터",mData);
  console.log("나는 비디오 데이터",mData.tit);
  console.log("나는 비디오 데이터",mData.vsrc);
  ////////////////////////////////////////////////////////////
  return (
    <div id="shop-vid-ban">
        <div className="mb-box">
            <video
              className="mb-video"
              src={process.env.PUBLIC_URL+mData.vsrc}
              controls
              loop
              autoPlay
              muted={muted}
            />
        </div>
    </div>
  );
}
export default ShopVidBan;
