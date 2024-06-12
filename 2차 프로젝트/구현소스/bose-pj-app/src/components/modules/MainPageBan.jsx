import React, { useState } from "react";

// 이미지 동영상 데이터불러오기
import { mainPageBan } from "../data/main_page_banner";


 function MainPageBan() {
  const [muted, setMuted] = useState(true);
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const handleVolumeChange = (event) => {
    event.target.volume = muted ? 0 : 0.3;
    // 음소거 상태면 볼륨 0으로, 그렇지 않으면 50%로 설정
  };

  const mData = mainPageBan;
  return (
    <ul>
      {mData.map((v, i) => (
        <li key={i}>
          <h2 className="mb-tit">{v.tit}</h2>
          <video
            className="mb-video"
            src={v.vsrc}
            controls
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


export default MainPageBan ;
